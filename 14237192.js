import { z as t, A as e, T as s, $ as a, S as i, B as o } from './a25434aa.js';
import './3d42c7ab.js';
var l = t(function (t, s, a) {
  e(t, s, a);
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
        <h2>${a([this.appConf.title])}</h2>
        ${this.checks}
      `,
        ]
      );
    }
    makeCheckCallBacks() {
      return a`${Object.keys(this.checkOptions).map(
        t => a`<div
        class="form-check form-check-inline"
        style="display: ${this.appConf.options[t].visible};"
      >
        ${
          this.appConf.options[t].check_status
            ? a`<input
              class="form-check-input"
              type="radio"
              name="${this.appConf.title}"
              id="${t}"
              .value="${t}"
              @click=${e => {
                (this.appConf.options[t] = e.target.checked),
                  (this.checkValue = t),
                  Object.keys(this.checkOptions).forEach(s => {
                    s !== t &&
                      (this.appConf.options[s].check_status =
                        !e.target.checked);
                  }),
                  this.appConf.clearOnClick && this.clearOutput(),
                  this.appConf.modifyOnClick &&
                    this.modifyForm(this.checkValue);
              }}
              checked
            />`
            : a`<input
              class="form-check-input"
              type="radio"
              name="${this.appConf.title}"
              id="${t}"
              .value="${t}"
              @click=${e => {
                (this.appConf.options[t].check_status = e.target.checked),
                  (this.checkValue = t),
                  Object.keys(this.checkOptions).forEach(s => {
                    s !== t &&
                      (this.appConf.options[s].check_status =
                        !e.target.checked);
                  }),
                  this.appConf.clearOnClick && this.clearOutput(),
                  this.appConf.modifyOnClick &&
                    this.modifyForm(this.checkValue);
              }}
            />`
        }
        <label class="form-check-label" for="${t}">
          ${a([this.checkOptions[t].label])}
        </label>
      </div>`
      )}`;
    }
    modifyForm(t) {
      const e = new CustomEvent('modifyForm', {
        detail: { changeFields: this.appConf.onChange[t] },
        bubbles: !0,
        composed: !0,
      });
      this.dispatchEvent(e);
    }
    clearOutput() {
      const t = new CustomEvent('clear', { bubbles: !0, composed: !0 });
      this.dispatchEvent(t);
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
        t => a`
        <tr>
          ${t.map(t => a`<td>${t}</td>`)}
        </tr>
      `
      )}`;
    }
  }
);
function p(t) {
  return new Promise(e => setTimeout(e, t));
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
        t => a`
        <div class="input-group">${this.makeRow(t)}</div>
      `
      )}`;
    }
    parseNum(t) {
      return 'number' == typeof t ? t.toFixed(2) : t;
    }
    makeRow(t) {
      let e;
      return (
        (e =
          void 0 === t.header
            ? a` ${
                null !== t.label
                  ? a`<label class="input-group-text col-3"
            >${a([t.label])}</label
          >`
                  : a``
              }
      ${t.values.map(
        t =>
          a` ${
            3 === t.length
              ? a` <input
                  class="form-control bg-light col-2"
                  disabled
                  .value="${this.parseNum(t[0])}"
                />
                <label class="input-group-text col-1"
                  >${a([t[1]])}</label
                >`
              : 4 === t.length
              ? a` <label class="input-group-text col-1"
                  >${a([t[2]])}</label
                >
                <input
                  class="form-control bg-light col-1"
                  disabled
                  .value="${this.parseNum(t[0])}"
                />
                <label class="input-group-text col-1"
                  >${a([t[1]])}</label
                >`
              : a`<p>input group of unsupported length ${t.length}</p>`
          }`
      )}`
            : a`${t.header.map(
                t => a`<label class="input-group-text col-3">${t}</label>`
              )}`),
        e
      );
    }
  }
);
class n extends i {
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
      this.masonryLayout = o.data('.msnry-tiles');
      void 0 === this.masonryLayout;

    )
      (this.masonryLayout = o.data('.msnry-tiles')), await p(2);
  }
  async reloadMasonry() {
    await this.getMasonryLayout(), this.masonryLayout.reloadItems();
  }
  updateComponents() {
    (this.output = this.appCalc(this.appWebComponents)), this.childUpdate();
  }
  runCloneCalc(t) {
    this.appCalc(t.appConfClone);
  }
  resetComponents() {}
  childUpdate() {
    const t = new CustomEvent('update-children', { bubbles: !0, composed: !0 });
    this.dispatchEvent(t);
  }
  modifyForm(t) {
    l(this.appWebComponents, t.changeFields);
    const e = Object.values(this.appWebComponents).findIndex(
      t => 'graph-tile' === t.type
    );
    -1 !== e &&
      ((this.appWebComponents[e].updateConf.noNewData = !0),
      (this.appWebComponents[e].updateConf.clearData = !0)),
      this.childUpdate();
  }
  optimize() {
    (this.output = this.appOptimize(this.appWebComponents)), this.childUpdate();
  }
  makeAppTiles() {
    const t = Object.entries(this.appWebComponents).flatMap(([t, e]) => {
      let s;
      return (
        (s =
          'input-tile' === e.type
            ? a`<div class="col">
            <div class="card ">
              <form-tile
                .appConf=${this.appWebComponents[t]}
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
                @modifyForm="${t => {
                  this.modifyForm(t.detail);
                }}"
                @clear="${() => {
                  this.childUpdate();
                }}"
              ></form-tile>
            </div>
          </div>`
            : 'derived-input-tile' === e.type || 'output-tile' === e.type
            ? a`<div class="col">
            <div class="card  ">
              <form-tile
                .appConf=${this.appWebComponents[t]}
                .callback=${!1}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
              ></form-tile>
            </div>
          </div>`
            : 'coeff-tile' === e.type
            ? a`<div class="col">
            <div class="card  ">
              <coeff-tile
                .appConf=${this.appWebComponents[t]}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
              ></coeff-tile>
            </div>
          </div>`
            : 'image-tile' === e.type
            ? a`<div class="col">
            <div class="card  ">
              <image-tile
                .appConf=${this.appWebComponents[t]}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
              ></image-tile>
            </div>
          </div>`
            : 'optimization-tile' === e.type
            ? a`<div class="col">
            <div class="card  ">
              <optimization-tile
                .appConf=${this.appWebComponents[t]}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
                @optimize="${t => {
                  this.optimize(t.detail);
                }}"
                @clear="${() => {
                  this.childUpdate();
                }}"
                @modifyForm="${t => {
                  this.modifyForm(t.detail);
                }}"
              ></optimization-tile>
            </div>
          </div>`
            : 'text-tile' === e.type
            ? a`<div class="col">
            <div class="card  ">
              <text-tile .appConf=${this.appWebComponents[t]}></text-tile>
            </div>
          </div>`
            : 'batch-tile' === e.type
            ? a`<div class="col">
            <div class="card  ">
              <batch-tile
                @cloneCalc="${t => {
                  this.runCloneCalc(t.detail);
                }}"
                .appConf=${this.appWebComponents}
                .appName=${this.appName}
              ></batch-tile>
            </div>
          </div>`
            : 'graph-tile' === e.type
            ? Object.keys(e.plots).map(
                s => a` <div class="col">
                <div
                  class="card"
                  style="display: ${e.plots[s].display};"
                >
                  <graph-tile
                    .appConf=${this.appWebComponents[t]}
                    .plotKey=${s}
                    @loaded="${() => {
                      this.reloadMasonry();
                    }}"
                  ></graph-tile>
                </div>
              </div>`
              )
            : a`<p>
            Component ${e.type} Not Recognised
          </p>`),
        s
      );
    });
    return a`${t.map(t => t)}`;
  }
}
export { n as A };
