<template>
<div v-if="posts.length > 0">
  <h3>List of users</h3>
  <post-item v-for="post in posts" :key="post.id" :post="post"
  @remove="$emit('remove', post)"
  />
</div>
<h2 v-else>List is empty, create a post</h2>
</template>

<script>
import PostItem from './PostItem.vue'
export default{
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
h2{
  color: red;
}
</style>
