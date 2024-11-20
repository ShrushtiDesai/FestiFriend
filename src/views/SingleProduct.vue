<script setup>
  import { Card, CardContent } from '@/components/ui/card'
  import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
  import { useToast } from '@/components/ui/toast';
  import Toaster from '@/components/ui/toast/Toaster.vue';
  import { watchOnce } from '@vueuse/core'
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/auth';
  import Button from '@/components/ui/button/Button.vue'
  import { useCartStore } from '@/stores/cart';
  import PinkKandi1 from '@/assets/images/Products/PinkKandi/PinkKandi1.webp'
  import PinkKandi2 from '@/assets/images/Products/PinkKandi/PinkKandi2.jpg'
  import PurpleKandi1 from '@/assets/images/Products/PurpleKandi/PurpleKandi1.webp'
  import PurpleKandi2 from '@/assets/images/Products/PurpleKandi/PurpleKandi2.webp'
  import PurpleKandi3 from '@/assets/images/Products/PurpleKandi/PurpleKandi3.webp'
  import BlueKandi1 from '@/assets/images/Products/BlueKandi/BlueKandi1.jpg'
  import BlueKandi2 from '@/assets/images/Products/BlueKandi/BlueKandi2.webp'
  import BlueKandi3 from '@/assets/images/Products/BlueKandi/BlueKandi3.webp'
  import BlackKandi1 from '@/assets/images/Products/BlackKandi/BlackKandi1.webp'
  import YellowKandi1 from '@/assets/images/Products/YellowKandi/YellowKandi1.webp'
  import YellowKandi2 from '@/assets/images/Products/YellowKandi/YellowKandi2.webp'
  import YellowKandi3 from '@/assets/images/Products/YellowKandi/YellowKandi3.webp'
  import MeshCom1 from '@/assets/images/Products/MeshCom/MeshCommunicator1.webp'
  import MeshCom2 from '@/assets/images/Products/MeshCom/MeshCommunicator2.webp'
  import MeshCom3 from '@/assets/images/Products/MeshCom/MeshCommunicator3.jpg'
  import MeshCom4 from '@/assets/images/Products/MeshCom/MeshCommunicator4.jpg'
  import Sticker1 from '@/assets/images/Products/Sticker/Sticker1.webp'
  import Sticker2 from '@/assets/images/Products/Sticker/Sticker2.webp'
  import Print1 from '@/assets/images/Products/3DPrint/3DPrint1.webp'
  import Print2 from '@/assets/images/Products/3DPrint/3DPrint2.webp'
  import Print3 from '@/assets/images/Products/3DPrint/3DPrint3.webp'

  const route = useRoute();
  const router = useRouter();
  const authStore = useAuthStore();
  const productId = Number(route.params.id);
  const productName = route.query.name;

  const  { toast }  = useToast();

  const products = ref([
  {
    id: 1,
    name: "Pink Sparkle Kandi",
    price: 10.00,
    description: "Add a pop of pink to your style with the Pink Sparkle Kandi Bracelet! This adorable bracelet is designed with light pink sparkle beads and features fun pink star accents, making it a cute and stylish accessory for festivals, parties, or just showing off your love for all things pink. With 'Festi Friend' spelled out in white letter beads and a unique center charm, this bracelet is perfect for celebrating friendship and fun moments.",
    images: [ PinkKandi1, PinkKandi2 ],
    tag: 'Kandi Bracelet'
    },
    {
    id: 2,
    name: "Amethyst Purple Kandi",
    price: 10.00,
    description: "Add a touch of purple magic to your accessory collection with the Purple Dream Kandi Bracelet! This vibrant bracelet features deep purple beads accented with sparkling purple star charms, making it a standout piece for festivals, parties, or anyone who loves bold, eye-catching accessories. The 'Festi Friend' beads paired with a special center charm make it a perfect gift for friends and a beautiful reminder of fun memories.",
    images: [ PurpleKandi1, PurpleKandi2, PurpleKandi3 ],
    tag: 'Kandi Bracelet'
    },
    {
    id: 3,
    name: "Blue Sparkle Kandi",
    price: 10.00,
    description: "Show off your festival spirit with this charming Blue Sparkle Kandi Bracelet! Handcrafted with clear blue beads that shimmer in the light, this bracelet features a playful combination of a blue star, heart, and white letter beads spelling out 'Festi Friend'. Perfect as a friendship bracelet or a fun accessory for your next event, this piece adds a touch of sparkle to any outfit.",
    images: [ BlueKandi1, BlueKandi2, BlueKandi3 ],
    tag: 'Kandi Bracelet'
    },
    {
    id: 4,
    name: "Black Smiley Kandi",
    price: 10.00,
    description: "Celebrate friendship and good vibes with the Black Smiley Kandi Bracelet! This playful bracelet combines black sparkle beads with vibrant yellow smiley faces and bold center charms, making it a standout piece for any music festival, rave, or casual day out. With 'Festi Friend' spelled out in white letter beads and accented by cheerful yellow, this bracelet is a reminder to keep smiling and enjoy the moment with friends.",
    images: [ BlackKandi1 ],
    tag: 'Kandi Bracelet'
    },
    {
    id: 5,
    name: "Yellow Sparkle Kandi",
    price: 10.00,
    description: "Bring sunshine to your style with the Yellow Sparkle Kandi Bracelet! Featuring bright yellow sparkle beads and adorable yellow star accents, this bracelet is a perfect accessory for festival-goers and friendship lovers. The playful 'Festi Friend' lettering in white beads, paired with a cheerful yellow heart accent, celebrates the joy of friendship and the festival spirit. This vibrant bracelet is sure to brighten your day and those around you.",
    images: [ YellowKandi1, YellowKandi2, YellowKandi3 ],
    tag: 'Kandi Bracelet'
    },
    {
    id: 6,
    name: "FestiFriend Communicator",
    price: 99.99,
    description: "Stay connected wherever you go with the FestiFriend Mesh Communicator, the ultimate companion for adventurers and festival enthusiasts. Designed to work even in remote areas without cell service, this sleek, durable device uses mesh networking technology to keep you in touch with friends over long distances. Perfect for group hikes, music festivals, or outdoor exploration, the FestiFriend communicator ensures you are always just a message away.",
    images: [ MeshCom1, MeshCom2, MeshCom3, MeshCom4 ],
    tag: 'Mesh Communicator'
    },
    {
    id: 7,
    name: "FestiFriend Sticker",
    price: 5.00,
    description: "Add a touch of holographic flair with the FestiFriend Sticker! This eye-catching sticker features the FestiFriend logo, designed with vibrant holographic accents that reflect a spectrum of colors. Perfect for decorating laptops, water bottles, notebooks, or any personal items, this sticker is a fun way to show off your FestiFriend pride. Its durable material ensures it stays bright and vivid, even through outdoor adventures.",
    images: [ Sticker1, Sticker2 ],
    tag: 'Sticker'
    },
    {
    id: 8,
    name: "Custom Print",
    price: 25.00,
    description: "This is a deposit for a 3d printing consultation. If you want anything 3D Printed, I can do the prep work and print it for you!. The general rates for a 3D Print: $20/print + $5/hr it takes to print + $1/10 grams of filament used. I will also charge for any 3D modeling work I will do for the print. Most of the time this is not needed or will be so minimal I won't charge for it.",
    images: [ Print1, Print2, Print3 ],
    tag: '3D Print'
    },


  ]);

  const cartStore = useCartStore();
  const product = ref(products.value.find(p => p.id === productId));

  const emblaMainApi = ref(null);
  const emblaThumbnailApi = ref(null);
  const selectedIndex = ref(0);
  // const selectedSize = ref('')
  const quantity = ref(1);
  
  const incrementQuantity = () => {
  quantity.value++
  }

  const decrementQuantity = () => {
    if (quantity.value > 1) {
      quantity.value--
    }
  }

  const addToCart = () => {
    if(!(authStore.isLoggedIn)) {
      router.push('/auth/login');
      return;
    }
    const cartItem = {
      id: product.value.id, 
      name: product.value.name,
      price: product.value.price,
      quantity: quantity.value,
      image: product.value.images[0]  
    };

    cartStore.addToCart(cartItem);
        
    toast({
      variant: 'success',
      title: 'Item Added to Cart',
      description: `${quantity.value} ${product.value.name}(s) have been added to your cart.`,
    });
    quantity.value = 1;

    console.log('Cart items after adding:', cartStore.cartItems);
  };

  function onSelect() {
    if (!emblaMainApi.value || !emblaThumbnailApi.value) return
    selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
    emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
  }

  function onThumbClick(index) {
    if (!emblaMainApi.value || !emblaThumbnailApi.value) return
    emblaMainApi.value.scrollTo(index)
  }

  watchOnce(emblaMainApi, (emblaMainApi) => {
    if (!emblaMainApi) return
    onSelect()
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  })
</script>

