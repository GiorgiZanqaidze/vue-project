<script setup>
import getChatUser from "../../services/getChatUser.js";
import {onMounted, reactive} from "vue";
import {useRoute} from "vue-router";
import getChatMessages from "../../services/getChatMessages.js";
import {useUserStore} from "../../store/userStore.js";
import postMessage from "../../services/postMessage.js";


const authUser = useUserStore()

const data = reactive({
  chatWithUser: null,
  messages: null,
  text: ''
})

const route = useRoute()

onMounted(async() => {
  const user = await getChatUser(route.params.id)
  const messages = await getChatMessages(route.params.id, authUser.user.data.id)
  data.messages = messages
  data.chatWithUser = user.data
})


async function submitText() {
  const response = await postMessage(
      {
        receiver_id: route.params.id,
        sender_id: authUser.user.data.id,
        content: data.text
      }
  )
}

</script>

<template>
  <h1>chat with: {{data?.chatWithUser?.name}}</h1>
  <div>
    <ul>
      <li v-for="message in data?.messages?.data?.messages" class="border m-4">
        <div v-if="message.sender_id === authUser.user.data.id" class="text-right">Me <p>{{message.content}}</p></div>
        <div v-else >{{ message.sender.name }}
          <p>{{message.content}}</p></div>
      </li>
    </ul>
  </div>
  <form @submit.prevent="submitText()">
    <input type="text" name="text" id="text" placeholder="text to user" v-model="data.text" class="bg-amber-200"/>
  </form>

</template>

<style scoped>

</style>