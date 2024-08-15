<template>
  <div class="app">
    <h1>Page for posts</h1>

    <my-input v-model="searchQuery" placeholder="Search..."/>


    <div class="app__btns">
      <my-button @click="dialogVisible = true">Create post</my-button>
      <my-select
      v-model="selectedSort"
      :options="sortOptions"
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list :posts="sortedAndSearchedPosts" @remove="removePost" v-if="!isPostLoading" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: '',
      sortOptions: [
        { name: "Name", value: "title" },
        { name: "Description", value: "body" },
      ],
      searchQuery: '',
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },

    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },

    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        this.posts = response.data;
        this.isPostLoading = false;
      } catch (e) {
        console.log(e);
      }
    },
  },

  mounted() {
    this.fetchPosts();
  },

  computed: {
  sortedPosts() {
    return [...this.posts].sort((post1, post2) => {
      const value1 = post1[this.selectedSort] || ''; 
      const value2 = post2[this.selectedSort] || '';
      return value1.toString().localeCompare(value2.toString());
    });
  },

  sortedAndSearchedPosts() {
    return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
  },
},


  watch: {
  },
};
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
}
</style>
