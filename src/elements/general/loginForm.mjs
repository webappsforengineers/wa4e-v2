import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement.mjs';

class loginForm extends StyledElement {
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
    return html`
      <h2>Login</h2>
      <p>
        <b>Note:</b> The user login system is in development and will not
        currently work in the version deployed through github pages.
      </p>
      <!-- <form> -->
      <div class="mb-3">
        <label for="loginUsername" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          id="loginUsername"
          aria-describedby="emailHelp"
          @input=${this.changeName}
        />
      </div>
      <div class="mb-3">
        <label for="loginPassword" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="loginPassword"
          @input=${this.changePassword}
        />
      </div>
      <button class="btn btn-primary" @click=${this.submitLogin}>Login</button>
      <br />
      <br />
      <button class="btn btn-primary" @click=${this.submitLogout}>
        Logout
      </button>
      <br />
      <br />
      <button class="btn btn-primary" @click=${this.listUsers}>
        List Users
      </button>
      <p>User List:</p>
      <ul>
        ${this.userList.map(
          user => html` <li>${user.username}, ${user.email}</li>`
        )}
      </ul>

      <br />
      <br />
      <button class="btn btn-primary" @click=${this.viewCurrentUser}>
        View Current User
      </button>
      <p>Current User: ${this.currentUser}</p>

      <div class="mb-3">
        <label for="selectedUserInput" class="form-label"
          >Email of the user to be selected</label
        >
        <input
          type="text"
          class="form-control"
          id="selectedUserInput"
          @input=${this.changeSelectedUser}
        />
      </div>
      <button class="btn btn-primary" @click=${this.selectUser}>
        Select User
      </button>
      <p>Selected User:</p>
      <ul>
        <li>id: ${this.outputSelectedUser.id}</li>
        <li>username: ${this.outputSelectedUser.username}</li>
        <li>email: ${this.outputSelectedUser.email}</li>
      </ul>
      <div class="mb-3">
        <label for="deleteUserInput" class="form-label"
          >Email of the user to be deleted</label
        >
        <input
          type="text"
          class="form-control"
          id="deleteUserInput"
          @input=${this.changeSelectedDeleteUser}
        />
      </div>
      <button class="btn btn-primary" @click=${this.deleteUser}>
        Delete User
      </button>

      <!-- </form> -->
    `;
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
        window.console.log('api response:', json);
        this.loginUserInfo.authToken = json.token;
        window.console.log('logged in user info', this.loginUserInfo);
      });
  }

  submitLogout() {
    const authHeader = this.loginUserInfo.authToken;
    window.console.log(authHeader);

    fetch('http://localhost:8080/api/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${this.loginUserInfo.authToken}`,
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
      // headers: {
      //   'Content-Type': 'application/json',
      //   Authorization: `Token ${this.loginUserInfo.authToken}`,
      // },
    })
      .then(response => response.json())
      .then(json => {
        window.console.log(json);
        this.userList = json;
      });
  }

  viewCurrentUser() {
    const authHeader = this.loginUserInfo.authToken;
    window.console.log(authHeader);

    fetch('http://localhost:8080/api/current-user/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${this.loginUserInfo.authToken}`,
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
      // headers: {
      //   'Content-Type': 'application/json',
      //   Authorization: `Token ${this.loginUserInfo.authToken}`,
      // },
    })
      .then(response => response.json())
      .then(json => {
        window.console.log(json[0].id);
        // eslint-disable-next-line prefer-destructuring
        this.outputSelectedUser = json[0];
        this.selectedUserId = json[0].id;
        window.console.log(this.selectedUserId);
      });
  }

  deleteUser() {
    // const authHeader = this.loginUserInfo.authToken;
    // window.console.log(authHeader);

    fetch(`http://localhost:8080/api/select-user/${this.selectedDeleteUser}/`, {
      method: 'GET',
      // headers: {
      //   'Content-Type': 'application/json',
      //   Authorization: `Token ${this.loginUserInfo.authToken}`,
      // },
    })
      .then(response => response.json())
      .then(json => {
        fetch(`http://localhost:8080/api/delete-user/${json[0].id}/`, {
          method: 'DELETE',
        });
      });
  }
}
customElements.define('login-form', loginForm);
