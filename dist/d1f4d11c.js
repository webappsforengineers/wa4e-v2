import {
  i as t,
  b as e,
  a as i,
  d as s,
  e as a,
  M as n,
  f as o,
  g as l,
  h as p,
  j as r,
  k as c,
  T as d,
  p as h,
  S as u,
  m,
} from './9eb0e703.js';
function f(i) {
  return 'symbol' == typeof i || (t(i) && '[object Symbol]' == e(i));
}
var v = i ? i.prototype : void 0,
  b = v ? v.toString : void 0;
function y(t) {
  if ('string' == typeof t) return t;
  if (s(t)) return a(t, y) + '';
  if (f(t)) return b ? b.call(t) : '';
  var e = t + '';
  return '0' == e && 1 / t == -Infinity ? '-0' : e;
}
var C = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  $ = /^\w*$/;
function g(t, e) {
  if ('function' != typeof t || (null != e && 'function' != typeof e))
    throw new TypeError('Expected a function');
  var i = function () {
    var s = arguments,
      a = e ? e.apply(this, s) : s[0],
      n = i.cache;
    if (n.has(a)) return n.get(a);
    var o = t.apply(this, s);
    return (i.cache = n.set(a, o) || n), o;
  };
  return (i.cache = new (g.Cache || n)()), i;
}
g.Cache = n;
var k,
  O,
  w,
  x =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  F = /\\(\\)?/g,
  W =
    ((k = function (t) {
      var e = [];
      return (
        46 === t.charCodeAt(0) && e.push(''),
        t.replace(x, function (t, i, s, a) {
          e.push(s ? a.replace(F, '$1') : i || t);
        }),
        e
      );
    }),
    (O = g(k, function (t) {
      return 500 === w.size && w.clear(), t;
    })),
    (w = O.cache),
    O);
