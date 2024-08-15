<template>
  <div>
    <div class="post" :key="post.id">
      <div class="num">{{ post.id }}</div>
      <div class="name"><strong>Name</strong> {{ post.title }}</div>
      <div class="body"><strong>Description</strong> {{ post.body }}</div>
    </div>

    <div class="post_btns">
      <my-button @click="$emit('remove', post)">Delete</my-button>
      <my-button @click="$emit('open', post)">Open</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
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

.num{
  background-color: teal;
  color: white;
  padding: 5px;
  margin-right: 10px;
  border-radius: 15px;
}

.name{
  width: 30%;
}

.body{
  width: 60%;
}

.post_btns{
  display: flex;
  justify-content: space-around;
}
</style>
