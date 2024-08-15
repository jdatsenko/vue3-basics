<template>
  <div class="app">
    <h1>Page for posts</h1>

    <my-button @click="dialogVisible = true">Create post</my-button>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list :posts="posts" @remove="removePost" v-if="!isPostLoading" />
    <div v-else>Loading...</div>
  </div>
</template>


<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
import axios from 'axios'

export default {
  components: {
    PostForm,
    PostList
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },

    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },

    async fetchPosts() {
      try {
        this.isPostLoading = true
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
          this.posts = response.data
          this.isPostLoading = false
      }
      catch (e) {
        console.log(e)
      }

    }
  },

  mounted() {
    this.fetchPosts()
  }
}
</script>

<style></style>