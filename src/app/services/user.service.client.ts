export class UserServiceClient {

  findUserById(userId) {
    return fetch('https://zhemingg-node-student.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  findUserByUsername(username) {
    return fetch('https://zhemingg-node-student.herokuapp.com/api/users/' + username)
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://zhemingg-node-student.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch('https://zhemingg-node-student.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('https://zhemingg-node-student.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('https://zhemingg-node-student.herokuapp.com/api/register', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateUser(user) {
    return fetch('https://zhemingg-node-student.herokuapp.com/api/profile' , {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteUser(user) {
    return fetch('https://zhemingg-node-student.herokuapp.com/api/profile', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
