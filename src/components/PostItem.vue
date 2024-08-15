<template>

<div>
  <div class="post" :key="post.id">
    <div><strong>Name</strong> {{ post.title }}</div>
    <div><strong>Description</strong> {{ post.body }}</div>
  </div>

  <div class="post_btns">
    <my-button class="btn">Delete</my-button>
  </div>
</div>
  
</template>

<script>

export default {

  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* .post__btns {
    display: flex;
  } */
</style>