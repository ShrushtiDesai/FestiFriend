<script setup>
import { RotateCcw, PackageCheck, CreditCard, RefreshCw, Truck, MessageCircle, Mail } from 'lucide-vue-next';
</script>

<template>
  <div class="min-h-screen bg-[#f6f4ec] from-background to-secondary/20 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-[1200px] mx-auto bg-[#f6f4ec] rounded-xl shadow-lg overflow-hidden">
      <div class="bg-primary/5 p-6 sm:p-8">
        <div class="flex items-center gap-3 mb-6">
          <RotateCcw class="h-6 w-6 text-primary" />
          <h1 class="text-2xl sm:text-3xl font-bold text-primary">Return & Refund Policy</h1>
        </div>
        <p class="text-muted-foreground">Thank you for shopping at FestiFriend. If you are not entirely satisfied with your purchase, we're here to help.</p>
      </div>
      
      <div class="p-6 sm:p-8 space-y-8">
        <section>
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <PackageCheck class="h-5 w-5 text-primary" />
            Returns
          </h2>
          <p class="text-muted-foreground">You have 14 calendar days to return an item from the date you received it.</p>
          <div class="mt-4 bg-secondary/50 rounded-lg p-4">
            <h3 class="font-medium mb-2">To be eligible for a return, your item must be:</h3>
            <ul class="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Unused and in the same condition that you received it</li>
              <li>In the original packaging</li>
              <li>Accompanied by the receipt or proof of purchase</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <CreditCard class="h-5 w-5 text-primary" />
            Refunds
          </h2>
          <div class="space-y-4 text-muted-foreground">
            <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.</p>
            <p>If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>
          </div>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <RefreshCw class="h-5 w-5 text-primary" />
            Exchanges
          </h2>
          <p class="text-muted-foreground">If your item is defective or damaged, we are happy to exchange the product for a new one. Please send us an email at <a href="mailto:help@festifriend.com" class="text-primary hover:underline">help@festifriend.com</a></p>
        </section>

        <section>
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <Truck class="h-5 w-5 text-primary" />
            Shipping
          </h2>
          <div class="space-y-4 text-muted-foreground">
            <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
            <p>Depending on where you live, the time it may take for your exchanged product to reach you may vary.</p>
          </div>
        </section>

        <section class="border-t pt-8">
          <h2 class="text-xl font-semibold mb-4 flex items-center gap-2">
            <MessageCircle class="h-5 w-5 text-primary" />
            Contact Us
          </h2>
          <p class="text-muted-foreground">If you have any questions on how to return your item to us, contact us at:</p>
          <a href="mailto:help@festifriend.com" class="mt-2 inline-flex items-center text-primary hover:underline">
            <Mail class="h-4 w-4 mr-2" />
            help@festifriend.com
          </a>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz@0,14..32;1,14..32&family=Roboto:wght@400;500;700&display=swap');

* {
  font-family: "Inter", sans-serif;
}
</style>