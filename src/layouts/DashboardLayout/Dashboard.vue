<script setup>

import {useRouter, useRoute, onBeforeRouteUpdate} from 'vue-router'
import {useUserStore} from "../../store/userStore.js";
import {onMounted, reactive, watch} from "vue";
import searchUser from "../../services/searchUser.js";
const router = useRouter()

const userStore = useUserStore()
const route = useRoute()

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
  <div>
    <div>
      <h1>cHAT</h1>
    </div>
    <div>
      <input type="text" name="search" id="search" placeholder="search user" v-model="form.name" @input="changeVal()" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
    </div>
  </div>
  <h1>
    name: {{userStore?.user?.data?.name}}
    <br>
    <button @click="logOut()">Log Out</button>
    <br>
    <label for="search">Search</label>
    <li v-for="user in form?.target" @click="textToUser(user.id)">
      <button>{{user.name}}</button>
    </li>
    <router-view></router-view>
  </h1>

</template>

<style scoped>

</style>