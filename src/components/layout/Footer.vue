<script setup>
import { RouterLink } from 'vue-router'
const currentYear = new Date().getFullYear();
</script>

<template style="border-top: 1px solid black">
  <footer class="footer-container">
    <div class="footer-content">
      <!-- Quick Links Section -->
      <div class="footer-section">
        <h3 class="footer-heading">Quick links</h3>
        <ul class="footer-links">
          <li><RouterLink to="/pages/festifriend-privacy-policy" class="pagelink">Privacy Policy</RouterLink>
          </li>
          <li><RouterLink to="/pages/terms-of-service-for-festifriend" class="pagelink">Terms of Service</RouterLink></li>
          <li><RouterLink to="/pages/return-policy" class="pagelink">Return & Refund Policy</RouterLink></li>
        </ul>
      </div>

      <!-- Social Media Section -->
      <div class="footer-section social-section">
        <div class="social-links">
          <a href="https://www.instagram.com/festi_friend/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://tiktok.com/@festi_friend" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Need Help Section -->
      <div class="footer-section">
        <h3 class="footer-heading">Need Help?</h3>
        <p>Email us!</p>
        <a href="mailto:help@festifriend.com" class="email-link">help@festifriend.com</a>
      </div>
    </div>

    <!-- Payment Methods -->
    <div class="payment-methods">
      <img src="@/assets/images/payments/Amex.png" alt="American Express" class="payment-icon">
      <img src="@/assets/images/payments/ApplePay.png" alt="Apple Pay" class="payment-icon">
      <img src="@/assets/images/payments/DinersClub.png" alt="Diners Club" class="payment-icon">
      <img src="@/assets/images/payments/Discover.png" alt="Discover" class="payment-icon">
      <img src="@/assets/images/payments/MetaPay.png" alt="Meta Pay" class="payment-icon">
      <img src="@/assets/images/payments/GooglePay.png" alt="Google Pay" class="payment-icon">
      <img src="@/assets/images/payments/Mastercard.png" alt="Mastercard" class="payment-icon">
      <img src="@/assets/images/payments/ShopPay.png" alt="Shop Pay" class="payment-icon">
      <img src="@/assets/images/payments/Visa.png" alt="Visa" class="payment-icon">
    </div>

    <!-- Copyright -->
    <div class="copyright">
      <p>&copy; {{ currentYear }} FestiFriend</p>
      <a href="https://shopify.com" target="_blank" rel="noopener noreferrer">Powered by Shopify</a>
    </div>
  </footer>
</template>

<style scoped>

.footer-container {
  background-color: #fefef4;
  padding: 4rem 2rem 2rem;
  /* margin-top: 4rem; */
  bottom: 0;
  border-top: 1px solid #eee;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-heading {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 1rem;
  color: black;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links .pagelink,
.email-link {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover,
.pagelink.router-link-active,
.email-link:hover {
  text-decoration: underline;
  color: #ffa6c9;
}

.social-section {
  align-items: center;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.social-links a {
  color: black;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #ffa6c9;
}

.payment-methods {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 2rem 0;
  padding: 2rem 0;
  border-top: 1px solid #eee;
  /* border-bottom: 1px solid #eee; */
}

.payment-icon {
  height: 40px;
  width: auto;
}

.copyright {
  text-align: center;
  color: #666;
  font-size: 0.875rem;
}

.copyright a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.copyright a:hover {
  color: #ffa6c9;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-section {
    align-items: center;
  }

  .social-section {
    order: -1;
  }

  .payment-methods {
    gap: 10px;
  }

  .payment-icon {
    height: 28px;
  }
}
</style>