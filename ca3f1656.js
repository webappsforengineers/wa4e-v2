import {
  M as t,
  a as e,
  e as s,
  U as a,
  g as n,
  i as r,
  b as i,
  c as o,
  d as l,
  f as u,
  h as c,
  j as p,
  s as d,
  k as f,
  S as b,
  $ as h,
  r as m,
  l as v,
  m as g,
  n as y,
  q as j,
  t as w,
  u as C,
  v as O,
  w as x,
  x as _,
  y as k,
  z as T,
} from './af8340a6.js';
import { a as E } from './27875585.js';
import { a as D } from './501d08e2.js';
import { a as F } from './25798956.js';
import { a as A } from './deccfd8f.js';
import { a as N } from './d1437ee2.js';
import { a as P } from './a2e1c17f.js';
import { a as S } from './ff59e775.js';
import { a as B } from './d686395d.js';
import { a as I } from './de1f37d7.js';
import { a as $ } from './f1b15415.js';
import { a as V } from './ae23bcf5.js';
function L(e) {
  var s = -1,
    a = null == e ? 0 : e.length;
  for (this.__data__ = new t(); ++s < a; ) this.add(e[s]);
}
function M(t, e) {
  for (var s = -1, a = null == t ? 0 : t.length; ++s < a; )
    if (e(t[s], s, t)) return !0;
  return !1;
}
(L.prototype.add = L.prototype.push =
  function (t) {
    return this.__data__.set(t, '__lodash_hash_undefined__'), this;
  }),
  (L.prototype.has = function (t) {
    return this.__data__.has(t);
  });
function z(t, e, s, a, n, r) {
  var i = 1 & s,
    o = t.length,
    l = e.length;
  if (o != l && !(i && l > o)) return !1;
  var u = r.get(t),
    c = r.get(e);
  if (u && c) return u == e && c == t;
  var p = -1,
    d = !0,
    f = 2 & s ? new L() : void 0;
  for (r.set(t, e), r.set(e, t); ++p < o; ) {
    var b = t[p],
      h = e[p];
    if (a) var m = i ? a(h, b, p, e, t, r) : a(b, h, p, t, e, r);
    if (void 0 !== m) {
      if (m) continue;
      d = !1;
      break;
    }
    if (f) {
      if (
        !M(e, function (t, e) {
          if (((i = e), !f.has(i) && (b === t || n(b, t, s, a, r))))
            return f.push(e);
          var i;
        })
      ) {
        d = !1;
        break;
      }
    } else if (b !== h && !n(b, h, s, a, r)) {
      d = !1;
      break;
    }
  }
  return r.delete(t), r.delete(e), d;
}
function R(t) {
  var e = -1,
    s = Array(t.size);
  return (
    t.forEach(function (t, a) {
      s[++e] = [a, t];
    }),
    s
  );
}
function H(t) {
  var e = -1,
    s = Array(t.size);
  return (
    t.forEach(function (t) {
      s[++e] = t;
    }),
    s
  );
}
var J = e ? e.prototype : void 0,
  U = J ? J.valueOf : void 0;
var W = Object.prototype.hasOwnProperty;
var Z = '[object Object]',
  q = Object.prototype.hasOwnProperty;
