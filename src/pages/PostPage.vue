<template>
    <div>
      <h1>Page for posts</h1>
  
      <my-input v-focus v-model="searchQuery" placeholder="Search..." />
  
      <div class="app__btns">
        <my-button @click="dialogVisible = true">Create post</my-button>
        <my-select v-model="selectedSort" :options="sortOptions" />
      </div>
  
      <my-dialog v-model:show="dialogVisible">
        <post-form @create="createPost" />
      </my-dialog>
  
      <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
      />
      <div v-else>Loading...</div>
  
      <div v-intersection="loadMorePosts" class="observer"></div>
  
      <!-- <div class="page__wrapper">
        <div v-for="pageNum in totalPages" :key="pageNum" class="page"
        :class="{
          'current-page': page === pageNum
        }"
        @click="changePage(pageNum)"
        >
  
          {{ pageNum }}
        </div>
      </div> -->
    </div>
  </template>
  
  <script>
  import PostForm from "@/components/PostForm.vue";
  import PostList from "@/components/PostList.vue";
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
        selectedSort: "",
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
          { name: "Name", value: "title" },
          { name: "Description", value: "body" },
        ],
        searchQuery: "",
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
            "https://jsonplaceholder.typicode.com/posts",
            {
              params: {
                _page: this.page,
                _limit: this.limit,
              },
            }
          );
          this.totalPages = Math.ceil(
            response.headers["x-total-count"] / this.limit
          );
          this.posts = response.data;
          this.isPostLoading = false;
        } catch (e) {
          console.log(e);
        }
      },
  
      async loadMorePosts() {
        try {
          this.page += 1;
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          });
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
          this.posts = [...this.posts, ...response.data];
        } catch (e) {
          alert('Ошибка')
        }
      }
    },
  
    mounted() {
      this.fetchPosts();
    },
  
    computed: {
      sortedPosts() {
        return [...this.posts].sort((post1, post2) => {
          const value1 = post1[this.selectedSort] || "";
          const value2 = post2[this.selectedSort] || "";
          return value1.toString().localeCompare(value2.toString());
        });
      },
  
      sortedAndSearchedPosts() {
        return this.sortedPosts.filter((post) =>
          post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
  
    watch: {
      // page() {
      //   this.fetchPosts();
      // },
    },
  };
  </script>
  
  <style>
  .app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px;
  }
  
  .page__wrapper {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  
  .page {
    padding: 5px 10px;
    border: 1px solid teal;
    margin-right: 5px;
    cursor: pointer;
  }
  
  .current-page {
    background: teal;
    color: white;
  }
  
  </style>