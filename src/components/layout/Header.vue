<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue';
import menuIcon from '@/assets/icons/menu-regular-24.png';
import closeIcon from '@/assets/icons/x-regular-24.png';

const isSidebarOpen = ref(0);
// const isSearchClicked = ref(false);


function toggleSidebar() {
  isSidebarOpen.value = isSidebarOpen.value === 0 ? 1 : 0;
}
function closeSidebar() {
  isSidebarOpen.value = 0;
}
// function toggleSearch() {
//   isSearchClicked.value = !isSearchClicked.value;
// }

</script>

<template>
  <head>  
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>

  <body class="p-0 m-0 bg-half-white-cream">
    <header>
      <nav class="desktop-view">
        <RouterLink to="/">
            <img class="logo" src="@/assets/icons/FestiFriendLogo.avif" alt="Logo" height="150px" width="150px">
        </RouterLink>
        <ul>
          <li><RouterLink to="/" class="pagelink" exact-active-class="router-link-active">Home</RouterLink></li>
          <li><RouterLink to="/shop" class="pagelink" active-class="router-link-active">Shop</RouterLink></li>
          <li><RouterLink to="/about" class="pagelink" active-class="router-link-active">About</RouterLink></li>
          <li><RouterLink to="/contact" class="pagelink" active-class="router-link-active">Contact</RouterLink></li>
        </ul>
        <div class="right-section">
            <RouterLink to="/auth/login"><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
            </RouterLink>
            <RouterLink to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="16.5" cy="19.5" r="1.5"></circle></svg></RouterLink>
        </div>
      </nav>

      <nav class="mobile-view">
        <div class="mobile-nav-container">
          <li class="menubutton" @click="toggleSidebar()">
            <img
              :src="isSidebarOpen === 0 ? `${menuIcon}` : `${closeIcon}`"
              :alt="isSidebarOpen === 0 ? 'Open Menu' : 'Close Menu'"
            >
          </li>
          <RouterLink to="/" class="logo-container">
              <img class="logo" src="@/assets/icons/FestiFriendLogo.avif" alt="Logo" height="150px" width="150px">
          </RouterLink>
          <div class="right-section">
    
            <RouterLink to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="16.5" cy="19.5" r="1.5"></circle></svg>
            </RouterLink>
          </div>
        </div>

        <ul v-if="isSidebarOpen === 1" class="sidebar">
          <li><RouterLink to="/" class="pagelink" exact-active-class="router-link-active" @click="closeSidebar">Home</RouterLink></li>
          <li><RouterLink to="/auth/login" class="pagelink" active-class="router-link-active" @click="closeSidebar">Account</RouterLink></li>
          <li><RouterLink to="/shop" class="pagelink" active-class="router-link-active" @click="closeSidebar">Shop</RouterLink></li>
          <li><RouterLink to="/about" class="pagelink" active-class="router-link-active" @click="closeSidebar">About</RouterLink></li>
          <li><RouterLink to="/contact" class="pagelink" active-class="router-link-active" @click="closeSidebar">Contact</RouterLink></li>
        </ul>
      </nav>
    </header>
  </body>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #fefef4;
}

body {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10%;
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
}

.desktop-view {
  display: flex;
  align-items: center;
  flex: 1;
}

.desktop-view ul {
  display: flex;
  list-style: none;
  gap: 50px;
  flex: 1;
  justify-content: center;
  margin-left: auto;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 20px;
}

.pagelink {
  font-family: "Inter", sans-serif;
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  position: relative;
  transition: color 0.3s ease;
}

.pagelink:hover,
.pagelink.router-link-active {
  /* text-decoration-color: greenyellow; */
  color: #ffa6c9;
}

.pagelink:hover::after,
.pagelink.router-link-active::after {
  content: "";
  width: 50%;
  height: 2px;
  background: #ffa6c9;
  position: absolute;
  bottom: -5px;
  left: 0px;
  transition: color 0.3s ease;
}

.mobile-view {
  display: none;
}

@media (max-width: 830px) {
  .desktop-view {
    display: none;
  }

  .mobile-view {
    display: block;
    width: 100%;
  }

  .mobile-nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    position: relative;
    height: 150px;
  }

  .menubutton {
    list-style: none;
    cursor: pointer;
  }

  .logo-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .logo {
    height: 150px;
    width: 150px;
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 2;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 150px;
    left: 0;
    width: 100%;
    background-color: #fefef4;
    padding: 10px 0;
    z-index: 999;
    backdrop-filter: blur(4px);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .sidebar li {
    padding: 10px;
    text-align: center;
    list-style: none;
  }

  .pagelink {
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
    display: block;
    padding: 10px;
  }
  
.pagelink:hover::after,
.pagelink.router-link-active::after {
  width: 100%;
}
}
</style>