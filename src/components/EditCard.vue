<template>
    <div class="flex flex-col items-center justify-center h-screen" v-if="note.name && note.text">
        <h1 class="text-4xl font-bold mb-4">Edit note</h1>
        <NoteCard :name="note.name" :text="note.text" :editable="true" />
    </div>
    <div class="flex flex-col items-center justify-center h-screen" v-else>
        <h1 class="text-4xl font-bold">Note not found</h1>
        <router-link to="/">
            <button class="bg-yellow-300 shadow-lg rounded-md py-2 px-8 text-center mt-4">
                Go back
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
            note: {
                name: '',
                text: '',
            }
        }
    },
    created() {
        axios.get(`http://localhost5000/notes/${this.$route.params.id}`)
            .then((response) => {
                this.note = response.data.data;
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
    