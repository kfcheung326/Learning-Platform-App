import axios from 'axios';

const API_URL = 'http://localhost:8080/api/test/';

class CommunityService {

  getCommunityContent() {
    return axios.get(API_URL + 'community');
  }

  uploadPoster(poster){
    return axios.post(API_URL + 'community', {
      user: poster.user,
      title: poster.title,
      content: poster.content
    });
  }

  edit(id){
    return axios.put();
  }
    
  delete(id){
    return axios.delete();

  }
  deleteAll() {
    return axios.delete(API_URL + 'community');
  }
}

export default new CommunityService();
