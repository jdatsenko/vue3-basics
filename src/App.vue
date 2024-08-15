<template>
    <div class="app">
      <post-form @create="createPost"/>
      <post-list :posts="posts"
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
          ]
        }
    },
    methods: {
       createPost(post){
        this.posts.push(post)
       }
    }
}
</script>

<style></style>