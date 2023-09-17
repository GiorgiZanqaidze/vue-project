<script setup>

import {useRouter} from 'vue-router'
import {useUserStore} from "../../store/userStore.js";
import {reactive} from "vue";
import searchUser from "../../services/searchUser.js";

const router = useRouter()

const userStore = useUserStore()

async function logOut() {
    await userStore.logoutUser()
    router.push({name: 'login'})
}


const form = reactive({
  name: '',
  target: null
})

let canSendRequest = true

function changeVal() {
  if (canSendRequest) {
    canSendRequest = false
    setTimeout(async () => {
      const response = await searchUser(form.name);
      form.target = response.data.users;
      canSendRequest = true
    }, 1000);
  }
}

function textToUser(toUserId) {
    router.push({name: 'chat', params: {id: toUserId}})
}

</script>

<template>
  <h1>
    name: {{userStore?.user?.data?.name}}
    <br>
    <button @click="logOut()">Log Out</button>
    <br>
    <label for="search">Search</label>
    <input type="text" id="search" v-model="form.name" class="bg-blue-300" @input="changeVal" placeholder="search">
    <li v-for="user in form?.target" @click="textToUser(user.id)">
      <button>{{user.name}}</button>
    </li>
  </h1>

</template>

<style scoped>

</style>