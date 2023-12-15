/* eslint-disable no-alert */
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
    window.console.log(localStorage.getItem('authToken'));
    return html`
      <h2 class="text-light">Login</h2>
      <p class="text-light">
        <b>Note:</b> The user login system is in development and will not
        currently work in the version deployed through github pages.
      </p>
      <!-- <form action='menu/index.html'> -->
      <div class="mb-3">
        <label for="loginUsername" class="form-label text-light"
          >Username</label
        >
        <input
          type="text"
          class="form-control w-50"
          id="loginUsername"
          aria-describedby="emailHelp"
          @input=${this.changeName}
        />
      </div>
      <div class="mb-3">
        <label for="loginPassword" class="form-label text-light"
          >Password</label
        >
        <input
          type="password"
          class="form-control w-50"
          id="loginPassword"
          @input=${this.changePassword}
        />
      </div>
      <button
        class="btn"
        style="background-color: #c1d100; color: #00557f"
        @click=${this.submitLogin}
      >
        Login
      </button>
      <br />
      <br />
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
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(response);
      })
      .then(json => {
        if (json.error) {
          alert('Incorrect username or password');
        } else {
          localStorage.setItem('authToken', json.token);
          localStorage.setItem('user_type', json.user_type);
          window.console.log('api response:', json);
          window.location.href = 'menu/index.html';
        }
      })
      .catch(response => {
        window.console.log(response);
        alert('Sorry, something went wrong and you could not be logges in');
      });
  }
}
customElements.define('login-form', loginForm);
