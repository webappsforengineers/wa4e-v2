import {
  i as t,
  a as e,
  b as s,
  e as i,
  d as a,
  f as o,
  g as n,
  h as l,
  j as p,
  k as r,
  l as c,
  m as d,
  n as h,
  o as u,
  q as m,
  r as f,
  s as v,
  t as b,
  u as C,
  v as y,
  w as $,
  x as g,
  T as k,
  p as O,
  S as x,
  y as w,
} from './b25a2f3f.js';
var j = Function.prototype,
  F = Object.prototype,
  W = j.toString,
  T = F.hasOwnProperty,
  E = W.call(Object);
var M,
  N = function (t, e, s) {
    for (var i = -1, a = Object(t), o = s(t), n = o.length; n--; ) {
      var l = o[M ? n : ++i];
      if (!1 === e(a[l], l, a)) break;
    }
    return t;
  };
function _(t, e, s) {
  ((void 0 !== s && !i(t[e], s)) || (void 0 === s && !(e in t))) && p(t, e, s);
}
function z(t, e) {
  if (('constructor' !== e || 'function' != typeof t[e]) && '__proto__' != e)
    return t[e];
}
function L(e, s, i, a, p, g, k) {
  var O = z(e, i),
    x = z(s, i),
    w = k.get(x);
  if (w) _(e, i, w);
  else {
    var j,
      F = g ? g(O, x, i + '', e, s, k) : void 0,
      M = void 0 === F;
    if (M) {
      var N = u(x),
        L = !N && d(x),
        U = !N && !L && h(x);
      (F = x),
        N || L || U
          ? u(O)
            ? (F = O)
            : m(O)
            ? (F = f(O))
            : L
            ? ((M = !1), (F = v(x, !0)))
            : U
            ? ((M = !1), (F = b(x, !0)))
            : (F = [])
          : (function (t) {
              if (!o(t) || '[object Object]' != n(t)) return !1;
              var e = l(t);
              if (null === e) return !0;
              var s = T.call(e, 'constructor') && e.constructor;
              return 'function' == typeof s && s instanceof s && W.call(s) == E;
            })(x) || C(x)
          ? ((F = O),
            C(O) ? (F = r((j = O), c(j))) : (t(O) && !y(O)) || (F = $(x)))
          : (M = !1);
    }
    M && (k.set(x, F), p(F, x, a, g, k), k.delete(x)), _(e, i, F);
  }
}
function U(e, s, i, a, o) {
  e !== s &&
    N(
      s,
      function (n, l) {
        if ((o || (o = new g()), t(n))) L(e, s, l, i, U, a, o);
        else {
          var p = a ? a(z(e, l), n, l + '', e, s, o) : void 0;
          void 0 === p && (p = n), _(e, l, p);
        }
      },
      c
    );
}
var S,
  V =
    ((S = function (t, e, s) {
      U(t, e, s);
    }),
    a(function (a, o) {
      var n = -1,
        l = o.length,
        p = l > 1 ? o[l - 1] : void 0,
        r = l > 2 ? o[2] : void 0;
      for (
        p = S.length > 3 && 'function' == typeof p ? (l--, p) : void 0,
          r &&
            (function (a, o, n) {
              if (!t(n)) return !1;
              var l = typeof o;
              return (
                !!('number' == l
                  ? e(n) && s(o, n.length)
                  : 'string' == l && (o in n)) && i(n[o], a)
              );
            })(o[0], o[1], r) &&
            ((p = l < 3 ? void 0 : p), (l = 1)),
          a = Object(a);
        ++n < l;

      ) {
        var c = o[n];
        c && S(a, c, n, p);
      }
      return a;
    }));
