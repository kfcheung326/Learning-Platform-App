<template>
  <div class="contianer">
   <div class="row">
      <div class="col-lg-6 t1" >
        <div class="boxDiv">
          <iframe class="gd" width="560" height="315" src="https://www.youtube.com/embed/FdlLsxR5AE0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-lg-6" >
        <div class="boxDiv">
          <iframe class="gd" width="560" height="315" src="https://www.youtube.com/embed/V_lgJgBbqWE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-lg-6" >
        <div class="boxDiv">
          <iframe class="gd" width="560" height="315" src="https://www.youtube.com/embed/eiE7MLBe4es" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-lg-6" >
        <div class="boxDiv">
          <iframe class="gd" width="560" height="315" src="https://www.youtube.com/embed/7HUW_aukApo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>            
  </div>
    
    </div>
</template>
<style>
iframe{
  border-radius: 10px;
}
.contianer{
  padding: 5px;
}
</style>
<script>
import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};
</script>
