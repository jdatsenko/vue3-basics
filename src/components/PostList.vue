<template>
<div v-if="posts.length > 0">
  <h3>List of users</h3>
  <transition-group name="post-list">
    <post-item v-for="post in posts" :key="post.id" :post="post"
  @remove="$emit('remove', post)"
  />
  </transition-group>
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

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active, .post-list-leave-active {
  transition: all 0.5s ease;
}

.post-list-enter-from, .post-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.post-list-move {
  transition: transform 0.5s ease;
}

</style>
