import { html } from 'lit';
import { StyledElement } from '../styles/wa4eStyleElement.mjs';
import '../elements/myElements.mjs';

class adminPage extends StyledElement {
  // define the JS object and/or html attributes to be passed to the app
  static get properties() {
    return {
      loginUserInfo: {},
      userList: {},
      currentUser: { type: String },
      selectedDeleteUser: {},
      selectedUser: {},
      outputSelectedUser: {},
    };
  }

  constructor() {
    super();
    this.currentUser = '';
    this.loginUserInfo = {
      username: 'exampleName',
      password: 'examplePassword',
      authToken: '',
    };
    this.userList = [];
    this.selectedDeleteUser = '';
    this.selectedUser = '';
    this.outputSelectedUser = '';
  }

  render() {
    return [
      super.render(),
      html`
        <div
          class="text-light"
          style="background-color: #00557f; height: auto; min-height: 100vh"
        >
          <div class="row">
            <header-element page-title="Admin"></header-element>
          </div>
          <div class="m-3">
            <h3>Admin Options</h3>
            <button
              class="btn"
              style="background-color: #c1d100; color: #00557f"
              @click=${this.listUsers}
            >
              View Full List of Users
            </button>
            <table class="table text-light">
              <thead>
                <th scope="col">Username</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Work Type</th>
                <th scope="col">Organisation</th>
                <th scope="col">Country</th>
              </thead>
              <tbody>
                ${this.userList.map(
                  user => html`
                    <tr>
                      <td>${user.username}</td>
                      <td>${user.first_name}</td>
                      <td>${user.last_name}</td>
                      <td>${user.email}</td>
                      <td>${user.work_type}</td>
                      <td>${user.organisation}</td>
                      <td>${user.country}</td>
                    </tr>
                  `
                )}
              </tbody>
            </table>

            <br />
            <br />

            <div class="mb-3">
              <label for="selectedUserInput" class="form-label"
                >Email of the user to be selected:</label
              >
              <input
                type="text"
                class="form-control w-50"
                id="selectedUserInput"
                @input=${this.changeSelectedUser}
              />
            </div>
            <button
              class="btn"
              style="background-color: #c1d100; color: #00557f"
              @click=${this.selectUser}
            >
              View Selected User
            </button>
            <table class="table text-light">
              <thead>
                <th scope="col">Username</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Work Type</th>
                <th scope="col">Organisation</th>
                <th scope="col">Country</th>
              </thead>
              <tbody>
                <tr>
                  <td>${this.outputSelectedUser.username}</td>
                  <td>${this.outputSelectedUser.first_name}</td>
                  <td>${this.outputSelectedUser.last_name}</td>
                  <td>${this.outputSelectedUser.email}</td>
                  <td>${this.outputSelectedUser.work_type}</td>
                  <td>${this.outputSelectedUser.organisation}</td>
                  <td>${this.outputSelectedUser.country}</td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
            <div class="mb-3">
              <label for="deleteUserInput" class="form-label"
                >Email of the user to be deleted:</label
              >
              <input
                type="text"
                class="form-control w-50"
                id="deleteUserInput"
                @input=${this.changeSelectedDeleteUser}
              />
            </div>
            <button
              class="btn"
              style="background-color: #c1d100; color: #00557f"
              @click=${this.deleteUser}
            >
              Delete User
            </button>
          </div>
          <div class="row gy-1">
            <footer-light-element></footer-light-element>
          </div>
        </div>
      `,
    ];
  }

  changeName(event) {
    const input = event.target;
    this.loginUserInfo.username = input.value;
  }

  changePassword(event) {
    const input = event.target;
    this.loginUserInfo.password = input.value;
  }

  changeSelectedDeleteUser(event) {
    const input = event.target;
    this.selectedDeleteUser = input.value;
  }

  changeSelectedUser(event) {
    const input = event.target;
    this.selectedUser = input.value;
  }

  submitLogin() {
    window.console.log('lit element', this.loginUserInfo);

    fetch('http://localhost:8080/api/login/', {
      method: 'POST',
      // mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.loginUserInfo.username,
        password: this.loginUserInfo.password,
      }),
    })
      .then(response => response.json())
      .then(json => {
        localStorage.setItem('authToken', json.token);
        // window.console.log('api response:', json);
        // this.loginUserInfo.authToken = json.token;
        // window.console.log('logged in user info', this.loginUserInfo);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  submitLogout() {
    fetch('http://localhost:8080/api/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('authToken')}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        window.console.log(json);
      });
  }

  listUsers() {
    // const authHeader = this.loginUserInfo.authToken;
    // window.console.log(authHeader);

    fetch('http://localhost:8080/api/list-users/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('authToken')}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        window.console.log(json);
        this.userList = json;
      });
  }

  viewCurrentUser() {
    // const authHeader = this.loginUserInfo.authToken;
    // window.console.log(authHeader);

    fetch('http://localhost:8080/api/current-user/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('authToken')}`,
        // Authorization: `Token ${this.loginUserInfo.authToken}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        window.console.log(json.username);
        this.currentUser = json.username;
      });
  }

  selectUser() {
    // select the user from their email
    fetch(`http://localhost:8080/api/select-user/${this.selectedUser}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('authToken')}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        // eslint-disable-next-line prefer-destructuring
        this.outputSelectedUser = json[0];
        this.selectedUserId = json[0].id;
        window.console.log(this.selectedUserId);
      });
  }

  deleteUser() {
    fetch(`http://localhost:8080/api/select-user/${this.selectedDeleteUser}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('authToken')}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        fetch(`http://localhost:8080/api/delete-user/${json[0].id}/`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('authToken')}`,
          },
        });
      });
  }
}
customElements.define('admin-page', adminPage);
