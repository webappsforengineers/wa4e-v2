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
} from './c2a0d119.js';
var j = Function.prototype,
  F = Object.prototype,
  W = j.toString,
  T = F.hasOwnProperty,
  M = W.call(Object);
var E,
  N = function (t, e, s) {
    for (var i = -1, a = Object(t), o = s(t), n = o.length; n--; ) {
      var l = o[E ? n : ++i];
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
      E = void 0 === F;
    if (E) {
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
            ? ((E = !1), (F = v(x, !0)))
            : U
            ? ((E = !1), (F = b(x, !0)))
            : (F = [])
          : (function (t) {
              if (!o(t) || '[object Object]' != n(t)) return !1;
              var e = l(t);
              if (null === e) return !0;
              var s = T.call(e, 'constructor') && e.constructor;
              return 'function' == typeof s && s instanceof s && W.call(s) == M;
            })(x) || C(x)
          ? ((F = O),
            C(O) ? (F = r((j = O), c(j))) : (t(O) && !y(O)) || (F = $(x)))
          : (E = !1);
    }
    E && (k.set(x, F), p(F, x, a, g, k), k.delete(x)), _(e, i, F);
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
let A,
  P,
  R,
  B,
  D,
  I = t => t;
customElements.define(
  'radio-tile',
  class extends k {
    render() {
      return (
        (this.checkOptions = this.appConf.options),
        (this.checks = this.makeCheckCallBacks()),
        [
          super.render(),
          O(
            A ||
              (A = I`
        <h2>${0}</h2>
        ${0}
      `),
            O([this.appConf.title]),
            this.checks
          ),
        ]
      );
    }
    makeCheckCallBacks() {
      return O(
        P || (P = I`${0}`),
        Object.keys(this.checkOptions).map(t =>
          O(
            R ||
              (R = I`<div
        class="form-check form-check-inline"
        style="display: ${0};"
      >
        ${0}
        <label class="form-check-label" for="${0}">
          ${0}
        </label>
      </div>`),
            this.appConf.options[t].visible,
            this.appConf.options[t].check_status
              ? O(
                  B ||
                    (B = I`<input
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
                  }
                )
              : O(
                  D ||
                    (D = I`<input
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
                  }
                ),
            t,
            O([this.checkOptions[t].label])
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
let q,
  H = t => t;
customElements.define(
  'test-tile',
  class extends k {
    render() {
      return (
        (this.testText = this.appConf.testText),
        window.console.log('rendering test'),
        [
          super.render(),
          O(
            q ||
              (q = H`
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
let G,
  J,
  K,
  Q,
  X = t => t;
customElements.define(
  'table-tile',
  class extends k {
    render() {
      return (
        (this.tableContent = this.appConf.content),
        (this.htmlTableContent = this.arrangeFields()),
        [
          super.render(),
          O(
            G ||
              (G = X`
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
      return O(
        J || (J = X`${0}`),
        Object.values(this.tableContent).map(t =>
          O(
            K ||
              (K = X`
        <tr>
          ${0}
        </tr>
      `),
            t.map(t => O(Q || (Q = X`<td>${0}</td>`), t))
          )
        )
      );
    }
  }
);
let Y,
  Z,
  tt,
  et,
  st,
  it,
  at,
  ot,
  nt,
  lt,
  pt,
  rt,
  ct = t => t;
customElements.define(
  'input-table',
  class extends k {
    render() {
      return (
        (this.tableContent = this.appConf.content),
        (this.htmlTableContent = this.arrangeFields()),
        [
          super.render(),
          O(
            Y ||
              (Y = ct`
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
      return O(
        Z || (Z = ct`${0}`),
        Object.values(this.tableContent).map(t =>
          O(
            tt ||
              (tt = ct`
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
            ? O(
                et ||
                  (et = ct` ${0}
      ${0}`),
                null !== t.label
                  ? O(
                      st ||
                        (st = ct`<label class="input-group-text col-3"
            >${0}</label
          >`),
                      O([t.label])
                    )
                  : O(it || (it = ct``)),
                t.values.map(t =>
                  O(
                    at || (at = ct` ${0}`),
                    3 === t.length
                      ? O(
                          ot ||
                            (ot = ct` <input
                  class="form-control bg-light col-2"
                  disabled
                  .value="${0}"
                />
                <label class="input-group-text col-1"
                  >${0}</label
                >`),
                          this.parseNum(t[0]),
                          O([t[1]])
                        )
                      : 4 === t.length
                      ? O(
                          nt ||
                            (nt = ct` <label class="input-group-text col-1"
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
                          O([t[2]]),
                          this.parseNum(t[0]),
                          O([t[1]])
                        )
                      : O(
                          lt ||
                            (lt = ct`<p>input group of unsupported length ${0}</p>`),
                          t.length
                        )
                  )
                )
              )
            : O(
                pt || (pt = ct`${0}`),
                t.header.map(t =>
                  O(
                    rt ||
                      (rt = ct`<label class="input-group-text col-3">${0}</label>`),
                    t
                  )
                )
              )),
        e
      );
    }
  }
);
let dt,
  ht,
  ut,
  mt,
  ft,
  vt,
  bt,
  Ct,
  yt,
  $t,
  gt,
  kt,
  Ot,
  xt,
  wt = t => t;
function jt(t) {
  return new Promise(e => setTimeout(e, t));
}
class Ft extends x {
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
      O(
        dt ||
          (dt = wt`
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
      this.masonryLayout = w.data('.msnry-tiles');
      void 0 === this.masonryLayout;

    )
      (this.masonryLayout = w.data('.msnry-tiles')), await jt(2);
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
    return O(
      ht ||
        (ht = wt`
      ${0}
    `),
      Object.values(this.appWebComponents).map((t, e) =>
        O(
          ut || (ut = wt` ${0}`),
          'input-tile' === t.type
            ? O(
                mt ||
                  (mt = wt`<div class="col">
                <div class="card ">
                  <form-tile
                    .appConf=${0}
                    .callback=${0}
                    @updated="${0}"
                    @reset="${0}"
                    @loaded="${0}"
                    @modifyForm="${0}"
                    @clear="${0}"
                  ></form-tile>
                </div>
              </div>`),
                this.appWebComponents[e],
                !0,
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
            ? O(
                ft ||
                  (ft = wt`<div class="col">
                <div class="card  ">
                  <form-tile
                    .appConf=${0}
                    .callback=${0}
                    @loaded="${0}"
                  ></form-tile>
                </div>
              </div>`),
                this.appWebComponents[e],
                !1,
                () => {
                  this.reloadMasonry();
                }
              )
            : 'output-tile' === t.type
            ? O(
                vt ||
                  (vt = wt`<div class="col">
                <div class="card  ">
                  <form-tile
                    .appConf=${0}
                    .callback=${0}
                    @loaded="${0}"
                  ></form-tile>
                </div>
              </div>`),
                this.appWebComponents[e],
                !1,
                () => {
                  this.reloadMasonry();
                }
              )
            : 'coeff-tile' === t.type
            ? O(
                bt ||
                  (bt = wt`<div class="col">
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
            ? O(
                Ct ||
                  (Ct = wt`<div class="col">
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
            ? O(
                yt ||
                  (yt = wt`<div class="col">
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
            ? O(
                $t ||
                  ($t = wt`<div class="col">
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
            ? O(
                gt ||
                  (gt = wt`<div class="col">
                <div class="card  ">
                  <text-tile
                    .appConf=${0}
                  ></text-tile>
                </div>
              </div>`),
                this.appWebComponents[e]
              )
            : 'batch-tile' === t.type
            ? O(
                kt ||
                  (kt = wt`<div class="col">
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
            ? O(
                Ot ||
                  (Ot = wt`<graph-tile
                .appConf=${0}
                @loaded="${0}"
              ></graph-tile>`),
                this.appWebComponents[e],
                () => {
                  this.reloadMasonry();
                }
              )
            : O(xt || (xt = wt`<p>Component ${0} Not Recognised</p>`), t.type)
        )
      )
    );
  }
}
export { Ft as A };
