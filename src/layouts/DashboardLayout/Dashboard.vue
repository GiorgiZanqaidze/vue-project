<script setup>

import {useRouter} from 'vue-router'
import {useUserStore} from "../../store/userStore.js";
const router = useRouter()

const userStore = useUserStore()

async function logOut() {
  try {
    await userStore.logoutUser()
    await router.push({name: 'login'})
  } catch (err) {
    console.log(err)
  }
}



</script>

<template>

  <h1>
    name: {{userStore?.user?.data?.name}}
    <br>
    <button @click="logOut()">Log Out</button>
  </h1>

</template>

<style scoped>

</style>