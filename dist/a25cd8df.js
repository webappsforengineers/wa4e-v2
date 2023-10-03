import {
  B as e,
  C as t,
  T as s,
  $ as a,
  o as i,
  S as o,
  D as l,
} from './013daf59.js';
import './7631c666.js';
var n = e(function (e, s, a) {
  t(e, s, a);
});
customElements.define(
  'radio-tile',
  class extends s {
    render() {
      return (
        (this.checkOptions = this.appConf.options),
        (this.checks = this.makeCheckCallBacks()),
        [
          super.render(),
          a`
        <h3>${i(this.appConf.title)}</h3>
        ${this.checks}
      `,
        ]
      );
    }
    makeCheckCallBacks() {
      return a`${Object.keys(this.checkOptions).map(
        e => a`<div
        class="form-check form-check-inline"
        style="display: ${this.appConf.options[e].visible};"
      >
        ${
          this.appConf.options[e].check_status
            ? a`<input
              class="form-check-input"
              type="radio"
              name="${this.appConf.title}"
              id="${e}"
              .value="${e}"
              checked
            />`
            : a`<input
              class="form-check-input"
              type="radio"
              name="${this.appConf.title}"
              id="${e}"
              .value="${e}"
              @click=${t => {
                (this.appConf.options[e].check_status = t.target.checked),
                  (this.checkValue = e),
                  Object.keys(this.checkOptions).forEach(s => {
                    s !== e &&
                      (this.appConf.options[s].check_status =
                        !t.target.checked);
                  }),
                  this.appConf.clearOnClick && this.clearOutput(),
                  this.appConf.modifyOnClick &&
                    this.modifyForm(this.checkValue);
              }}
            />`
        }
        <label class="form-check-label" for="${e}">
          ${i(this.checkOptions[e].label)}
        </label>
      </div>`
      )}`;
    }
    modifyForm(e) {
      const t = new CustomEvent('modifyForm', {
        detail: { changeFields: this.appConf.onChange[e] },
        bubbles: !0,
        composed: !0,
      });
      this.dispatchEvent(t);
    }
    clearOutput() {
      const e = new CustomEvent('clear', { bubbles: !0, composed: !0 });
      this.dispatchEvent(e);
    }
  }
);
customElements.define(
  'test-tile',
  class extends s {
    render() {
      return (
        (this.testText = this.appConf.testText),
        window.console.log('rendering test'),
        [
          super.render(),
          a`
        <h2>'Hello world'</h2>
        <p>${this.testText}</p>
      `,
        ]
      );
    }
  }
);
customElements.define(
  'table-tile',
  class extends s {
    render() {
      return (
        (this.tableContent = this.appConf.content),
        (this.htmlTableContent = this.arrangeTable()),
        [
          super.render(),
          a`
        <div class="table-responsive">
          <table class="table">
            ${this.htmlTableContent}
          </table>
        </div>
      `,
        ]
      );
    }
    arrangeTable() {
      return a`${Object.values(this.tableContent).map(
        e => a`
        <tr>
          ${e.map(e => a`<td>${e}</td>`)}
        </tr>
      `
      )}`;
    }
  }
);
function p(e) {
  return new Promise(t => setTimeout(t, e));
}
customElements.define(
  'input-table',
  class extends s {
    render() {
      return (
        (this.tableContent = this.appConf.content),
        (this.htmlTableContent = this.arrangeTable()),
        [
          super.render(),
          a`
        <div class="table-responsive">
          <table class="table">
            ${this.htmlTableContent}
          </table>
        </div>
      `,
        ]
      );
    }
    arrangeTable() {
      return a`${Object.values(this.tableContent).map(
        e => a`
        <div class="input-group">${this.makeRow(e)}</div>
      `
      )}`;
    }
    parseNum(e) {
      return 'number' == typeof e ? e.toFixed(2) : e;
    }
    makeRow(e) {
      let t;
      return (
        (t =
          void 0 === e.header
            ? a` ${
                null !== e.label
                  ? a`<label class="input-group-text col-3"
            >${i(e.label)}</label
          >`
                  : a``
              }
      ${e.values.map(
        e =>
          a` ${
            3 === e.length
              ? a` <input
                  class="form-control bg-light col-2"
                  disabled
                  .value="${this.parseNum(e[0])}"
                />
                <label class="input-group-text col-1"
                  >${i(e[1])}</label
                >`
              : 4 === e.length
              ? a` <label class="input-group-text col-1"
                  >${i(e[2])}</label
                >
                <input
                  class="form-control bg-light col-1"
                  disabled
                  .value="${this.parseNum(e[0])}"
                />
                <label class="input-group-text col-1"
                  >${i(e[1])}</label
                >`
              : a`<p>input group of unsupported length ${e.length}</p>`
          }`
      )}`
            : a`${e.header.map(
                e => a`<label class="input-group-text col-3">${e}</label>`
              )}`),
        t
      );
    }
  }
);
class r extends o {
  static get properties() {
    return {
      appWebComponents: { type: Object },
      title: { type: String },
      appName: { type: String },
      output: { type: Object },
      appTiles: { type: a },
      appCalc: { type: Function },
      resetApp: { type: Object },
      masonryLayout: { type: Object },
    };
  }
  connectedCallback() {
    super.connectedCallback(),
      window.addEventListener('resize', () => this.handleResize());
  }
  disconnectedCallback() {
    window.removeEventListener('resize', () => this.handleResize()),
      super.disconnectedCallback();
  }
  render() {
    return [
      super.render(),
      a`
        <div class="row">
          <header-element .pageTitle=${this.title}></header-element>
        </div>
        <div class="container-fluid bg-light">
          <div
            id="msnry-tiles"
            class="msnry-tiles row row-cols-sm-1 row-cols-lg-2 row-cols-xxl-3 g-2"
            data-masonry='{"percentPosition": true }'
          >
            ${this.appTiles}
          </div>
        </div>
        <div class="row">
          <footer-element></footer-element>
        </div>
      `,
    ];
  }
  async getMasonryLayout() {
    for (
      this.masonryLayout = l.data('.msnry-tiles');
      void 0 === this.masonryLayout;

    )
      (this.masonryLayout = l.data('.msnry-tiles')), await p(2);
  }
  async reloadMasonry() {
    await this.updateComplete,
      await this.getMasonryLayout(),
      this.masonryLayout.reloadItems();
  }
  updateComponents() {
    (this.output = this.appCalc(this.appWebComponents)),
      this.childUpdate(),
      this.reloadMasonry().then();
  }
  runCloneCalc(e) {
    this.appCalc(e.appConfClone);
  }
  resetComponents() {
    window.location.reload();
  }
  childUpdate() {
    const e = new CustomEvent('update-children', { bubbles: !0, composed: !0 });
    this.dispatchEvent(e);
  }
  handleResize() {
    this.childUpdate(), this.updateComplete.then(), this.reloadMasonry().then();
  }
  modifyForm(e) {
    n(this.appWebComponents, e.changeFields);
    const t = Object.values(this.appWebComponents).findIndex(
      e => 'graph-tile' === e.type
    );
    -1 !== t &&
      ((this.appWebComponents[t].updateConf.noNewData = !0),
      (this.appWebComponents[t].updateConf.clearData = !0),
      Object.keys(this.appWebComponents[t].plots).forEach(e => {
        document.getElementById(`${e}-card`).style.display =
          this.appWebComponents[t].plots[e].display;
      })),
      this.childUpdate(),
      this.updateComplete.then(),
      this.reloadMasonry().then();
  }
  optimize() {
    (this.output = this.appOptimize(this.appWebComponents)),
      this.childUpdate(),
      this.reloadMasonry().then();
  }
  makeAppTiles() {
    const e = Object.entries(this.appWebComponents).flatMap(([e, t]) => {
      let s;
      return (
        (s =
          'input-tile' === t.type
            ? a`<div class="col">
            <div class="card ">
              <form-tile
                .appConf=${this.appWebComponents[e]}
                .callback=${!0}
                @updated="${() => {
                  this.updateComponents();
                }}"
                @reset="${() => {
                  this.resetComponents();
                }}"
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
                @modifyForm="${e => {
                  this.modifyForm(e.detail);
                }}"
                @clear="${() => {
                  this.childUpdate();
                }}"
              ></form-tile>
            </div>
          </div>`
            : 'derived-input-tile' === t.type || 'output-tile' === t.type
            ? a`<div class="col">
            <div class="card  ">
              <form-tile
                .appConf=${this.appWebComponents[e]}
                .callback=${!1}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
              ></form-tile>
            </div>
          </div>`
            : 'coeff-tile' === t.type
            ? a`<div class="col">
            <div class="card  ">
              <coeff-tile
                .appConf=${this.appWebComponents[e]}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
              ></coeff-tile>
            </div>
          </div>`
            : 'image-tile' === t.type
            ? a`<div class="col">
            <div class="card  ">
              <image-tile
                .appConf=${this.appWebComponents[e]}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
              ></image-tile>
            </div>
          </div>`
            : 'optimization-tile' === t.type
            ? a`<div class="col">
            <div class="card  ">
              <optimization-tile
                .appConf=${this.appWebComponents[e]}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
                @optimize="${e => {
                  this.optimize(e.detail);
                }}"
                @clear="${() => {
                  this.childUpdate();
                }}"
                @modifyForm="${e => {
                  this.modifyForm(e.detail);
                }}"
              ></optimization-tile>
            </div>
          </div>`
            : 'text-tile' === t.type
            ? a`<div class="col">
            <div class="card  ">
              <text-tile .appConf=${this.appWebComponents[e]}></text-tile>
            </div>
          </div>`
            : 'batch-tile' === t.type
            ? a`<div class="col">
            <div class="card  ">
              <batch-tile
                @cloneCalc="${e => {
                  this.runCloneCalc(e.detail);
                }}"
                .appConf=${this.appWebComponents}
                .appName=${this.appName}
              ></batch-tile>
            </div>
          </div>`
            : 'graph-tile' === t.type
            ? Object.keys(t.plots).map(
                s => a` <div class="col">
                <div
                  id="${s}-card"
                  class="card"
                  style="display: ${t.plots[s].display};"
                >
                  <graph-tile
                    .appConf=${this.appWebComponents[e]}
                    .plotKey=${s}
                    @loaded="${() => {
                      this.reloadMasonry();
                    }}"
                  ></graph-tile>
                </div>
              </div>`
              )
            : a`<p>
            Component ${t.type} Not Recognised
          </p>`),
        s
      );
    });
    return a`${e.map(e => e)}`;
  }
}
export { r as A };
