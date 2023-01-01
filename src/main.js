import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

import NoteCardPage from './components/NoteCardPage.vue';
import NoteCardsPage from './components/NoteCardsPage.vue';
import EditCard from './components/EditCard.vue';
import Create from './components/Create.vue';

const routes = [
    {
        path: '/',
        component: NoteCardsPage,
    },
    {
        path: '/note/:id',
        component: NoteCardPage,
    },
    {
        path: '/edit/:id',
        component: EditCard,
    },
    {
        path: '/create',
        component: Create,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
createApp(App).use(router).mount('#app')