<template>
    <div class="flex flex-col items-center justify-center h-screen" v-if="note.name && note.text">
        <NoteCard :name="note.name" :text="note.text" />
        <div class="flex width-clamp gap-4 mt-4">
            <router-link :to="`/edit/${note._id}`" class="grow">
              <button class="bg-yellow-300 w-full shadow-lg rounded-md p-2 text-center">
                    Edit
                </button>
            </router-link>
            <button class="bg-yellow-300 grow shadow-lg rounded-md p-2 text-center" @click="deleteNote">
                Delete
            </button>
        </div>
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
    methods: {
        deleteNote() {
            axios.delete(`http://localhost5000/notes/${this.$route.params.id}`)
                .then(() => {
                    this.$router.push('/');
                })
                .catch((error) => {
                    console.log(error);
                })
        }
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

.width-clamp {
  width: clamp(300px, 50%, 500px);
}

</style>
    