function G(t, e, c, p, d, f) {
  var b = r(t),
    h = r(e),
    m = b ? '[object Array]' : i(t),
    v = h ? '[object Array]' : i(e),
    g = (m = '[object Arguments]' == m ? Z : m) == Z,
    y = (v = '[object Arguments]' == v ? Z : v) == Z,
    j = m == v;
  if (j && o(t)) {
    if (!o(e)) return !1;
    (b = !0), (g = !1);
  }
  if (j && !g)
    return (
      f || (f = new l()),
      b || u(t)
        ? z(t, e, c, p, d, f)
        : (function (t, e, n, r, i, o, l) {
            switch (n) {
              case '[object DataView]':
                if (
                  t.byteLength != e.byteLength ||
                  t.byteOffset != e.byteOffset
                )
                  return !1;
                (t = t.buffer), (e = e.buffer);
              case '[object ArrayBuffer]':
                return !(
                  t.byteLength != e.byteLength || !o(new a(t), new a(e))
                );
              case '[object Boolean]':
              case '[object Date]':
              case '[object Number]':
                return s(+t, +e);
              case '[object Error]':
                return t.name == e.name && t.message == e.message;
              case '[object RegExp]':
              case '[object String]':
                return t == e + '';
              case '[object Map]':
                var u = R;
              case '[object Set]':
                var c = 1 & r;
                if ((u || (u = H), t.size != e.size && !c)) return !1;
                var p = l.get(t);
                if (p) return p == e;
                (r |= 2), l.set(t, e);
                var d = z(u(t), u(e), r, i, o, l);
                return l.delete(t), d;
              case '[object Symbol]':
                if (U) return U.call(t) == U.call(e);
            }
            return !1;
          })(t, e, m, c, p, d, f)
    );
  if (!(1 & c)) {
    var w = g && q.call(t, '__wrapped__'),
      C = y && q.call(e, '__wrapped__');
    if (w || C) {
      var O = w ? t.value() : t,
        x = C ? e.value() : e;
      return f || (f = new l()), d(O, x, c, p, f);
    }
  }
  return (
    !!j &&
    (f || (f = new l()),
    (function (t, e, s, a, r, i) {
      var o = 1 & s,
        l = n(t),
        u = l.length;
      if (u != n(e).length && !o) return !1;
      for (var c = u; c--; ) {
        var p = l[c];
        if (!(o ? p in e : W.call(e, p))) return !1;
      }
      var d = i.get(t),
        f = i.get(e);
      if (d && f) return d == e && f == t;
      var b = !0;
      i.set(t, e), i.set(e, t);
      for (var h = o; ++c < u; ) {
        var m = t[(p = l[c])],
          v = e[p];
        if (a) var g = o ? a(v, m, p, e, t, i) : a(m, v, p, t, e, i);
        if (!(void 0 === g ? m === v || r(m, v, s, a, i) : g)) {
          b = !1;
          break;
        }
        h || (h = 'constructor' == p);
      }
      if (b && !h) {
        var y = t.constructor,
          j = e.constructor;
        y == j ||
          !('constructor' in t) ||
          !('constructor' in e) ||
          ('function' == typeof y &&
            y instanceof y &&
            'function' == typeof j &&
            j instanceof j) ||
          (b = !1);
      }
      return i.delete(t), i.delete(e), b;
    })(t, e, c, p, d, f))
  );
}
function K(t, e, s, a, n) {
  return (
    t === e ||
    (null == t || null == e || (!c(t) && !c(e))
      ? t != t && e != e
      : G(t, e, s, a, K, n))
  );
}
class Q extends p {
  static get properties() {
    const t = { appCalc: { type: Function }, testObject: { type: Object } };
    return Object.assign(t, super.properties);
  }
  constructor() {
    super(), (this.result = null);
  }
  render() {
    const t = super.render();
    return this.runTest(), t;
  }
  renderReplaceArgs(t, e, s) {
    (this.testObject = t),
      (this.appConf = e.appWebComponents),
      (this.appName = e.appName),
      (this.appCalc = s);
  }
  setup() {
    const t = Object.values(this.appConf);
    (this.localAppConf = t.find(t => 'batch-tile' === t.type)),
      (this.formFields = t.find(t => 'input-tile' === t.type).fields),
      (this.subComponents = t.find(t => 'input-tile' === t.type).subComponents);
  }
  runTest() {
    const t = this.calcLoop(this.testObject.input, !0),
      e = d.mergeWithOriginal(
        this.appConf,
        this.testObject.output,
        this.inputLength
      );
    var s, a, n, i;
    this.result =
      ((s = t),
      (a = e),
      (n = function (t, e) {
        let s = !0;
        if (r(t)) {
          const a = 4;
          return (
            t.forEach((t, n) => {
              s = s && t.toPrecision(a) === e[n].toPrecision(a);
            }),
            s
          );
        }
        if (f(t)) return !0;
      }),
      void 0 ===
      (i = (n = 'function' == typeof n ? n : void 0) ? n(s, a) : void 0)
        ? K(s, a, void 0, n)
        : !!i);
  }
}
customElements.define('math-test', Q);
const X = {
    'Please select': null,
    Caisson: E,
    ConsolidatedNCV: D,
    DragAnchor: F,
    MCCSu: A,
    NCV: N,
    Pinpiles: P,
    Pipe: S,
    SlidingPlet: B,
    VH2M2T: I,
    VHM: $,
    ZTI: V,
  },
  Y = {
    'Please select': null,
    Caisson: v,
    ConsolidatedNCV: g,
    DragAnchor: y,
    MCCSu: j,
    NCV: w,
    Pinpiles: C,
    Pipe: O,
    SlidingPlet: x,
    VH2M2T: _,
    VHM: k,
    ZTI: T,
  };
