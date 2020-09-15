<template>
  <div class="col-md-12">
    <div class="card card-container">
      <form name="form" @submit="handleVideo">

        <div v-if="!successful">

          <!-- input of username -->
          <div class="form-group">
            <label for="username">video name</label>
            <input
              v-model="video.name"
              type="text"
              class="form-control"
              name="username"
            />
          </div>

          <!-- input of title -->
          <div class="form-group">
            <label for="link">video link</label>
            <input
              v-model="video.link"
              type="text"
              class="form-control"
              name="link"
            />
          </div>
          <div>
            Demo:
            <div>
              <iframe class="gd" width="560" height="315" :src= video.link  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block">Upload video</button>
          </div>
        </div>
      </form>

      <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}</div>
    </div>
  </div>
</template>

<script>
// import Poster from '../models/poster';
import videoService from '../services/video.service';

export default {
  name: 'Upload',
  data() {
    return {
      video: {
        name:"",
        link:""
      
      },
      submitted: false,
      successful: false,
      message: ''
    };
  },
  methods: {
    handleVideo() {
        var data = {
            user: this.poster.user,
            title: this.poster.title,
            content: this.poster.content
        };

        videoService.uploadVideo(data)
        .then(response => {
        //   this.poster.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
      }
  }
};
</script>
