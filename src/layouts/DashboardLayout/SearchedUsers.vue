<script setup>


const props = defineProps([
    'data'
])

console.log(props.data)

const emits = defineEmits(['get-user']);


function textToUser(user_id) {
  emits('get-user', user_id)
}

</script>

<template>
  <div>
    <ul>
      <li v-for="user in props?.data" @click="textToUser(user.id)">
        <button>{{user.name}}</button>
      </li>
    </ul>
  </div>

</template>

<style scoped>




</style>