<script setup>
import { useToast } from '@/components/ui/toast';
import Toaster from '@/components/ui/toast/Toaster.vue';
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import Textarea from '@/components/ui/textarea/Textarea.vue';
import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import InstagramiIcon from '@/assets/icons/instagram-logo-24.png'
import TikTokIcon from '@/assets/icons/tiktok-logo-24.png'
import YouTubeIcon from '@/assets/icons/youtube-logo-24.png'

const  { toast }  = useToast();

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
  email: z.string().min(5,'Required').email('It needs to be an email'),
  message: z.string().min(1, 'Message cannot be empty').max(700, 'Your love is overflowing!!')
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  console.log('Form submitted!', values)
  toast({
    variant: 'success',
    title: 'Form Submitted',
    description: `Hello ${values.username}, your message has been sent!`,
  });
  console.log('toast end');
  form.resetForm();
})
const socialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/festi_friend/',
    class: 'from-purple-500 to-pink-500',
    icon: InstagramiIcon
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@festi_friend',
    class: 'from-gray-900 to-gray-800',
    icon: TikTokIcon
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@Festi_Friend',
    class: 'from-red-600 to-red-500',
    icon: YouTubeIcon
  }
];
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br bg-[#f6fff8] py-12 px-4 sm:px-6 lg:px-8">
    <Toaster></Toaster>
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16 animate-fade-in">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch!</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Send us a message using the form below or connect with us on social media.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Contact Form -->
        <div class="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
          <form @submit="onSubmit" class="space-y-6">
            <FormField v-slot="{ componentField }" name="username">
              <FormItem class="block text-sm font-medium text-gray-700 mb-2">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="John Doe" v-bind="componentField" />
                </FormControl>
                <FormMessage class="p-1" />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="email">
              <FormItem class="block text-sm font-medium text-gray-700 mb-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="JohnDoe@gmail.com" v-bind="componentField" />
                </FormControl>
                <FormMessage class="p-1" />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="message">
              <FormItem class="block text-sm font-medium text-gray-700 mb-2">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message here..." class="max-h-[500px]" v-bind="componentField" />
                </FormControl>
                <FormMessage class="p-1" />
              </FormItem>
            </FormField>
      
            <Button
              type="submit"
              class="my-2 w-full bg-[#4f772d] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#90a955] transition duration-200 transform hover:scale-[1.01]">
              Send Message
            </Button>
          </form>
        </div>

        <!-- Social Connect -->
        <div class="bg-white rounded-2xl shadow-xl p-8 animate-fade-in lg:sticky lg:top-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
          <div class="space-y-4">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              target="_blank"
              :class="['social-button bg-gradient-to-r text-white', link.class]"
            >
              <span><img :src="link.icon" alt="Social Icon"></span>
              <span>Follow on {{ link.name }}</span>
            </a>
          </div>

          <div class="mt-8 pt-8 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Additional Ways to Reach Us</h3>
            <div class="space-y-3 text-gray-600">
              <p class="flex items-center gap-2">
                <span class="font-medium">Operating Hours:</span>
                Mon-Fri, 9AM-6PM EST
              </p>
              <p class="flex items-center gap-2">
                <span class="font-medium">Response Time:</span>
                Within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.social-button {
  @apply flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition duration-200 hover:scale-[1.01];
  }
</style>
