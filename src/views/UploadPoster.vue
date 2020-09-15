<template>
  <div class="col-md-12">
    <div class="card card-container">
      <form name="form" @submit="handlePoster">
        <div v-if="successful">upload poster successful</div>

        <div v-if="!successful">
          <!-- input of username -->
          <div class="form-group">
            <label for="username">Username</label>
            <input v-model="poster.name" type="text" class="form-control" name="username" />
          </div>

          <!-- input of title -->
          <div class="form-group">
            <label for="title">title</label>
            <input v-model="poster.title" type="text" class="form-control" name="title" />
          </div>

          <!-- input of content -->
          <div class="form-group">
            <label for="content">content</label>
            <!-- <input
              v-model="poster.content"
              v-validate="'required|min:6|max:40'"
              type="text"
              class="form-control"
              name="content"
            />-->
            <div>
              <textarea v-model="poster.content" type="text" name="content" cols="30" rows="10" />
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block">Upload poster</button>
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
import adminService from '../services/admin.service';

export default {
  name: 'Upload',
  data() {
    return {
      poster: {
        user: '',
        title: '',
        content: '',
      },
      submitted: false,
      successful: false,
      message: '',
    };
  },
  methods: {
    handlePoster() {
      var data = {
        user: this.poster.user,
        title: this.poster.title,
        content: this.poster.content,
      };

      adminService
        .uploadPoster(data)
        .then((response) => {
          //   this.poster.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
