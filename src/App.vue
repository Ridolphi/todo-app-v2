<template>
  <div id="app">
    <div class="background">
      <!--
      <img class="parch" src="src/assets/pergaminho.jpeg" alt="parchment">
      -->
    </div>
    <router-view class="app-main" />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/user.js";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

onMounted(async () => {
  try {
    await userStore.fetchUser();
    if (!user.value) {
      router.push({ path: "/home" }); // Redirecionando para HomeView
    } else {
      router.push({ path: "/" }); // Redirecionando para TodoPage
    }
  } catch (e) {
    console.log(e);
  }
});
</script>

<style scoped>
#app {
  position: relative;
  height: 100vh;

  /*
  background-image: url("@/assets/parchment-4746819_1280.jpg");
  background-size: cover;
  background-position: center;
*/
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 0, 0, 0.5),
    rgba(0, 0, 255, 0.5)
  );
}

/*
.parch {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
*/
</style>
