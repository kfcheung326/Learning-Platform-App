<template>
  <div class="list row">
    <div class="col-md-8">
      <!-- <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title"
          v-model="title"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div> -->
    </div>
    <div class="col-md-6">
      <h4>Video List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(tutorial, index) in tutorials"
          :key="index"
          @click="setActiveTutorial(tutorial, index)"
        >
          {{ tutorial.name }}
        </li>
      </ul>

      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
        Remove All
      </button> -->
    </div>
    <div class="col-md-6">
      <div v-if="currentTutorial">
        <h4> {{ currentTutorial.name }}</h4>
        <div>
          <label><strong>link:</strong></label> {{ currentTutorial.link }}
        </div>
      <div>
          <iframe class="gd" width="560" height="315" :src= currentTutorial.link  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
        <a class="badge badge-warning"
          :href="'/tutorials/' + currentTutorial.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Video...</p>
      </div>
    </div>
  </div>
</template>

<script>
import VideoService from "../services/video.service";

export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: ""
    };
  },
  methods: {
    getVideos() {
      VideoService.getVideoContent()
        .then(response => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.getVideos();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    },

    // removeAllTutorials() {
    //   VideoDataService.deleteAll()
    //     .then(response => {
    //       console.log(response.data);
    //       this.refreshList();
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },
    
    // searchTitle() {
    //   VideoDataService.findByTitle(this.title)
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
    this.getVideos();
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
