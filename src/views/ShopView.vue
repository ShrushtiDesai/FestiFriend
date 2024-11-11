<script setup>
  import { Button } from '@/components/ui/button'
  import {
    Card,
    CardContent,
    CardHeader,
  } from '@/components/ui/card'
</script>

<template>
  <body class="mx-auto p-6 my-6 max-w-[1300px]">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      <Card class="text-center border border-solid border-slate-300 rounded-[20px] cursor-pointer shadow-card-before transition duration-200 ease hover:shadow-card-after">
        <CardHeader class="p-3 m-0 text-center">
          <img class="w-full rounded-[20px]" src="@/assets/images/Products/PinkKandi.webp">
        </CardHeader>
        <CardContent class="pb-4 px-4 pt-2 text-start">
          <div>
            <h6 class="text-[gray] font-normal">Kandi Bracelet</h6>
            <p class="my-0 font-bold">Pink Sparkle Kandi</p>
          </div>
          <div class="flex items-center justify-between mt-2">
            <h4 class="font-bold text-[#2a9d8f]">$10.00</h4>
            <Button class="w-[40px] h-[40px] rounded-full bg-[#e8f6ea] hover:bg-[#caedcd] border border-solid border-[#cce7d0]">
              <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: black;">
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                  <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"></path>
                </svg>
              </RouterLink>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card class="text-center border border-solid border-slate-300 rounded-[20px] cursor-pointer shadow-card-before transition duration-200 ease hover:shadow-card-after">
        <CardHeader class="p-3 m-0 text-center">
          <img class="w-full rounded-[20px]" src="@/assets/images/Products/PurpleKandi.webp">
        </CardHeader>
        <CardContent class="pb-4 px-4 pt-2 text-start">
          <div>
            <h6 class="text-[gray] font-normal">Kandi Bracelet</h6>
            <p class="my-0 font-bold">Amethyst Purple Kandi</p>
          </div>
          <div class="flex items-center justify-between mt-2">
            <h4 class="font-bold text-[#2a9d8f]">$10.00</h4>
            <Button class="w-[40px] h-[40px] rounded-full bg-[#e8f6ea] hover:bg-[#caedcd] border border-solid border-[#cce7d0]">
              <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: black;">
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                  <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"></path>
                </svg>
              </RouterLink>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card class="text-center border border-solid border-slate-300 rounded-[20px] cursor-pointer shadow-card-before transition duration-200 ease hover:shadow-card-after">
        <CardHeader class="p-3 m-0 text-center">
          <img class="w-full rounded-[20px]" src="@/assets/images/Products/BlueKandi.jpg">
        </CardHeader>
        <CardContent class="pb-4 px-4 pt-2 text-start">
          <div>
            <h6 class="text-[gray] font-normal">Kandi Bracelet</h6>
            <p class="my-0 font-bold">Blue Sparkle Kandi</p>
          </div>
          <div class="flex items-center justify-between mt-2">
            <h4 class="font-bold text-[#2a9d8f]">$10.00</h4>
            <Button class="w-[40px] h-[40px] rounded-full bg-[#e8f6ea] hover:bg-[#caedcd] border border-solid border-[#cce7d0]">
              <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: black;">
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                  <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"></path>
                </svg>
              </RouterLink>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card class="text-center border border-solid border-slate-300 rounded-[20px] cursor-pointer shadow-card-before transition duration-200 ease hover:shadow-card-after">
        <CardHeader class="p-3 m-0 text-center">
          <img class="w-full rounded-[20px]" src="@/assets/images/Products/BlackKandi.webp">
        </CardHeader>
        <CardContent class="pb-4 px-4 pt-2 text-start">
          <div>
            <h6 class="text-[gray] font-normal">Kandi Bracelet</h6>
            <p class="my-0 font-bold">Black Smiley Kandi</p>
          </div>
          <div class="flex items-center justify-between mt-2">
            <h4 class="font-bold text-[#2a9d8f]">$10.00</h4>
            <Button class="w-[40px] h-[40px] rounded-full bg-[#e8f6ea] hover:bg-[#caedcd] border border-solid border-[#cce7d0]">
              <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: black;">
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                  <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"></path>
                </svg>
              </RouterLink>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card class="text-center border border-solid border-slate-300 rounded-[20px] cursor-pointer shadow-card-before transition duration-200 ease hover:shadow-card-after">
        <CardHeader class="p-3 m-0 text-center">
          <img class="w-full rounded-[20px]" src="@/assets/images/Products/YellowKandi.webp">
        </CardHeader>
        <CardContent class="pb-4 px-4 pt-2 text-start">
          <div>
            <h6 class="text-[gray] font-normal">Kandi Bracelet</h6>
            <p class="my-0 font-bold">Yellow Sparkle Kandi</p>
          </div>
          <div class="flex items-center justify-between mt-2">
            <h4 class="font-bold text-[#2a9d8f]">$10.00</h4>
            <Button class="w-[40px] h-[40px] rounded-full bg-[#e8f6ea] hover:bg-[#caedcd] border border-solid border-[#cce7d0]">
              <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: black;">
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                  <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"></path>
                </svg>
              </RouterLink>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card class="text-center border border-solid border-slate-300 rounded-[20px] cursor-pointer shadow-card-before transition duration-200 ease hover:shadow-card-after">
        <CardHeader class="p-3 m-0 text-center">
          <img class="w-full rounded-[20px]" src="@/assets/images/Products/MeshCommunicator.webp">
        </CardHeader>
        <CardContent class="pb-4 px-4 pt-2 text-start">
          <div>
            <h6 class="text-[gray] font-normal">Mesh Communicator</h6>
            <p class="my-0 font-bold">FestiFriend Communicator</p>
          </div>
          <div class="flex items-center justify-between mt-2">
            <h4 class="font-bold text-[#2a9d8f]">$99.99</h4>
            <Button class="w-[40px] h-[40px] rounded-full bg-[#e8f6ea] hover:bg-[#caedcd] border border-solid border-[#cce7d0]">
              <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: black;">
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                  <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"></path>
                </svg>
              </RouterLink>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card class="text-center border border-solid border-slate-300 rounded-[20px] cursor-pointer shadow-card-before transition duration-200 ease hover:shadow-card-after">
        <CardHeader class="p-3 m-0 text-center">
          <img class="w-full rounded-[20px]" src="@/assets/images/Products/Sticker.webp">
        </CardHeader>
        <CardContent class="pb-4 px-4 pt-2 text-start">
          <div>
            <h6 class="text-[gray] font-normal">Sticker</h6>
            <p class="my-0 font-bold">FestiFriend Sticker</p>
          </div>
          <div class="flex items-center justify-between mt-2">
            <h4 class="font-bold text-[#2a9d8f]">$5.00</h4>
            <Button class="w-[40px] h-[40px] rounded-full bg-[#e8f6ea] hover:bg-[#caedcd] border border-solid border-[#cce7d0]">
              <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: black;">
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                  <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"></path>
                </svg>
              </RouterLink>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card class="text-center border border-solid border-slate-300 rounded-[20px] cursor-pointer shadow-card-before transition duration-200 ease hover:shadow-card-after">
        <CardHeader class="p-3 m-0 text-center">
          <img class="w-full rounded-[20px]" src="@/assets/images/Products/3DPrint.webp">
        </CardHeader>
        <CardContent class="pb-4 px-4 pt-2 text-start">
          <div>
            <h6 class="text-[gray] font-normal">3D Print</h6>
            <p class="my-0 font-bold">Custom Print</p>
          </div>
          <div class="flex items-center justify-between mt-2">
            <h4 class="font-bold text-[#2a9d8f]">$25.00</h4>
            <Button class="w-[40px] h-[40px] rounded-full bg-[#e8f6ea] hover:bg-[#caedcd] border border-solid border-[#cce7d0]">
              <RouterLink to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: black;">
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                  <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"></path>
                </svg>
              </RouterLink>
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
    <!-- <Card class="text-center w-1/6 min-w-[300px] border border-solid border-slate-300 rounded-[20px] cursor-pointer shadow-card-before transition duration-200 ease hover:shadow-card-after">
      <CardHeader class="p-3 m-0 text-center">
        <img class="w-full rounded-[20px]" src="@/assets/images/Products/PinkKandi.webp">
      </CardHeader>
      <CardContent class="pb-4 px-4 pt-2 text-start">
        <div>
          <h6 class="text-[gray] font-normal">Kandi Bracelet</h6>
          <p class="my-0 font-bold">Pink Sparkle Kandi</p>
        </div>

        <div class="flex items-center justify-between">
          <h4 class="font-bold text-[#2a9d8f]">$10.00</h4>
          <Button class="w-[40px] h-[40px] rounded-[50px] leading-10 bg-[#e8f6ea] hover:bg-[#caedcd] border border-solid border-[#cce7d0]">
            <RouterLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: black;">
                <circle cx="10.5" cy="19.5" r="1.5"></circle>
                <circle cx="17.5" cy="19.5" r="1.5"></circle>
                <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"></path>
              </svg>
            </RouterLink>
          </Button>
        </div>
      </CardContent>
    </Card> -->

  </body>
</template>

<script>
  export default {
    name: 'Shop'
  }
</script>

<style scoped>
</style>
