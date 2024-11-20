<script setup lang="ts">
  import { useForm, useResetForm } from 'vee-validate'
  import { toTypedSchema } from '@vee-validate/zod'
  import * as z from 'zod'
  import { Button } from '@/components/ui/button'
  import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from '@/components/ui/form'
  import { Input } from '@/components/ui/input'
  import { useToast } from '@/components/ui/toast';
  import Toaster from '@/components/ui/toast/Toaster.vue';
  import { useAuthStore } from '@/stores/auth'

  const authStore = useAuthStore();
  const { toast } = useToast();

  const formSchema = toTypedSchema(z.object({
    userEmail: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  }))

  const form = useForm({
    validationSchema: formSchema,
  })

  const onSubmit = form.handleSubmit((values) => {
    const success = authStore.login(values.userEmail, values.password)
    console.log(success);

    if(!success) {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: 'Invalid email or password.',
      })
    }
    form.resetForm();
  })
</script>

<template>
  <Toaster></Toaster>
  <div class=" bg-[#f6fff8] py-12 px-4 sm:px-6 lg:px-8">
    <div class="bg-white w-full rounded-2xl shadow-xl p-8 animate-fade-in max-w-xl mx-auto space-y-8">
      <div>
        <h2 class="mb-6 text-center text-3xl font-bold text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form  @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="userEmail">
          <FormItem class="block text-sm font-medium text-gray-700 mb-2">
            <FormLabel>Email address</FormLabel>
            <FormControl>
              <Input type="email" autocomplete="email" required placeholder="Email address" v-bind="componentField"/>
            </FormControl>
            <FormMessage class="p-1"/>
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="password">
          <FormItem class="block text-sm font-medium text-gray-700 mb-2">
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" required placeholder="Password" autocomplete="current-password" v-bind="componentField"/>
            </FormControl>
            <FormMessage class="p-1"/>
          </FormItem>
        </FormField>

        <Button
          type="submit"
          class="my-2 w-full bg-[#4f772d] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#90a955] transition duration-200 transform hover:scale-[1.01]">
          Sign In
       </Button>
      </form>

      <div class="text-center mt-4">
        <p class="text-sm text-gray-600">
          Don't have an account?
          <RouterLink to="/auth/register" class="font-medium text-indigo-600 hover:text-indigo-500">
            Create One!
          </RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>
