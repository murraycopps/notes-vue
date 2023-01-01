<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-4xl font-bold mb-4">Create note</h1>
        <NoteCard name="New note" text="New note text" :editable="true" :new="true"/>
    </div>
</template>
    
<script>
import NoteCard from './NoteCard.vue'

export default {
    name: 'NoteCards',
    components: {
        NoteCard,
    },
}
</script>
    
<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
    