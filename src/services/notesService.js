import httpClient from 'httpClient';

class UserService {
  static create(note) {
    return httpClient.post('/notes', note);
  }

  static update({ id, title, description }) {
    return httpClient.put(`/notes/${id}`, { title, description });
  }

  static remove(id) {
    return httpClient.delete(`/notes/${id}`);
  }

  static get(id) {
    return httpClient.get(`/notes/${id}`);
  }

  static list() {
    return httpClient.get('/notes');
  }
}

export default UserService;
