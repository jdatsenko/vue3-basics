<template>
    <div></div>
  </template>
  
  <script>
  export default {
    name: 'VIntersectionObserver',
    mounted(el, binding) {
      const options = {
        rootMargin: '0px',
        threshold: 1.0,
      };
  
      const callback = (entries) => {
        if (entries[0].isIntersecting) {
          binding.value(); 
        }
      };
  
      const observer = new IntersectionObserver(callback, options);
      observer.observe(el);
    },
  };
  </script>
  
  <style scoped>
  /* Стили компонента */
  </style>
  
  