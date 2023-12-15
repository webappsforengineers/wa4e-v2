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
      country: 'United Kingdom',
      workType: 'Academic - Research',
      organisation: null,
      email: null,
      password: null,
      confirmPassword: null,
    };
    this.valid = false;
  }

  render() {
    window.console.log(this.userInfo);
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
        <select class="form-select w-50" @input=${this.changeCountry}>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Aland Islands">&Aring;land Islands</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="American Samoa">American Samoa</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Anguilla">Anguilla</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Aruba">Aruba</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Belize">Belize</option>
          <option value="Benin">Benin</option>
          <option value="Bermuda">Bermuda</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Bolivia, Plurinational State of">
            Bolivia, Plurinational State of
          </option>
          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
          <option value="Botswana">Botswana</option>
          <option value="Bouvet Island">Bouvet Island</option>
          <option value="Brazil">Brazil</option>
          <option value="British Indian Ocean Territory">
            British Indian Ocean Territory
          </option>
          <option value="Brunei Darussalam">Brunei Darussalam</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Burkina Faso">Burkina Faso</option>
          <option value="Burundi">Burundi</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Cameroon">Cameroon</option>
          <option value="Canada">Canada</option>
          <option value="Cape Verde">Cape Verde</option>
          <option value="Cayman Islands">Cayman Islands</option>
          <option value="Central African Republic">
            Central African Republic
          </option>
          <option value="Chad">Chad</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Christmas Island">Christmas Island</option>
          <option value="Cocos (Keeling) Islands">
            Cocos (Keeling) Islands
          </option>
          <option value="Colombia">Colombia</option>
          <option value="Comoros">Comoros</option>
          <option value="Congo">Congo</option>
          <option value="Congo, the Democratic Republic of the">
            Congo, the Democratic Republic of the
          </option>
          <option value="Cook Islands">Cook Islands</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="C&ocirc;te d'Ivoire">C&ocirc;te d'Ivoire</option>
          <option value="Croatia">Croatia</option>
          <option value="Cuba">Cuba</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Czech Republic">Czech Republic</option>
          <option value="Denmark">Denmark</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option value="Dominican Republic">Dominican Republic</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Egypt">Egypt</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Equatorial Guinea">Equatorial Guinea</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Falkland Islands (Malvinas)">
            Falkland Islands (Malvinas)
          </option>
          <option value="Faroe Islands">Faroe Islands</option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="French Guiana">French Guiana</option>
          <option value="French Polynesia">French Polynesia</option>
          <option value="French Southern Territories">
            French Southern Territories
          </option>
          <option value="Gabon">Gabon</option>
          <option value="Gambia">Gambia</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Gibraltar">Gibraltar</option>
          <option value="Greece">Greece</option>
          <option value="Greenland">Greenland</option>
          <option value="Grenada">Grenada</option>
          <option value="Guadeloupe">Guadeloupe</option>
          <option value="Guam">Guam</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Guernsey">Guernsey</option>
          <option value="Guinea">Guinea</option>
          <option value="Guinea-Bissau">Guinea-Bissau</option>
          <option value="Guyana">Guyana</option>
          <option value="Haiti">Haiti</option>
          <option value="Heard Island and McDonald Islands">
            Heard Island and McDonald Islands
          </option>
          <option value="Holy See (Vatican City State)">
            Holy See (Vatican City State)
          </option>
          <option value="Honduras">Honduras</option>
          <option value="Hong Kong">Hong Kong</option>
          <option value="Hungary">Hungary</option>
          <option value="Iceland">Iceland</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Iran, Islamic Republic of">
            Iran, Islamic Republic of
          </option>
          <option value="Iraq">Iraq</option>
          <option value="Ireland">Ireland</option>
          <option value="Isle of Man">Isle of Man</option>
          <option value="Israel">Israel</option>
          <option value="Italy">Italy</option>
          <option value="Jamaica">Jamaica</option>
          <option value="Japan">Japan</option>
          <option value="Jersey">Jersey</option>
          <option value="Jordan">Jordan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Kenya">Kenya</option>
          <option value="Kiribati">Kiribati</option>
          <option value="Korea, Democratic People's Republic of">
            Korea, Democratic People's Republic of
          </option>
          <option value="Korea, Republic of">Korea, Republic of</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Lao People's Democratic Republic">
            Lao People's Democratic Republic
          </option>
          <option value="Latvia">Latvia</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Lesotho">Lesotho</option>
          <option value="Liberia">Liberia</option>
          <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
          <option value="Liechtenstein">Liechtenstein</option>
          <option value="Lithuania">Lithuania</option>
          <option value="Luxembourg">Luxembourg</option>
          <option value="Macao">Macao</option>
          <option value="Macedonia, the former Yugoslav Republic of">
            Macedonia, the former Yugoslav Republic of
          </option>
          <option value="Madagascar">Madagascar</option>
          <option value="Malawi">Malawi</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Maldives">Maldives</option>
          <option value="Mali">Mali</option>
          <option value="Malta">Malta</option>
          <option value="Marshall Islands">Marshall Islands</option>
          <option value="Martinique">Martinique</option>
          <option value="Mauritania">Mauritania</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Mayotte">Mayotte</option>
          <option value="Mexico">Mexico</option>
          <option value="Micronesia, Federated States of">
            Micronesia, Federated States of
          </option>
          <option value="Moldova, Republic of">Moldova, Republic of</option>
          <option value="Monaco">Monaco</option>
          <option value="Mongolia">Mongolia</option>
          <option value="Montenegro">Montenegro</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Morocco">Morocco</option>
          <option value="Mozambique">Mozambique</option>
          <option value="Myanmar">Myanmar</option>
          <option value="Namibia">Namibia</option>
          <option value="Nauru">Nauru</option>
          <option value="Nepal">Nepal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Netherlands Antilles">Netherlands Antilles</option>
          <option value="New Caledonia">New Caledonia</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Nicaragua">Nicaragua</option>
          <option value="Niger">Niger</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Niue">Niue</option>
          <option value="Norfolk Island">Norfolk Island</option>
          <option value="Northern Mariana Islands">
            Northern Mariana Islands
          </option>
          <option value="Norway">Norway</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Palau">Palau</option>
          <option value="Palestinian Territory, Occupied">
            Palestinian Territory, Occupied
          </option>
          <option value="Panama">Panama</option>
          <option value="Papua New Guinea">Papua New Guinea</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Peru">Peru</option>
          <option value="Philippines">Philippines</option>
          <option value="Pitcairn">Pitcairn</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Puerto Rico">Puerto Rico</option>
          <option value="Qatar">Qatar</option>
          <option value="R&eacute;union">R&eacute;union</option>
          <option value="Romania">Romania</option>
          <option value="Russian Federation">Russian Federation</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Saint Barth&eacute;lemy">
            Saint Barth&eacute;lemy
          </option>
          <option value="Saint Helena, Ascension and Tristan da Cunha">
            Saint Helena, Ascension and Tristan da Cunha
          </option>
          <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
          <option value="Saint Lucia">Saint Lucia</option>
          <option value="Saint Martin (French part)">
            Saint Martin (French part)
          </option>
          <option value="Saint Pierre and Miquelon">
            Saint Pierre and Miquelon
          </option>
          <option value="Saint Vincent and the Grenadines">
            Saint Vincent and the Grenadines
          </option>
          <option value="Samoa">Samoa</option>
          <option value="San Marino">San Marino</option>
          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Senegal">Senegal</option>
          <option value="Serbia">Serbia</option>
          <option value="Seychelles">Seychelles</option>
          <option value="Sierra Leone">Sierra Leone</option>
          <option value="Singapore">Singapore</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Slovenia">Slovenia</option>
          <option value="Solomon Islands">Solomon Islands</option>
          <option value="Somalia">Somalia</option>
          <option value="South Africa">South Africa</option>
          <option value="South Georgia and the South Sandwich Islands">
            South Georgia and the South Sandwich Islands
          </option>
          <option value="Spain">Spain</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Sudan">Sudan</option>
          <option value="Suriname">Suriname</option>
          <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
          <option value="Swaziland">Swaziland</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Syrian Arab Republic">Syrian Arab Republic</option>
          <option value="Taiwan, Province of China">
            Taiwan, Province of China
          </option>
          <option value="Tajikistan">Tajikistan</option>
          <option value="Tanzania, United Republic of">
            Tanzania, United Republic of
          </option>
          <option value="Thailand">Thailand</option>
          <option value="Timor-Leste">Timor-Leste</option>
          <option value="Togo">Togo</option>
          <option value="Tokelau">Tokelau</option>
          <option value="Tonga">Tonga</option>
          <option value="Trinidad and Tobago">Trinidad and Tobago</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Turkey">Turkey</option>
          <option value="Turkmenistan">Turkmenistan</option>
          <option value="Turks and Caicos Islands">
            Turks and Caicos Islands
          </option>
          <option value="Tuvalu">Tuvalu</option>
          <option value="Uganda">Uganda</option>
          <option value="Ukraine">Ukraine</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="United Kingdom" selected>United Kingdom</option>
          <option value="United States">United States</option>
          <option value="United States Minor Outlying Islands">
            United States Minor Outlying Islands
          </option>
          <option value="Uruguay">Uruguay</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Vanuatu">Vanuatu</option>
          <option value="Venezuela, Bolivarian Republic of">
            Venezuela, Bolivarian Republic of
          </option>
          <option value="Vietnam">Vietnam</option>
          <option value="Virgin Islands, British">
            Virgin Islands, British
          </option>
          <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
          <option value="Wallis and Futuna">Wallis and Futuna</option>
          <option value="Western Sahara">Western Sahara</option>
          <option value="Yemen">Yemen</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label text-light">
          Type of work you will use Web Apps for Engineers for
        </label>
        <select class="form-select w-50" @input=${this.changeWorkType}>
          <option value="Academic - Research">Academic - Research</option>
          <option value="Academic - Teaching">Academic - Teaching</option>
          <option value="Industry">Industry</option>
          <option value="Other">Other</option>
        </select>
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
    window.console.log('country:', this.userInfo.country);
  }

  changeWorkType(event) {
    const input = event.target;
    this.userInfo.workType = input.value;
    window.console.log('work type', this.userInfo.workType);
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
          work_type: this.userInfo.workType,
          organisation: this.userInfo.organisation,
          email: this.userInfo.email,
          password: this.userInfo.password,
        }),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(response);
        })
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
        })
        .catch(response => {
          window.console.log(response);
          alert(
            'Sorry, something went wrong and your registration could not be completed at this time.'
          );
        });
    }
  }
}

customElements.define('registration-form', registrationForm);
