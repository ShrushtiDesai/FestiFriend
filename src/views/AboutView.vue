 <template>hello about</template>
<script>
export default {
  name: 'about'
}
</script>
<!--
<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import { Pencil } from 'lucide-vue-next'

interface UserInfo {
  id: string
  field: string
  label: string
  value: string
  type: string
  editing: boolean
}

const userInfo = ref<UserInfo[]>([
  {
    id: 'name',
    field: 'name',
    label: 'Full Name',
    value: 'John Doe',
    type: 'text',
    editing: false
  },
  {
    id: 'email',
    field: 'email',
    label: 'Email',
    value: 'john.doe@example.com',
    type: 'email',
    editing: false
  },
  {
    id: 'dob',
    field: 'dateOfBirth',
    label: 'Date of Birth',
    value: '1990-01-01',
    type: 'date',
    editing: false
  },
  {
    id: 'phone',
    field: 'phone',
    label: 'Phone Number',
    value: '+1 (555) 123-4567',
    type: 'tel',
    editing: false
  },
  {
    id: 'address',
    field: 'address',
    label: 'Address',
    value: '123 Main St, City, Country',
    type: 'text',
    editing: false
  }
])

const toggleEdit = (id: string) => {
  const info = userInfo.value.find(item => item.id === id)
  if (info) {
    info.editing = !info.editing
  }
}

const saveChanges = (id: string) => {
  toggleEdit(id)
  // Here you would typically make an API call to save the changes
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">Account Settings</h1>
      
      <div class="bg-white rounded-lg shadow-md p-6 space-y-6">
        <div v-for="info in userInfo" :key="info.id" class="space-y-2">
          <div class="flex justify-between items-center">
            <label :for="info.id" class="text-sm font-medium text-gray-700">
              {{ info.label }}
            </label>
            <Button
              variant="ghost"
              size="icon"
              @click="toggleEdit(info.id)"
              class="h-8 w-8 p-0"
            >
              <Pencil class="h-4 w-4" />
            </Button>
          </div>
          
          <div class="flex gap-2">
            <Input
              :id="info.id"
              v-model="info.value"
              :type="info.type"
              :disabled="!info.editing"
              class="flex-1"
            />
            
            <Button
              v-if="info.editing"
              @click="saveChanges(info.id)"
              class="bg-green-600 hover:bg-green-700"
            >
              Save
            </Button>
          </div>
        </div>

        <div class="pt-4 border-t">
          <Button class="w-full">
            Save All Changes
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.input) {
  @apply border-gray-300;
}

:deep(.button) {
  @apply text-white;
}
</style>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pencil } from 'lucide-vue-next'
// import useVuelidate from '@vuelidate/core'
// import { required, email, helpers, minLength } from '@vuelidate/validators'

interface UserInfo {
  id: string
  field: string
  label: string
  value: string
  type: string
  editing: boolean
  validation?: any
  errorMessage?: string
}

const userInfo = ref<UserInfo[]>([
  {
    id: 'name',
    field: 'name',
    label: 'Full Name',
    value: 'John Doe',
    type: 'text',
    editing: false,
    validation: { required, minLength: minLength(3) },
    errorMessage: 'Full name is required and must be at least 3 characters'
  },
  {
    id: 'email',
    field: 'email',
    label: 'Email',
    value: 'john.doe@example.com',
    type: 'email',
    editing: false,
    validation: { required, email },
    errorMessage: 'Please enter a valid email address'
  },
  {
    id: 'dob',
    field: 'dateOfBirth',
    label: 'Date of Birth',
    value: '1990-01-01',
    type: 'date',
    editing: false,
    validation: { required },
    errorMessage: 'Date of birth is required'
  },
  {
    id: 'phone',
    field: 'phone',
    label: 'Phone Number',
    value: '+1 (555) 123-4567',
    type: 'tel',
    editing: false,
    validation: {
      required,
      validPhone: helpers.regex(/^\+?[1-9]\d{1,14}$/)
    },
    errorMessage: 'Please enter a valid phone number'
  },
  {
    id: 'address',
    field: 'address',
    label: 'Address',
    value: '123 Main St, City, Country',
    type: 'text',
    editing: false,
    validation: { required, minLength: minLength(10) },
    errorMessage: 'Please enter a complete address (minimum 10 characters)'
  }
])

// Create validation rules object
const rules = computed(() => {
  const validationRules: Record<string, any> = {}
  userInfo.value.forEach(info => {
    if (info.validation) {
      validationRules[info.field] = info.validation
    }
  })
  return validationRules
})

// Create form state object
const formState = computed(() => {
  const state: Record<string, string> = {}
  userInfo.value.forEach(info => {
    state[info.field] = info.value
  })
  return state
})

const v$ = useVuelidate(rules, formState)

const toggleEdit = async (id: string) => {
  const info = userInfo.value.find(item => item.id === id)
  if (info) {
    if (info.editing) {
      // Validate before saving
      const fieldValidation = await v$.value[info.field].$validate()
      if (!fieldValidation) {
        return // Don't toggle if validation fails
      }
    }
    info.editing = !info.editing
  }
}

const saveChanges = async (id: string) => {
  const info = userInfo.value.find(item => item.id === id)
  if (!info) return

  const fieldValidation = await v$.value[info.field].$validate()
  if (!fieldValidation) {
    return
  }

  toggleEdit(id)
  // Here you would typically make an API call to save the changes
}

const saveAllChanges = async () => {
  const isValid = await v$.value.$validate()
  if (!isValid) {
    return
  }

  // Here you would typically make an API call to save all changes
  userInfo.value.forEach(info => {
    info.editing = false
  })
}

const getFieldError = (field: string) => {
  if (v$.value[field].$error) {
    return userInfo.value.find(info => info.field === field)?.errorMessage
  }
  return ''
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">Account Settings</h1>
      
      <div class="bg-white rounded-lg shadow-md p-6 space-y-6">
        <div v-for="info in userInfo" :key="info.id" class="space-y-2">
          <div class="flex justify-between items-center">
            <label :for="info.id" class="text-sm font-medium text-gray-700">
              {{ info.label }}
            </label>
            <Button
              variant="ghost"
              size="icon"
              @click="toggleEdit(info.id)"
              class="h-8 w-8 p-0"
            >
              <Pencil class="h-4 w-4" />
            </Button>
          </div>
          
          <div class="flex flex-col gap-2">
            <div class="flex gap-2">
              <Input
                :id="info.id"
                v-model="info.value"
                :type="info.type"
                :disabled="!info.editing"
                class="flex-1"
                :class="{ 'border-red-500': v$[info.field].$error }"
              />
              
              <Button
                v-if="info.editing"
                @click="saveChanges(info.id)"
                class="bg-green-600 hover:bg-green-700"
              >
                Save
              </Button>
            </div>
            
            <span 
              v-if="info.editing && v$[info.field].$error" 
              class="text-sm text-red-500"
            >
              {{ getFieldError(info.field) }}
            </span>
          </div>
        </div>

        <div class="pt-4 border-t">
          <Button 
            class="w-full"
            @click="saveAllChanges"
          >
            Save All Changes
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.input) {
  @apply border-gray-300;
}

:deep(.button) {
  @apply text-white;
}

:deep(.input:disabled) {
  @apply bg-gray-50;
}
</style> -->