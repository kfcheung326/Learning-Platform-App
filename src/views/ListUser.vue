<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">username</th>
          <th scope="col">email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tutorials" v-bind:key="item.id">
          <th scope="row">{{ item.username }}</th>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import adminSer from '../services/admin.service';

export default {
  name: 'tutorials-list',
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: '',
    };
  },
  methods: {
    getVideos() {
      adminSer
        .listUserData()
        .then((response) => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch((e) => {
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
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
