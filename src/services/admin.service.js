import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class AdminService {
  // getPublicContent() {
  //   return axios.get(API_URL + 'all');
  // }

  // getVideoContent() {
  //   return axios.get(API_URL + 'video');
  // }

  getCommunityContent() {
    return axios.get(API_URL + 'community');
  }

  listUserData(){
    return axios.get(API_URL + 'admin/userManage');
    
  }

  uploadPoster(poster){
    return axios.post(API_URL + 'community', {
      user: poster.user,
      title: poster.title,
      content: poster.content
    });
  }

  uploadVideo(poster){
    return axios.post(API_URL + 'community', {
      user: poster.user,
      title: poster.title,
      content: poster.content
    });
  }

  // getUserBoard() {
  //   return axios.get(API_URL + 'user', { headers: authHeader() });
  // }

  // getModeratorBoard() {
  //   return axios.get(API_URL + 'mod', { headers: authHeader() });
  // }

  // getAdminBoard() {
  //   return axios.get(API_URL + 'admin', { headers: authHeader() });
  // }
}

export default new AdminService();
