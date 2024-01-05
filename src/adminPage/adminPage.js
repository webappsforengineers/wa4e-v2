import { html } from 'lit';
import { StyledElement } from '../styles/wa4eStyleElement.mjs';
import '../elements/myElements.mjs';
import { Plotly } from '../local_modules/wa4e-math.js';

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
      // countryLabels: {},
      // countryCounts: {},
      // countryData: {},
      // countryLayout: {},
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
    // this.countryLabels = [];
    // this.countryCounts = [];
    // this.countryData = {};
    // this.countryLayout = {};
  }

  render() {
    // this.renderGraph();
    // this.listUsers();
    return [
      super.render(),
      html`
        <div
          class="text-light"
          style="background-color: #00557f; height: auto; min-height: 100vh">
          <div class="row">
            <header-element page-title="Admin"></header-element>
          </div>
          <div class="m-3">
            <h1>Admin Options</h1>
            <button
              class="btn"
              style="background-color: #c1d100; color: #00557f"
              @click=${this.renderCountryGraph}
            >
              View Pie Chart of Locations of WA4E Users
            </button>
            <div id="countryPieChart" class="m-3"></div>

            <button
              class="btn"
              style="background-color: #c1d100; color: #00557f"
              @click=${this.renderWorkTypeGraph}
            >
              View Pie Chart of Types of Work WA4E is Used For
            </button>
            <div id="workTypePieChart" class="m-3"></div>
            
            <br />
            <br />

            <div class="mb-3">
              <h3>Select User</h3>
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
            <h3>Delete User</h3>
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

            </br>
            </br>
            <h3>View All Users</h3>
            <button
              class="btn"
              style="background-color: #c1d100; color: #00557f"
              @click=${this.listUsers}
            >
              View Full List of Users
            </button>
            <button
              class="btn m-3"
              style="background-color: #c1d100; color: #00557f"
              @click=${this.downloadUsers}
            >
              Download Full List of Users
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
          </div>

          <div class="row gy-1">
            <footer-light-element></footer-light-element>
          </div>
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

  listUsers() {
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

  // eslint-disable-next-line class-methods-use-this
  jsonToCsv(items) {
    const header = Object.keys(items[0]);
    const headerString = header.join(','); // handle null or undefined values here
    const replacer = (key, value) => value ?? '';
    const rowItems = items.map(row =>
      header
        .map(fieldName => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    // join header and body, and break into separate lines
    const csv = [headerString, ...rowItems].join('\r\n');
    return csv;
  }

  // eslint-disable-next-line class-methods-use-this
  downloadUsers() {
    fetch('http://localhost:8080/api/list-users/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('authToken')}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        const csv = this.jsonToCsv(json);

        // Create dummy <a> element using JavaScript.
        const hiddenA = document.createElement('a');

        // add texts as a href of <a> element after encoding.
        hiddenA.setAttribute(
          'href',
          `data:text/csv;charset=utf-8, ${encodeURIComponent(csv)}`
        );

        // also set the value of the download attribute
        hiddenA.setAttribute('download', 'user_list');
        document.body.appendChild(hiddenA);

        // click the link element
        hiddenA.click();
        document.body.removeChild(hiddenA);
      });
  }

  async renderCountryGraph() {
    await this.updateComplete;

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

        const countries = json.map(user => user.country);

        const map = countries.reduce(
          (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
          new Map()
        );

        const countryLabels = Array.from(map.keys());
        const countryCounts = Array.from(map.values());

        // window.console.log(countryLabels);
        // window.console.log(countryCounts);

        const countryData = [
          {
            labels: countryLabels,
            values: countryCounts,
            type: 'pie',
          },
        ];

        const countryLayout = { title: 'Locations of WA4E Users' };

        Plotly.newPlot('countryPieChart', countryData, countryLayout, {
          showLink: true,
          plotlyServerURL: 'https://chart-studio.plotly.com',
          linkText: 'Play with this data',
        });
      });
  }

  async renderWorkTypeGraph() {
    await this.updateComplete;

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

        const workType = json.map(user => user.work_type);

        const map = workType.reduce(
          (acc, e) => acc.set(e, (acc.get(e) || 0) + 1),
          new Map()
        );

        const workTypeLabels = Array.from(map.keys());
        const workTypeCounts = Array.from(map.values());

        const workTypeData = [
          {
            labels: workTypeLabels,
            values: workTypeCounts,
            type: 'pie',
          },
        ];

        const workTypeLayout = { title: 'Type of Work WA4E is Used For' };

        Plotly.newPlot('workTypePieChart', workTypeData, workTypeLayout, {
          showLink: true,
          plotlyServerURL: 'https://chart-studio.plotly.com',
          linkText: 'Play with this data',
        });
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
