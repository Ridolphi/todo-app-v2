<template>
  <div class="todo">
    <h1>Welcome to your To-do List App!</h1>
    <form class="form" @submit.prevent="register">
      <div class="form-user">
        <div>
          <label for="email">Email</label>
          <input id="email" type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" required />
        </div>
        <div>
          <label for="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            v-model="confirmPassword"
            required
          />
        </div>
        <button type="submit">Register</button>
        <p>Please check your email to confirm your address.</p>
      </div>
    </form>
    <h5>
      Already a member?<router-link :to="{ name: 'Home' }">Home</router-link>
    </h5>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user.js";

export default {
  setup() {
    let email = ref("");
    let password = ref("");
    let confirmPassword = ref("");
    let list = ref([]);
    const router = useRouter();
    const userStore = useUserStore();

    const register = async () => {
      window.confirm("Please check your email to confirm your address.");
      email.value = "";
      password.value = "";
      confirmPassword.value = "";

      setTimeout(() => {
        router.push("/HomeView");
      }, 3000);
    };

    onMounted(() => {
      let data = localStorage.getItem("listItems");
      if (data != null) {
        list.value = JSON.parse(data);
      }
    });

    return {
      email,
      password,
      confirmPassword,
      register,
      list,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap");
.todo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

h1 {
  font-family: "MedievalSharp", cursive;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.form-user {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.form-user div {
  margin-bottom: 10px;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
