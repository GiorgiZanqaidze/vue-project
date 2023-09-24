<script setup>

import {useRouter} from 'vue-router'
import {useUserStore} from "../../store/userStore.js";
import {onMounted, reactive, watch} from "vue";
import searchUser from "../../services/searchUser.js";
import getAllUsers from "../../services/getAllUsers.js";
import UsersList from "./UsersList.vue";
import SearchedUsers from "./SearchedUsers.vue";
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


async function getUsers() {

}

onMounted(async() => {
  const usersData = await getAllUsers()
  console.log(usersData)
})

function textToUser(toUserId) {
    router.push({name: 'chat', params: {id: toUserId}})
}

</script>

<template>
  <div >
    <div class="max-w-7xl mx-auto flex justify-between">
      <div class="bg-red-500">
        <div>
          <input type="text" name="search" id="search" placeholder="search user" v-model="form.name" @input="changeVal()" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
        </div>
        <searched-users v-if="form?.target" :data="form?.target" @get-user="textToUser"></searched-users>
        <users-list v-else></users-list>
      </div>
      <div class="w-2/3">
        <router-view></router-view>
      </div>
    </div>
  </div>


</template>

<style scoped>

</style>