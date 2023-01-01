<template>
  <div class="card bg-yellow-300 flex flex-col shadow-lg rounded-md p-8 text-center">
    <h1 :class="`text-2xl font-bold text-gray-800 ${editable ? `bg-white` : ''} p-2 rounded-xl mb-4`"
      v-bind:contentEditable="editable" @input="updateName($event.target.innerText)">{{ nameValue }}
    </h1>
    <p :class="`text-lg text-gray-700 grow ${editable ? `bg-white` : ''} p-2 rounded-xl`"
      v-bind:contentEditable="editable" @input="updateText($event.target.innerText)">{{ textValue }}</p>
    <div v-if="editable" class="flex gap-4 mt-4">
      <button class="bg-yellow-400 shadow-lg rounded-md p-2 text-center w-full" @click="submit">
        Submit
      </button>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    editable: {
      type: Boolean,
      default: false,
      required: false,
    },
    new: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      nameValue: this.name,
      textValue: this.text,
    }
  },
  watch: {
    name(newName) {
      this.nameValue = newName;
    },
    text(newText) {
      this.textValue = newText;
    },
  },
  methods: {
    updateName(name) {
      this.nameValue = name;
    },
    updateText(text) {
      this.textValue = text;
    },
    submit() {
      if (this.editable && this.new) {
        axios.post('http://localhost:3000/notes', {
          name: this.nameValue,
          text: this.textValue,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            console.log(response);
            this.$router.push(`/note/${response.data.data.insertedId}`);
          })
          .catch((error) => {
            console.log(error);
          })
      } else if (this.editable) {
        axios.put(`http://localhost:3000/notes/${this.$route.params.id}`, {
          name: this.nameValue,
          text: this.textValue,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            console.log(response);
            this.$router.push(`/note/${this.$route.params.id}`);
          })
          .catch((error) => {
            console.log(error);
          })
      } else {
        console.log('Not editable');
      }
    },
  },
}
</script>

  
<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

.card {
  width: clamp(300px, 50%, 500px);
  min-height: 300px;
}
</style>
  