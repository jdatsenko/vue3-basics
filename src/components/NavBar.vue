<template>
    <div class="navbar">
      <div class="navbar__btns">
        <my-button @click="$router.push('/post')">Posts</my-button>
        <my-button style="margin-left: 20px" @click="$router.push('./')">Home</my-button>
        <my-button style="margin-left: 20px" @click="$router.push('/store')">Storage</my-button>

      </div>
    </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style scoped>
  .navbar {
    height: 7vh;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }
  .navbar__btns {
    margin: auto;
  }
  </style>