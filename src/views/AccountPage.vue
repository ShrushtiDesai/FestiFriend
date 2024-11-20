<script setup>
  import { ref, computed } from 'vue'
  import { useAuthStore } from '@/stores/auth'
  import { useForm } from 'vee-validate'
  import { toTypedSchema } from '@vee-validate/zod'
  import * as z from 'zod'
  import Button from '@/components/ui/button/Button.vue'
  import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '@/components/ui/form'
  import { Input } from '@/components/ui/input'
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

  const formSchema = toTypedSchema(z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
  }))

  const passwordFormSchema = toTypedSchema(z.object({
    currentPassword: z.string().min(6, 'Password must be at least 6 characters'),
    newPassword: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string()
  }).refine(data => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
  }))

  const authStore = useAuthStore()
  const isPasswordEditing = ref(false)
  const editingField = ref(null)

  const form = useForm({
    validationSchema: formSchema,
    initialValues: computed(() => ({
      firstName: authStore.currentUser?.firstName || '',
      lastName: authStore.currentUser?.lastName || '',
      email: authStore.currentUser?.email || '',
    }))
  })

  const passwordForm = useForm({
    validationSchema: passwordFormSchema,
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const startEditing = (field) => {
    editingField.value = field
  }

  const cancelEdit = () => {
    editingField.value = null
    form.setFieldValue(editingField.value, authStore.currentUser[editingField.value])
  }

  const saveField = async (field, e) => {
    if (e) {
      e.preventDefault()
    }
    
    const isValid = await form.validateField(field)
    if (isValid.valid) {
      const updates = { [field]: form.values[field] }
      authStore.updateUser(updates)
      editingField.value = null
    }
  }

  const onPasswordSubmit = async (values, { resetForm }) => {
    if (values.currentPassword === authStore.currentUser?.password) {
      await authStore.updateUser({ password: values.newPassword })
      isPasswordEditing.value = false
      resetForm()
    } else {
      passwordForm.setFieldError('currentPassword', 'Current password is incorrect')
    }
  }

  const handleLogout = () => {
    authStore.logout()
  }
</script>

<template>
  <div class="min-h-screen bg-[#f6fff8] p-4 sm:p-6 lg:p-8">
    <div class="max-w-3xl mx-auto space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Account Settings</h1>
        <Button variant="destructive" @click="handleLogout">
          Logout
        </Button>
      </div>

      <Card class="bg-white w-full rounded-2xl shadow-xl animate-fade-in max-w-3xl mx-auto space-y-2">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Form @submit.prevent class="space-y-4">
            <div class="border-t border-gray-500 pt-4"></div>
            <FormField v-slot="{ componentField }" name="firstName">
              <FormItem>
                <div class="flex justify-between items-center">
                  <FormLabel>First Name</FormLabel>
                  <Button 
                    v-if="editingField !== 'firstName'"
                    variant="ghost" 
                    size="icon"
                    @click="startEditing('firstName')"
                  >
                    <img src="@\assets\icons\pencil-regular-24.png" class="h-4 w-4" />
                  </Button>
                </div>
                <div v-if="editingField === 'firstName'" class="space-y-2">
                  <FormControl>
                    <Input v-bind="componentField" placeholder="Enter your first name" />
                  </FormControl>
                  <FormMessage />
                  <div class="flex space-x-2">
                    <Button type="button" size="sm" @click="saveField('firstName', $event)">Save</Button>
                    <Button type="button" size="sm" variant="outline" @click="cancelEdit">Cancel</Button>
                  </div>
                </div>
                <div v-else class="p-2 bg-gray-50 rounded">
                  {{ authStore.currentUser?.firstName }}
                </div>
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="lastName">
              <FormItem>
                <div class="flex justify-between items-center">
                  <FormLabel>Last Name</FormLabel>
                  <Button 
                    v-if="editingField !== 'lastName'"
                    variant="ghost" 
                    size="icon"
                    @click="startEditing('lastName')"
                  >
                  <img src="@\assets\icons\pencil-regular-24.png" class="h-4 w-4" />
                  </Button>
                </div>
                <div v-if="editingField === 'lastName'" class="space-y-2">
                  <FormControl>
                    <Input v-bind="componentField" placeholder="Enter your last name" />
                  </FormControl>
                  <FormMessage />
                  <div class="flex space-x-2">
                    <Button type="button" size="sm" @click="saveField('lastName', $event)">Save</Button>
                    <Button type="button" size="sm" variant="outline" @click="cancelEdit">Cancel</Button>
                  </div>
                </div>
                <div v-else class="p-2 bg-gray-50 rounded">
                  {{ authStore.currentUser?.lastName }}
                </div>
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <div class="flex justify-between items-center">
                  <FormLabel>Email</FormLabel>
                  <Button 
                    v-if="editingField !== 'email'"
                    variant="ghost" 
                    size="icon"
                    @click="startEditing('email')"
                  >
                  <img src="@\assets\icons\pencil-regular-24.png" class="h-4 w-4" />
                  </Button>
                </div>
                <div v-if="editingField === 'email'" class="space-y-2">
                  <FormControl>
                    <Input v-bind="componentField" type="email" placeholder="Enter your email" />
                  </FormControl>
                  <FormMessage />
                  <div class="flex space-x-2">
                    <Button type="button" size="sm" @click="saveField('email', $event)">Save</Button>
                    <Button type="button" size="sm" variant="outline" @click="cancelEdit">Cancel</Button>
                  </div>
                </div>
                <div v-else class="p-2 bg-gray-50 rounded">
                  {{ authStore.currentUser?.email }}
                </div>
              </FormItem>
            </FormField>
          </Form>
        </CardContent>
      </Card>

      <Card class="bg-white w-full rounded-2xl shadow-xl animate-fade-in max-w-3xl mx-auto space-y-2">
        <CardHeader>
          <div class="flex justify-between items-center">
            <CardTitle>Password</CardTitle>
            <Button 
              variant="outline" 
              @click="isPasswordEditing = !isPasswordEditing"
              v-if="!isPasswordEditing"
            >
              Change Password
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div class="border-t border-gray-500 pt-4"></div>
          <div v-if="!isPasswordEditing" class="p-2 bg-gray-50 rounded">
            ••••••••
          </div>
          <Form 
            v-else
            @submit="passwordForm.handleSubmit(onPasswordSubmit)" 
            class="space-y-4">
          <div class="border-t border-gray-500 pt-4"></div>
            <FormField v-slot="{ componentField }" name="currentPassword">
              <FormItem>
                <FormLabel>Current Password</FormLabel>
                <FormControl>
                  <Input 
                    v-bind="componentField" 
                    type="password" 
                    placeholder="Enter current password" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="newPassword">
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input 
                    v-bind="componentField" 
                    type="password" 
                    placeholder="Enter new password" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="confirmPassword">
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input 
                    v-bind="componentField" 
                    type="password" 
                    placeholder="Confirm new password" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <div class="flex space-x-2">
              <Button type="submit">Save Password</Button>
              <Button 
                variant="outline" 
                type="button"
                @click="() => {
                  isPasswordEditing = false
                  passwordForm.resetForm()
                }"
              >
                Cancel
              </Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  </div>
</template>