function j(t, e) {
  return s(t)
    ? t
    : (function (t, e) {
        if (s(t)) return !1;
        var i = typeof t;
        return (
          !(
            'number' != i &&
            'symbol' != i &&
            'boolean' != i &&
            null != t &&
            !f(t)
          ) ||
          $.test(t) ||
          !C.test(t) ||
          (null != e && t in Object(e))
        );
      })(t, e)
    ? [t]
    : W(
        (function (t) {
          return null == t ? '' : y(t);
        })(t)
      );
}
function T(t) {
  if ('string' == typeof t || f(t)) return t;
  var e = t + '';
  return '0' == e && 1 / t == -Infinity ? '-0' : e;
}
function E(t, e, i) {
  var s =
    null == t
      ? void 0
      : (function (t, e) {
          for (var i = 0, s = (e = j(e, t)).length; null != t && i < s; )
            t = t[T(e[i++])];
          return i && i == s ? t : void 0;
        })(t, e);
  return void 0 === s ? i : s;
}
var M = Object.prototype.hasOwnProperty;
function z(t, e) {
  return null != t && M.call(t, e);
}
function N(t, e) {
  return (
    null != t &&
    (function (t, e, i) {
      for (var a = -1, n = (e = j(e, t)).length, r = !1; ++a < n; ) {
        var c = T(e[a]);
        if (!(r = null != t && i(t, c))) break;
        t = t[c];
      }
      return r || ++a != n
        ? r
        : !!(n = null == t ? 0 : t.length) && o(n) && l(c, n) && (s(t) || p(t));
    })(t, e, z)
  );
}
function L(t, e, i) {
  return null == t
    ? t
    : (function (t, e, i, s) {
        if (!r(t)) return t;
        for (
          var a = -1, n = (e = j(e, t)).length, o = n - 1, p = t;
          null != p && ++a < n;

        ) {
          var d = T(e[a]),
            h = i;
          if ('__proto__' === d || 'constructor' === d || 'prototype' === d)
            return t;
          if (a != o) {
            var u = p[d];
            void 0 === (h = s ? s(u, d, p) : void 0) &&
              (h = r(u) ? u : l(e[a + 1]) ? [] : {});
          }
          c(p, d, h), (p = p[d]);
        }
        return t;
      })(t, e, i);
}
customElements.define(
  'radio-tile',
  class extends d {
    render() {
      return (
        (this.checkOptions = this.appConf.options),
        (this.checks = this.makeCheckCallBacks()),
        [
          super.render(),
          h`
        <h2>${h([this.appConf.title])}</h2>
        ${this.checks}
      `,
        ]
      );
    }
    makeCheckCallBacks() {
      return h`${Object.keys(this.checkOptions).map(
        t => h`<div
        class="form-check form-check-inline"
        style="display: ${this.appConf.options[t][2]};"
      >
        ${
          this.appConf.options[t][0]
            ? h`<input
              class="form-check-input"
              type="radio"
              name="${this.appConf.title}"
              id="${t}"
              .value="${t}"
              @click=${e => {
                (this.appConf.options[t][0] = e.target.checked),
                  (this.checkValue = t),
                  Object.keys(this.checkOptions).map(i => {
                    i !== t && (this.appConf.options[i][0] = !e.target.checked);
                  }),
                  this.appConf.clearOnClick && this.clearOutput(),
                  this.appConf.modifyOnClick &&
                    this.modifyForm(this.checkValue);
              }}
              checked
            />`
            : h`<input
              class="form-check-input"
              type="radio"
              name="${this.appConf.title}"
              id="${t}"
              .value="${t}"
              @click=${e => {
                (this.appConf.options[t][0] = e.target.checked),
                  (this.checkValue = t),
                  Object.keys(this.checkOptions).map(i => {
                    i !== t && (this.appConf.options[i][0] = !e.target.checked);
                  }),
                  this.appConf.clearOnClick && this.clearOutput(),
                  this.appConf.modifyOnClick &&
                    this.modifyForm(this.checkValue);
              }}
            />`
        }
        <label class="form-check-label" for="${t}">
          ${h([this.checkOptions[t][1]])}
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
  class extends d {
    render() {
      return (
        (this.testText = this.appConf.testText),
        window.console.log('rendering test'),
        [
          super.render(),
          h`
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
  class extends d {
    render() {
      return (
        (this.tableContent = this.appConf.content),
        (this.htmlTableContent = this.arrangeFields()),
        [
          super.render(),
          h`
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
      return h`${Object.values(this.tableContent).map(
        t => h`
        <tr>
          ${t.map(t => h`<td>${t}</td>`)}
        </tr>
      `
      )}`;
    }
  }
);
function U(t) {
  return new Promise(e => setTimeout(e, t));
}
customElements.define(
  'input-table',
  class extends d {
    render() {
      return (
        (this.tableContent = this.appConf.content),
        (this.htmlTableContent = this.arrangeFields()),
        [
          super.render(),
          h`
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
      return h`${Object.values(this.tableContent).map(
        t => h`
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
            ? h` ${
                null !== t.label
                  ? h`<label class="input-group-text col-3"
            >${h([t.label])}</label
          >`
                  : h``
              }
      ${t.values.map(
        t =>
          h` ${
            3 === t.length
              ? h` <input
                  class="form-control bg-light col-2"
                  disabled
                  .value="${this.parseNum(t[0])}"
                />
                <label class="input-group-text col-1"
                  >${h([t[1]])}</label
                >`
              : 4 === t.length
              ? h` <label class="input-group-text col-1"
                  >${h([t[2]])}</label
                >
                <input
                  class="form-control bg-light col-1"
                  disabled
                  .value="${this.parseNum(t[0])}"
                />
                <label class="input-group-text col-1"
                  >${h([t[1]])}</label
                >`
              : h`<p>input group of unsupported length ${t.length}</p>`
          }`
      )}`
            : h`${t.header.map(
                t => h`<label class="input-group-text col-3">${t}</label>`
              )}`),
        e
      );
    }
  }
);
class S extends u {
  static get properties() {
    return {
      appWebComponents: { type: Object },
      title: { type: String },
      appName: { type: String },
      output: { type: Object },
      appTiles: { type: h },
      appCalc: { type: Function },
      resetApp: { type: Object },
      masonryLayout: { type: Object },
    };
  }
  render() {
    return [
      super.render(),
      h`
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
      this.masonryLayout = m.data('.msnry-tiles');
      void 0 === this.masonryLayout;

    )
      (this.masonryLayout = m.data('.msnry-tiles')), await U(2);
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
    const e = [];
    !(function t(e, i, ...a) {
      let n = [...a];
      for (const [o, l] of Object.entries(e))
        n.push(o), r(l) && !s(l) ? t(l, i, ...n) : i.push([...n]), (n = [...a]);
    })(t.changeFields, e);
    for (const i of this.appWebComponents)
      for (const s of e) N(i, s) && L(i, s, E(t.changeFields, s));
    const i = this.appWebComponents.findIndex(t => 'graph-tile' === t.type);
    -1 !== i &&
      ((this.appWebComponents[i].updateConf.noNewData = !0),
      (this.appWebComponents[i].updateConf.clearData = !0)),
      this.childUpdate();
  }
  optimize() {
    (this.output = this.appOptimize(this.appWebComponents)), this.childUpdate();
  }
  makeAppTiles() {
    return h`
      ${this.appWebComponents.map(
        (t, e) =>
          h` ${
            'input-tile' === t.type
              ? h`<div class="col">
                <div class="card ">
                  <input-tile
                    .appConf=${this.appWebComponents[e]}
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
                  ></input-tile>
                </div>
              </div>`
              : 'derived-input-tile' === t.type
              ? h`<div class="col">
                <div class="card  ">
                  <derived-input-tile
                    .appConf=${this.appWebComponents[e]}
                    @loaded="${() => {
                      this.reloadMasonry();
                    }}"
                  ></derived-input-tile>
                </div>
              </div>`
              : 'output-tile' === t.type
              ? h`<div class="col">
                <div class="card  ">
                  <output-tile
                    .appConf=${this.appWebComponents[e]}
                    @loaded="${() => {
                      this.reloadMasonry();
                    }}"
                  ></output-tile>
                </div>
              </div>`
              : 'coeff-tile' === t.type
              ? h`<div class="col">
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
              ? h`<div class="col">
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
              ? h`<div class="col">
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
              ? h`<div class="col">
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
              ? h`<div class="col">
                <div class="card  ">
                  <text-tile
                    .appConf=${this.appWebComponents[e]}
                  ></text-tile>
                </div>
              </div>`
              : 'batch-tile' === t.type
              ? h`<div class="col">
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
              ? h`<graph-tile
                .appConf=${this.appWebComponents[e]}
                @loaded="${() => {
                  this.reloadMasonry();
                }}"
              ></graph-tile>`
              : h`<p>Component ${t.type} Not Recognised</p>`
          }`
      )}
    `;
  }
}
export { S as A };
