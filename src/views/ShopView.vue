<script setup>
  import { useRouter } from 'vue-router';
  import { Button } from '@/components/ui/button'
  import {
    Card,
    CardContent,
    CardHeader,
  } from '@/components/ui/card'
  import { ref } from 'vue';

  import BlueKandi from '@/assets/images/Products/BlueKandi/BlueKandi1.jpg'
  import PinkKandi from '@/assets/images/Products/PinkKandi/PinkKandi1.webp'
  import MeshCommunicator from '@/assets/images/Products/MeshCom/MeshCommunicator1.webp'
  import YellowKandi from '@/assets/images/Products/YellowKandi/YellowKandi1.webp'
  import BlackKandi from '@/assets/images/Products/BlackKandi/BlackKandi1.webp'
  import PurpleKandi from '@/assets/images/Products/PurpleKandi/PurpleKandi1.webp'
  import Sticker from '@/assets/images/Products/Sticker/Sticker1.webp'
  import CustomPrint from '@/assets/images/Products/3DPrint/3DPrint1.webp'

  const router = useRouter();

  const products = ref([
  { 
    id: 1, 
    name: 'Pink Sparkle Kandi', 
    price: '10.00', 
    image: PinkKandi,
    category: 'Kandi Bracelet'
  },
  { 
    id: 2, 
    name: 'Amethyst Purple Kandi', 
    price: '10.00',
    image: PurpleKandi,
    category: 'Kandi Bracelet'
  },
  { 
    id: 3,
    name: 'Blue Sparkle Kandi', 
    price: '10.00',
    image: BlueKandi,
    category: 'Kandi Bracelet'  
  },
    
  { id: 4, 
    name: 'Black Smiley Kandi', 
    price: '10.00',
    image: BlackKandi,
    category: 'Kandi Bracelet'  
  },
  { 
    id: 5, 
    name: 'Yellow Sparkle Kandi', 
    price: '10.00',
    image: YellowKandi,
    category: 'Kandi Bracelet'  
  },
  { 
    id: 6, 
    name: 'FestiFriend Communicator', 
    price: '99.99',
    image: MeshCommunicator,
    category: 'Mesh Communicator'  
  },
  { 
    id: 7, 
    name: 'FestiFriend Sticker', 
    price: '5.00',
    image: Sticker,
    category: 'Sticker'  
  },
  { 
    id: 8,
    name: 'Custom Print', 
    price: '25.00',
    image: CustomPrint,
    category: '3D Print'  
  }
  ]);

  const navigateToProduct = (product) => {
  router.push({
    name: 'SingleProduct',
    params: { id: product.id },
    query: { name: product.name }
  });
};
</script>

<template>
  <body class="mx-auto p-6 my-6 max-w-[1300px]">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      <Card
        v-for="product in products"
        :key="product.id"
        @click="navigateToProduct(product)"
        class="text-center border border-solid border-slate-300 rounded-[20px] cursor-pointer shadow-card-before transition duration-200 ease hover:shadow-card-after">
        <CardHeader class="p-3 m-0 text-center">
          <img class="w-full rounded-[20px]" :src="`${product.image}`">
        </CardHeader>
        <CardContent class="pb-4 px-4 pt-2 text-start">
          <div>
            <h6 class="text-[gray] font-normal">{{ product.category }}</h6>
            <p class="my-0 font-bold">{{ product.name }}</p>
          </div>
          <div class="flex items-center justify-between mt-2">
            <h4 class="font-bold text-[#2a9d8f]">${{ product.price }}</h4>
            <Button class="w-[40px] h-[40px] rounded-full bg-[#e8f6ea] hover:bg-[#caedcd] border border-solid border-[#cce7d0]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: black;">
                  <circle cx="10.5" cy="19.5" r="1.5"></circle>
                  <circle cx="17.5" cy="19.5" r="1.5"></circle>
                  <path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z"></path>
                </svg>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </body>
</template>

<script>
  export default {
    name: 'Shop'
  }
  

</script>

<style scoped>
</style>
