import axios from 'axios';

const API_URL = 'http://localhost:8080/api/test/';

class VideoService {

  getVideoContent() {
    return axios.get(API_URL + 'video');
  }

  uploadPoster(video){
    return axios.post(API_URL + 'video', {
      name: video.name,
      link: video.link
      
    });
  }

  edit(id){
    return axios.put();
  }
    
  delete(id){
    return axios.delete();

  }
  deleteAll() {
    return axios.delete(API_URL + 'video');
  }
}

export default new VideoService();
