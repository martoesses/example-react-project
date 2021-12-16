import httpClient from 'httpClient';

class UserService {
  static login(data) {
    return httpClient.post('/users/login', data);
  }

  static register(data) {
    return httpClient.post('/users', data);
  }
}

export default UserService;
