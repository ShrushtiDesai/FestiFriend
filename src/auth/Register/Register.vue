<script setup lang="ts">
import { useForm } from 'vee-validate'
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

const formSchema = toTypedSchema(z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  userEmail: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })
);

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
  form.resetForm();
})
</script>

<template>
  <div class=" flex items-center justify-center bg-gradient-to-br bg-[#f6fff8] py-12 px-4 sm:px-6 lg:px-8" >
    <div class="bg-white rounded-2xl shadow-xl p-8 animate-fade-in max-w-xl w-full mx-auto space-y-8">
      <div>
        <h2 class="mb-6 text-center text-3xl font-bold text-gray-900">
          Create your account
        </h2>
      </div>

      <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="firstName">
          <FormItem class="block text-sm font-medium text-gray-700 mb-2">
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input type="text" required placeholder="First Name" v-bind="componentField"/>
            </FormControl>
            <FormMessage class="p-1"/>
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="lastName">
          <FormItem class="block text-sm font-medium text-gray-700 mb-2">
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input type="text" required placeholder="Last Name" v-bind="componentField"/>
            </FormControl>
            <FormMessage class="p-1"/>
          </FormItem>
        </FormField>

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
              <Input type="password" required placeholder="Password" v-bind="componentField"/>
            </FormControl>
            <FormMessage class="p-1"/>
          </FormItem>
        </FormField>

        
        <FormField v-slot="{ componentField }" name="confirmPassword">
          <FormItem class="block text-sm font-medium text-gray-700 mb-2">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input type="password" required placeholder="Confirm Password" v-bind="componentField"/>
            </FormControl>
            <FormMessage class="p-1"/>
          </FormItem>
        </FormField>

        <Button
          type="submit"
          class="my-2 w-full bg-[#4f772d] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#90a955] transition duration-200 transform hover:scale-[1.01]">
          Create Account
       </Button>
      </form>

      <div class="text-center mt-4">
        <p class="text-sm text-gray-600">
          Already have an account?
          <RouterLink to="/auth/login" class="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>