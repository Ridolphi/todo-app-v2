<template>
  <div>
    <h1>Here's your To-do List App!</h1>
  </div>
  <form @submit.prevent="register">
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
  </form>

  <h5>Already a member?<router-link to="/login">Login</router-link></h5>
</template>

<script>
import { ref } from "vue";
import { useUserStore } from "../stores/user.js";

export default {
  setup() {
    let email = ref("");
    let password = ref("");
    let confirmPassword = ref("");

    const userStore = useUserStore();

    const register = async () => {
      if (password.value !== confirmPassword.value) {
        alert("Passwords do not match");
        return;
      }

      try {
        await userStore.signUp(email.value, password.value);
        alert(
          "Registration successful, please check your email for a confirmation link."
        );
        email.value = "";
        password.value = "";
        confirmPassword.value = "";
      } catch (e) {
        console.log(e);
        alert("An error occurred during registration.");
      }
    };

    return {
      email,
      password,
      confirmPassword,
      register,
    };
  },
};
</script>
