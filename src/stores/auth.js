import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const users = ref([
    {
      id: 1,
      firstName: 'Noah',
      lastName: 'Gary',
      email: 'Noahgary@gmail.com',
      password: 'noah@123',
    },
    {
      id: 2,
      firstName: 'Shrushti',
      lastName: 'Desai',
      email: 'Shrushti@gmail.com',
      password: 'shrushti@456',
    },
  ])
  const isLoggedIn = ref(false)
  const currentUser = ref(null)

  const register = (user) => {
    const newUser = {
      ...user,
      id: users.value.length + 1
    }
    users.value.push(newUser)
    router.push('/auth/login')
  }

  const login = (email, password) => {
    const user = users.value.find(
      (u) => u.email === email && u.password === password
    )
    
    if (user) {
      isLoggedIn.value = true
      currentUser.value = { ...user }
      router.push('/account')
      return true
    }
    return false
  }

  const updateUser = (updatedData) => {
    if (currentUser.value) {
      const userIndex = users.value.findIndex(
        (user) => user.id === currentUser.value.id
      )
      if (userIndex !== -1) {
        users.value[userIndex] = { ...users.value[userIndex], ...updatedData }
        currentUser.value = { ...currentUser.value, ...updatedData }
      }
    }
  }

  const logout = () => {
    isLoggedIn.value = false
    currentUser.value = null
    router.push('/auth/login')
  }

  return {
    users,
    isLoggedIn,
    currentUser,
    register,
    login,
    updateUser,
    logout,
  }
})