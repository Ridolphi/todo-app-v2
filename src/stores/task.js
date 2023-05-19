import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: []
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks, error } = await supabase
        .from('tasks')
        .select('*');
      
      if (error) {
        console.error('Error fetching tasks:', error);
      } else {
        this.tasks = tasks;
      }
    },
  }
});