customElements.define(
  'test-generator',
  class extends b {
    constructor() {
      super(),
        (this.inputFileData = null),
        (this.outputFileData = null),
        (this.testName = null),
        (this.appOptions = h` ${Object.keys(X).map(
          t => h`<option value=${t}>${t}</option>`
        )}`),
        (this.testObjest = null);
    }
    render() {
      return [
        super.render(),
        h`
        <div class="row">
          <h1>Create Test Data</h1>
        </div>
        <div class="input-group">
          <label class="input-group-text" for="test-name">Test Name</label>
          <input class="form-control" type="text" id="test-name" />
          <label class="input-group-text" for="app-selector">Pick App</label>
          <select
            id="app-selector"
            class="form-select"
            aria-label="Default select example"
          >
            ${this.appOptions}
          </select>
        </div>
        <div class="input-group">
          <label class="input-group-text" for="input-dropbox">Input Data</label>
          <input
            class="form-control"
            type="file"
            id="input-dropbox"
            accept=".xlsx"
          />
        </div>
        <div class="input-group">
          <label class="input-group-text" for="output-dropbox"
            >Output Data</label
          >
          <input
            class="form-control"
            type="file"
            id="output-dropbox"
            accept=".xlsx"
          />
        </div>
        <div class="d-grid">
          <button
            id="submit-button"
            class="btn btn-primary"
            disabled
            @click=${() => this.checkSubmit()}
          >
            Submit files
          </button>
          <button
            id="test-button"
            class="btn btn-primary"
            disabled
            @click=${() => this.runTest()}
          >
            Run Test
          </button>
          <button
            id="download-button"
            class="btn btn-primary"
            disabled
            @click=${() => this.downloadTest()}
          >
            Download Test Data
          </button>
        </div>
        <div class="row">
          <textarea id="display-area" rows="10" cols="50" disabled></textarea>
        </div>
      `,
      ];
    }
    firstUpdated(t) {
      super.firstUpdated(t);
      const e = document.getElementById('input-dropbox'),
        s = document.getElementById('output-dropbox');
      e.addEventListener('change', t => this.clickFile(t), !1),
        s.addEventListener('change', t => this.clickFile(t), !1);
    }
    clickFile(t) {
      const { files: e } = t.currentTarget;
      this.handleFile(e[0], t.currentTarget.id);
    }
    async handleFile(t, e) {
      t.arrayBuffer().then(
        t => {
          if ('input-dropbox' === e) this.inputFileData = m(t);
          else {
            if ('output-dropbox' !== e)
              throw Error(`${e} is an unknown element id`);
            this.outputFileData = m(t);
          }
          if (null !== this.inputFileData && null !== this.outputFileData) {
            document.getElementById('submit-button').disabled = !1;
          }
        },
        t => {
          window.alert(`file load failed with error ${t}`);
        }
      );
    }
    checkSubmit() {
      const t = document.getElementById('test-name');
      this.testName = t.value;
      const e = document.getElementById('app-selector').value;
      (this.appConf = X[e]),
        (this.appCalc = Y[e]),
        '' === this.testName || null === this.testName
          ? window.alert('Please provide a name for this test')
          : null === this.appConf
          ? window.alert('Please pick a app for this test')
          : this.makeJSObj();
    }
    makeJSObj() {
      this.testObject = {
        input: d.xlsxBookToObj(this.inputFileData, this.appConf),
        output: d.xlsxBookToObj(this.outputFileData, this.appConf),
      };
      document.getElementById('display-area').value = JSON.stringify(
        this.testObject
      );
      document.getElementById('test-button').disabled = !1;
    }
    runTest() {
      const t = new Q();
      if (
        (t.renderReplaceArgs(this.testObject, this.appConf, this.appCalc),
        t.setup(),
        t.runTest(),
        t.result)
      ) {
        document.getElementById('download-button').disabled = !1;
      } else
        window.alert(
          'Test Failed please check input/output files and check again'
        );
    }
    downloadTest() {
      const t = document.createElement('a');
      t.setAttribute(
        'href',
        `data:text/plain;charset=utf-8, ${encodeURIComponent(
          `export const testConf =${JSON.stringify(this.testObject)}`
        )}`
      ),
        t.setAttribute('download', `${this.testName}.mjs`),
        document.body.appendChild(t),
        t.click();
    }
  }
);
