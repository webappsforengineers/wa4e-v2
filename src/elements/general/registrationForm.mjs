import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement.mjs';

class registrationForm extends StyledElement {
  // define the JS object and/or html attributes to be passed to the app
  static get properties() {
    return {
      username: {},
      firstName: {},
      lastName: {},
      country: {},
      organisation: {},
      email: {},
      password: {},
      confirmPassword: {},
      userInfo: {},
    };
  }

  constructor() {
    super();
    this.username = '';
    this.firstName = '';
    this.lastName = '';
    this.country = '';
    this.organisation = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.userInfo = {
      username: 'exampleUsername',
      firstName: 'exampleName',
      lastName: 'exampleLastName',
      country: 'exampleCountry',
      organisation: 'exampleOrganisation',
      email: 'exampleEmail',
      password: 'examplePassword',
      confirmPassword: 'examplePassword2',
    };
  }

  render() {
    // window.console.log(this.userInfo);
    return html`
      <h2>Register for a User Account</h2>
      <p>
        <b>Note:</b> The user login system is in development and will not
        currently work in the version deployed through github pages.
      </p>
      <!-- <form> -->
      <div class="mb-3">
        <label for="exampleInputUsername" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputUsername"
          @input=${this.changeUsername}
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
        <label for="exampleInputFirstName" class="form-label">First Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputFirstName"
          @input=${this.changeName}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputLastName" class="form-label">Last Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputLastName"
          @input=${this.changeLastName}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputCountry" class="form-label">Country</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputCountry"
          @input=${this.changeCountry}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputOrganisation" class="form-label"
          >Organisation</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleInputOrganisation"
          @input=${this.changeOrganisation}
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
      <div class="mb-3">
        <label for="exampleInputPassword2" class="form-label"
          >Confirm Password</label
        >
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword2"
          @input=${this.changePassword2}
        />
      </div>
      <button
        class="btn btn-primary"
        @click=${this.submitRegistration}
        type="submit"
      >
        Register
      </button>
      <!-- </form> -->
    `;
  }

  changeUsername(event) {
    const input = event.target;
    this.username = input.value;
  }

  changeName(event) {
    const input = event.target;
    this.firstName = input.value;
  }

  changeLastName(event) {
    const input = event.target;
    this.lastName = input.value;
  }

  changeCountry(event) {
    const input = event.target;
    this.country = input.value;
  }

  changeOrganisation(event) {
    const input = event.target;
    this.organisation = input.value;
  }

  changeEmail(event) {
    const input = event.target;
    this.email = input.value;
  }

  changePassword(event) {
    const input = event.target;
    this.password = input.value;
  }

  changePassword2(event) {
    const input = event.target;
    this.confirmPassword = input.value;
  }

  submitRegistration() {
    this.userInfo.username = this.username;
    this.userInfo.firstName = this.firstName;
    this.userInfo.lastName = this.lastName;
    this.userInfo.country = this.country;
    this.userInfo.organisation = this.organisation;
    this.userInfo.email = this.email;
    this.userInfo.password = this.password;
    this.userInfo.confirmPassword = this.confirmPassword;

    window.console.log('lit element', this.userInfo);

    fetch('http://localhost:8080/api/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.userInfo.username,
        first_name: this.userInfo.firstName,
        last_name: this.userInfo.lastName,
        country: this.userInfo.country,
        organisation: this.userInfo.organisation,
        email: this.userInfo.email,
        password: this.userInfo.password,
        // confirm_password: this.userInfo.confirmPassword,
      }),
    })
      .then(response => response.json())
      .then(json => {
        window.console.log('api response:', json);
        this.username = '';
        window.location.href = '../../index.html';
      });
  }
}

customElements.define('registration-form', registrationForm);
