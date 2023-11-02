import { S as e, $ as t, o as s, T as i, p as n } from './53a5fa46.js';
customElements.define(
  'menu-tile',
  class extends e {
    static get properties() {
      return { appConf: { type: Object, attribute: !1 } };
    }
    constructor() {
      super(), (this.appConf = {});
    }
    render() {
      return (
        (this.appPage = `./app_modules/${this.appConf.appName}/index.html`),
        (this.appImg = `./img/${this.appConf.appName}.png`),
        [
          super.render(),
          t`
        <div
          class="card w-auto text-center text-wrap justify-content-center align-items-center p-3"
          style="background-color: ${
            this.appConf.appColour
          }; aspect-ratio: 0.8;"
        >
          <img
            src=${this.appImg}
            class="card-img-top img-fluid"
            style="width: 90%; height: 150px; object-fit: scale-down;"
            alt="${this.appConf.appName} icon"
          />
          <div class="card-body">
            <h6 class="card-title">${s(this.appConf.appTitle)}</h6>
            <p class="card-text">${this.appConf.appDescription}</p>
            <a href=${this.appPage} class="stretched-link"></a>
          </div>
        </div>
      `,
        ]
      );
    }
  }
);
customElements.define(
  'footer-element',
  class extends e {
    constructor() {
      super(),
        (this.contactEmail = 'susan.gourvenec@southampton.ac.uk'),
        (this.contactEmailLink = this.contactEmail.link(
          `mailto:${this.contactEmail}`
        )),
        (this.footerText =
          'The author shall not be liable for any direct, consequential or incidental damages arising out of the use of this program. The entire risk as to the quality, performance and application of the program lies with the user. This page was established and is maintained by Professor Susan Gourvenec, University of Southampton, as a teaching tool and to assist research dissemination.');
    }
    render() {
      return [
        super.render(),
        t`
        <hr class="width-constrained" id="footer-hr" />
        <div class="container-fluid p-3">
          <footer class="footer footer-text">
            <span>
              ${this.footerText}
              <a href=${this.contactEmailLink}>${this.contactEmail}</a>
            </span>
          </footer>
        </div>
      `,
      ];
    }
  }
);
customElements.define(
  'header-element',
  class extends e {
    constructor() {
      super(),
        (this.homePage = '/wa4e-v2/index'),
        (this.homeImg = '/wa4e-v2/img/home.png');
    }
    static get properties() {
      return { pageTitle: { type: String }, homeImg: { type: String } };
    }
    render() {
      return [
        super.render(),
        t`
        <nav
          class="navbar navbar-expand-lg mb-3"
          style="background-color: #03a9f4"
        >
          <div class="col-2">
            <a href="${this.homePage}"
              ><img
                class="img-fluid mx-auto d-block"
                src=${this.homeImg}
                alt="Home"
            /></a>
          </div>
          <div class="col-6">
            <p class="h3 text-center text-wrap text-white">
              ${s(this.pageTitle)}
            </p>
          </div>
          <div class="col">
            <p class="h6 text-center text-white">Web Apps for Engineers</p>
          </div>
        </nav>
      `,
      ];
    }
  }
);
customElements.define(
  'registration-form',
  class extends e {
    static get properties() {
      return { username: {}, email: {}, password: {}, userInfo: {} };
    }
    constructor() {
      super(),
        (this.username = ''),
        (this.email = ''),
        (this.password = ''),
        (this.userInfo = {
          username: 'exampleName',
          email: 'exampleEmail',
          password: 'examplePassword',
        });
    }
    render() {
      return t`
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
    changeName(e) {
      const t = e.target;
      this.username = t.value;
    }
    changeEmail(e) {
      const t = e.target;
      this.email = t.value;
    }
    changePassword(e) {
      const t = e.target;
      this.password = t.value;
    }
    submitRegistration() {
      (this.userInfo.username = this.username),
        (this.userInfo.email = this.email),
        (this.userInfo.password = this.password),
        window.console.log('lit element', this.userInfo),
        fetch('http://localhost:8080/api/register/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: this.userInfo.username,
            password: this.userInfo.password,
            email: this.userInfo.email,
          }),
        })
          .then(e => e.json())
          .then(e => {
            window.console.log('api response:', e), (this.username = '');
          });
    }
  }
);
customElements.define(
  'login-form',
  class extends e {
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
      super(),
        (this.currentUser = ''),
        (this.loginUserInfo = {
          username: 'exampleName',
          password: 'examplePassword',
          authToken: '',
        }),
        (this.userList = []),
        (this.selectedDeleteUser = ''),
        (this.selectedUser = ''),
        (this.outputSelectedUser = '');
    }
    render() {
      return t`
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
        ${this.userList.map(e => t` <li>${e.username}, ${e.email}</li>`)}
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
    changeName(e) {
      const t = e.target;
      this.loginUserInfo.username = t.value;
    }
    changePassword(e) {
      const t = e.target;
      this.loginUserInfo.password = t.value;
    }
    changeSelectedDeleteUser(e) {
      const t = e.target;
      this.selectedDeleteUser = t.value;
    }
    changeSelectedUser(e) {
      const t = e.target;
      this.selectedUser = t.value;
    }
    submitLogin() {
      window.console.log('lit element', this.loginUserInfo),
        fetch('http://localhost:8080/api/login/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: this.loginUserInfo.username,
            password: this.loginUserInfo.password,
          }),
        })
          .then(e => e.json())
          .then(e => {
            localStorage.setItem('authToken', e.token);
          });
    }
    submitLogout() {
      fetch('http://localhost:8080/api/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('authToken')}`,
        },
      })
        .then(e => e.json())
        .then(e => {
          window.console.log(e);
        });
    }
    listUsers() {
      fetch('http://localhost:8080/api/list-users/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('authToken')}`,
        },
      })
        .then(e => e.json())
        .then(e => {
          window.console.log(e), (this.userList = e);
        });
    }
    viewCurrentUser() {
      fetch('http://localhost:8080/api/current-user/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('authToken')}`,
        },
      })
        .then(e => e.json())
        .then(e => {
          window.console.log(e.username), (this.currentUser = e.username);
        });
    }
    selectUser() {
      fetch(`http://localhost:8080/api/select-user/${this.selectedUser}/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('authToken')}`,
        },
      })
        .then(e => e.json())
        .then(e => {
          (this.outputSelectedUser = e[0]),
            (this.selectedUserId = e[0].id),
            window.console.log(this.selectedUserId);
        });
    }
    deleteUser() {
      fetch(
        `http://localhost:8080/api/select-user/${this.selectedDeleteUser}/`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('authToken')}`,
          },
        }
      )
        .then(e => e.json())
        .then(e => {
          fetch(`http://localhost:8080/api/delete-user/${e[0].id}/`, {
            method: 'DELETE',
          });
        });
    }
  }
);
customElements.define(
  'form-tile',
  class extends i {
    static get properties() {
      const e = { callback: { type: Boolean } };
      return Object.assign(e, super.properties);
    }
    render() {
      return (
        (this.formFields = this.appConf.fields),
        (this.subComponents = this.appConf.subComponents),
        (this.fields = this.arrangeFields()),
        [
          super.render(),
          t`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${s(this.appConf.title)}</h2>
          <!-- input form autogenerated fields -->
          <div>${this.fields}</div>
          <div>${this.buttonGroup()}</div>
        </div>
      `,
        ]
      );
    }
    arrangeFields() {
      return t`${Object.keys(this.formFields).map((e, i) => {
        let n, o, a;
        return (
          void 0 === this.subComponents
            ? ([n, o, a] = [[], [], []])
            : ([n, o, a] = this.getSubComponents(this.subComponents, i)),
          t`
        <div>
          ${t`${n.map(e => this.makeSubComponent(e))}`}
        </div>
        <h3>${s(e)}</h3>
        <div>
          ${t`${o.map(e => this.makeSubComponent(e))}`}
        </div>
        <div>${this.makeNestedFields(e, this.callback)}</div>
        <div>
          ${t`${a.map(e => this.makeSubComponent(e))}`}
        </div>
      `
        );
      })}`;
    }
    buttonGroup() {
      return this.callback
        ? t`
          <div class="d-grid gap-2 d-md-flex justify-content-md-around p-2">
            <!-- buttons -->

            <!-- <button old submit button
              class="btn btn-primary col-sm-12 col-md-6"
              @click=\${() => this.appUpdate()}
            >
              SUBMIT
            </button> -->

            <submit-button
              class="col-sm-12 col-md-6"
              .appCalc=${this.appUpdate}
            >
            </submit-button>

            <button
              class="btn btn-outline-secondary col"
              @click=${() => this.tileReload()}
            >
              RESET
            </button>

            <!-- <button
              class="btn btn-outline-info col"
              @click=\${() => this.showHelp()} note remove the blackslash and delete this comment to reenable
            >
              HELP
            </button> -->
          </div>
        `
        : t``;
    }
    appUpdate() {
      const e = new CustomEvent('updated', { bubbles: !0, composed: !0 });
      this.dispatchEvent(e);
    }
    tileReload() {
      const e = new CustomEvent('reset', { bubbles: !0, composed: !0 });
      this.dispatchEvent(e);
    }
  }
);
customElements.define(
  'image-tile',
  class extends i {
    render() {
      return [
        super.render(),
        t`
        <img
          class="img-fluid"
          width=${this.appConf.img_w}
          height=${this.appConf.img_h}
          src=${this.appConf.img_pth}
          alt="caisson diagrams"
        />
      `,
      ];
    }
  }
);
customElements.define(
  'graph-tile',
  class extends i {
    static get properties() {
      const e = { plotKey: { type: String } };
      return Object.assign(e, super.properties);
    }
    render() {
      return (
        this.hasUpdated && this.configGraph(),
        (this.graphHtml = t`<div
      class="responsive-plot"
      id=${this.plotKey}
    ></div>`),
        [super.render(), this.graphHtml]
      );
    }
    firstUpdated(e) {
      super.firstUpdated(e), this.renderGraph();
    }
    async renderGraph() {
      await this.updateComplete,
        n.react(
          document.getElementById(this.plotKey),
          null,
          this.appConf.plots[this.plotKey].layout
        );
    }
    async configGraph() {
      await this.updateComplete,
        await this.updateGraph(),
        (this.appConf.updateConf.noNewData = !1),
        (this.appConf.updateConf.clearData = !1);
    }
    async updateGraph() {
      this.appConf.updateConf.clearData &&
        (this.appConf.plots[this.plotKey].data = []),
        this.appConf.updateConf.noNewData ||
          (this.appConf.plots[this.plotKey].addLines
            ? (this.appConf.plots[this.plotKey].data = this.appConf.plots[
                this.plotKey
              ].data.concat(
                this.appConf.plots[this.plotKey].dataFun.apply(
                  this,
                  Object.entries(this.appConf.plots[this.plotKey].args).map(
                    e => this.appConf.fields[e[1]]
                  )
                )
              ))
            : (this.appConf.plots[this.plotKey].data = this.appConf.plots[
                this.plotKey
              ].dataFun.apply(
                this,
                Object.entries(this.appConf.plots[this.plotKey].args).map(
                  e => this.appConf.fields[e[1]]
                )
              ))),
        n.react(
          document.getElementById(this.plotKey),
          this.appConf.plots[this.plotKey].data,
          this.appConf.plots[this.plotKey].layout,
          {
            showLink: !0,
            plotlyServerURL: 'https://chart-studio.plotly.com',
            linkText: 'Play with this data',
          }
        );
    }
  }
);
customElements.define(
  'optimization-tile',
  class extends i {
    render() {
      return (
        (this.checkOptions = this.appConf.options),
        (this.formFields = this.appConf.fields),
        (this.subComponents = this.appConf.subComponents),
        (this.outputFields = this.arrangeFields()),
        [
          super.render(),
          t`
        <h2>${s(this.appConf.title)}</h2>
        <p>${this.outputFields}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-around p-2">
          <!-- buttons -->
          <button
            class="btn btn-primary col-sm-12 col-md-6"
            @click=${() => this.appOptimize()}
          >
            OPTIMIZE
          </button>
        </div>
      `,
        ]
      );
    }
    connectedCallback() {
      super.connectedCallback(),
        window.addEventListener('clear', () => this.requestUpdate());
    }
    disconnectedCallback() {
      window.removeEventListener('clear', () => this.requestUpdate()),
        super.disconnectedCallback();
    }
    appOptimize() {
      const e = new CustomEvent('optimize', { bubbles: !0, composed: !0 });
      this.clearOutput(), this.dispatchEvent(e);
    }
    clearOutput() {
      for (const e of Object.values(this.formFields['']))
        'Solution' === e.label && (e.value = null);
    }
    arrangeFields() {
      return t`${Object.keys(this.formFields).map((e, i) => {
        let n, o, a;
        return (
          void 0 === this.subComponents
            ? ([n, o, a] = [[], [], []])
            : ([n, o, a] = this.getSubComponents(this.subComponents, i)),
          t`
        <div>
          ${t`${n.map(e => this.makeSubComponent(e))}`}
        </div>
        <h3>${s(e)}</h3>
        <div>
          ${t`${o.map(e => this.makeSubComponent(e))}`}
        </div>
        <div>${this.makeNestedFields(e, !0)}</div>
        <div>
          ${t`${a.map(e => this.makeSubComponent(e))}`}
        </div>
      `
        );
      })}`;
    }
  }
);
customElements.define(
  'text-tile',
  class extends i {
    render() {
      return (
        (this.subComponents = this.appConf.subComponents),
        (this.text = this.appConf.text),
        (this.tileContent = this.arrangeFields()),
        [
          super.render(),
          t`
        <!-- This 'div' defines the tile as a grid item and the style options
      defines the corners of the tile on the grid. -->
        <div>
          <h2>${s(this.appConf.title)}</h2>
          <!-- Here are the forms attributes -->
          <p>${this.tileContent}</p>
        </div>
      `,
        ]
      );
    }
    arrangeFields() {
      return t`${Object.keys(this.text).map((e, i) => {
        let n, o, a;
        return (
          void 0 === this.subComponents
            ? ([n, o, a] = [[], [], []])
            : ([n, o, a] = this.getSubComponents(this.subComponents, i)),
          t`
        <div>
          ${t`${n.map(e => this.makeSubComponent(e))}`}
        </div>
        <p class="${this.text[e].format}">
          ${s(this.text[e].text)}
        </p>
        <div>
          ${t`${o.map(e => this.makeSubComponent(e))}`}
        </div>
        <div>
          ${t`${a.map(e => this.makeSubComponent(e))}`}
        </div>
      `
        );
      })}`;
    }
  }
);
customElements.define(
  'input-field',
  class extends e {
    static get properties() {
      return {
        appConf: { type: Object },
        callback: { type: Boolean },
        key: { type: String },
        lowerBound: { type: Number },
        upperBound: { type: Number },
      };
    }
    connectedCallback() {
      super.connectedCallback(),
        window.addEventListener('update-bounds', () => this.setBounds()),
        window.addEventListener('update-children', () => this.requestUpdate());
    }
    disconnectedCallback() {
      window.removeEventListener('update-bounds', () => this.setBounds()),
        window.removeEventListener('update-children', () =>
          this.requestUpdate()
        ),
        super.disconnectedCallback();
    }
    constructor() {
      super(), (this.lowerBound = -1e256), (this.upperBound = 1 / 0);
    }
    render() {
      return t`<div
      class="input-group was-validated mb-1 mt-1"
      style="display: ${this.appConf.visible};"
    >
      <label
        class="input-group-text text-wrap text-break font-size-sm"
        for="${this.key}"
        style="width: 30%; text-align: left;"
        >${s(this.appConf.label)}</label
      >
      ${this.getInputTag()}
      <label
        class="input-group-text text-wrap text-break"
        for="${this.key}"
        style="min-width: 20%; text-align: left;"
        >${s(this.appConf.unit)}</label
      >
    </div> `;
    }
    getInputTag() {
      let e;
      return (
        this.setBounds(),
        (e = this.callback
          ? t`<input
        type="number"
        class="form-control"
        id="${this.key}"
        .value="${this.appConf.value}"
        @change=${e => {
          (this.appConf.value = Number(e.target.value)), this.triggerBounds();
        }}
        min=${this.lowerBound}
        max=${this.upperBound}
        step="0.000001"
      />`
          : t`<input
        class="form-control ${this.checkValid()}"
        readonly
        id="${this.key}"
        .value="${this.parseNum(this.appConf.value)}"
        min=${this.lowerBound}
        max=${this.upperBound}
        step="0.000001"
      />`),
        e
      );
    }
    setBounds() {
      void 0 !== this.appConf.lb &&
        '' !== this.appConf.lb &&
        (this.appConf.lb instanceof Function
          ? (this.lowerBound = this.appConf.lb())
          : (this.lowerBound = this.appConf.lb)),
        void 0 !== this.appConf.ub &&
          '' !== this.appConf.ub &&
          (this.appConf.ub instanceof Function
            ? (this.upperBound = this.appConf.ub())
            : (this.upperBound = this.appConf.ub));
    }
    triggerBounds() {
      const e = new CustomEvent('update-bounds', { bubbles: !0, composed: !0 });
      this.dispatchEvent(e);
    }
    checkValid() {
      return 'undefined' === this.appConf.value ||
        '' === this.appConf.value ||
        null === this.appConf.value ||
        (this.lowerBound <= this.appConf.value &&
          this.appConf.value <= this.upperBound)
        ? 'bg-light'
        : 'bg-danger';
    }
    parseNum(e) {
      return 'number' == typeof e ? e.toFixed(2) : e;
    }
  }
);
customElements.define(
  'submit-button',
  class extends e {
    static get properties() {
      return { isLoading: { type: Boolean }, appCalc: { type: Function } };
    }
    constructor() {
      super(), (this.isLoading = !1);
    }
    toggleLoading() {
      this.isLoading = !this.isLoading;
    }
    _onClick() {
      this.toggleLoading();
      setTimeout(() => {
        this.appCalc(), this.toggleLoading();
      }, 50);
    }
    render() {
      return t`
      <button
        class="btn btn-primary col-sm-12 col-md-12"
        @click=${this._onClick}
      >
        ${
          this.isLoading
            ? t`<span class="spinner-border spinner-border-sm"></span> `
            : t`SUBMIT`
        }
      </button>
    `;
    }
  }
);
customElements.define(
  'soil-properties-help',
  class extends i {
    render() {
      return (
        window.console.log('rendering test'),
        [
          super.render(),
          t`
        <p>
          Note: Values for soil properties can be calculated using the
          <a
            href="../mcc-su/index.html"
            target="_blank"
            rel="noopener noreferrer"
            >MCC-su app
          </a>
        </p>
      `,
        ]
      );
    }
  }
);
