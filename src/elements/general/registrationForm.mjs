/* eslint-disable no-alert */
import { html } from 'lit';
import { StyledElement } from '../../styles/wa4eStyleElement.mjs';

class registrationForm extends StyledElement {
  // define the JS object and/or html attributes to be passed to the app
  static get properties() {
    return {
      // username: {},
      // firstName: {},
      // lastName: {},
      // country: {},
      // organisation: {},
      // email: {},
      // password: {},
      // confirmPassword: {},
      userInfo: {},
      valid: {},
    };
  }

  constructor() {
    super();
    // this.username = null;
    // this.firstName = null;
    // this.lastName = null;
    // this.country = null;
    // this.organisation = null;
    // this.email = null;
    // this.password = null;
    // this.confirmPassword = null;
    this.userInfo = {
      username: null,
      firstName: null,
      lastName: null,
      country: null,
      organisation: null,
      email: null,
      password: null,
      confirmPassword: null,
    };
    this.valid = false;
  }

  render() {
    // window.console.log(this.userInfo);
    return html`
      <h2 class="text-light">Register for a User Account</h2>
      <p class="text-light">
        <b>Note:</b> The user login system is in development and will not
        currently work in the version deployed through github pages.
      </p>
      <!-- <form> -->
      <div class="mb-3">
        <label for="exampleInputUsername" class="form-label text-light"
          >Username</label
        >
        <input
          type="text"
          class="form-control w-50"
          id="exampleInputUsername"
          @input=${this.changeUsername}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-light"
          >Email address</label
        >
        <input
          type="email"
          class="form-control w-50"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          @input=${this.changeEmail}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputFirstName" class="form-label text-light"
          >First Name</label
        >
        <input
          type="text"
          class="form-control w-50"
          id="exampleInputFirstName"
          @input=${this.changeName}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputLastName" class="form-label text-light"
          >Last Name</label
        >
        <input
          type="text"
          class="form-control w-50"
          id="exampleInputLastName"
          @input=${this.changeLastName}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputCountry" class="form-label text-light"
          >Country</label
        >
        <input
          type="text"
          class="form-control w-50"
          id="exampleInputCountry"
          @input=${this.changeCountry}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputOrganisation" class="form-label text-light"
          >Organisation</label
        >
        <input
          type="text"
          class="form-control w-50"
          id="exampleInputOrganisation"
          @input=${this.changeOrganisation}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label text-light"
          >Password</label
        >
        <input
          type="password"
          class="form-control w-50"
          id="exampleInputPassword1"
          @input=${this.changePassword}
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword2" class="form-label text-light"
          >Confirm Password</label
        >
        <input
          type="password"
          class="form-control w-50"
          id="exampleInputPassword2"
          @input=${this.changePassword2}
        />
      </div>
      <button
        class="btn"
        @click=${this.submitRegistration}
        type="submit"
        style="background-color: #c1d100; color: #00557f"
      >
        Register
      </button>
      <!-- </form> -->
    `;
  }

  changeUsername(event) {
    const input = event.target;
    this.userInfo.username = input.value;
  }

  changeName(event) {
    const input = event.target;
    this.userInfo.firstName = input.value;
  }

  changeLastName(event) {
    const input = event.target;
    this.userInfo.lastName = input.value;
  }

  changeCountry(event) {
    const input = event.target;
    this.userInfo.country = input.value;
  }

  changeOrganisation(event) {
    const input = event.target;
    this.userInfo.organisation = input.value;
  }

  changeEmail(event) {
    const input = event.target;
    this.userInfo.email = input.value;
  }

  changePassword(event) {
    const input = event.target;
    this.userInfo.password = input.value;
  }

  changePassword2(event) {
    const input = event.target;
    this.userInfo.confirmPassword = input.value;
  }

  checkRegistration() {
    // check all fields have something in them
    if (
      this.userInfo.confirmPassword === null ||
      this.userInfo.country === null ||
      this.userInfo.email === null ||
      this.userInfo.firstName === null ||
      this.userInfo.lastName === null ||
      this.userInfo.organisation === null ||
      this.userInfo.password === null ||
      this.userInfo.username === null
    ) {
      this.valid = false;
      alert('Please complete all fields.');
    }
    // check password equals confirm password
    else if (this.userInfo.password !== this.userInfo.confirmPassword) {
      this.valid = false;
      alert('Please make sure the password and confirm password fields match.');
    } else {
      this.valid = true;
    }
  }

  submitRegistration() {
    this.checkRegistration();
    window.console.log(this.valid);

    if (this.valid === true) {
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
        }),
      })
        .then(response => response.json())
        .then(json => {
          if (json.email[0] === 'user with this email already exists.') {
            alert(json.email[0]);
          } else if (
            json.username[0] === 'user with this username already exists.'
          ) {
            alert(json.username[0]);
          } else {
            window.console.log('api response:', json);
            window.location.href = '../index.html';
          }
        });
      // .catch(alert('An error occurred and your registration could not be completed'));
    }
  }
}

customElements.define('registration-form', registrationForm);
