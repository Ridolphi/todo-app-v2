<template>
  <section>
    <router-view class="app-main" /> <!-- your routes will load inside of these tags -->    
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useUserStore } from './stores/user.js';
 
const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
 
onMounted(async () => {
  try {
    await userStore.fetchUser(); // here we call fetch user
    if (!user.value) {
      // redirect them to logout if the user is not there
      
      router.push({ path: '/auth' });
    } else {
      // continue to dashboard
      router.push({ path: '/' });
    }
  } catch (e) {
    console.log(e);
  }
});
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

#app {
  max-width: 500px;
  margin: 50px auto;
}

input {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 18px;
}

button {
  background-color: red;
  color: white;
  padding: 5px 10px;
  font-size: 14px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: darkred;
}
</style>
