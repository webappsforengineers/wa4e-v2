import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement.mjs';

class loginForm extends StyledElement {
  // define the JS object and/or html attributes to be passed to the app
  static get properties() {
    return {
      loginUserInfo: {},
    };
  }

  constructor() {
    super();
    this.loginUserInfo = {
      username: 'exampleName',
      password: 'examplePassword',
    };
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
      <button class="btn btn-primary" @click=${this.submitRegistration}>
        Submit
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

  submitRegistration() {
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
      });
  }
}

customElements.define('login-form', loginForm);
