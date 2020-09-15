<template>
  <div class="list row">
    <h2>Admin manage Topic in Community</h2>
    <!-- SEARCH FUNCTION -->
    <!-- <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div> -->

    <!-- COMMUNITY LIST -->
    <div class="col-md-6">
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          <b style="text-transform:uppercase;">{{ tutorial.title }}</b>
        </li>
      </ul>

      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button> -->
    </div>

    <!-- SPECIFY COMMUNITY CONTENT -->
    <div class="col-md-6">
      <div v-if="currentTutorial">
        <h4 style="text-transform:uppercase;">{{ currentTutorial.title }}</h4>
        <div>
          <label><strong>Description:</strong></label> {{ currentTutorial.content }}
        </div>
        <div>
          <label><strong>Status:</strong></label> {{ currentTutorial.published ? "Published" : "Pending" }}
        </div>

        <a class="badge badge-warning"
          :href="'/tutorials/' + currentTutorial.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a topic...</p>
      </div>
    </div>

    <!-- show the learners comment of the specify -->
    <div>
      
      show the learners comment of the specify
    </div>
  </div>
</template>

<script>
import UserService from "../services/admin.service";

export default {
  name: "Community",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
      poster:{
        user:"",
        title:"",
        content:""
      }
    };
  },
  methods: {
    getCommets() {
      UserService.getCommunityContent()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.getCommets();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    // removeAllTutorials() {
    //   UserService.deleteAll()
    //     .then(response => {
    //       console.log(response.data);
    //       this.refreshList();
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },
    
    // searchTitle() {
    //   UserService.findByTitle(this.title)
    //     .then(response => {
    //       this.tutorials = response.data;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }
  },
  mounted() {
    this.getCommets();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
