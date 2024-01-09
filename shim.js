// build/worker/shim.mjs
import I from "./46a2b1bd8ffc04d2801d1e56762d13f8f001f16a-index.wasm";
import fe from "./46a2b1bd8ffc04d2801d1e56762d13f8f001f16a-index.wasm";
var U = Object.defineProperty;
var z = (e, t) => {
  for (var n in t)
    U(e, n, { get: t[n], enumerable: true });
};
var d = {};
z(d, { IntoUnderlyingByteSource: () => q, IntoUnderlyingSink: () => T, IntoUnderlyingSource: () => L, MinifyConfig: () => v, PipeOptions: () => C, PolishConfig: () => G, QueuingStrategy: () => F, R2Range: () => S, ReadableStreamGetReaderOptions: () => $, RequestRedirect: () => Q, __wbg_buffer_610b70c8fd30da2d: () => Kt, __wbg_buffer_cf65c07de34b9a08: () => qt, __wbg_byobRequest_a3c74c3694777d1b: () => It, __wbg_byteLength_1fef7842ca4200fa: () => Pt, __wbg_byteOffset_ede786cfcf88d3dd: () => Xt, __wbg_bytesliteral_efe7d360639bf32b: () => Bt, __wbg_call_9495de66fdbe016b: () => dt, __wbg_cf_23036f27554431ca: () => rt, __wbg_close_045ed342139beb7d: () => Jt, __wbg_close_a41954830b65c455: () => Yt, __wbg_enqueue_3a8a8e67e44d2567: () => Zt, __wbg_get_b883881571048aa2: () => st, __wbg_getwithrefkey_5e6d9547403deab8: () => jt, __wbg_headers_ab5251d2727ac41e: () => nt, __wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065: () => Wt, __wbg_instanceof_Error_749a7378f4439ee0: () => ct, __wbg_instanceof_Uint8Array_01cebe79ca606cca: () => $t, __wbg_json_011ff959f0891c9a: () => wt, __wbg_length_27a2afe8ab42b09f: () => Mt, __wbg_method_d1ee174c753ca2be: () => tt, __wbg_new_15d3966e9981a196: () => Vt, __wbg_new_537b7341ce90bb31: () => vt, __wbg_new_9d3a9ce4282a18a8: () => Et, __wbg_new_f1c3a9c2533a55b8: () => ot, __wbg_new_f9876326328f45ed: () => Qt, __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5: () => Tt, __wbg_newwithlength_b56c882b57805732: () => pt, __wbg_newwithoptbuffersourceandinit_4d2fa6d435ff2a63: () => at, __wbg_newwithoptreadablestreamandinit_a0b4dc209bd176be: () => bt, __wbg_newwithoptstrandinit_1a4621d99c54e7c3: () => ft, __wbg_resolve_fd40f858d9db1a04: () => Ut, __wbg_respond_f4778bef04e912a6: () => Nt, __wbg_set_17499e8aa4003ebd: () => Lt, __wbg_set_6aa458a4ebdb65cb: () => ee, __wbg_set_a5d34c36a1a4ebd1: () => Gt, __wbg_then_ec5db6d509eb475f: () => zt, __wbg_then_f753623316e2873a: () => ht, __wbg_toString_cec163b212643722: () => ut, __wbg_url_bd2775644ef804ec: () => et, __wbg_view_d1a31268af734e5d: () => Ht, __wbindgen_boolean_get: () => Ft, __wbindgen_cb_drop: () => gt, __wbindgen_closure_wrapper404: () => ne, __wbindgen_debug_string: () => Dt, __wbindgen_error_new: () => lt, __wbindgen_in: () => kt, __wbindgen_is_object: () => yt, __wbindgen_is_undefined: () => At, __wbindgen_jsval_loose_eq: () => Ct, __wbindgen_memory: () => Ot, __wbindgen_number_get: () => St, __wbindgen_number_new: () => te, __wbindgen_object_clone_ref: () => mt, __wbindgen_object_drop_ref: () => _t, __wbindgen_string_get: () => it, __wbindgen_string_new: () => xt, __wbindgen_throw: () => Rt, fetch: () => W, getMemory: () => B });
function D() {
  return "bytes";
}
var N = new WebAssembly.Instance(I, { "./index_bg.js": d });
var r = N.exports;
function B() {
  return r.memory;
}
var g = new Array(128).fill(void 0);
g.push(void 0, null, true, false);
function _(e) {
  return g[e];
}
var y = g.length;
function H(e) {
  e < 132 || (g[e] = y, y = e);
}
function b(e) {
  let t = _(e);
  return H(e), t;
}
var h = 0;
var j = null;
function E() {
  return (j === null || j.byteLength === 0) && (j = new Uint8Array(r.memory.buffer)), j;
}
var P = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
var M = new P("utf-8");
var J = typeof M.encodeInto == "function" ? function(e, t) {
  return M.encodeInto(e, t);
} : function(e, t) {
  let n = M.encode(e);
  return t.set(n), { read: e.length, written: n.length };
};
function x(e, t, n) {
  if (n === void 0) {
    let f = M.encode(e), m = t(f.length);
    return E().subarray(m, m + f.length).set(f), h = f.length, m;
  }
  let o = e.length, s = t(o), p = E(), c = 0;
  for (; c < o; c++) {
    let f = e.charCodeAt(c);
    if (f > 127)
      break;
    p[s + c] = f;
  }
  if (c !== o) {
    c !== 0 && (e = e.slice(c)), s = n(s, o, o = c + e.length * 3);
    let f = E().subarray(s + c, s + o);
    c += J(e, f).written;
  }
  return h = c, s;
}
function a(e) {
  return e == null;
}
var A = null;
function u() {
  return (A === null || A.byteLength === 0) && (A = new Int32Array(r.memory.buffer)), A;
}
var V = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
var R = new V("utf-8", { ignoreBOM: true, fatal: true });
R.decode();
function w(e, t) {
  return R.decode(E().subarray(e, e + t));
}
function i(e) {
  y === g.length && g.push(g.length + 1);
  let t = y;
  return y = g[t], g[t] = e, t;
}
var k = null;
function K() {
  return (k === null || k.byteLength === 0) && (k = new Float64Array(r.memory.buffer)), k;
}
function O(e) {
  let t = typeof e;
  if (t == "number" || t == "boolean" || e == null)
    return `${e}`;
  if (t == "string")
    return `"${e}"`;
  if (t == "symbol") {
    let s = e.description;
    return s == null ? "Symbol" : `Symbol(${s})`;
  }
  if (t == "function") {
    let s = e.name;
    return typeof s == "string" && s.length > 0 ? `Function(${s})` : "Function";
  }
  if (Array.isArray(e)) {
    let s = e.length, p = "[";
    s > 0 && (p += O(e[0]));
    for (let c = 1; c < s; c++)
      p += ", " + O(e[c]);
    return p += "]", p;
  }
  let n = /\[object ([^\]]+)\]/.exec(toString.call(e)), o;
  if (n.length > 1)
    o = n[1];
  else
    return toString.call(e);
  if (o == "Object")
    try {
      return "Object(" + JSON.stringify(e) + ")";
    } catch {
      return "Object";
    }
  return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : o;
}
function X(e, t, n, o) {
  let s = { a: e, b: t, cnt: 1, dtor: n }, p = (...c) => {
    s.cnt++;
    let f = s.a;
    s.a = 0;
    try {
      return o(f, s.b, ...c);
    } finally {
      --s.cnt === 0 ? r.__wbindgen_export_2.get(s.dtor)(f, s.b) : s.a = f;
    }
  };
  return p.original = s, p;
}
function Y(e, t, n) {
  r.__wbindgen_export_3(e, t, i(n));
}
function W(e, t, n) {
  let o = r.fetch(i(e), i(t), i(n));
  return b(o);
}
function l(e, t) {
  try {
    return e.apply(this, t);
  } catch (n) {
    r.__wbindgen_export_4(i(n));
  }
}
function Z(e, t, n, o) {
  r.__wbindgen_export_5(e, t, i(n), i(o));
}
var G = Object.freeze({ Off: 0, 0: "Off", Lossy: 1, 1: "Lossy", Lossless: 2, 2: "Lossless" });
var Q = Object.freeze({ Error: 0, 0: "Error", Follow: 1, 1: "Follow", Manual: 2, 2: "Manual" });
var q = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingbytesource_free(t);
  }
  get type() {
    let t = r.intounderlyingbytesource_type(this.ptr);
    return b(t);
  }
  get autoAllocateChunkSize() {
    return r.intounderlyingbytesource_autoAllocateChunkSize(this.ptr) >>> 0;
  }
  start(t) {
    r.intounderlyingbytesource_start(this.ptr, i(t));
  }
  pull(t) {
    let n = r.intounderlyingbytesource_pull(this.ptr, i(t));
    return b(n);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    r.intounderlyingbytesource_cancel(t);
  }
};
var T = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingsink_free(t);
  }
  write(t) {
    let n = r.intounderlyingsink_write(this.ptr, i(t));
    return b(n);
  }
  close() {
    let t = this.__destroy_into_raw(), n = r.intounderlyingsink_close(t);
    return b(n);
  }
  abort(t) {
    let n = this.__destroy_into_raw(), o = r.intounderlyingsink_abort(n, i(t));
    return b(o);
  }
};
var L = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_intounderlyingsource_free(t);
  }
  pull(t) {
    let n = r.intounderlyingsource_pull(this.ptr, i(t));
    return b(n);
  }
  cancel() {
    let t = this.__destroy_into_raw();
    r.intounderlyingsource_cancel(t);
  }
};
var v = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_minifyconfig_free(t);
  }
  get js() {
    return r.__wbg_get_minifyconfig_js(this.ptr) !== 0;
  }
  set js(t) {
    r.__wbg_set_minifyconfig_js(this.ptr, t);
  }
  get html() {
    return r.__wbg_get_minifyconfig_html(this.ptr) !== 0;
  }
  set html(t) {
    r.__wbg_set_minifyconfig_html(this.ptr, t);
  }
  get css() {
    return r.__wbg_get_minifyconfig_css(this.ptr) !== 0;
  }
  set css(t) {
    r.__wbg_set_minifyconfig_css(this.ptr, t);
  }
};
var C = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_pipeoptions_free(t);
  }
  get preventClose() {
    return r.pipeoptions_preventClose(this.ptr) !== 0;
  }
  get preventCancel() {
    return r.pipeoptions_preventCancel(this.ptr) !== 0;
  }
  get preventAbort() {
    return r.pipeoptions_preventAbort(this.ptr) !== 0;
  }
  get signal() {
    let t = r.pipeoptions_signal(this.ptr);
    return b(t);
  }
};
var F = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_queuingstrategy_free(t);
  }
  get highWaterMark() {
    return r.queuingstrategy_highWaterMark(this.ptr);
  }
};
var S = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_r2range_free(t);
  }
  get offset() {
    try {
      let o = r.__wbindgen_add_to_stack_pointer(-16);
      r.__wbg_get_r2range_offset(o, this.ptr);
      var t = u()[o / 4 + 0], n = u()[o / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set offset(t) {
    r.__wbg_set_r2range_offset(this.ptr, !a(t), a(t) ? 0 : t);
  }
  get length() {
    try {
      let o = r.__wbindgen_add_to_stack_pointer(-16);
      r.__wbg_get_r2range_length(o, this.ptr);
      var t = u()[o / 4 + 0], n = u()[o / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set length(t) {
    r.__wbg_set_r2range_length(this.ptr, !a(t), a(t) ? 0 : t);
  }
  get suffix() {
    try {
      let o = r.__wbindgen_add_to_stack_pointer(-16);
      r.__wbg_get_r2range_suffix(o, this.ptr);
      var t = u()[o / 4 + 0], n = u()[o / 4 + 1];
      return t === 0 ? void 0 : n >>> 0;
    } finally {
      r.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set suffix(t) {
    r.__wbg_set_r2range_suffix(this.ptr, !a(t), a(t) ? 0 : t);
  }
};
var $ = class {
  __destroy_into_raw() {
    let t = this.ptr;
    return this.ptr = 0, t;
  }
  free() {
    let t = this.__destroy_into_raw();
    r.__wbg_readablestreamgetreaderoptions_free(t);
  }
  get mode() {
    let t = r.readablestreamgetreaderoptions_mode(this.ptr);
    return b(t);
  }
};
function tt(e, t) {
  let n = _(t).method, o = x(n, r.__wbindgen_export_0, r.__wbindgen_export_1), s = h;
  u()[e / 4 + 1] = s, u()[e / 4 + 0] = o;
}
function et(e, t) {
  let n = _(t).url, o = x(n, r.__wbindgen_export_0, r.__wbindgen_export_1), s = h;
  u()[e / 4 + 1] = s, u()[e / 4 + 0] = o;
}
function nt(e) {
  let t = _(e).headers;
  return i(t);
}
function rt(e) {
  let t = _(e).cf;
  return a(t) ? 0 : i(t);
}
function ot() {
  return l(function() {
    let e = new Headers();
    return i(e);
  }, arguments);
}
function _t(e) {
  b(e);
}
function st() {
  return l(function(e, t, n, o) {
    let s = _(t).get(w(n, o));
    var p = a(s) ? 0 : x(s, r.__wbindgen_export_0, r.__wbindgen_export_1), c = h;
    u()[e / 4 + 1] = c, u()[e / 4 + 0] = p;
  }, arguments);
}
function it(e, t) {
  let n = _(t), o = typeof n == "string" ? n : void 0;
  var s = a(o) ? 0 : x(o, r.__wbindgen_export_0, r.__wbindgen_export_1), p = h;
  u()[e / 4 + 1] = p, u()[e / 4 + 0] = s;
}
function ct(e) {
  let t;
  try {
    t = _(e) instanceof Error;
  } catch {
    t = false;
  }
  return t;
}
function ut(e) {
  let t = _(e).toString();
  return i(t);
}
function ft() {
  return l(function(e, t, n) {
    let o = new Response(e === 0 ? void 0 : w(e, t), _(n));
    return i(o);
  }, arguments);
}
function pt(e) {
  let t = new Uint8Array(e >>> 0);
  return i(t);
}
function at() {
  return l(function(e, t) {
    let n = new Response(_(e), _(t));
    return i(n);
  }, arguments);
}
function bt() {
  return l(function(e, t) {
    let n = new Response(_(e), _(t));
    return i(n);
  }, arguments);
}
function dt() {
  return l(function(e, t, n) {
    let o = _(e).call(_(t), _(n));
    return i(o);
  }, arguments);
}
function gt(e) {
  let t = b(e).original;
  return t.cnt-- == 1 ? (t.a = 0, true) : false;
}
function lt(e, t) {
  let n = new Error(w(e, t));
  return i(n);
}
function wt() {
  return l(function(e) {
    let t = _(e).json();
    return i(t);
  }, arguments);
}
function ht(e, t, n) {
  let o = _(e).then(_(t), _(n));
  return i(o);
}
function yt(e) {
  let t = _(e);
  return typeof t == "object" && t !== null;
}
function xt(e, t) {
  let n = w(e, t);
  return i(n);
}
function mt(e) {
  let t = _(e);
  return i(t);
}
function jt(e, t) {
  let n = _(e)[_(t)];
  return i(n);
}
function At(e) {
  return _(e) === void 0;
}
function kt(e, t) {
  return _(e) in _(t);
}
function Et(e, t) {
  try {
    var n = { a: e, b: t }, o = (p, c) => {
      let f = n.a;
      n.a = 0;
      try {
        return Z(f, n.b, p, c);
      } finally {
        n.a = f;
      }
    };
    let s = new Promise(o);
    return i(s);
  } finally {
    n.a = n.b = 0;
  }
}
function Mt(e) {
  return _(e).length;
}
function Ot() {
  let e = r.memory;
  return i(e);
}
function qt(e) {
  let t = _(e).buffer;
  return i(t);
}
function Tt(e, t, n) {
  let o = new Uint8Array(_(e), t >>> 0, n >>> 0);
  return i(o);
}
function Lt(e, t, n) {
  _(e).set(_(t), n >>> 0);
}
function vt(e) {
  let t = new Uint8Array(_(e));
  return i(t);
}
function Ct(e, t) {
  return _(e) == _(t);
}
function Ft(e) {
  let t = _(e);
  return typeof t == "boolean" ? t ? 1 : 0 : 2;
}
function St(e, t) {
  let n = _(t), o = typeof n == "number" ? n : void 0;
  K()[e / 8 + 1] = a(o) ? 0 : o, u()[e / 4 + 0] = !a(o);
}
function $t(e) {
  let t;
  try {
    t = _(e) instanceof Uint8Array;
  } catch {
    t = false;
  }
  return t;
}
function Wt(e) {
  let t;
  try {
    t = _(e) instanceof ArrayBuffer;
  } catch {
    t = false;
  }
  return t;
}
function Dt(e, t) {
  let n = O(_(t)), o = x(n, r.__wbindgen_export_0, r.__wbindgen_export_1), s = h;
  u()[e / 4 + 1] = s, u()[e / 4 + 0] = o;
}
function Rt(e, t) {
  throw new Error(w(e, t));
}
function Ut(e) {
  let t = Promise.resolve(_(e));
  return i(t);
}
function zt(e, t) {
  let n = _(e).then(_(t));
  return i(n);
}
function It(e) {
  let t = _(e).byobRequest;
  return a(t) ? 0 : i(t);
}
function Nt(e, t) {
  _(e).respond(t >>> 0);
}
function Bt() {
  let e = D();
  return i(e);
}
function Ht(e) {
  let t = _(e).view;
  return a(t) ? 0 : i(t);
}
function Pt(e) {
  return _(e).byteLength;
}
function Jt(e) {
  _(e).close();
}
function Vt(e, t) {
  let n = new Error(w(e, t));
  return i(n);
}
function Kt(e) {
  let t = _(e).buffer;
  return i(t);
}
function Xt(e) {
  return _(e).byteOffset;
}
function Yt(e) {
  _(e).close();
}
function Zt(e, t) {
  _(e).enqueue(_(t));
}
function Gt() {
  return l(function(e, t, n, o, s) {
    _(e).set(w(t, n), w(o, s));
  }, arguments);
}
function Qt() {
  let e = new Object();
  return i(e);
}
function te(e) {
  return i(e);
}
function ee() {
  return l(function(e, t, n) {
    return Reflect.set(_(e), _(t), _(n));
  }, arguments);
}
function ne(e, t, n) {
  let o = X(e, t, 93, Y);
  return i(o);
}
var pe = { fetch: W, scheduled: void 0, queue: void 0 };
export {
  q as IntoUnderlyingByteSource,
  T as IntoUnderlyingSink,
  L as IntoUnderlyingSource,
  v as MinifyConfig,
  C as PipeOptions,
  G as PolishConfig,
  F as QueuingStrategy,
  S as R2Range,
  $ as ReadableStreamGetReaderOptions,
  Q as RequestRedirect,
  Kt as __wbg_buffer_610b70c8fd30da2d,
  qt as __wbg_buffer_cf65c07de34b9a08,
  It as __wbg_byobRequest_a3c74c3694777d1b,
  Pt as __wbg_byteLength_1fef7842ca4200fa,
  Xt as __wbg_byteOffset_ede786cfcf88d3dd,
  Bt as __wbg_bytesliteral_efe7d360639bf32b,
  dt as __wbg_call_9495de66fdbe016b,
  rt as __wbg_cf_23036f27554431ca,
  Jt as __wbg_close_045ed342139beb7d,
  Yt as __wbg_close_a41954830b65c455,
  Zt as __wbg_enqueue_3a8a8e67e44d2567,
  st as __wbg_get_b883881571048aa2,
  jt as __wbg_getwithrefkey_5e6d9547403deab8,
  nt as __wbg_headers_ab5251d2727ac41e,
  Wt as __wbg_instanceof_ArrayBuffer_a69f02ee4c4f5065,
  ct as __wbg_instanceof_Error_749a7378f4439ee0,
  $t as __wbg_instanceof_Uint8Array_01cebe79ca606cca,
  wt as __wbg_json_011ff959f0891c9a,
  Mt as __wbg_length_27a2afe8ab42b09f,
  tt as __wbg_method_d1ee174c753ca2be,
  Vt as __wbg_new_15d3966e9981a196,
  vt as __wbg_new_537b7341ce90bb31,
  Et as __wbg_new_9d3a9ce4282a18a8,
  ot as __wbg_new_f1c3a9c2533a55b8,
  Qt as __wbg_new_f9876326328f45ed,
  Tt as __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5,
  pt as __wbg_newwithlength_b56c882b57805732,
  at as __wbg_newwithoptbuffersourceandinit_4d2fa6d435ff2a63,
  bt as __wbg_newwithoptreadablestreamandinit_a0b4dc209bd176be,
  ft as __wbg_newwithoptstrandinit_1a4621d99c54e7c3,
  Ut as __wbg_resolve_fd40f858d9db1a04,
  Nt as __wbg_respond_f4778bef04e912a6,
  Lt as __wbg_set_17499e8aa4003ebd,
  ee as __wbg_set_6aa458a4ebdb65cb,
  Gt as __wbg_set_a5d34c36a1a4ebd1,
  zt as __wbg_then_ec5db6d509eb475f,
  ht as __wbg_then_f753623316e2873a,
  ut as __wbg_toString_cec163b212643722,
  et as __wbg_url_bd2775644ef804ec,
  Ht as __wbg_view_d1a31268af734e5d,
  Ft as __wbindgen_boolean_get,
  gt as __wbindgen_cb_drop,
  ne as __wbindgen_closure_wrapper404,
  Dt as __wbindgen_debug_string,
  lt as __wbindgen_error_new,
  kt as __wbindgen_in,
  yt as __wbindgen_is_object,
  At as __wbindgen_is_undefined,
  Ct as __wbindgen_jsval_loose_eq,
  Ot as __wbindgen_memory,
  St as __wbindgen_number_get,
  te as __wbindgen_number_new,
  mt as __wbindgen_object_clone_ref,
  _t as __wbindgen_object_drop_ref,
  it as __wbindgen_string_get,
  xt as __wbindgen_string_new,
  Rt as __wbindgen_throw,
  pe as default,
  W as fetch,
  B as getMemory,
  fe as wasmModule
};
//# sourceMappingURL=shim.js.map
