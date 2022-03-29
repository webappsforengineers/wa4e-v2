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
} from './69bd0579.js';
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
let U,
  S,
  A,
  I,
  V,
  _ = t => t;
customElements.define(
  'radio-tile',
  class extends d {
    render() {
      return (
        (this.checkOptions = this.appConf.options),
        (this.checks = this.makeCheckCallBacks()),
        [
          super.render(),
          h(
            U ||
              (U = _`
        <h2>${0}</h2>
        ${0}
      `),
            h([this.appConf.title]),
            this.checks
          ),
        ]
      );
    }
    makeCheckCallBacks() {
      return h(
        S || (S = _`${0}`),
        Object.keys(this.checkOptions).map(t =>
          h(
            A ||
              (A = _`<div
        class="form-check form-check-inline"
        style="display: ${0};"
      >
        ${0}
        <label class="form-check-label" for="${0}">
          ${0}
        </label>
      </div>`),
            this.appConf.options[t][2],
            this.appConf.options[t][0]
              ? h(
                  I ||
                    (I = _`<input
              class="form-check-input"
              type="radio"
              name="${0}"
              id="${0}"
              .value="${0}"
              @click=${0}
              checked
            />`),
                  this.appConf.title,
                  t,
                  t,
                  e => {
                    (this.appConf.options[t][0] = e.target.checked),
                      (this.checkValue = t),
                      Object.keys(this.checkOptions).map(i => {
                        i !== t &&
                          (this.appConf.options[i][0] = !e.target.checked);
                      }),
                      this.appConf.clearOnClick && this.clearOutput(),
                      this.appConf.modifyOnClick &&
                        this.modifyForm(this.checkValue);
                  }
                )
              : h(
                  V ||
                    (V = _`<input
              class="form-check-input"
              type="radio"
              name="${0}"
              id="${0}"
              .value="${0}"
              @click=${0}
            />`),
                  this.appConf.title,
                  t,
                  t,
                  e => {
                    (this.appConf.options[t][0] = e.target.checked),
                      (this.checkValue = t),
                      Object.keys(this.checkOptions).map(i => {
                        i !== t &&
                          (this.appConf.options[i][0] = !e.target.checked);
                      }),
                      this.appConf.clearOnClick && this.clearOutput(),
                      this.appConf.modifyOnClick &&
                        this.modifyForm(this.checkValue);
                  }
                ),
            t,
            h([this.checkOptions[t][1]])
          )
        )
      );
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
let P,
  R = t => t;
customElements.define(
  'test-tile',
  class extends d {
    render() {
      return (
        (this.testText = this.appConf.testText),
        window.console.log('rendering test'),
        [
          super.render(),
          h(
            P ||
              (P = R`
        <h2>'Hello world'</h2>
        <p>${0}</p>
      `),
            this.testText
          ),
        ]
      );
    }
  }
);
let B,
  D,
  H,
  q,
  G = t => t;
customElements.define(
  'table-tile',
  class extends d {
    render() {
      return (
        (this.tableContent = this.appConf.content),
        (this.htmlTableContent = this.arrangeFields()),
        [
          super.render(),
          h(
            B ||
              (B = G`
        <div class="table-responsive">
          <table class="table">
            ${0}
          </table>
        </div>
      `),
            this.htmlTableContent
          ),
        ]
      );
    }
    arrangeFields() {
      return h(
        D || (D = G`${0}`),
        Object.values(this.tableContent).map(t =>
          h(
            H ||
              (H = G`
        <tr>
          ${0}
        </tr>
      `),
            t.map(t => h(q || (q = G`<td>${0}</td>`), t))
          )
        )
      );
    }
  }
);
let J,
  K,
  Q,
  X,
  Y,
  Z,
  tt,
  et,
  it,
  st,
  at,
  nt,
  ot = t => t;
customElements.define(
  'input-table',
  class extends d {
    render() {
      return (
        (this.tableContent = this.appConf.content),
        (this.htmlTableContent = this.arrangeFields()),
        [
          super.render(),
          h(
            J ||
              (J = ot`
        <div class="table-responsive">
          <table class="table">
            ${0}
          </table>
        </div>
      `),
            this.htmlTableContent
          ),
        ]
      );
    }
    arrangeFields() {
      return h(
        K || (K = ot`${0}`),
        Object.values(this.tableContent).map(t =>
          h(
            Q ||
              (Q = ot`
        <div class="input-group">${0}</div>
      `),
            this.makeRow(t)
          )
        )
      );
    }
    parseNum(t) {
      return 'number' == typeof t ? t.toFixed(2) : t;
    }
    makeRow(t) {
      let e;
      return (
        (e =
          void 0 === t.header
            ? h(
                X ||
                  (X = ot` ${0}
      ${0}`),
                null !== t.label
                  ? h(
                      Y ||
                        (Y = ot`<label class="input-group-text col-3"
            >${0}</label
          >`),
                      h([t.label])
                    )
                  : h(Z || (Z = ot``)),
                t.values.map(t =>
                  h(
                    tt || (tt = ot` ${0}`),
                    3 === t.length
                      ? h(
                          et ||
                            (et = ot` <input
                  class="form-control bg-light col-2"
                  disabled
                  .value="${0}"
                />
                <label class="input-group-text col-1"
                  >${0}</label
                >`),
                          this.parseNum(t[0]),
                          h([t[1]])
                        )
                      : 4 === t.length
                      ? h(
                          it ||
                            (it = ot` <label class="input-group-text col-1"
                  >${0}</label
                >
                <input
                  class="form-control bg-light col-1"
                  disabled
                  .value="${0}"
                />
                <label class="input-group-text col-1"
                  >${0}</label
                >`),
                          h([t[2]]),
                          this.parseNum(t[0]),
                          h([t[1]])
                        )
                      : h(
                          st ||
                            (st = ot`<p>input group of unsupported length ${0}</p>`),
                          t.length
                        )
                  )
                )
              )
            : h(
                at || (at = ot`${0}`),
                t.header.map(t =>
                  h(
                    nt ||
                      (nt = ot`<label class="input-group-text col-3">${0}</label>`),
                    t
                  )
                )
              )),
        e
      );
    }
  }
);
let lt,
  pt,
  rt,
  ct,
  dt,
  ht,
  ut,
  mt,
  ft,
  vt,
  bt,
  yt,
  Ct,
  $t,
  gt = t => t;
function kt(t) {
  return new Promise(e => setTimeout(e, t));
}
class Ot extends u {
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
      h(
        lt ||
          (lt = gt`
        <div class="row">
          <header-element .pageTitle=${0}></header-element>
        </div>
        <div class="container-fluid bg-light">
          <div
            id="msnry-tiles"
            class="msnry-tiles row row-cols-sm-1 row-cols-lg-2 row-cols-xxl-3 g-2"
            data-masonry='{"percentPosition": true }'
          >
            ${0}
          </div>
        </div>
        <div class="row">
          <footer-element></footer-element>
        </div>
      `),
        this.title,
        this.appTiles
      ),
    ];
  }
  async getMasonryLayout() {
    for (
      this.masonryLayout = m.data('.msnry-tiles');
      void 0 === this.masonryLayout;

    )
      (this.masonryLayout = m.data('.msnry-tiles')), await kt(2);
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
    return h(
      pt ||
        (pt = gt`
      ${0}
    `),
      this.appWebComponents.map((t, e) =>
        h(
          rt || (rt = gt` ${0}`),
          'input-tile' === t.type
            ? h(
                ct ||
                  (ct = gt`<div class="col">
                <div class="card ">
                  <input-tile
                    .appConf=${0}
                    @updated="${0}"
                    @reset="${0}"
                    @loaded="${0}"
                    @modifyForm="${0}"
                    @clear="${0}"
                  ></input-tile>
                </div>
              </div>`),
                this.appWebComponents[e],
                () => {
                  this.updateComponents();
                },
                () => {
                  this.resetComponents();
                },
                () => {
                  this.reloadMasonry();
                },
                t => {
                  this.modifyForm(t.detail);
                },
                () => {
                  this.childUpdate();
                }
              )
            : 'derived-input-tile' === t.type
            ? h(
                dt ||
                  (dt = gt`<div class="col">
                <div class="card  ">
                  <derived-input-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></derived-input-tile>
                </div>
              </div>`),
                this.appWebComponents[e],
                () => {
                  this.reloadMasonry();
                }
              )
            : 'output-tile' === t.type
            ? h(
                ht ||
                  (ht = gt`<div class="col">
                <div class="card  ">
                  <output-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></output-tile>
                </div>
              </div>`),
                this.appWebComponents[e],
                () => {
                  this.reloadMasonry();
                }
              )
            : 'coeff-tile' === t.type
            ? h(
                ut ||
                  (ut = gt`<div class="col">
                <div class="card  ">
                  <coeff-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></coeff-tile>
                </div>
              </div>`),
                this.appWebComponents[e],
                () => {
                  this.reloadMasonry();
                }
              )
            : 'optimisation-tile' === t.type
            ? h(
                mt ||
                  (mt = gt`<div class="col">
                <div class="card  ">
                  <optimisation-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></optimisation-tile>
                </div>
              </div>`),
                this.appWebComponents[e],
                () => {
                  this.reloadMasonry();
                }
              )
            : 'image-tile' === t.type
            ? h(
                ft ||
                  (ft = gt`<div class="col">
                <div class="card  ">
                  <image-tile
                    .appConf=${0}
                    @loaded="${0}"
                  ></image-tile>
                </div>
              </div>`),
                this.appWebComponents[e],
                () => {
                  this.reloadMasonry();
                }
              )
            : 'optimization-tile' === t.type
            ? h(
                vt ||
                  (vt = gt`<div class="col">
                <div class="card  ">
                  <optimization-tile
                    .appConf=${0}
                    @loaded="${0}"
                    @optimize="${0}"
                    @clear="${0}"
                    @modifyForm="${0}"
                  ></optimization-tile>
                </div>
              </div>`),
                this.appWebComponents[e],
                () => {
                  this.reloadMasonry();
                },
                t => {
                  this.optimize(t.detail);
                },
                () => {
                  this.childUpdate();
                },
                t => {
                  this.modifyForm(t.detail);
                }
              )
            : 'text-tile' === t.type
            ? h(
                bt ||
                  (bt = gt`<div class="col">
                <div class="card  ">
                  <text-tile
                    .appConf=${0}
                  ></text-tile>
                </div>
              </div>`),
                this.appWebComponents[e]
              )
            : 'batch-tile' === t.type
            ? h(
                yt ||
                  (yt = gt`<div class="col">
                <div class="card  ">
                  <batch-tile
                    @cloneCalc="${0}"
                    .appConf=${0}
                    .appName=${0}
                  ></batch-tile>
                </div>
              </div>`),
                t => {
                  this.runCloneCalc(t.detail);
                },
                this.appWebComponents,
                this.appName
              )
            : 'graph-tile' === t.type
            ? h(
                Ct ||
                  (Ct = gt`<graph-tile
                .appConf=${0}
                @loaded="${0}"
              ></graph-tile>`),
                this.appWebComponents[e],
                () => {
                  this.reloadMasonry();
                }
              )
            : h($t || ($t = gt`<p>Component ${0} Not Recognised</p>`), t.type)
        )
      )
    );
  }
}
export { Ot as A };