<template>
  <Toaster></Toaster>
  <div class="product-page flex flex-col bg-[#f6fff8]" v-if="product">
    <div class="top-div flex flex-wrap max-w-[1300px] mx-auto p-6">
      <!-- Left side - Image Gallery -->
      <div class="top-div-left flex-1 min-w-[320px]">
        <div class="w-full sm:w-auto">
          <!-- Main Carousel -->
          <Carousel
            class="relative w-full max-w-xl mb-2"
            @init-api="(val) => emblaMainApi = val">
            <CarouselContent>
              <CarouselItem v-for="(image, index) in product.images" :key="index">
                <Card>
                  <CardContent class="flex aspect-square items-center justify-center p-0">
                    <img :src="image" :alt="product.name" class="w-full h-full object-cover" />
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <!-- Thumbnail Carousel -->
          <Carousel
            class="relative w-full max-w-xl"
            @init-api="(val) => emblaThumbnailApi = val">
            <CarouselContent class="flex gap-1 ml-0">
              <CarouselItem 
                v-for="(image, index) in product.images" 
                :key="index" 
                class="pl-0 basis-1/4 cursor-pointer"
                @click="onThumbClick(index)"
              >
                <div class="" :class="index === selectedIndex ? 'opacity-100' : 'opacity-50'">
                  <Card>
                    <CardContent class="flex aspect-square items-center justify-center p-0">
                      <img :src="image" :alt="'Thumbnail'" class="w-full h-full object-cover" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div class="top-div-right flex-1 min-w-[320px] pl-8">
        <div class="sticky top-8">
          
          <div class="inline-block bg-[#001f3f] text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
            {{ product.tag }}
          </div>

          <h1 class="text-3xl font-bold text-gray-900 mb-4">{{ product.name }}</h1>
          <p class="text-2xl font-semibold text-[#2a9d8f] mb-6">${{ product.price.toFixed(2) }}</p>

          <div class="mb-6">
          </div>
          <div class="flex items-center space-x-4 my-6">
          <span class="text-gray-700">Quantity:</span>
          <div class="flex items-center bg-white border border-gray-300 rounded">
            <button
              @click="decrementQuantity"
              class="px-3 py-2 bg-gray-200 hover:bg-gray-100"
              :disabled="quantity <= 1"
            >
              −
            </button>
            <span class="px-4 py-2 text-center min-w-[3rem]">{{ quantity }}</span>
            <button
              @click="incrementQuantity"
              class="px-3 py-2 bg-gray-200 hover:bg-gray-100"
            >
              +
               </button>
            </div>
          </div>

          <Button class="w-full mb-8 bg-[#4f772d] text-white py-6 px-6 rounded-lg font-medium hover:bg-[#90a955] transition duration-200 transform hover:scale-[1.01]" size="lg" @click="addToCart">
            Add to Cart
          </Button>

          <div class="border-t border-gray-500 pt-6">
            <h2 class="text-lg font-medium text-gray-900 mb-4">Product Details</h2>
            <p class="text-gray-600">
              {{ product.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SingleProduct',

    props: ['product'],
    setup(props) {
      const cartStore = useCartStore();
      const quantity = ref(1);

      const handleAddToCart = () => {
        const productToAdd = {
          id: props.product.id,
          name: props.product.name,
          price: props.product.price,
          image: props.product.image,
          quantity: quantity.value, 
      };
      cartStore.addToCart(productToAdd);
    };
    return { quantity, handleAddToCart };
  }
}

</script>

<style scoped>
.top-div-right {
  @apply mt-8 lg:mt-0;
}
</style>