customElements.define(
  'radio-tile',
  class extends k {
    render() {
      return (
        (this.checkOptions = this.appConf.options),
        (this.checks = this.makeCheckCallBacks()),
        [
          super.render(),
          O`
        <h2>${O([this.appConf.title])}</h2>
        ${this.checks}
      `,
        ]
      );
    }
    makeCheckCallBacks() {
      return O`${Object.keys(this.checkOptions).map(
        t => O`<div
        class="form-check form-check-inline"
        style="display: ${this.appConf.options[t].visible};"
      >
        ${
          this.appConf.options[t].check_status
            ? O`<input
              class="form-check-input"
              type="radio"
              name="${this.appConf.title}"
              id="${t}"
              .value="${t}"
              @click=${e => {
                (this.appConf.options[t] = e.target.checked),
                  (this.checkValue = t),
                  Object.keys(this.checkOptions).map(s => {
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
            : O`<input
              class="form-check-input"
              type="radio"
              name="${this.appConf.title}"
              id="${t}"
              .value="${t}"
              @click=${e => {
                (this.appConf.options[t].check_status = e.target.checked),
                  (this.checkValue = t),
                  Object.keys(this.checkOptions).map(s => {
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
          ${O([this.checkOptions[t].label])}
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
  class extends k {
    render() {
      return (
        (this.testText = this.appConf.testText),
        window.console.log('rendering test'),
        [
          super.render(),
          O`
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
  class extends k {
    render() {
      return (
        (this.tableContent = this.appConf.content),
        (this.htmlTableContent = this.arrangeFields()),
        [
          super.render(),
          O`
        <div class="table-responsive">
          <table class="table">
            ${this.htmlTableContent}
          </table>
        </div>
      `,
        ]
      );
    }
    arrangeFields() {
      return O`${Object.values(this.tableContent).map(
        t => O`
        <tr>
          ${t.map(t => O`<td>${t}</td>`)}
        </tr>
      `
      )}`;
    }
  }
);
function A(t) {
  return new Promise(e => setTimeout(e, t));
}
customElements.define(
  'input-table',
  class extends k {
    render() {
      return (
        (this.tableContent = this.appConf.content),
        (this.htmlTableContent = this.arrangeFields()),
        [
          super.render(),
          O`
        <div class="table-responsive">
          <table class="table">
            ${this.htmlTableContent}
          </table>
        </div>
      `,
        ]
      );
    }
    arrangeFields() {
      return O`${Object.values(this.tableContent).map(
        t => O`
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
            ? O` ${
                null !== t.label
                  ? O`<label class="input-group-text col-3"
            >${O([t.label])}</label
          >`
                  : O``
              }
      ${t.values.map(
        t =>
          O` ${
            3 === t.length
              ? O` <input
                  class="form-control bg-light col-2"
                  disabled
                  .value="${this.parseNum(t[0])}"
                />
                <label class="input-group-text col-1"
                  >${O([t[1]])}</label
                >`
              : 4 === t.length
              ? O` <label class="input-group-text col-1"
                  >${O([t[2]])}</label
                >
                <input
                  class="form-control bg-light col-1"
                  disabled
                  .value="${this.parseNum(t[0])}"
                />
                <label class="input-group-text col-1"
                  >${O([t[1]])}</label
                >`
              : O`<p>input group of unsupported length ${t.length}</p>`
          }`
      )}`
            : O`${t.header.map(
                t => O`<label class="input-group-text col-3">${t}</label>`
              )}`),
        e
      );
    }
  }
);
class P extends x {
  static get properties() {
    return {
      appWebComponents: { type: Object },
      title: { type: String },
      appName: { type: String },
      output: { type: Object },
      appTiles: { type: O },
      appCalc: { type: Function },
      resetApp: { type: Object },
      masonryLayout: { type: Object },
    };
  }
  render() {
    return [
      super.render(),
      O`
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
      this.masonryLayout = w.data('.msnry-tiles');
      void 0 === this.masonryLayout;

    )
      (this.masonryLayout = w.data('.msnry-tiles')), await A(2);
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
    V(this.appWebComponents, t.changeFields);
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
    return O`
      ${Object.values(this.appWebComponents).map(
        (t, e) =>
          O` ${
            'input-tile' === t.type
              ? O`<div class="col">
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
                    @modifyForm="${t => {
                      this.modifyForm(t.detail);
                    }}"
                    @clear="${() => {
                      this.childUpdate();
                    }}"
                  ></form-tile>
                </div>
              </div>`
              : 'derived-input-tile' === t.type || 'output-tile' === t.type
              ? O`<div class="col">
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
              ? O`<div class="col">
                <div class="card  ">
                  <coeff-tile
                    .appConf=${this.appWebComponents[e]}
                    @loaded="${() => {
                      this.reloadMasonry();
                    }}"
                  ></coeff-tile>
                </div>
              </div>`
              : 'optimisation-tile' === t.type
              ? O`<div class="col">
                <div class="card  ">
                  <optimisation-tile
                    .appConf=${this.appWebComponents[e]}
                    @loaded="${() => {
                      this.reloadMasonry();
                    }}"
                  ></optimisation-tile>
                </div>
              </div>`
              : 'image-tile' === t.type
              ? O`<div class="col">
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
              ? O`<div class="col">
                <div class="card  ">
                  <optimization-tile
                    .appConf=${this.appWebComponents[e]}
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
              : 'text-tile' === t.type
              ? O`<div class="col">
                <div class="card  ">
                  <text-tile
                    .appConf=${this.appWebComponents[e]}
                  ></text-tile>
                </div>
              </div>`
              : 'batch-tile' === t.type
              ? O`<div class="col">
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
              : 'graph-tile' === t.type
              ? O`<graph-tile
                .appConf=${this.appWebComponents[e]}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
              ></graph-tile>`
              : O`<p>Component ${t.type} Not Recognised</p>`
          }`
      )}
    `;
  }
}
export { P as A };
