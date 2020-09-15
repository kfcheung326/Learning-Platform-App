<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light " style="background-color: #FFA500;">
      <a href class="navbar-brand" @click.prevent><img src="./image/logo.png" height="50" width=""></a>
      <div class="navbar-nav mr-auto">
        <!-- all user can view page/function -->
        <!-- <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" />Home
          </router-link> -->
        <!-- </li> -->
        <li class="nav-item">
          <router-link to="/quiz" class="nav-link">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-pen-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"
              />
            </svg>Game
          </router-link>
        </li>
        <li v-if="!showAdminBoard" class="nav-item">
          <router-link to="/video" class="nav-link">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-camera-reels-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8z"
              />
              <circle cx="3" cy="3" r="3" />
              <circle cx="9" cy="3" r="3" />
            </svg>Video
          </router-link>
        </li>
        <li v-if="!showAdminBoard" class="nav-item">
          <router-link to="/community" class="nav-link">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-people-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
              />
            </svg>Community
          </router-link>
        </li>
        <!-- for admin  -->
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/videoAdmin" class="nav-link">Manage Video</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/communityAdmin" class="nav-link">Manage community</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/uploadPoster" class="nav-link">Upload Poster</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/uploadVideo" class="nav-link">Upload Video</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/userManage" class="nav-link">Manage User</router-link>
        </li>

        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </li>
      </div>
      <!-- sign up page -->
      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" />Sign Up
          </router-link>
        </li>
        <!-- login page -->
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
  },
};
</script>
