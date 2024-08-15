<template>
    <div class="app">
      <h1>Page for posts</h1>
      <my-button @click="dialogVisible = true">Create post</my-button>
      
      <my-dialog v-model:show="dialogVisible">
        <post-form @create="createPost" />
      </my-dialog>

      <post-list :posts="posts"
      @remove="removePost"
      />
    </div>
</template>


<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'

export default {
    components: {
        PostForm,
        PostList
    },
    data() {
        return {
          posts: [
            {
              id: 1,
              title: 'Post 1',
              body: 'Post 1 body'
            },
            {
              id: 2,
              title: 'Post 2',
              body: 'Post 2 body'
            },
            {
              id: 3,
              title: 'Post 3',
              body: 'Post 3 body'
            }
          ],
          dialogVisible: false
        }
    },
    methods: {
       createPost(post){
        this.posts.push(post)
        this.dialogVisible = false
       },
       removePost(post){
        this.posts = this.posts.filter(p => p.id !== post.id)
       }
    }
}
</script>

<style></style>