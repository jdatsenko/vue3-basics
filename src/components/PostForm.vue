<template>
    <form @submit.prevent>
      <h4>Создание поста</h4>
      <input
        v-focus
        v-model="post.title"
        type="text"
        placeholder="Название"
      />
      <input
        v-model="post.body"
        type="text"
        placeholder="Описание"
      />
      <button
      class="btn"
        @click="createPost"
      >
        Создать
      </button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      createPost() {
        this.post.id = Date.now();
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }
    },
  }
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
  }
  input {
    margin-bottom: 10px;
    padding: 5px;
  }
  .btn {
    padding: 5px;
    background-color: teal;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  </style>