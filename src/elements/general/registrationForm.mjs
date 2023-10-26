import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement.mjs';

class registrationForm extends StyledElement {
  // define the JS object and/or html attributes to be passed to the app
  static get properties() {
    return {
      userInfo: {},
    };
  }

  constructor() {
    super();
    this.userInfo = {
      username: 'exampleName',
      email: 'exampleEmail',
      password: 'examplePassword',
    };
  }

  render() {
    return html`
      <h2>Register for a User Account</h2>
      <p>
        <b>Note:</b> The user login system is in development and will not
        currently work in the version deployed through github pages.
      </p>
      <div class="mb-3">
        <label for="exampleInputUsername" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputUsername"
          aria-describedby="emailHelp"
          @input=${this.changeName}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          @input=${this.changeEmail}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          @input=${this.changePassword}
        />
      </div>
      <button class="btn btn-primary" @click=${this.submitRegistration}>
        Submit
      </button>
    `;
  }

  changeName(event) {
    const input = event.target;
    this.userInfo.username = input.value;
  }

  changeEmail(event) {
    const input = event.target;
    this.userInfo.email = input.value;
  }

  changePassword(event) {
    const input = event.target;
    this.userInfo.password = input.value;
  }

  submitRegistration() {
    window.console.log('lit element', this.userInfo);

    fetch('http://localhost:8080/api/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.userInfo.username,
        password: this.userInfo.password,
        email: this.userInfo.email,
      }),
    })
      .then(response => response.json())
      .then(json => {
        window.console.log('api response:', json);
      });
  }
}

customElements.define('registration-form', registrationForm);
