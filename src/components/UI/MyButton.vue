<template>
    <button class="btn">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'my-button'
  }
  </script>
  
  <style scoped>
  .btn {
    cursor: pointer;
    margin-top: 10px;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
  }

  .btn:hover {
    background: teal;
    color: white;
}
  </style>