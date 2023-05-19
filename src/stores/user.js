import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  }),

  actions: {
    async fetchUser () {
      const { user } = supabase.auth;
      console.log(user);
    },
    async signUp (email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
      });
      if (error) throw error;
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
      }
    },
    async signIn (email, password) {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password
      });
      if (error) throw error;
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
      }
    },
    async signOut () {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      this.user = null;
      localStorage.removeItem('user');
    },
  }
});