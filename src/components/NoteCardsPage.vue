<template>
  <div class="flex flex-col pt-4 gap-4 overflow-auto items-center justify-start h-screen" v-if="notes.length > 0">
    <router-link class="w-full flex content-center justify-center" v-for="note in notes" :key="note._id" :to="`/note/${note._id}`">
      <NoteCard :name="note.name" :text="note.text" />
    </router-link>
  </div>
  <div class="flex flex-col items-center justify-center h-screen" v-else>
    <h1 class="text-4xl font-bold">No notes found</h1>
    <router-link to="/create">
      <button class="bg-yellow-300 shadow-lg rounded-md py-2 px-8 text-center mt-4">
        Create a note
      </button>
    </router-link>
  </div>
</template>
  
<script>
import NoteCard from './NoteCard.vue'
import axios from 'axios';

export default {
  name: 'NoteCards',
  components: {
    NoteCard,
  },
  data() {
    return {
      notes: []
    }
  },
  created() {
    axios.get('http://localhost:3000/notes')
      .then((response) => {
        this.notes = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      })
  },
}
</script>
  
<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
  