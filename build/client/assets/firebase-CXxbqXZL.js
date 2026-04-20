import{r as Ys}from"./chunk-KNED5TY2-BWNdqSdz.js";/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),G_=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase()),lu=n=>{const e=G_(n);return e.charAt(0).toUpperCase()+e.slice(1)},Id=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var K_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=Ys.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:r="",children:i,iconNode:o,...c},l)=>Ys.createElement("svg",{ref:l,...K_,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:Id("lucide",r),...c},[...o.map(([h,f])=>Ys.createElement(h,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=(n,e)=>{const t=Ys.forwardRef(({className:s,...r},i)=>Ys.createElement(Q_,{ref:i,iconNode:e,className:Id(`lucide-${z_(lu(n))}`,`lucide-${n}`,s),...r}));return t.displayName=lu(n),t};/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],sC=Y_("circle-alert",J_),X_=()=>{};var uu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D=function(n,e){if(!n)throw hs(e)},hs=function(n){return new Error("Firebase Database ("+vd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Z_=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],c=n[t++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,c=o?n[r+1]:0,l=r+2<n.length,h=l?n[r+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,R=h&63;l||(R=64,o||(g=64)),s.push(t[f],t[p],t[g],t[R])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(wd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Z_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],c=r<n.length?t[n.charAt(r)]:0;++r;const h=r<n.length?t[n.charAt(r)]:64;++r;const p=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||c==null||h==null||p==null)throw new eg;const g=i<<2|c>>4;if(s.push(g),h!==64){const R=c<<4&240|h>>2;if(s.push(R),p!==64){const P=h<<6&192|p;s.push(P)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class eg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ad=function(n){const e=wd(n);return Ga.encodeByteArray(e,!0)},fi=function(n){return Ad(n).replace(/\./g,"")},pi=function(n){try{return Ga.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(n){return Sd(void 0,n)}function Sd(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!ng(t)||(n[t]=Sd(n[t],e[t]));return n}function ng(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=()=>sg().__FIREBASE_DEFAULTS__,ig=()=>{if(typeof process>"u"||typeof uu>"u")return;const n=uu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},og=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&pi(n[1]);return e&&JSON.parse(e)},Wi=()=>{try{return X_()||rg()||ig()||og()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Rd=n=>{var e,t;return(t=(e=Wi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Cd=n=>{const e=Rd(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},bd=()=>{var n;return(n=Wi())==null?void 0:n.config},Pd=n=>{var e;return(e=Wi())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[fi(JSON.stringify(t)),fi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function ag(){var e;const n=(e=Wi())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lg(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ug(){const n=Me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function hg(){return vd.NODE_ADMIN===!0}function dg(){return!ag()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fg(){try{return typeof indexedDB=="object"}catch{return!1}}function pg(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="FirebaseError";class bt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=mg,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?_g(i,s):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new bt(r,c,s)}}function _g(n,e){return n.replace(gg,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const gg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(n){return JSON.parse(n)}function we(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd=function(n){let e={},t={},s={},r="";try{const i=n.split(".");e=or(pi(i[0])||""),t=or(pi(i[1])||""),r=i[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:r}},yg=function(n){const e=Dd(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Eg=function(n){const e=Dd(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ts(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function aa(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function mi(n,e,t){const s={};for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=e.call(t,n[r],r,n));return s}function Qt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(hu(i)&&hu(o)){if(!Qt(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function hu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function $s(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Hs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)s[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)s[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const g=s[p-3]^s[p-8]^s[p-14]^s[p-16];s[p]=(g<<1|g>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],c=this.chain_[3],l=this.chain_[4],h,f;for(let p=0;p<80;p++){p<40?p<20?(h=c^i&(o^c),f=1518500249):(h=i^o^c,f=1859775393):p<60?(h=i&o|c&(i|o),f=2400959708):(h=i^o^c,f=3395469782);const g=(r<<5|r>>>27)+h+l+f+s[p]&4294967295;l=c,c=o,o=(i<<30|i>>>2)&4294967295,i=r,r=g}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function Ig(n,e){const t=new vg(n,e);return t.subscribe.bind(t)}class vg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");wg(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=Wo),r.error===void 0&&(r.error=Wo),r.complete===void 0&&(r.complete=Wo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wg(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Wo(){}function Ag(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,D(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},ji=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ya(n){return(await fetch(n,{credentials:"include"})).ok}class Yt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Ka;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bg(e))try{this.getOrInitializeService({instanceIdentifier:fn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fn){return this.instances.has(e)}getOptions(e=fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&o.resolve(r)}return r}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(s)??new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cg(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=fn){return this.component?this.component.multipleInstances?e:fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cg(n){return n===fn?void 0:n}function bg(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Rg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const Ng={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},kg=W.INFO,Dg={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Og=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=Dg[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $i{constructor(e){this.name=e,this._logLevel=kg,this._logHandler=Og,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ng[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Vg=(n,e)=>e.some(t=>n instanceof t);let du,fu;function Mg(){return du||(du=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lg(){return fu||(fu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Od=new WeakMap,ca=new WeakMap,Vd=new WeakMap,jo=new WeakMap,Ja=new WeakMap;function xg(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Wt(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Od.set(t,n)}).catch(()=>{}),Ja.set(e,n),e}function Fg(n){if(ca.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});ca.set(n,e)}let la={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ca.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Vd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ug(n){la=n(la)}function Bg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call($o(this),e,...t);return Vd.set(s,e.sort?e.sort():[e]),Wt(s)}:Lg().includes(n)?function(...e){return n.apply($o(this),e),Wt(Od.get(this))}:function(...e){return Wt(n.apply($o(this),e))}}function qg(n){return typeof n=="function"?Bg(n):(n instanceof IDBTransaction&&Fg(n),Vg(n,Mg())?new Proxy(n,la):n)}function Wt(n){if(n instanceof IDBRequest)return xg(n);if(jo.has(n))return jo.get(n);const e=qg(n);return e!==n&&(jo.set(n,e),Ja.set(e,n)),e}const $o=n=>Ja.get(n);function Wg(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),c=Wt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Wt(o.result),l.oldVersion,l.newVersion,Wt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const jg=["get","getKey","getAll","getAllKeys","count"],$g=["put","add","delete","clear"],Ho=new Map;function pu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ho.get(e))return Ho.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=$g.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||jg.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,r?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),r&&l.done]))[0]};return Ho.set(e,i),i}Ug(n=>({...n,get:(e,t,s)=>pu(e,t)||n.get(e,t,s),has:(e,t)=>!!pu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zg(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function zg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ua="@firebase/app",mu="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new $i("@firebase/app"),Gg="@firebase/app-compat",Kg="@firebase/analytics-compat",Qg="@firebase/analytics",Yg="@firebase/app-check-compat",Jg="@firebase/app-check",Xg="@firebase/auth",Zg="@firebase/auth-compat",ey="@firebase/database",ty="@firebase/data-connect",ny="@firebase/database-compat",sy="@firebase/functions",ry="@firebase/functions-compat",iy="@firebase/installations",oy="@firebase/installations-compat",ay="@firebase/messaging",cy="@firebase/messaging-compat",ly="@firebase/performance",uy="@firebase/performance-compat",hy="@firebase/remote-config",dy="@firebase/remote-config-compat",fy="@firebase/storage",py="@firebase/storage-compat",my="@firebase/firestore",_y="@firebase/ai",gy="@firebase/firestore-compat",yy="firebase",Ey="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="[DEFAULT]",Ty={[ua]:"fire-core",[Gg]:"fire-core-compat",[Qg]:"fire-analytics",[Kg]:"fire-analytics-compat",[Jg]:"fire-app-check",[Yg]:"fire-app-check-compat",[Xg]:"fire-auth",[Zg]:"fire-auth-compat",[ey]:"fire-rtdb",[ty]:"fire-data-connect",[ny]:"fire-rtdb-compat",[sy]:"fire-fn",[ry]:"fire-fn-compat",[iy]:"fire-iid",[oy]:"fire-iid-compat",[ay]:"fire-fcm",[cy]:"fire-fcm-compat",[ly]:"fire-perf",[uy]:"fire-perf-compat",[hy]:"fire-rc",[dy]:"fire-rc-compat",[fy]:"fire-gcs",[py]:"fire-gcs-compat",[my]:"fire-fst",[gy]:"fire-fst-compat",[_y]:"fire-vertex","fire-js":"fire-js",[yy]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new Map,Iy=new Map,da=new Map;function _u(n,e){try{n.container.addComponent(e)}catch(t){wt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function yn(n){const e=n.name;if(da.has(e))return wt.debug(`There were multiple attempts to register component ${e}.`),!1;da.set(e,n);for(const t of _i.values())_u(t,n);for(const t of Iy.values())_u(t,n);return!0}function Hi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function $e(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new yr("app","Firebase",vy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=Ey;function Md(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ha,automaticDataCollectionEnabled:!0,...e},r=s.name;if(typeof r!="string"||!r)throw jt.create("bad-app-name",{appName:String(r)});if(t||(t=bd()),!t)throw jt.create("no-options");const i=_i.get(r);if(i){if(Qt(t,i.options)&&Qt(s,i.config))return i;throw jt.create("duplicate-app",{appName:r})}const o=new Pg(r);for(const l of da.values())o.addComponent(l);const c=new wy(t,s,o);return _i.set(r,c),c}function Xa(n=ha){const e=_i.get(n);if(!e&&n===ha&&bd())return Md();if(!e)throw jt.create("no-app",{appName:n});return e}function at(n,e,t){let s=Ty[n]??n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${s}" with version "${e}":`];r&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wt.warn(o.join(" "));return}yn(new Yt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay="firebase-heartbeat-database",Sy=1,ar="firebase-heartbeat-store";let zo=null;function Ld(){return zo||(zo=Wg(Ay,Sy,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ar)}catch(t){console.warn(t)}}}}).catch(n=>{throw jt.create("idb-open",{originalErrorMessage:n.message})})),zo}async function Ry(n){try{const t=(await Ld()).transaction(ar),s=await t.objectStore(ar).get(xd(n));return await t.done,s}catch(e){if(e instanceof bt)wt.warn(e.message);else{const t=jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wt.warn(t.message)}}}async function gu(n,e){try{const s=(await Ld()).transaction(ar,"readwrite");await s.objectStore(ar).put(e,xd(n)),await s.done}catch(t){if(t instanceof bt)wt.warn(t.message);else{const s=jt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});wt.warn(s.message)}}}function xd(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=1024,by=30;class Py{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ky(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=yu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>by){const o=Dy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){wt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yu(),{heartbeatsToSend:s,unsentEntries:r}=Ny(this._heartbeatsCache.heartbeats),i=fi(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return wt.warn(t),""}}}function yu(){return new Date().toISOString().substring(0,10)}function Ny(n,e=Cy){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Eu(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Eu(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class ky{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fg()?pg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ry(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return gu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return gu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Eu(n){return fi(JSON.stringify({version:2,heartbeats:n})).length}function Dy(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(n){yn(new Yt("platform-logger",e=>new Hg(e),"PRIVATE")),yn(new Yt("heartbeat",e=>new Py(e),"PRIVATE")),at(ua,mu,n),at(ua,mu,"esm2020"),at("fire-js","")}Oy("");function Fd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Vy=Fd,Ud=new yr("auth","Firebase",Fd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new $i("@firebase/auth");function My(n,...e){gi.logLevel<=W.WARN&&gi.warn(`Auth (${Pn}): ${n}`,...e)}function ni(n,...e){gi.logLevel<=W.ERROR&&gi.error(`Auth (${Pn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,...e){throw Za(n,...e)}function ct(n,...e){return Za(n,...e)}function Bd(n,e,t){const s={...Vy(),[e]:t};return new yr("auth","Firebase",s).create(e,{appName:n.name})}function Tt(n){return Bd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Za(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Ud.create(n,...e)}function x(n,e,...t){if(!n)throw Za(e,...t)}function gt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ni(e),new Error(e)}function At(n,e){n||gt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Ly(){return Tu()==="http:"||Tu()==="https:"}function Tu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ly()||lg()||"connection"in navigator)?navigator.onLine:!0}function Fy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t){this.shortDelay=e,this.longDelay=t,At(t>e,"Short delay should be less than long delay!"),this.isMobile=Qa()||kd()}get(){return xy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n,e){At(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qy=new Er(3e4,6e4);function Nn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function mt(n,e,t,s,r={}){return Wd(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const c=ds({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...i};return cg()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&bn(n.emulatorConfig.host)&&(h.credentials="include"),qd.fetch()(await jd(n,n.config.apiHost,t,c),h)})}async function Wd(n,e,t){n._canInitEmulator=!1;const s={...Uy,...e};try{const r=new jy(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Kr(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Kr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Kr(n,"user-disabled",o);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Bd(n,f,h);tt(n,f)}}catch(r){if(r instanceof bt)throw r;tt(n,"network-request-failed",{message:String(r)})}}async function zi(n,e,t,s,r={}){const i=await mt(n,e,t,s,r);return"mfaPendingCredential"in i&&tt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function jd(n,e,t,s){const r=`${e}${t}?${s}`,i=n,o=i.config.emulator?ec(n.config,r):`${n.config.apiScheme}://${r}`;return By.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function Wy(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ct(this.auth,"network-request-failed")),qy.get())})}}function Kr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=ct(n,e,s);return r.customData._tokenResponse=t,r}function Iu(n){return n!==void 0&&n.enterprise!==void 0}class $y{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Wy(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Hy(n,e){return mt(n,"GET","/v2/recaptchaConfig",Nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zy(n,e){return mt(n,"POST","/v1/accounts:delete",e)}async function yi(n,e){return mt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gy(n,e=!1){const t=ce(n),s=await t.getIdToken(e),r=tc(s);x(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Js(Go(r.auth_time)),issuedAtTime:Js(Go(r.iat)),expirationTime:Js(Go(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Go(n){return Number(n)*1e3}function tc(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return ni("JWT malformed, contained fewer than 3 sections"),null;try{const r=pi(t);return r?JSON.parse(r):(ni("Failed to decode base64 JWT payload"),null)}catch(r){return ni("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function vu(n){const e=tc(n);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof bt&&Ky(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Ky({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(n){var p;const e=n.auth,t=await n.getIdToken(),s=await En(n,yi(e,{idToken:t}));x(s==null?void 0:s.users.length,e,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const i=(p=r.providerUserInfo)!=null&&p.length?$d(r.providerUserInfo):[],o=Jy(n.providerData,i),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new pa(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,f)}async function Yy(n){const e=ce(n);await Ei(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jy(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function $d(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xy(n,e){const t=await Wd(n,{},async()=>{const s=ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=await jd(n,r,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:s};return n.emulatorConfig&&bn(n.emulatorConfig.host)&&(l.credentials="include"),qd.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Zy(n,e){return mt(n,"POST","/v2/accounts:revokeToken",Nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){x(e.length!==0,"internal-error");const t=vu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await Xy(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new Gn;return s&&(x(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(x(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(x(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gn,this.toJSON())}_performRefresh(){return gt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n,e){x(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Je{constructor({uid:e,auth:t,stsTokenManager:s,...r}){this.providerId="firebase",this.proactiveRefresh=new Qy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new pa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await En(this,this.stsTokenManager.getToken(this.auth,e));return x(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Gy(this,e)}reload(){return Yy(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Je({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Ei(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($e(this.auth.app))return Promise.reject(Tt(this.auth));const e=await this.getIdToken();return await En(this,zy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:R,providerData:P,stsTokenManager:O}=t;x(p&&O,e,"internal-error");const k=Gn.fromJSON(this.name,O);x(typeof p=="string",e,"internal-error"),Lt(s,e.name),Lt(r,e.name),x(typeof g=="boolean",e,"internal-error"),x(typeof R=="boolean",e,"internal-error"),Lt(i,e.name),Lt(o,e.name),Lt(c,e.name),Lt(l,e.name),Lt(h,e.name),Lt(f,e.name);const z=new Je({uid:p,auth:e,email:r,emailVerified:g,displayName:s,isAnonymous:R,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:k,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(z.providerData=P.map(G=>({...G}))),l&&(z._redirectEventId=l),z}static async _fromIdTokenResponse(e,t,s=!1){const r=new Gn;r.updateFromServerResponse(t);const i=new Je({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ei(i),i}static async _fromGetAccountInfoResponse(e,t,s){const r=t.users[0];x(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?$d(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new Gn;c.updateFromIdToken(s);const l=new Je({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new pa(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new Map;function yt(n){At(n instanceof Function,"Expected a class definition");let e=wu.get(n);return e?(At(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,wu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Hd.type="NONE";const Au=Hd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(n,e,t){return`firebase:${n}:${e}:${t}`}class Kn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=si(this.userKey,r.apiKey,i),this.fullPersistenceKey=si("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await yi(this.auth,{idToken:e}).catch(()=>{});return t?Je._fromGetAccountInfoResponse(this.auth,t,e):null}return Je._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Kn(yt(Au),e,s);const r=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||yt(Au);const o=si(s,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await yi(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Je._fromGetAccountInfoResponse(e,g,f)}else p=Je._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=r.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Kn(i,e,s):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Kn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jd(e))return"Blackberry";if(Xd(e))return"Webos";if(Gd(e))return"Safari";if((e.includes("chrome/")||Kd(e))&&!e.includes("edge/"))return"Chrome";if(Yd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function zd(n=Me()){return/firefox\//i.test(n)}function Gd(n=Me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kd(n=Me()){return/crios\//i.test(n)}function Qd(n=Me()){return/iemobile/i.test(n)}function Yd(n=Me()){return/android/i.test(n)}function Jd(n=Me()){return/blackberry/i.test(n)}function Xd(n=Me()){return/webos/i.test(n)}function nc(n=Me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function eE(n=Me()){var e;return nc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function tE(){return ug()&&document.documentMode===10}function Zd(n=Me()){return nc(n)||Yd(n)||Xd(n)||Jd(n)||/windows phone/i.test(n)||Qd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(n,e=[]){let t;switch(n){case"Browser":t=Su(Me());break;case"Worker":t=`${Su(Me())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Pn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(n,e={}){return mt(n,"GET","/v2/passwordPolicy",Nn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=6;class iE{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??rE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,t,s,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ru(this),this.idTokenSubscription=new Ru(this),this.beforeStateQueue=new nE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ud,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yt(t)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await Kn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yi(this,{idToken:e}),s=await Je._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if($e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ei(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($e(this.app))return Promise.reject(Tt(this));const t=e?ce(e):null;return t&&x(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $e(this.app)?Promise.reject(Tt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $e(this.app)?Promise.reject(Tt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sE(this),t=new iE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yr("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Zy(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yt(e)||this._popupRedirectResolver;x(t,this,"argument-error"),this.redirectPersistenceManager=await Kn.create(this,[yt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ef(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if($e(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&My(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fs(n){return ce(n)}class Ru{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ig(t=>this.observer=t)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aE(n){Gi=n}function tf(n){return Gi.loadJS(n)}function cE(){return Gi.recaptchaEnterpriseScript}function lE(){return Gi.gapiScript}function uE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class hE{constructor(){this.enterprise=new dE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class dE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const fE="recaptcha-enterprise",nf="NO_RECAPTCHA";class pE{constructor(e){this.type=fE,this.auth=fs(e)}async verify(e="verify",t=!1){async function s(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Hy(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new $y(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function r(i,o,c){const l=window.grecaptcha;Iu(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(nf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new hE().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{s(this.auth).then(c=>{if(!t&&Iu(window.grecaptcha))r(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=cE();l.length!==0&&(l+=c),tf(l).then(()=>{r(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Cu(n,e,t,s=!1,r=!1){const i=new pE(n);let o;if(r)o=nf;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function bu(n,e,t,s,r){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Cu(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Cu(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(n,e){const t=Hi(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Qt(i,e??{}))return r;tt(r,"already-initialized")}return t.initialize({options:e})}function _E(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(yt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function gE(n,e,t){const s=fs(n);x(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=sf(e),{host:o,port:c}=yE(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){x(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),x(Qt(h,s.config.emulator)&&Qt(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=h,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,bn(o)?Ya(`${i}//${o}${l}`):EE()}function sf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function yE(n){const e=sf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Pu(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Pu(o)}}}function Pu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function EE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gt("not implemented")}_getIdTokenResponse(e){return gt("not implemented")}_linkToIdToken(e,t){return gt("not implemented")}_getReauthenticationResolver(e){return gt("not implemented")}}async function TE(n,e){return mt(n,"POST","/v1/accounts:update",e)}async function IE(n,e){return mt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(n,e){return zi(n,"POST","/v1/accounts:signInWithPassword",Nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(n,e){return zi(n,"POST","/v1/accounts:signInWithEmailLink",Nn(n,e))}async function AE(n,e){return zi(n,"POST","/v1/accounts:signInWithEmailLink",Nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends sc{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new cr(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new cr(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bu(e,t,"signInWithPassword",vE);case"emailLink":return wE(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bu(e,s,"signUpPassword",IE);case"emailLink":return AE(e,{idToken:t,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qn(n,e){return zi(n,"POST","/v1/accounts:signInWithIdp",Nn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="http://localhost";class Tn extends sc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r,...i}=t;if(!s||!r)return null;const o=new Tn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Qn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Qn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qn(e,t)}buildRequest(){const e={requestUri:SE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ds(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RE(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CE(n){const e=$s(Hs(n)).link,t=e?$s(Hs(e)).deep_link_id:null,s=$s(Hs(n)).deep_link_id;return(s?$s(Hs(s)).link:null)||s||t||e||n}class rc{constructor(e){const t=$s(Hs(e)),s=t.apiKey??null,r=t.oobCode??null,i=RE(t.mode??null);x(s&&r&&i,"argument-error"),this.apiKey=s,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=CE(e);try{return new rc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.providerId=ps.PROVIDER_ID}static credential(e,t){return cr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=rc.parseLink(t);return x(s,"argument-error"),cr._fromEmailAndCode(e,s.code,s.tenantId)}}ps.PROVIDER_ID="password";ps.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ps.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr extends rf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Tr{constructor(){super("facebook.com")}static credential(e){return Tn._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Tn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Ft.credential(t,s)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Tr{constructor(){super("github.com")}static credential(e){return Tn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Tr{constructor(){super("twitter.com")}static credential(e,t){return Tn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Bt.credential(t,s)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Je._fromIdTokenResponse(e,s,r),o=Nu(s);return new ns({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=Nu(s);return new ns({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function Nu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends bt{constructor(e,t,s,r){super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ti.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new Ti(e,t,s,r)}}function of(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ti._fromErrorAndOperation(n,i,e,s):i})}async function bE(n,e,t=!1){const s=await En(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ns._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function af(n,e,t=!1){const{auth:s}=n;if($e(s.app))return Promise.reject(Tt(s));const r="reauthenticate";try{const i=await En(n,of(s,r,e,n),t);x(i.idToken,s,"internal-error");const o=tc(i.idToken);x(o,s,"internal-error");const{sub:c}=o;return x(n.uid===c,s,"user-mismatch"),ns._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tt(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cf(n,e,t=!1){if($e(n.app))return Promise.reject(Tt(n));const s="signIn",r=await of(n,s,e),i=await ns._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function PE(n,e){return cf(fs(n),e)}async function rC(n,e){return af(ce(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NE(n){const e=fs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function iC(n,e,t){return $e(n.app)?Promise.reject(Tt(n)):PE(ce(n),ps.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&NE(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kE(n,e){return mt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oC(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=ce(n),i={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await En(s,kE(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const c=s.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=s.displayName,c.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function aC(n,e){const t=ce(n);return $e(t.auth.app)?Promise.reject(Tt(t.auth)):lf(t,e,null)}function cC(n,e){return lf(ce(n),null,e)}async function lf(n,e,t){const{auth:s}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const o=await En(n,TE(s,i));await n._updateTokensIfNecessary(o,!0)}function DE(n,e,t,s){return ce(n).onIdTokenChanged(e,t,s)}function OE(n,e,t){return ce(n).beforeAuthStateChanged(e,t)}function lC(n,e,t,s){return ce(n).onAuthStateChanged(e,t,s)}const Ii="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ii,"1"),this.storage.removeItem(Ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=1e3,ME=10;class hf extends uf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);tE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ME):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},VE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hf.type="LOCAL";const LE=hf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df extends uf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}df.type="SESSION";const ff=df;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new Ki(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await xE(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ki.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=ic("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return window}function UE(n){lt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function BE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function WE(){return pf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="firebaseLocalStorageDb",jE=1,vi="firebaseLocalStorage",_f="fbase_key";class Ir{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qi(n,e){return n.transaction([vi],e?"readwrite":"readonly").objectStore(vi)}function $E(){const n=indexedDB.deleteDatabase(mf);return new Ir(n).toPromise()}function ma(){const n=indexedDB.open(mf,jE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(vi,{keyPath:_f})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(vi)?e(s):(s.close(),await $E(),e(await ma()))})})}async function ku(n,e,t){const s=Qi(n,!0).put({[_f]:e,value:t});return new Ir(s).toPromise()}async function HE(n,e){const t=Qi(n,!1).get(e),s=await new Ir(t).toPromise();return s===void 0?null:s.value}function Du(n,e){const t=Qi(n,!0).delete(e);return new Ir(t).toPromise()}const zE=800,GE=3;class gf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ma(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>GE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ki._getInstance(WE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await BE(),!this.activeServiceWorker)return;this.sender=new FE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ma();return await ku(e,Ii,"1"),await Du(e,Ii),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>ku(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>HE(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Du(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Qi(r,!1).getAll();return new Ir(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gf.type="LOCAL";const KE=gf;new Er(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(n,e){return e?yt(e):(x(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends sc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function YE(n){return cf(n.auth,new oc(n),n.bypassAuthState)}function JE(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),af(t,new oc(n),n.bypassAuthState)}async function XE(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),bE(t,new oc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YE;case"linkViaPopup":case"linkViaRedirect":return XE;case"reauthViaPopup":case"reauthViaRedirect":return JE;default:tt(this.auth,"internal-error")}}resolve(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){At(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=new Er(2e3,1e4);class $n extends yf{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){At(this.filter.length===1,"Popup operations only handle one event");const e=ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZE.get())};e()}}$n.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="pendingRedirect",ri=new Map;class tT extends yf{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ri.get(this.auth._key());if(!e){try{const s=await nT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ri.set(this.auth._key(),e)}return this.bypassAuthState||ri.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nT(n,e){const t=iT(e),s=rT(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function sT(n,e){ri.set(n._key(),e)}function rT(n){return yt(n._redirectPersistence)}function iT(n){return si(eT,n.config.apiKey,n.name)}async function oT(n,e,t=!1){if($e(n.app))return Promise.reject(Tt(n));const s=fs(n),r=QE(s,e),o=await new tT(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=10*60*1e3;class cT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!lT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Ef(e)){const r=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(ct(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ou(e))}saveEventToCache(e){this.cachedEventUids.add(Ou(e)),this.lastProcessedEventTime=Date.now()}}function Ou(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ef({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function lT(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ef(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uT(n,e={}){return mt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dT=/^https?/;async function fT(n){if(n.config.emulator)return;const{authorizedDomains:e}=await uT(n);for(const t of e)try{if(pT(t))return}catch{}tt(n,"unauthorized-domain")}function pT(n){const e=fa(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!dT.test(t))return!1;if(hT.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=new Er(3e4,6e4);function Vu(){const n=lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function _T(n){return new Promise((e,t)=>{var r,i,o;function s(){Vu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vu(),t(ct(n,"network-request-failed"))},timeout:mT.get()})}if((i=(r=lt().gapi)==null?void 0:r.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=lt().gapi)!=null&&o.load)s();else{const c=uE("iframefcb");return lt()[c]=()=>{gapi.load?s():t(ct(n,"network-request-failed"))},tf(`${lE()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ii=null,e})}let ii=null;function gT(n){return ii=ii||_T(n),ii}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=new Er(5e3,15e3),ET="__/auth/iframe",TT="emulator/auth/iframe",IT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wT(n){const e=n.config;x(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ec(e,TT):`https://${n.config.authDomain}/${ET}`,s={apiKey:e.apiKey,appName:n.name,v:Pn},r=vT.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${ds(s).slice(1)}`}async function AT(n){const e=await gT(n),t=lt().gapi;return x(t,n,"internal-error"),e.open({where:document.body,url:wT(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IT,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=ct(n,"network-request-failed"),c=lt().setTimeout(()=>{i(o)},yT.get());function l(){lt().clearTimeout(c),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},RT=500,CT=600,bT="_blank",PT="http://localhost";class Mu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NT(n,e,t,s=RT,r=CT){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const l={...ST,width:s.toString(),height:r.toString(),top:i,left:o},h=Me().toLowerCase();t&&(c=Kd(h)?bT:t),zd(h)&&(e=e||PT,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[R,P])=>`${g}${R}=${P},`,"");if(eE(h)&&c!=="_self")return kT(e||"",c),new Mu(null);const p=window.open(e||"",c,f);x(p,n,"popup-blocked");try{p.focus()}catch{}return new Mu(p)}function kT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="__/auth/handler",OT="emulator/auth/handler",VT=encodeURIComponent("fac");async function Lu(n,e,t,s,r,i){x(n.config.authDomain,n,"auth-domain-config-required"),x(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:Pn,eventId:r};if(e instanceof rf){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",aa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Tr){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await n._getAppCheckToken(),h=l?`#${VT}=${encodeURIComponent(l)}`:"";return`${MT(n)}?${ds(c).slice(1)}${h}`}function MT({config:n}){return n.emulator?ec(n,OT):`https://${n.authDomain}/${DT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko="webStorageSupport";class LT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ff,this._completeRedirectFn=oT,this._overrideRedirectResult=sT}async _openPopup(e,t,s,r){var o;At((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Lu(e,t,s,fa(),r);return NT(e,i,ic())}async _openRedirect(e,t,s,r){await this._originValidation(e);const i=await Lu(e,t,s,fa(),r);return UE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(At(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await AT(e),s=new cT(e);return t.register("authEvent",r=>(x(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ko,{type:Ko},r=>{var o;const i=(o=r==null?void 0:r[0])==null?void 0:o[Ko];i!==void 0&&t(!!i),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Zd()||Gd()||nc()}}const xT=LT;var xu="@firebase/auth",Fu="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BT(n){yn(new Yt("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;x(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ef(n)},h=new oE(s,r,i,l);return _E(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),yn(new Yt("auth-internal",e=>{const t=fs(e.getProvider("auth").getImmediate());return(s=>new FT(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(xu,Fu,UT(n)),at(xu,Fu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=5*60,WT=Pd("authIdTokenMaxAge")||qT;let Uu=null;const jT=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>WT)return;const r=t==null?void 0:t.token;Uu!==r&&(Uu=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function $T(n=Xa()){const e=Hi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=mE(n,{popupRedirectResolver:xT,persistence:[KE,LE,ff]}),s=Pd("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=jT(i.toString());OE(t,o,()=>o(t.currentUser)),DE(t,c=>o(c))}}const r=Rd("auth");return r&&gE(t,`http://${r}`),t}function HT(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}aE({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=ct("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",HT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BT("Browser");var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $t,Tf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function E(){}E.prototype=_.prototype,I.F=_.prototype,I.prototype=new E,I.prototype.constructor=I,I.D=function(v,T,A){for(var y=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)y[Ue-2]=arguments[Ue];return _.prototype[T].apply(v,y)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,_,E){E||(E=0);const v=Array(16);if(typeof _=="string")for(var T=0;T<16;++T)v[T]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(T=0;T<16;++T)v[T]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=I.g[0],E=I.g[1],T=I.g[2];let A=I.g[3],y;y=_+(A^E&(T^A))+v[0]+3614090360&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(T^_&(E^T))+v[1]+3905402710&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(E^A&(_^E))+v[2]+606105819&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(_^T&(A^_))+v[3]+3250441966&4294967295,E=T+(y<<22&4294967295|y>>>10),y=_+(A^E&(T^A))+v[4]+4118548399&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(T^_&(E^T))+v[5]+1200080426&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(E^A&(_^E))+v[6]+2821735955&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(_^T&(A^_))+v[7]+4249261313&4294967295,E=T+(y<<22&4294967295|y>>>10),y=_+(A^E&(T^A))+v[8]+1770035416&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(T^_&(E^T))+v[9]+2336552879&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(E^A&(_^E))+v[10]+4294925233&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(_^T&(A^_))+v[11]+2304563134&4294967295,E=T+(y<<22&4294967295|y>>>10),y=_+(A^E&(T^A))+v[12]+1804603682&4294967295,_=E+(y<<7&4294967295|y>>>25),y=A+(T^_&(E^T))+v[13]+4254626195&4294967295,A=_+(y<<12&4294967295|y>>>20),y=T+(E^A&(_^E))+v[14]+2792965006&4294967295,T=A+(y<<17&4294967295|y>>>15),y=E+(_^T&(A^_))+v[15]+1236535329&4294967295,E=T+(y<<22&4294967295|y>>>10),y=_+(T^A&(E^T))+v[1]+4129170786&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(_^E))+v[6]+3225465664&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^E&(A^_))+v[11]+643717713&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(T^A))+v[0]+3921069994&4294967295,E=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(E^T))+v[5]+3593408605&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(_^E))+v[10]+38016083&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^E&(A^_))+v[15]+3634488961&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(T^A))+v[4]+3889429448&4294967295,E=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(E^T))+v[9]+568446438&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(_^E))+v[14]+3275163606&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^E&(A^_))+v[3]+4107603335&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(T^A))+v[8]+1163531501&4294967295,E=T+(y<<20&4294967295|y>>>12),y=_+(T^A&(E^T))+v[13]+2850285829&4294967295,_=E+(y<<5&4294967295|y>>>27),y=A+(E^T&(_^E))+v[2]+4243563512&4294967295,A=_+(y<<9&4294967295|y>>>23),y=T+(_^E&(A^_))+v[7]+1735328473&4294967295,T=A+(y<<14&4294967295|y>>>18),y=E+(A^_&(T^A))+v[12]+2368359562&4294967295,E=T+(y<<20&4294967295|y>>>12),y=_+(E^T^A)+v[5]+4294588738&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^T)+v[8]+2272392833&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^E)+v[11]+1839030562&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^_)+v[14]+4259657740&4294967295,E=T+(y<<23&4294967295|y>>>9),y=_+(E^T^A)+v[1]+2763975236&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^T)+v[4]+1272893353&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^E)+v[7]+4139469664&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^_)+v[10]+3200236656&4294967295,E=T+(y<<23&4294967295|y>>>9),y=_+(E^T^A)+v[13]+681279174&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^T)+v[0]+3936430074&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^E)+v[3]+3572445317&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^_)+v[6]+76029189&4294967295,E=T+(y<<23&4294967295|y>>>9),y=_+(E^T^A)+v[9]+3654602809&4294967295,_=E+(y<<4&4294967295|y>>>28),y=A+(_^E^T)+v[12]+3873151461&4294967295,A=_+(y<<11&4294967295|y>>>21),y=T+(A^_^E)+v[15]+530742520&4294967295,T=A+(y<<16&4294967295|y>>>16),y=E+(T^A^_)+v[2]+3299628645&4294967295,E=T+(y<<23&4294967295|y>>>9),y=_+(T^(E|~A))+v[0]+4096336452&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~T))+v[7]+1126891415&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~E))+v[14]+2878612391&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~_))+v[5]+4237533241&4294967295,E=T+(y<<21&4294967295|y>>>11),y=_+(T^(E|~A))+v[12]+1700485571&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~T))+v[3]+2399980690&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~E))+v[10]+4293915773&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~_))+v[1]+2240044497&4294967295,E=T+(y<<21&4294967295|y>>>11),y=_+(T^(E|~A))+v[8]+1873313359&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~T))+v[15]+4264355552&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~E))+v[6]+2734768916&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~_))+v[13]+1309151649&4294967295,E=T+(y<<21&4294967295|y>>>11),y=_+(T^(E|~A))+v[4]+4149444226&4294967295,_=E+(y<<6&4294967295|y>>>26),y=A+(E^(_|~T))+v[11]+3174756917&4294967295,A=_+(y<<10&4294967295|y>>>22),y=T+(_^(A|~E))+v[2]+718787259&4294967295,T=A+(y<<15&4294967295|y>>>17),y=E+(A^(T|~_))+v[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(T+(y<<21&4294967295|y>>>11))&4294967295,I.g[2]=I.g[2]+T&4294967295,I.g[3]=I.g[3]+A&4294967295}s.prototype.v=function(I,_){_===void 0&&(_=I.length);const E=_-this.blockSize,v=this.C;let T=this.h,A=0;for(;A<_;){if(T==0)for(;A<=E;)r(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<_;)if(v[T++]=I.charCodeAt(A++),T==this.blockSize){r(this,v),T=0;break}}else for(;A<_;)if(v[T++]=I[A++],T==this.blockSize){r(this,v),T=0;break}}this.h=T,this.o+=_},s.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;_=this.o*8;for(var E=I.length-8;E<I.length;++E)I[E]=_&255,_/=256;for(this.v(I),I=Array(16),_=0,E=0;E<4;++E)for(let v=0;v<32;v+=8)I[_++]=this.g[E]>>>v&255;return I};function i(I,_){var E=c;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=_(I)}function o(I,_){this.h=_;const E=[];let v=!0;for(let T=I.length-1;T>=0;T--){const A=I[T]|0;v&&A==_||(E[T]=A,v=!1)}this.g=E}var c={};function l(I){return-128<=I&&I<128?i(I,function(_){return new o([_|0],_<0?-1:0)}):new o([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(I<0)return k(h(-I));const _=[];let E=1;for(let v=0;I>=E;v++)_[v]=I/E|0,E*=4294967296;return new o(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return k(f(I.substring(1),_));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(_,8));let v=p;for(let A=0;A<I.length;A+=8){var T=Math.min(8,I.length-A);const y=parseInt(I.substring(A,A+T),_);T<8?(T=h(Math.pow(_,T)),v=v.j(T).add(h(y))):(v=v.j(E),v=v.add(h(y)))}return v}var p=l(0),g=l(1),R=l(16777216);n=o.prototype,n.m=function(){if(O(this))return-k(this).m();let I=0,_=1;for(let E=0;E<this.g.length;E++){const v=this.i(E);I+=(v>=0?v:4294967296+v)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(P(this))return"0";if(O(this))return"-"+k(this).toString(I);const _=h(Math.pow(I,6));var E=this;let v="";for(;;){const T=Fe(E,_).g;E=z(E,T.j(_));let A=((E.g.length>0?E.g[0]:E.h)>>>0).toString(I);if(E=T,P(E))return A+v;for(;A.length<6;)A="0"+A;v=A+v}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function P(I){if(I.h!=0)return!1;for(let _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function O(I){return I.h==-1}n.l=function(I){return I=z(this,I),O(I)?-1:P(I)?0:1};function k(I){const _=I.g.length,E=[];for(let v=0;v<_;v++)E[v]=~I.g[v];return new o(E,~I.h).add(g)}n.abs=function(){return O(this)?k(this):this},n.add=function(I){const _=Math.max(this.g.length,I.g.length),E=[];let v=0;for(let T=0;T<=_;T++){let A=v+(this.i(T)&65535)+(I.i(T)&65535),y=(A>>>16)+(this.i(T)>>>16)+(I.i(T)>>>16);v=y>>>16,A&=65535,y&=65535,E[T]=y<<16|A}return new o(E,E[E.length-1]&-2147483648?-1:0)};function z(I,_){return I.add(k(_))}n.j=function(I){if(P(this)||P(I))return p;if(O(this))return O(I)?k(this).j(k(I)):k(k(this).j(I));if(O(I))return k(this.j(k(I)));if(this.l(R)<0&&I.l(R)<0)return h(this.m()*I.m());const _=this.g.length+I.g.length,E=[];for(var v=0;v<2*_;v++)E[v]=0;for(v=0;v<this.g.length;v++)for(let T=0;T<I.g.length;T++){const A=this.i(v)>>>16,y=this.i(v)&65535,Ue=I.i(T)>>>16,an=I.i(T)&65535;E[2*v+2*T]+=y*an,G(E,2*v+2*T),E[2*v+2*T+1]+=A*an,G(E,2*v+2*T+1),E[2*v+2*T+1]+=y*Ue,G(E,2*v+2*T+1),E[2*v+2*T+2]+=A*Ue,G(E,2*v+2*T+2)}for(I=0;I<_;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=_;I<2*_;I++)E[I]=0;return new o(E,0)};function G(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function te(I,_){this.g=I,this.h=_}function Fe(I,_){if(P(_))throw Error("division by zero");if(P(I))return new te(p,p);if(O(I))return _=Fe(k(I),_),new te(k(_.g),k(_.h));if(O(_))return _=Fe(I,k(_)),new te(k(_.g),_.h);if(I.g.length>30){if(O(I)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,v=_;v.l(I)<=0;)E=Re(E),v=Re(v);var T=Ce(E,1),A=Ce(v,1);for(v=Ce(v,2),E=Ce(E,2);!P(v);){var y=A.add(v);y.l(I)<=0&&(T=T.add(E),A=y),v=Ce(v,1),E=Ce(E,1)}return _=z(I,T.j(_)),new te(T,_)}for(T=p;I.l(_)>=0;){for(E=Math.max(1,Math.floor(I.m()/_.m())),v=Math.ceil(Math.log(E)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),A=h(E),y=A.j(_);O(y)||y.l(I)>0;)E-=v,A=h(E),y=A.j(_);P(A)&&(A=g),T=T.add(A),I=z(I,y)}return new te(T,I)}n.B=function(I){return Fe(this,I).h},n.and=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)&I.i(v);return new o(E,this.h&I.h)},n.or=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)|I.i(v);return new o(E,this.h|I.h)},n.xor=function(I){const _=Math.max(this.g.length,I.g.length),E=[];for(let v=0;v<_;v++)E[v]=this.i(v)^I.i(v);return new o(E,this.h^I.h)};function Re(I){const _=I.g.length+1,E=[];for(let v=0;v<_;v++)E[v]=I.i(v)<<1|I.i(v-1)>>>31;return new o(E,I.h)}function Ce(I,_){const E=_>>5;_%=32;const v=I.g.length-E,T=[];for(let A=0;A<v;A++)T[A]=_>0?I.i(A+E)>>>_|I.i(A+E+1)<<32-_:I.i(A+E);return new o(T,I.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Tf=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,$t=o}).apply(typeof Bu<"u"?Bu:typeof self<"u"?self:typeof window<"u"?window:{});var Qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var If,zs,vf,oi,_a,wf,Af,Sf;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qr=="object"&&Qr];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var s=t(this);function r(a,u){if(u)e:{var d=s;a=a.split(".");for(var m=0;m<a.length-1;m++){var w=a[m];if(!(w in d))break e;d=d[w]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(u){var d=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&d.push([m,u[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,w,S){for(var N=Array(arguments.length-2),q=2;q<arguments.length;q++)N[q-2]=arguments[q];return u.prototype[w].apply(m,N)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function R(a){const u=a.length;if(u>0){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function P(a,u){for(let m=1;m<arguments.length;m++){const w=arguments[m];var d=typeof w;if(d=d!="object"?d:w?Array.isArray(w)?"array":d:"null",d=="array"||d=="object"&&typeof w.length=="number"){d=a.length||0;const S=w.length||0;a.length=d+S;for(let N=0;N<S;N++)a[d+N]=w[N]}else a.push(w)}}class O{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function k(a){o.setTimeout(()=>{throw a},0)}function z(){var a=I;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class G{constructor(){this.h=this.g=null}add(u,d){const m=te.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var te=new O(()=>new Fe,a=>a.reset());class Fe{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,Ce=!1,I=new G,_=()=>{const a=Promise.resolve(void 0);Re=()=>{a.then(E)}};function E(){for(var a;a=z();){try{a.h.call(a.g)}catch(d){k(d)}var u=te;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}Ce=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function y(a){return/^[\s\xa0]*$/.test(a)}function Ue(a,u){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p(Ue,T),Ue.prototype.init=function(a,u){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ue.Z.h.call(this)},Ue.prototype.h=function(){Ue.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var an="closure_listenable_"+(Math.random()*1e6|0),p_=0;function m_(a,u,d,m,w){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=w,this.key=++p_,this.da=this.fa=!1}function Or(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Vr(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function __(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function cl(a){const u={};for(const d in a)u[d]=a[d];return u}const ll="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ul(a,u){let d,m;for(let w=1;w<arguments.length;w++){m=arguments[w];for(d in m)a[d]=m[d];for(let S=0;S<ll.length;S++)d=ll[S],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function Mr(a){this.src=a,this.g={},this.h=0}Mr.prototype.add=function(a,u,d,m,w){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const N=Eo(a,u,m,w);return N>-1?(u=a[N],d||(u.fa=!1)):(u=new m_(u,this.src,S,!!m,w),u.fa=d,a.push(u)),u};function yo(a,u){const d=u.type;if(d in a.g){var m=a.g[d],w=Array.prototype.indexOf.call(m,u,void 0),S;(S=w>=0)&&Array.prototype.splice.call(m,w,1),S&&(Or(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Eo(a,u,d,m){for(let w=0;w<a.length;++w){const S=a[w];if(!S.da&&S.listener==u&&S.capture==!!d&&S.ha==m)return w}return-1}var To="closure_lm_"+(Math.random()*1e6|0),Io={};function hl(a,u,d,m,w){if(Array.isArray(u)){for(let S=0;S<u.length;S++)hl(a,u[S],d,m,w);return null}return d=pl(d),a&&a[an]?a.J(u,d,c(m)?!!m.capture:!1,w):g_(a,u,d,!1,m,w)}function g_(a,u,d,m,w,S){if(!u)throw Error("Invalid event type");const N=c(w)?!!w.capture:!!w;let q=wo(a);if(q||(a[To]=q=new Mr(a)),d=q.add(u,d,m,N,S),d.proxy)return d;if(m=y_(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)A||(w=N),w===void 0&&(w=!1),a.addEventListener(u.toString(),m,w);else if(a.attachEvent)a.attachEvent(fl(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function y_(){function a(d){return u.call(a.src,a.listener,d)}const u=E_;return a}function dl(a,u,d,m,w){if(Array.isArray(u))for(var S=0;S<u.length;S++)dl(a,u[S],d,m,w);else m=c(m)?!!m.capture:!!m,d=pl(d),a&&a[an]?(a=a.i,S=String(u).toString(),S in a.g&&(u=a.g[S],d=Eo(u,d,m,w),d>-1&&(Or(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[S],a.h--)))):a&&(a=wo(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Eo(u,d,m,w)),(d=a>-1?u[a]:null)&&vo(d))}function vo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[an])yo(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(fl(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=wo(u))?(yo(d,a),d.h==0&&(d.src=null,u[To]=null)):Or(a)}}}function fl(a){return a in Io?Io[a]:Io[a]="on"+a}function E_(a,u){if(a.da)a=!0;else{u=new Ue(u,this);const d=a.listener,m=a.ha||a.src;a.fa&&vo(a),a=d.call(m,u)}return a}function wo(a){return a=a[To],a instanceof Mr?a:null}var Ao="__closure_events_fn_"+(Math.random()*1e9>>>0);function pl(a){return typeof a=="function"?a:(a[Ao]||(a[Ao]=function(u){return a.handleEvent(u)}),a[Ao])}function be(){v.call(this),this.i=new Mr(this),this.M=this,this.G=null}p(be,v),be.prototype[an]=!0,be.prototype.removeEventListener=function(a,u,d,m){dl(this,a,u,d,m)};function Le(a,u){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new T(u,a);else if(u instanceof T)u.target=u.target||a;else{var w=u;u=new T(m,a),ul(u,w)}w=!0;let S,N;if(d)for(N=d.length-1;N>=0;N--)S=u.g=d[N],w=Lr(S,m,!0,u)&&w;if(S=u.g=a,w=Lr(S,m,!0,u)&&w,w=Lr(S,m,!1,u)&&w,d)for(N=0;N<d.length;N++)S=u.g=d[N],w=Lr(S,m,!1,u)&&w}be.prototype.N=function(){if(be.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let m=0;m<d.length;m++)Or(d[m]);delete a.g[u],a.h--}}this.G=null},be.prototype.J=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},be.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Lr(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let w=!0;for(let S=0;S<u.length;++S){const N=u[S];if(N&&!N.da&&N.capture==d){const q=N.listener,_e=N.ha||N.src;N.fa&&yo(a.i,N),w=q.call(_e,m)!==!1&&w}}return w&&!m.defaultPrevented}function T_(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function ml(a){a.g=T_(()=>{a.g=null,a.i&&(a.i=!1,ml(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class I_ extends v{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:ml(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ws(a){v.call(this),this.h=a,this.g={}}p(ws,v);var _l=[];function gl(a){Vr(a.g,function(u,d){this.g.hasOwnProperty(d)&&vo(u)},a),a.g={}}ws.prototype.N=function(){ws.Z.N.call(this),gl(this)},ws.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var So=o.JSON.stringify,v_=o.JSON.parse,w_=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function yl(){}function El(){}var As={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ro(){T.call(this,"d")}p(Ro,T);function Co(){T.call(this,"c")}p(Co,T);var cn={},Tl=null;function xr(){return Tl=Tl||new be}cn.Ia="serverreachability";function Il(a){T.call(this,cn.Ia,a)}p(Il,T);function Ss(a){const u=xr();Le(u,new Il(u))}cn.STAT_EVENT="statevent";function vl(a,u){T.call(this,cn.STAT_EVENT,a),this.stat=u}p(vl,T);function xe(a){const u=xr();Le(u,new vl(u,a))}cn.Ja="timingevent";function wl(a,u){T.call(this,cn.Ja,a),this.size=u}p(wl,T);function Rs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Cs(){this.g=!0}Cs.prototype.ua=function(){this.g=!1};function A_(a,u,d,m,w,S){a.info(function(){if(a.g)if(S){var N="",q=S.split("&");for(let ee=0;ee<q.length;ee++){var _e=q[ee].split("=");if(_e.length>1){const ye=_e[0];_e=_e[1];const rt=ye.split("_");N=rt.length>=2&&rt[1]=="type"?N+(ye+"="+_e+"&"):N+(ye+"=redacted&")}}}else N=null;else N=S;return"XMLHTTP REQ ("+m+") [attempt "+w+"]: "+u+`
`+d+`
`+N})}function S_(a,u,d,m,w,S,N){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+w+"]: "+u+`
`+d+`
`+S+" "+N})}function Ln(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+C_(a,d)+(m?" "+m:"")})}function R_(a,u){a.info(function(){return"TIMEOUT: "+u})}Cs.prototype.info=function(){};function C_(a,u){if(!a.g)return u;if(!u)return null;try{const S=JSON.parse(u);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var d=S[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var w=m[0];if(w!="noop"&&w!="stop"&&w!="close")for(let N=1;N<m.length;N++)m[N]=""}}}}return So(S)}catch{return u}}var Fr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Al={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Sl;function bo(){}p(bo,yl),bo.prototype.g=function(){return new XMLHttpRequest},Sl=new bo;function bs(a){return encodeURIComponent(String(a))}function b_(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function Nt(a,u,d,m){this.j=a,this.i=u,this.l=d,this.S=m||1,this.V=new ws(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Rl}function Rl(){this.i=null,this.g="",this.h=!1}var Cl={},Po={};function No(a,u,d){a.M=1,a.A=Br(st(u)),a.u=d,a.R=!0,bl(a,null)}function bl(a,u){a.F=Date.now(),Ur(a),a.B=st(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),ql(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Rl,a.g=iu(a.j,d?u:null,!a.u),a.P>0&&(a.O=new I_(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,m=a.ba;var w="readystatechange";Array.isArray(w)||(w&&(_l[0]=w.toString()),w=_l);for(let S=0;S<w.length;S++){const N=hl(d,w[S],m||u.handleEvent,!1,u.h||u);if(!N)break;u.g[N.key]=N}u=a.J?cl(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Ss(),A_(a.i,a.v,a.B,a.l,a.S,a.u)}Nt.prototype.ba=function(a){a=a.target;const u=this.O;u&&Ot(a)==3?u.j():this.Y(a)},Nt.prototype.Y=function(a){try{if(a==this.g)e:{const q=Ot(this.g),_e=this.g.ya(),ee=this.g.ca();if(!(q<3)&&(q!=3||this.g&&(this.h.h||this.g.la()||Kl(this.g)))){this.K||q!=4||_e==7||(_e==8||ee<=0?Ss(3):Ss(2)),ko(this);var u=this.g.ca();this.X=u;var d=P_(this);if(this.o=u==200,S_(this.i,this.v,this.B,this.l,this.S,q,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,w=this.g;if((m=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(m)){var S=m;break t}}S=null}if(a=S)Ln(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Do(this,a);else{this.o=!1,this.m=3,xe(12),ln(this),Ps(this);break e}}if(this.R){a=!0;let ye;for(;!this.K&&this.C<d.length;)if(ye=N_(this,d),ye==Po){q==4&&(this.m=4,xe(14),a=!1),Ln(this.i,this.l,null,"[Incomplete Response]");break}else if(ye==Cl){this.m=4,xe(15),Ln(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Ln(this.i,this.l,ye,null),Do(this,ye);if(Pl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||d.length!=0||this.h.h||(this.m=1,xe(16),a=!1),this.o=this.o&&a,!a)Ln(this.i,this.l,d,"[Invalid Chunked Response]"),ln(this),Ps(this);else if(d.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Bo(N),N.P=!0,xe(11))}}else Ln(this.i,this.l,d,null),Do(this,d);q==4&&ln(this),this.o&&!this.K&&(q==4?tu(this.j,this):(this.o=!1,Ur(this)))}else $_(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,xe(12)):(this.m=0,xe(13)),ln(this),Ps(this)}}}catch{}finally{}};function P_(a){if(!Pl(a))return a.g.la();const u=Kl(a.g);if(u==="")return"";let d="";const m=u.length,w=Ot(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ln(a),Ps(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<m;S++)a.h.h=!0,d+=a.h.i.decode(u[S],{stream:!(w&&S==m-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function Pl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function N_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Po:(d=Number(u.substring(d,m)),isNaN(d)?Cl:(m+=1,m+d>u.length?Po:(u=u.slice(m,m+d),a.C=m+d,u)))}Nt.prototype.cancel=function(){this.K=!0,ln(this)};function Ur(a){a.T=Date.now()+a.H,Nl(a,a.H)}function Nl(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Rs(h(a.aa,a),u)}function ko(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Nt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(R_(this.i,this.B),this.M!=2&&(Ss(),xe(17)),ln(this),this.m=2,Ps(this)):Nl(this,this.T-a)};function Ps(a){a.j.I==0||a.K||tu(a.j,a)}function ln(a){ko(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,gl(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function Do(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||Oo(d.h,a))){if(!a.L&&Oo(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var w=m;if(w[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Hr(d),jr(d);else break e;Uo(d),xe(18)}}else d.xa=w[1],0<d.xa-d.K&&w[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Rs(h(d.Va,d),6e3));Ol(d.h)<=1&&d.ta&&(d.ta=void 0)}else hn(d,11)}else if((a.L||d.g==a)&&Hr(d),!y(u))for(w=d.Ba.g.parse(u),u=0;u<w.length;u++){let ee=w[u];const ye=ee[0];if(!(ye<=d.K))if(d.K=ye,ee=ee[1],d.I==2)if(ee[0]=="c"){d.M=ee[1],d.ba=ee[2];const rt=ee[3];rt!=null&&(d.ka=rt,d.j.info("VER="+d.ka));const dn=ee[4];dn!=null&&(d.za=dn,d.j.info("SVER="+d.za));const Vt=ee[5];Vt!=null&&typeof Vt=="number"&&Vt>0&&(m=1.5*Vt,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Mt=a.g;if(Mt){const Gr=Mt.g?Mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gr){var S=m.h;S.g||Gr.indexOf("spdy")==-1&&Gr.indexOf("quic")==-1&&Gr.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Vo(S,S.h),S.h=null))}if(m.G){const qo=Mt.g?Mt.g.getResponseHeader("X-HTTP-Session-Id"):null;qo&&(m.wa=qo,se(m.J,m.G,qo))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var N=a;if(m.na=ru(m,m.L?m.ba:null,m.W),N.L){Vl(m.h,N);var q=N,_e=m.O;_e&&(q.H=_e),q.D&&(ko(q),Ur(q)),m.g=N}else Zl(m);d.i.length>0&&$r(d)}else ee[0]!="stop"&&ee[0]!="close"||hn(d,7);else d.I==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?hn(d,7):Fo(d):ee[0]!="noop"&&d.l&&d.l.qa(ee),d.A=0)}}Ss(4)}catch{}}var k_=class{constructor(a,u){this.g=a,this.map=u}};function kl(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Dl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ol(a){return a.h?1:a.g?a.g.size:0}function Oo(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Vo(a,u){a.g?a.g.add(u):a.h=u}function Vl(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}kl.prototype.cancel=function(){if(this.i=Ml(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ml(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return R(a.i)}var Ll=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function D_(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let w,S=null;m>=0?(w=a[d].substring(0,m),S=a[d].substring(m+1)):w=a[d],u(w,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function kt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof kt?(this.l=a.l,Ns(this,a.j),this.o=a.o,this.g=a.g,ks(this,a.u),this.h=a.h,Mo(this,Wl(a.i)),this.m=a.m):a&&(u=String(a).match(Ll))?(this.l=!1,Ns(this,u[1]||"",!0),this.o=Ds(u[2]||""),this.g=Ds(u[3]||"",!0),ks(this,u[4]),this.h=Ds(u[5]||"",!0),Mo(this,u[6]||"",!0),this.m=Ds(u[7]||"")):(this.l=!1,this.i=new Vs(null,this.l))}kt.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Os(u,xl,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Os(u,xl,!0),"@"),a.push(bs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Os(d,d.charAt(0)=="/"?M_:V_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Os(d,x_)),a.join("")},kt.prototype.resolve=function(a){const u=st(this);let d=!!a.j;d?Ns(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var m=a.h;if(d)ks(u,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var w=u.h.lastIndexOf("/");w!=-1&&(m=u.h.slice(0,w+1)+m)}if(w=m,w==".."||w==".")m="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){m=w.lastIndexOf("/",0)==0,w=w.split("/");const S=[];for(let N=0;N<w.length;){const q=w[N++];q=="."?m&&N==w.length&&S.push(""):q==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),m&&N==w.length&&S.push("")):(S.push(q),m=!0)}m=S.join("/")}else m=w}return d?u.h=m:d=a.i.toString()!=="",d?Mo(u,Wl(a.i)):d=!!a.m,d&&(u.m=a.m),u};function st(a){return new kt(a)}function Ns(a,u,d){a.j=d?Ds(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function ks(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Mo(a,u,d){u instanceof Vs?(a.i=u,F_(a.i,a.l)):(d||(u=Os(u,L_)),a.i=new Vs(u,a.l))}function se(a,u,d){a.i.set(u,d)}function Br(a){return se(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ds(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Os(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,O_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function O_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var xl=/[#\/\?@]/g,V_=/[#\?:]/g,M_=/[#\?]/g,L_=/[#\?@]/g,x_=/#/g;function Vs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function un(a){a.g||(a.g=new Map,a.h=0,a.i&&D_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Vs.prototype,n.add=function(a,u){un(this),this.i=null,a=xn(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Fl(a,u){un(a),u=xn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Ul(a,u){return un(a),u=xn(a,u),a.g.has(u)}n.forEach=function(a,u){un(this),this.g.forEach(function(d,m){d.forEach(function(w){a.call(u,w,m,this)},this)},this)};function Bl(a,u){un(a);let d=[];if(typeof u=="string")Ul(a,u)&&(d=d.concat(a.g.get(xn(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}n.set=function(a,u){return un(this),this.i=null,a=xn(this,a),Ul(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=Bl(this,a),a.length>0?String(a[0]):u):u};function ql(a,u,d){Fl(a,u),d.length>0&&(a.i=null,a.g.set(xn(a,u),R(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var d=u[m];const w=bs(d);d=Bl(this,d);for(let S=0;S<d.length;S++){let N=w;d[S]!==""&&(N+="="+bs(d[S])),a.push(N)}}return this.i=a.join("&")};function Wl(a){const u=new Vs;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function xn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function F_(a,u){u&&!a.j&&(un(a),a.i=null,a.g.forEach(function(d,m){const w=m.toLowerCase();m!=w&&(Fl(this,m),ql(this,w,d))},a)),a.j=u}function U_(a,u){const d=new Cs;if(o.Image){const m=new Image;m.onload=f(Dt,d,"TestLoadImage: loaded",!0,u,m),m.onerror=f(Dt,d,"TestLoadImage: error",!1,u,m),m.onabort=f(Dt,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=f(Dt,d,"TestLoadImage: timeout",!1,u,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function B_(a,u){const d=new Cs,m=new AbortController,w=setTimeout(()=>{m.abort(),Dt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(S=>{clearTimeout(w),S.ok?Dt(d,"TestPingServer: ok",!0,u):Dt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),Dt(d,"TestPingServer: error",!1,u)})}function Dt(a,u,d,m,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),m(d)}catch{}}function q_(){this.g=new w_}function Lo(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Lo,yl),Lo.prototype.g=function(){return new qr(this.i,this.h)};function qr(a,u){be.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(qr,be),n=qr.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Ls(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ms(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;jl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function jl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ms(this):Ls(this),this.readyState==3&&jl(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Ms(this))},n.Na=function(a){this.g&&(this.response=a,Ms(this))},n.ga=function(){this.g&&Ms(this)};function Ms(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ls(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $l(a){let u="";return Vr(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function xo(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=$l(d),typeof a=="string"?d!=null&&bs(d):se(a,u,d))}function le(a){be.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(le,be);var W_=/^https?$/i,j_=["POST","PUT"];n=le.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Sl.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(S){Hl(this,S);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var w in m)d.set(w,m[w]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const S of m.keys())d.set(S,m.get(S));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),w=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(j_,u,void 0)>=0)||m||w||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,N]of d)this.g.setRequestHeader(S,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){Hl(this,S)}};function Hl(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,zl(a),Wr(a)}function zl(a){a.A||(a.A=!0,Le(a,"complete"),Le(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Le(this,"complete"),Le(this,"abort"),Wr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wr(this,!0)),le.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Gl(this):this.Xa())},n.Xa=function(){Gl(this)};function Gl(a){if(a.h&&typeof i<"u"){if(a.v&&Ot(a)==4)setTimeout(a.Ca.bind(a),0);else if(Le(a,"readystatechange"),Ot(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=S===0){let N=String(a.D).match(Ll)[1]||null;!N&&o.self&&o.self.location&&(N=o.self.location.protocol.slice(0,-1)),m=!W_.test(N?N.toLowerCase():"")}d=m}if(d)Le(a,"complete"),Le(a,"success");else{a.o=6;try{var w=Ot(a)>2?a.g.statusText:""}catch{w=""}a.l=w+" ["+a.ca()+"]",zl(a)}}finally{Wr(a)}}}}function Wr(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||Le(a,"ready");try{d.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ot(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Ot(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),v_(u)}};function Kl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $_(a){const u={};a=(a.g&&Ot(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(y(a[m]))continue;var d=b_(a[m]);const w=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=u[w]||[];u[w]=S,S.push(d)}__(u,function(m){return m.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function xs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Ql(a){this.za=0,this.i=[],this.j=new Cs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=xs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=xs("baseRetryDelayMs",5e3,a),this.Za=xs("retryDelaySeedMs",1e4,a),this.Ta=xs("forwardChannelMaxRetries",2,a),this.va=xs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new kl(a&&a.concurrentRequestLimit),this.Ba=new q_,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Ql.prototype,n.ka=8,n.I=1,n.connect=function(a,u,d,m){xe(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=ru(this,null,this.W),$r(this)};function Fo(a){if(Yl(a),a.I==3){var u=a.V++,d=st(a.J);if(se(d,"SID",a.M),se(d,"RID",u),se(d,"TYPE","terminate"),Fs(a,d),u=new Nt(a,a.j,u),u.M=2,u.A=Br(st(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=iu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ur(u)}su(a)}function jr(a){a.g&&(Bo(a),a.g.cancel(),a.g=null)}function Yl(a){jr(a),a.v&&(o.clearTimeout(a.v),a.v=null),Hr(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function $r(a){if(!Dl(a.h)&&!a.m){a.m=!0;var u=a.Ea;Re||_(),Ce||(Re(),Ce=!0),I.add(u,a),a.D=0}}function H_(a,u){return Ol(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Rs(h(a.Ea,a,u),nu(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const w=new Nt(this,this.j,a);let S=this.o;if(this.U&&(S?(S=cl(S),ul(S,this.U)):S=this.U),this.u!==null||this.R||(w.J=S,S=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Xl(this,w,u),d=st(this.J),se(d,"RID",a),se(d,"CVER",22),this.G&&se(d,"X-HTTP-Session-Id",this.G),Fs(this,d),S&&(this.R?u="headers="+bs($l(S))+"&"+u:this.u&&xo(d,this.u,S)),Vo(this.h,w),this.Ra&&se(d,"TYPE","init"),this.S?(se(d,"$req",u),se(d,"SID","null"),w.U=!0,No(w,d,null)):No(w,d,u),this.I=2}}else this.I==3&&(a?Jl(this,a):this.i.length==0||Dl(this.h)||Jl(this))};function Jl(a,u){var d;u?d=u.l:d=a.V++;const m=st(a.J);se(m,"SID",a.M),se(m,"RID",d),se(m,"AID",a.K),Fs(a,m),a.u&&a.o&&xo(m,a.u,a.o),d=new Nt(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Xl(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Vo(a.h,d),No(d,m,u)}function Fs(a,u){a.H&&Vr(a.H,function(d,m){se(u,m,d)}),a.l&&Vr({},function(d,m){se(u,m,d)})}function Xl(a,u,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var w=a.i;let q=-1;for(;;){const _e=["count="+d];q==-1?d>0?(q=w[0].g,_e.push("ofs="+q)):q=0:_e.push("ofs="+q);let ee=!0;for(let ye=0;ye<d;ye++){var S=w[ye].g;const rt=w[ye].map;if(S-=q,S<0)q=Math.max(0,w[ye].g-100),ee=!1;else try{S="req"+S+"_"||"";try{var N=rt instanceof Map?rt:Object.entries(rt);for(const[dn,Vt]of N){let Mt=Vt;c(Vt)&&(Mt=So(Vt)),_e.push(S+dn+"="+encodeURIComponent(Mt))}}catch(dn){throw _e.push(S+"type="+encodeURIComponent("_badmap")),dn}}catch{m&&m(rt)}}if(ee){N=_e.join("&");break e}}N=void 0}return a=a.i.splice(0,d),u.G=a,N}function Zl(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;Re||_(),Ce||(Re(),Ce=!0),I.add(u,a),a.A=0}}function Uo(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Rs(h(a.Da,a),nu(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,eu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Rs(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,xe(10),jr(this),eu(this))};function Bo(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function eu(a){a.g=new Nt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=st(a.na);se(u,"RID","rpc"),se(u,"SID",a.M),se(u,"AID",a.K),se(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&se(u,"TO",a.ia),se(u,"TYPE","xmlhttp"),Fs(a,u),a.u&&a.o&&xo(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Br(st(u)),d.u=null,d.R=!0,bl(d,a)}n.Va=function(){this.C!=null&&(this.C=null,jr(this),Uo(this),xe(19))};function Hr(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function tu(a,u){var d=null;if(a.g==u){Hr(a),Bo(a),a.g=null;var m=2}else if(Oo(a.h,u))d=u.G,Vl(a.h,u),m=1;else return;if(a.I!=0){if(u.o)if(m==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var w=a.D;m=xr(),Le(m,new wl(m,d)),$r(a)}else Zl(a);else if(w=u.m,w==3||w==0&&u.X>0||!(m==1&&H_(a,u)||m==2&&Uo(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),w){case 1:hn(a,5);break;case 4:hn(a,10);break;case 3:hn(a,6);break;default:hn(a,2)}}}function nu(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function hn(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),m=a.Ua;const w=!m;m=new kt(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ns(m,"https"),Br(m),w?U_(m.toString(),d):B_(m.toString(),d)}else xe(2);a.I=0,a.l&&a.l.pa(u),su(a),Yl(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function su(a){if(a.I=0,a.ja=[],a.l){const u=Ml(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ja,u),P(a.ja,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.oa()}}function ru(a,u,d){var m=d instanceof kt?st(d):new kt(d);if(m.g!="")u&&(m.g=u+"."+m.g),ks(m,m.u);else{var w=o.location;m=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;const S=new kt(null);m&&Ns(S,m),u&&(S.g=u),w&&ks(S,w),d&&(S.h=d),m=S}return d=a.G,u=a.wa,d&&u&&se(m,d,u),se(m,"VER",a.ka),Fs(a,m),m}function iu(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new le(new Lo({ab:d})):new le(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ou(){}n=ou.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function zr(){}zr.prototype.g=function(a,u){return new je(a,u)};function je(a,u){be.call(this),this.g=new Ql(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!y(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Fn(this)}p(je,be),je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},je.prototype.close=function(){Fo(this.g)},je.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=So(a),a=d);u.i.push(new k_(u.Ya++,a)),u.I==3&&$r(u)},je.prototype.N=function(){this.g.l=null,delete this.j,Fo(this.g),delete this.g,je.Z.N.call(this)};function au(a){Ro.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(au,Ro);function cu(){Co.call(this),this.status=1}p(cu,Co);function Fn(a){this.g=a}p(Fn,ou),Fn.prototype.ra=function(){Le(this.g,"a")},Fn.prototype.qa=function(a){Le(this.g,new au(a))},Fn.prototype.pa=function(a){Le(this.g,new cu)},Fn.prototype.oa=function(){Le(this.g,"b")},zr.prototype.createWebChannel=zr.prototype.g,je.prototype.send=je.prototype.o,je.prototype.open=je.prototype.m,je.prototype.close=je.prototype.close,Sf=function(){return new zr},Af=function(){return xr()},wf=cn,_a={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Fr.NO_ERROR=0,Fr.TIMEOUT=8,Fr.HTTP_ERROR=6,oi=Fr,Al.COMPLETE="complete",vf=Al,El.EventType=As,As.OPEN="a",As.CLOSE="b",As.ERROR="c",As.MESSAGE="d",be.prototype.listen=be.prototype.J,zs=El,le.prototype.listenOnce=le.prototype.K,le.prototype.getLastError=le.prototype.Ha,le.prototype.getLastErrorCode=le.prototype.ya,le.prototype.getStatus=le.prototype.ca,le.prototype.getResponseJson=le.prototype.La,le.prototype.getResponseText=le.prototype.la,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Fa,If=le}).apply(typeof Qr<"u"?Qr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms="12.12.0";function zT(n){ms=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new $i("@firebase/firestore");function Bn(){return In.logLevel}function M(n,...e){if(In.logLevel<=W.DEBUG){const t=e.map(ac);In.debug(`Firestore (${ms}): ${n}`,...t)}}function St(n,...e){if(In.logLevel<=W.ERROR){const t=e.map(ac);In.error(`Firestore (${ms}): ${n}`,...t)}}function vn(n,...e){if(In.logLevel<=W.WARN){const t=e.map(ac);In.warn(`Firestore (${ms}): ${n}`,...t)}}function ac(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Rf(n,s,t)}function Rf(n,e,t){let s=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw St(s),new Error(s)}function X(n,e,t,s){let r="Unexpected state";typeof t=="string"?r=t:s=t,n||Rf(e,r,s)}function B(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ne.UNAUTHENTICATED))}shutdown(){}}class KT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class QT{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let s=this.i;const r=l=>this.i!==s?(s=this.i,t(l)):Promise.resolve();let i=new Ht;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ht,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},c=l=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ht)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(X(typeof s.accessToken=="string",31837,{l:s}),new Cf(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new Ne(e)}}class YT{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class JT{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new YT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$e(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const s=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?r(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new qu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new qu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=ZT(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%62))}return s}}function j(n,e){return n<e?-1:n>e?1:0}function ga(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const r=n.charAt(s),i=e.charAt(s);if(r!==i)return Qo(r)===Qo(i)?j(r,i):Qo(r)?1:-1}return j(n.length,e.length)}const eI=55296,tI=57343;function Qo(n){const e=n.charCodeAt(0);return e>=eI&&e<=tI}function ss(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="__name__";class it{constructor(e,t,s){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&F(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return it.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof it?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=it.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return j(e.length,t.length)}static compareSegments(e,t){const s=it.isNumericId(e),r=it.isNumericId(t);return s&&!r?-1:!s&&r?1:s&&r?it.extractNumericId(e).compare(it.extractNumericId(t)):ga(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $t.fromString(e.substring(4,e.length-2))}}class ne extends it{construct(e,t,s){return new ne(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new ne(t)}static emptyPath(){return new ne([])}}const nI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends it{construct(e,t,s){return new Ae(e,t,s)}static isValidIdentifier(e){return nI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Wu}static keyField(){return new Ae([Wu])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new V(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else c==="`"?(o=!o,r++):c!=="."||o?(s+=c,r++):(i(),r++)}if(i(),o)throw new V(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(t)}static emptyPath(){return new Ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(ne.fromString(e))}static fromName(e){return new L(ne.fromString(e).popFirst(5))}static empty(){return new L(ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new ne(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(n,e,t){if(!t)throw new V(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function sI(n,e,t,s){if(e===!0&&s===!0)throw new V(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ju(n){if(!L.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $u(n){if(L.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Pf(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Yi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function It(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Yi(n);throw new V(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n,e){const t={typeString:n};return e&&(t.value=e),t}function vr(n,e){if(!Pf(n))throw new V(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const r=e[s].typeString,i="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(r&&typeof o!==r){t=`JSON field '${s}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${s}' field to equal '${i.value}'`;break}}if(t)throw new V(C.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu=-62135596800,zu=1e6;class oe{static now(){return oe.fromMillis(Date.now())}static fromDate(e){return oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*zu);return new oe(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hu)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zu}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vr(e,oe._jsonSchema))return new oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}oe._jsonSchemaVersion="firestore/timestamp/1.0",oe._jsonSchema={type:pe("string",oe._jsonSchemaVersion),seconds:pe("number"),nanoseconds:pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new oe(0,0))}static max(){return new U(new oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=-1;function rI(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=U.fromTimestamp(s===1e9?new oe(t+1,0):new oe(t,s));return new Jt(r,L.empty(),e)}function iI(n){return new Jt(n.readTime,n.key,lr)}class Jt{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Jt(U.min(),L.empty(),lr)}static max(){return new Jt(U.max(),L.empty(),lr)}}function oI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:j(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==aI)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,s)=>{t(e)})}static reject(e){return new b((t,s)=>{s(e)})}static waitFor(e){return new b((t,s)=>{let r=0,i=0,o=!1;e.forEach(c=>{++r,c.next(()=>{++i,o&&i===r&&t()},l=>s(l))}),o=!0,i===r&&t()})}static or(e){let t=b.resolve(!1);for(const s of e)t=t.next(r=>r?b.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new b((s,r)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===i&&s(o)},f=>r(f))}})}static doWhile(e,t){return new b((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function lI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function gs(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ji.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=-1;function Xi(n){return n==null}function wi(n){return n===0&&1/n==-1/0}function uI(n){return typeof n=="number"&&Number.isInteger(n)&&!wi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="";function hI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Gu(e)),e=dI(n.get(t),e);return Gu(e)}function dI(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case Nf:t+="";break;default:t+=i}}return t}function Gu(n){return n+Nf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function rn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function kf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let me=class ya{constructor(e,t){this.comparator=e,this.root=t||zt.EMPTY}insert(e,t){return new ya(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new ya(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yr(this.root,e,this.comparator,!0)}},Yr=class{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},zt=class _t{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??_t.RED,this.left=r??_t.EMPTY,this.right=i??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new _t(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return _t.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}};zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,s,r,i){return this}insert(e,t,s){return new zt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qu(this.data.getIterator())}getIteratorFrom(e){return new Qu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ge(this.comparator);return t.data=e,t}}class Qu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new He([])}unionWith(e){let t=new ge(Ae.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new He(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Df("Invalid base64 string: "+i):i}}(e);return new Se(t)}static fromUint8Array(e){const t=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let r=0;r<t.length;r++)s[r]=t.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const fI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=fI.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?Se.fromBase64String(n):Se.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of="server_timestamp",Vf="__type__",Mf="__previous_value__",Lf="__local_write_time__";function uc(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Vf])==null?void 0:s.stringValue)===Of}function Zi(n){const e=n.mapValue.fields[Mf];return uc(e)?Zi(e):e}function ur(n){const e=Xt(n.mapValue.fields[Lf].timestampValue);return new oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,t,s,r,i,o,c,l,h,f,p){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const Ai="(default)";class hr{constructor(e,t){this.projectId=e,this.database=t||Ai}static empty(){return new hr("","")}get isDefaultDatabase(){return this.database===Ai}isEqual(e){return e instanceof hr&&e.projectId===this.projectId&&e.database===this.database}}function mI(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new V(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hr(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="__type__",_I="__max__",Jr={mapValue:{}},Ff="__vector__",Si="value";function en(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?uc(n)?4:yI(n)?9007199254740991:gI(n)?10:11:F(28295,{value:n})}function pt(n,e){if(n===e)return!0;const t=en(n);if(t!==en(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ur(n).isEqual(ur(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Xt(r.timestampValue),c=Xt(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,i){return Zt(r.bytesValue).isEqual(Zt(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,i){return ue(r.geoPointValue.latitude)===ue(i.geoPointValue.latitude)&&ue(r.geoPointValue.longitude)===ue(i.geoPointValue.longitude)}(n,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ue(r.integerValue)===ue(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=ue(r.doubleValue),c=ue(i.doubleValue);return o===c?wi(o)===wi(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return ss(n.arrayValue.values||[],e.arrayValue.values||[],pt);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},c=i.mapValue.fields||{};if(Ku(o)!==Ku(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!pt(o[l],c[l])))return!1;return!0}(n,e);default:return F(52216,{left:n})}}function dr(n,e){return(n.values||[]).find(t=>pt(t,e))!==void 0}function rs(n,e){if(n===e)return 0;const t=en(n),s=en(e);if(t!==s)return j(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=ue(i.integerValue||i.doubleValue),l=ue(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Yu(n.timestampValue,e.timestampValue);case 4:return Yu(ur(n),ur(e));case 5:return ga(n.stringValue,e.stringValue);case 6:return function(i,o){const c=Zt(i),l=Zt(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=j(c[h],l[h]);if(f!==0)return f}return j(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=j(ue(i.latitude),ue(o.latitude));return c!==0?c:j(ue(i.longitude),ue(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Ju(n.arrayValue,e.arrayValue);case 10:return function(i,o){var g,R,P,O;const c=i.fields||{},l=o.fields||{},h=(g=c[Si])==null?void 0:g.arrayValue,f=(R=l[Si])==null?void 0:R.arrayValue,p=j(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((O=f==null?void 0:f.values)==null?void 0:O.length)||0);return p!==0?p:Ju(h,f)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Jr.mapValue&&o===Jr.mapValue)return 0;if(i===Jr.mapValue)return 1;if(o===Jr.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=ga(l[p],f[p]);if(g!==0)return g;const R=rs(c[l[p]],h[f[p]]);if(R!==0)return R}return j(l.length,f.length)}(n.mapValue,e.mapValue);default:throw F(23264,{he:t})}}function Yu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return j(n,e);const t=Xt(n),s=Xt(e),r=j(t.seconds,s.seconds);return r!==0?r:j(t.nanos,s.nanos)}function Ju(n,e){const t=n.values||[],s=e.values||[];for(let r=0;r<t.length&&r<s.length;++r){const i=rs(t[r],s[r]);if(i)return i}return j(t.length,s.length)}function is(n){return Ea(n)}function Ea(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const s=Xt(t);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Zt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let s="[",r=!0;for(const i of t.values||[])r?r=!1:s+=",",s+=Ea(i);return s+"]"}(n.arrayValue):"mapValue"in n?function(t){const s=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Ea(t.fields[o])}`;return r+"}"}(n.mapValue):F(61005,{value:n})}function ai(n){switch(en(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zi(n);return e?16+ai(e):16;case 5:return 2*n.stringValue.length;case 6:return Zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+ai(i),0)}(n.arrayValue);case 10:case 11:return function(s){let r=0;return rn(s.fields,(i,o)=>{r+=i.length+ai(o)}),r}(n.mapValue);default:throw F(13486,{value:n})}}function Xu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ta(n){return!!n&&"integerValue"in n}function hc(n){return!!n&&"arrayValue"in n}function Zu(n){return!!n&&"nullValue"in n}function eh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ci(n){return!!n&&"mapValue"in n}function gI(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[xf])==null?void 0:s.stringValue)===Ff}function Xs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return rn(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Xs(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xs(n.arrayValue.values[t]);return e}return{...n}}function yI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===_I}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ci(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xs(t)}setAll(e){let t=Ae.emptyPath(),s={},r=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,s,r),s={},r=[],t=c.popLast()}o?s[c.lastSegment()]=Xs(o):r.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());ci(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];ci(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){rn(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new qe(Xs(this.value))}}function Uf(n){const e=[];return rn(n.fields,(t,s)=>{const r=new Ae([t]);if(ci(s)){const i=Uf(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new He(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,s,r,i,o,c){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ke(e,0,U.min(),U.min(),U.min(),qe.empty(),0)}static newFoundDocument(e,t,s,r){return new ke(e,1,t,U.min(),s,r,0)}static newNoDocument(e,t){return new ke(e,2,t,U.min(),U.min(),qe.empty(),0)}static newUnknownDocument(e,t){return new ke(e,3,t,U.min(),U.min(),qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,t){this.position=e,this.inclusive=t}}function th(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=L.comparator(L.fromName(o.referenceValue),t.key):s=rs(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function nh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t="asc"){this.field=e,this.dir=t}}function EI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{}class fe extends Bf{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new II(e,t,s):t==="array-contains"?new AI(e,s):t==="in"?new SI(e,s):t==="not-in"?new RI(e,s):t==="array-contains-any"?new CI(e,s):new fe(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new vI(e,s):new wI(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(rs(t,this.value)):t!==null&&en(this.value)===en(t)&&this.matchesComparison(rs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nt extends Bf{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new nt(e,t)}matches(e){return qf(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function qf(n){return n.op==="and"}function Wf(n){return TI(n)&&qf(n)}function TI(n){for(const e of n.filters)if(e instanceof nt)return!1;return!0}function Ia(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+is(n.value);if(Wf(n))return n.filters.map(e=>Ia(e)).join(",");{const e=n.filters.map(t=>Ia(t)).join(",");return`${n.op}(${e})`}}function jf(n,e){return n instanceof fe?function(s,r){return r instanceof fe&&s.op===r.op&&s.field.isEqual(r.field)&&pt(s.value,r.value)}(n,e):n instanceof nt?function(s,r){return r instanceof nt&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,c)=>i&&jf(o,r.filters[c]),!0):!1}(n,e):void F(19439)}function $f(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${is(t.value)}`}(n):n instanceof nt?function(t){return t.op.toString()+" {"+t.getFilters().map($f).join(" ,")+"}"}(n):"Filter"}class II extends fe{constructor(e,t,s){super(e,t,s),this.key=L.fromName(s.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class vI extends fe{constructor(e,t){super(e,"in",t),this.keys=Hf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class wI extends fe{constructor(e,t){super(e,"not-in",t),this.keys=Hf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Hf(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(s=>L.fromName(s.referenceValue))}class AI extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hc(t)&&dr(t.arrayValue,this.value)}}class SI extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&dr(this.value.arrayValue,t)}}class RI extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!dr(this.value.arrayValue,t)}}class CI extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>dr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t=null,s=[],r=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function sh(n,e=null,t=[],s=[],r=null,i=null,o=null){return new bI(n,e,t,s,r,i,o)}function dc(n){const e=B(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ia(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Xi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>is(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>is(s)).join(",")),e.Te=t}return e.Te}function fc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!EI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!jf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!nh(n.startAt,e.startAt)&&nh(n.endAt,e.endAt)}function va(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t=null,s=[],r=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function PI(n,e,t,s,r,i,o,c){return new ys(n,e,t,s,r,i,o,c)}function eo(n){return new ys(n)}function rh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function NI(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function zf(n){return n.collectionGroup!==null}function Zs(n){const e=B(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),t.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ge(Ae.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new fr(i,s))}),t.has(Ae.keyField().canonicalString())||e.Ee.push(new fr(Ae.keyField(),s))}return e.Ee}function ut(n){const e=B(n);return e.Ie||(e.Ie=kI(e,Zs(n))),e.Ie}function kI(n,e){if(n.limitType==="F")return sh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new fr(r.field,i)});const t=n.endAt?new Ri(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Ri(n.startAt.position,n.startAt.inclusive):null;return sh(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function wa(n,e){const t=n.filters.concat([e]);return new ys(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function DI(n,e){const t=n.explicitOrderBy.concat([e]);return new ys(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Aa(n,e,t){return new ys(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function to(n,e){return fc(ut(n),ut(e))&&n.limitType===e.limitType}function Gf(n){return`${dc(ut(n))}|lt:${n.limitType}`}function qn(n){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(r=>$f(r)).join(", ")}]`),Xi(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(r=>is(r)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(r=>is(r)).join(",")),`Target(${s})`}(ut(n))}; limitType=${n.limitType})`}function no(n,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):L.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(n,e)&&function(s,r){for(const i of Zs(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(n,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(n,e)&&function(s,r){return!(s.startAt&&!function(o,c,l){const h=th(o,c,l);return o.inclusive?h<=0:h<0}(s.startAt,Zs(s),r)||s.endAt&&!function(o,c,l){const h=th(o,c,l);return o.inclusive?h>=0:h>0}(s.endAt,Zs(s),r))}(n,e)}function OI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Kf(n){return(e,t)=>{let s=!1;for(const r of Zs(n)){const i=VI(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function VI(n,e,t){const s=n.field.isKeyField()?L.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?rs(l,h):F(42886)}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return F(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){rn(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return kf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=new me(L.comparator);function Rt(){return MI}const Qf=new me(L.comparator);function Gs(...n){let e=Qf;for(const t of n)e=e.insert(t.key,t);return e}function Yf(n){let e=Qf;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function mn(){return er()}function Jf(){return er()}function er(){return new kn(n=>n.toString(),(n,e)=>n.isEqual(e))}const LI=new me(L.comparator),xI=new ge(L.comparator);function $(...n){let e=xI;for(const t of n)e=e.add(t);return e}const FI=new ge(j);function UI(){return FI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wi(e)?"-0":e}}function Xf(n){return{integerValue:""+n}}function BI(n,e){return uI(e)?Xf(e):pc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this._=void 0}}function qI(n,e,t){return n instanceof Ci?function(r,i){const o={fields:{[Vf]:{stringValue:Of},[Lf]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&uc(i)&&(i=Zi(i)),i&&(o.fields[Mf]=i),{mapValue:o}}(t,e):n instanceof pr?ep(n,e):n instanceof mr?tp(n,e):function(r,i){const o=Zf(r,i),c=ih(o)+ih(r.Ae);return Ta(o)&&Ta(r.Ae)?Xf(c):pc(r.serializer,c)}(n,e)}function WI(n,e,t){return n instanceof pr?ep(n,e):n instanceof mr?tp(n,e):t}function Zf(n,e){return n instanceof bi?function(s){return Ta(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class Ci extends so{}class pr extends so{constructor(e){super(),this.elements=e}}function ep(n,e){const t=np(e);for(const s of n.elements)t.some(r=>pt(r,s))||t.push(s);return{arrayValue:{values:t}}}class mr extends so{constructor(e){super(),this.elements=e}}function tp(n,e){let t=np(e);for(const s of n.elements)t=t.filter(r=>!pt(r,s));return{arrayValue:{values:t}}}class bi extends so{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function ih(n){return ue(n.integerValue||n.doubleValue)}function np(n){return hc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function jI(n,e){return n.field.isEqual(e.field)&&function(s,r){return s instanceof pr&&r instanceof pr||s instanceof mr&&r instanceof mr?ss(s.elements,r.elements,pt):s instanceof bi&&r instanceof bi?pt(s.Ae,r.Ae):s instanceof Ci&&r instanceof Ci}(n.transform,e.transform)}class $I{constructor(e,t){this.version=e,this.transformResults=t}}class ht{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ht}static exists(e){return new ht(void 0,e)}static updateTime(e){return new ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function li(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ro{}function sp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ip(n.key,ht.none()):new wr(n.key,n.data,ht.none());{const t=n.data,s=qe.empty();let r=new ge(Ae.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new on(n.key,s,new He(r.toArray()),ht.none())}}function HI(n,e,t){n instanceof wr?function(r,i,o){const c=r.value.clone(),l=ah(r.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof on?function(r,i,o){if(!li(r.precondition,i))return void i.convertToUnknownDocument(o.version);const c=ah(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(rp(r)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function tr(n,e,t,s){return n instanceof wr?function(i,o,c,l){if(!li(i.precondition,o))return c;const h=i.value.clone(),f=ch(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,s):n instanceof on?function(i,o,c,l){if(!li(i.precondition,o))return c;const h=ch(i.fieldTransforms,l,o),f=o.data;return f.setAll(rp(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,s):function(i,o,c){return li(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function zI(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Zf(s.transform,r||null);i!=null&&(t===null&&(t=qe.empty()),t.set(s.field,i))}return t||null}function oh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&ss(s,r,(i,o)=>jI(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wr extends ro{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class on extends ro{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function ah(n,e,t){const s=new Map;X(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,c=e.data.field(i.field);s.set(i.field,WI(o,c,t[r]))}return s}function ch(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,qI(i,o,e))}return s}class ip extends ro{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GI extends ro{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&HI(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=tr(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=tr(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Jf();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(r.key)?null:c;const l=sp(o,c);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(U.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),$())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(t,s)=>oh(t,s))&&ss(this.baseMutations,e.baseMutations,(t,s)=>oh(t,s))}}class mc{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){X(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let r=function(){return LI}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new mc(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,K;function JI(n){switch(n){case C.OK:return F(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function op(n){if(n===void 0)return St("GRPC error has no .code"),C.UNKNOWN;switch(n){case de.OK:return C.OK;case de.CANCELLED:return C.CANCELLED;case de.UNKNOWN:return C.UNKNOWN;case de.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case de.INTERNAL:return C.INTERNAL;case de.UNAVAILABLE:return C.UNAVAILABLE;case de.UNAUTHENTICATED:return C.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case de.NOT_FOUND:return C.NOT_FOUND;case de.ALREADY_EXISTS:return C.ALREADY_EXISTS;case de.PERMISSION_DENIED:return C.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case de.ABORTED:return C.ABORTED;case de.OUT_OF_RANGE:return C.OUT_OF_RANGE;case de.UNIMPLEMENTED:return C.UNIMPLEMENTED;case de.DATA_LOSS:return C.DATA_LOSS;default:return F(39323,{code:n})}}(K=de||(de={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=new $t([4294967295,4294967295],0);function lh(n){const e=XI().encode(n),t=new Tf;return t.update(e),new Uint8Array(t.digest())}function uh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $t([t,s],0),new $t([r,i],0)]}class _c{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Ks(`Invalid padding: ${t}`);if(s<0)throw new Ks(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ks(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Ks(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=$t.fromNumber(this.ge)}ye(e,t,s){let r=e.add(t.multiply($t.fromNumber(s)));return r.compare(ZI)===1&&(r=new $t([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=lh(e),[s,r]=uh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);if(!this.we(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new _c(i,r,t);return s.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const t=lh(e),[s,r]=uh(t);for(let i=0;i<this.hashCount;i++){const o=this.ye(s,r,i);this.Se(o)}}Se(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,Ar.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new io(U.min(),r,new me(j),Rt(),$())}}class Ar{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new Ar(s,t,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t,s,r){this.be=e,this.removedTargetIds=t,this.key=s,this.De=r}}class ap{constructor(e,t){this.targetId=e,this.Ce=t}}class cp{constructor(e,t,s=Se.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class hh{constructor(){this.ve=0,this.Fe=dh(),this.Me=Se.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=$(),t=$(),s=$();return this.Fe.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:F(38017,{changeType:i})}}),new Ar(this.Me,this.xe,e,t,s)}qe(){this.Oe=!1,this.Fe=dh()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class ev{constructor(e){this.Ge=e,this.ze=new Map,this.je=Rt(),this.Je=Xr(),this.He=Xr(),this.Ze=new me(j)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.qe(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:F(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((s,r)=>{this.rt(r)&&t(r)})}st(e){const t=e.targetId,s=e.Ce.count,r=this.ot(t);if(r){const i=r.target;if(va(i))if(s===0){const o=new L(i.path);this.et(t,o,ke.newNoDocument(o,U.min()))}else X(s===1,20013,{expectedCount:s});else{const o=this._t(t);if(o!==s){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=t;let o,c;try{o=Zt(s).toUint8Array()}catch(l){if(l instanceof Df)return vn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new _c(o,r,i)}catch(l){return vn(l instanceof Ks?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let r=0;return s.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),r++)}),r}Tt(e){const t=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&va(c.target)){const l=new L(c.target.path);this.Et(l).has(o)||this.It(o,l)||this.et(o,l,ke.newNoDocument(l,e))}i.Be&&(t.set(o,i.ke()),i.qe())}});let s=$();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(s=s.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const r=new io(e,t,this.Ze,this.je,s);return this.je=Rt(),this.Je=Xr(),this.He=Xr(),this.Ze=new me(j),r}Ye(e,t){if(!this.rt(e))return;const s=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,s),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const r=this.nt(e);this.It(e,t)?r.Ke(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new hh,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new ge(j),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new ge(j),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new hh),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Xr(){return new me(L.comparator)}function dh(){return new me(L.comparator)}const tv={asc:"ASCENDING",desc:"DESCENDING"},nv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sv={and:"AND",or:"OR"};class rv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Sa(n,e){return n.useProto3Json||Xi(e)?e:{value:e}}function Pi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function iv(n,e){return Pi(n,e.toTimestamp())}function dt(n){return X(!!n,49232),U.fromTimestamp(function(t){const s=Xt(t);return new oe(s.seconds,s.nanos)}(n))}function gc(n,e){return Ra(n,e).canonicalString()}function Ra(n,e){const t=function(r){return new ne(["projects",r.projectId,"databases",r.database])}(n).child("documents");return e===void 0?t:t.child(e)}function up(n){const e=ne.fromString(n);return X(mp(e),10190,{key:e.toString()}),e}function Ca(n,e){return gc(n.databaseId,e.path)}function Yo(n,e){const t=up(e);if(t.get(1)!==n.databaseId.projectId)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(dp(t))}function hp(n,e){return gc(n.databaseId,e)}function ov(n){const e=up(n);return e.length===4?ne.emptyPath():dp(e)}function ba(n){return new ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function dp(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function fh(n,e,t){return{name:Ca(n,e),fields:t.value.mapValue.fields}}function av(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(X(f===void 0||typeof f=="string",58123),Se.fromBase64String(f||"")):(X(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Se.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?C.UNKNOWN:op(h.code);return new V(f,h.message||"")}(o);t=new cp(s,r,i,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Yo(n,s.document.name),i=dt(s.document.updateTime),o=s.document.createTime?dt(s.document.createTime):U.min(),c=new qe({mapValue:{fields:s.document.fields}}),l=ke.newFoundDocument(r,i,o,c),h=s.targetIds||[],f=s.removedTargetIds||[];t=new ui(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Yo(n,s.document),i=s.readTime?dt(s.readTime):U.min(),o=ke.newNoDocument(r,i),c=s.removedTargetIds||[];t=new ui([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Yo(n,s.document),i=s.removedTargetIds||[];t=new ui([],i,r,null)}else{if(!("filter"in e))return F(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new YI(r,i),c=s.targetId;t=new ap(c,o)}}return t}function cv(n,e){let t;if(e instanceof wr)t={update:fh(n,e.key,e.value)};else if(e instanceof ip)t={delete:Ca(n,e.key)};else if(e instanceof on)t={update:fh(n,e.key,e.data),updateMask:gv(e.fieldMask)};else{if(!(e instanceof GI))return F(16599,{dt:e.type});t={verify:Ca(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const c=o.transform;if(c instanceof Ci)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof pr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof mr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof bi)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw F(20930,{transform:o.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:iv(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F(27497)}(n,e.precondition)),t}function lv(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map(t=>function(r,i){let o=r.updateTime?dt(r.updateTime):dt(i);return o.isEqual(U.min())&&(o=dt(i)),new $I(o,r.transformResults||[])}(t,e))):[]}function uv(n,e){return{documents:[hp(n,e.path)]}}function hv(n,e){const t={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=hp(n,r);const i=function(h){if(h.length!==0)return pp(nt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Wn(g.field),direction:pv(g.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Sa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:t,parent:r}}function dv(n){let e=ov(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){X(s===1,65062);const f=t.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const g=fp(p);return g instanceof nt&&Wf(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(g=>function(P){return new fr(jn(P.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(t.orderBy));let c=null;t.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Xi(g)?null:g}(t.limit));let l=null;t.startAt&&(l=function(p){const g=!!p.before,R=p.values||[];return new Ri(R,g)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const g=!p.before,R=p.values||[];return new Ri(R,g)}(t.endAt)),PI(e,r,o,i,c,"F",l,h)}function fv(n,e){const t=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:r})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function fp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=jn(t.unaryFilter.field);return fe.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=jn(t.unaryFilter.field);return fe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=jn(t.unaryFilter.field);return fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=jn(t.unaryFilter.field);return fe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(t){return fe.create(jn(t.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return nt.create(t.compositeFilter.filters.map(s=>fp(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(t.compositeFilter.op))}(n):F(30097,{filter:n})}function pv(n){return tv[n]}function mv(n){return nv[n]}function _v(n){return sv[n]}function Wn(n){return{fieldPath:n.canonicalString()}}function jn(n){return Ae.fromServerFormat(n.fieldPath)}function pp(n){return n instanceof fe?function(t){if(t.op==="=="){if(eh(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NAN"}};if(Zu(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(eh(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NAN"}};if(Zu(t.value))return{unaryFilter:{field:Wn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wn(t.field),op:mv(t.op),value:t.value}}}(n):n instanceof nt?function(t){const s=t.getFilters().map(r=>pp(r));return s.length===1?s[0]:{compositeFilter:{op:_v(t.op),filters:s}}}(n):F(54877,{filter:n})}function gv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function mp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function _p(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,s,r,i=U.min(),o=U.min(),c=Se.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new qt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.yt=e}}function Ev(n){const e=dv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Aa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(){this.bn=new Iv}addToCollectionParentIndex(e,t){return this.bn.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(Jt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(Jt.min())}updateCollectionGroup(e,t,s){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class Iv{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new ge(ne.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new ge(ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gp=41943040;class Be{static withCacheSize(e){return new Be(e,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be.DEFAULT_COLLECTION_PERCENTILE=10,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Be.DEFAULT=new Be(gp,Be.DEFAULT_COLLECTION_PERCENTILE,Be.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Be.DISABLED=new Be(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new os(0)}static ar(){return new os(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="LruGarbageCollector",vv=1048576;function _h([n,e],[t,s]){const r=j(n,t);return r===0?j(e,s):r}class wv{constructor(e){this.Pr=e,this.buffer=new ge(_h),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();_h(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Av{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){M(mh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gs(t)?M(mh,"Ignoring IndexedDB error during garbage collection: ",t):await _s(t)}await this.Ar(3e5)})}}class Sv{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return b.resolve(Ji.ce);const s=new wv(t);return this.Vr.forEachTarget(e,r=>s.Ir(r.sequenceNumber)).next(()=>this.Vr.mr(e,r=>s.Ir(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(ph)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ph):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,r,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),r=this.params.maximumSequenceNumbersToCollect):r=p,o=Date.now(),this.nthSequenceNumber(e,r))).next(p=>(s=p,c=Date.now(),this.removeTargets(e,s,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,s))).next(p=>(h=Date.now(),Bn()<=W.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${r} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:p})))}}function Rv(n,e){return new Sv(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(){this.changes=new kn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?b.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&tr(s.mutation,r,He.empty(),oe.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,$()).next(()=>s))}getLocalViewOfDocuments(e,t,s=$()){const r=mn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=Gs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=mn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,$()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,s,r){let i=Rt();const o=er(),c=function(){return er()}();return t.forEach((l,h)=>{const f=s.get(h.key);r.has(h.key)&&(f===void 0||f.mutation instanceof on)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),tr(f.mutation,h,f.mutation.getFieldMask(),oe.now())):o.set(h.key,He.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>c.set(h,new bv(f,o.get(h)??null))),c))}recalculateAndSaveOverlays(e,t){const s=er();let r=new me((o,c)=>o-c),i=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=s.get(l)||He.empty();f=c.applyToLocalView(h,f),s.set(l,f);const p=(r.get(c.batchId)||$()).add(l);r=r.insert(c.batchId,p)})}).next(()=>{const o=[],c=r.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=Jf();f.forEach(g=>{if(!i.has(g)){const R=sp(t.get(g),s.get(g));R!==null&&p.set(g,R),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return b.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,r){return NI(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,r):this.getDocumentsMatchingCollectionQuery(e,t,s,r)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):b.resolve(mn());let c=lr,l=i;return o.next(h=>b.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,$())).next(f=>({batchId:c,changes:Yf(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(s=>{let r=Gs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s,r){const i=t.collectionGroup;let o=Gs();return this.indexManager.getCollectionParents(e,i).next(c=>b.forEach(c,l=>{const h=function(p,g){return new ys(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,s,r).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i,r))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ke.newInvalidDocument(f)))});let c=Gs();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&tr(f.mutation,h,He.empty(),oe.now()),no(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return b.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(r){return{id:r.id,version:r.version,createTime:dt(r.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(r){return{name:r.name,query:Ev(r.bundledQuery),readTime:dt(r.readTime)}}(t)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.overlays=new me(L.comparator),this.Lr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const s=mn();return b.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.St(e,t,i)}),b.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.Lr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(s)),b.resolve()}getOverlaysForCollection(e,t,s){const r=mn(),i=t.length+1,o=new L(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return b.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new me((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>s){let f=i.get(h.largestBatchId);f===null&&(f=mn(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=mn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=r)););return b.resolve(c)}St(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Lr.get(r.largestBatchId).delete(s.key);this.Lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new QI(t,s));let i=this.Lr.get(t);i===void 0&&(i=$(),this.Lr.set(t,i)),this.Lr.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(){this.sessionToken=Se.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.kr=new ge(Te.qr),this.Kr=new ge(Te.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Te(e,t);this.kr=this.kr.add(s),this.Kr=this.Kr.add(s)}$r(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new Te(e,t))}Qr(e,t){e.forEach(s=>this.removeReference(s,t))}Gr(e){const t=new L(new ne([])),s=new Te(t,e),r=new Te(t,e+1),i=[];return this.Kr.forEachInRange([s,r],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new L(new ne([])),s=new Te(t,e),r=new Te(t,e+1);let i=$();return this.Kr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Te(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Te{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return L.comparator(e.key,t.key)||j(e.Jr,t.Jr)}static Ur(e,t){return j(e.Jr,t.Jr)||L.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new ge(Te.qr)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KI(i,t,s,r);this.mutationQueue.push(o);for(const c of r)this.Hr=this.Hr.add(new Te(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,t){return b.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Xr(s),i=r<0?0:r;return b.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?lc:this.Yn-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Te(t,0),r=new Te(t,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([s,r],o=>{const c=this.Zr(o.Jr);i.push(c)}),b.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new ge(j);return t.forEach(r=>{const i=new Te(r,0),o=new Te(r,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],c=>{s=s.add(c.Jr)})}),b.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;L.isDocumentKey(i)||(i=i.child(""));const o=new Te(new L(i),0);let c=new ge(j);return this.Hr.forEachWhile(l=>{const h=l.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(c=c.add(l.Jr)),!0)},o),b.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach(s=>{const r=this.Zr(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){X(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Hr;return b.forEach(t.mutations,r=>{const i=new Te(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Hr=s})}nr(e){}containsKey(e,t){const s=new Te(t,0),r=this.Hr.firstAfterOrEqual(s);return b.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e){this.ti=e,this.docs=function(){return new me(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return b.resolve(s?s.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let s=Rt();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ke.newInvalidDocument(r))}),b.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=Rt();const o=t.path,c=new L(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||oI(iI(f),s)<=0||(r.has(f.key)||no(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return b.resolve(i)}getAllFromCollectionGroup(e,t,s,r){F(9500)}ni(e,t){return b.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Mv(this)}getSize(e){return b.resolve(this.size)}}class Mv extends Cv{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(s)}),b.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){this.persistence=e,this.ri=new kn(t=>dc(t),fc),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.ii=0,this.si=new yc,this.targetCount=0,this.oi=os._r()}forEachTarget(e,t){return this.ri.forEach((s,r)=>t(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),b.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new os(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.lr(t),b.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)}),b.waitFor(i).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return b.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),b.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),b.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return b.resolve(s)}containsKey(e,t){return b.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,t){this._i={},this.overlays={},this.ai=new Ji(0),this.ui=!1,this.ui=!0,this.ci=new Dv,this.referenceDelegate=e(this),this.li=new Lv(this),this.indexManager=new Tv,this.remoteDocumentCache=function(r){return new Vv(r)}(s=>this.referenceDelegate.hi(s)),this.serializer=new yv(t),this.Pi=new Nv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new kv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Ov(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){M("MemoryPersistence","Starting transaction:",e);const r=new xv(this.ai.next());return this.referenceDelegate.Ti(),s(r).next(i=>this.referenceDelegate.Ei(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ii(e,t){return b.or(Object.values(this._i).map(s=>()=>s.containsKey(e,t)))}}class xv extends cI{constructor(e){super(),this.currentSequenceNumber=e}}class Ec{constructor(e){this.persistence=e,this.Ri=new yc,this.Ai=null}static Vi(e){return new Ec(e)}get di(){if(this.Ai)return this.Ai;throw F(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),b.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),b.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(r=>this.di.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.di.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.di,s=>{const r=L.fromPath(s);return this.mi(e,r).next(i=>{i||t.removeEntry(r,U.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return b.or([()=>b.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Ni{constructor(e,t){this.persistence=e,this.fi=new kn(s=>hI(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=Rv(this,t)}static Vi(e,t){return new Ni(e,t)}Ti(){}Ei(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}pr(e){let t=0;return this.mr(e,s=>{t++}).next(()=>t)}mr(e,t){return b.forEach(this.fi,(s,r)=>this.wr(e,s,r).next(i=>i?b.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(e,o=>this.wr(e,o,t).next(c=>{c||(s++,i.removeEntry(o,U.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),b.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),b.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ai(e.data.value)),t}wr(e,t,s){return b.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return b.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ts=s,this.Es=r}static Is(e,t){let s=$(),r=$();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Tc(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return dg()?8:lI(Me())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,r){const i={result:null};return this.gs(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,t,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Fv;return this.ys(e,t,o).next(c=>{if(i.result=c,this.As)return this.ws(e,t,o,c.size)})}).next(()=>i.result)}ws(e,t,s,r){return s.documentReadCount<this.Vs?(Bn()<=W.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",qn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),b.resolve()):(Bn()<=W.DEBUG&&M("QueryEngine","Query:",qn(t),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ds*r?(Bn()<=W.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",qn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ut(t))):b.resolve())}gs(e,t){if(rh(t))return b.resolve(null);let s=ut(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Aa(t,null,"F"),s=ut(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=$(...i);return this.fs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,s).next(l=>{const h=this.Ss(t,c);return this.bs(t,h,o,l.readTime)?this.gs(e,Aa(t,null,"F")):this.Ds(e,h,t,l)}))})))}ps(e,t,s,r){return rh(t)||r.isEqual(U.min())?b.resolve(null):this.fs.getDocuments(e,s).next(i=>{const o=this.Ss(t,i);return this.bs(t,o,s,r)?b.resolve(null):(Bn()<=W.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),qn(t)),this.Ds(e,o,t,rI(r,lr)).next(c=>c))})}Ss(e,t){let s=new ge(Kf(e));return t.forEach((r,i)=>{no(e,i)&&(s=s.add(i))}),s}bs(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(e,t,s){return Bn()<=W.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",qn(t)),this.fs.getDocumentsMatchingQuery(e,t,Jt.min(),s)}Ds(e,t,s,r){return this.fs.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="LocalStore",Bv=3e8;class qv{constructor(e,t,s,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new me(j),this.Fs=new kn(i=>dc(i),fc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pv(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function Wv(n,e,t,s){return new qv(n,e,t,s)}async function Ep(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Os(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],c=[];let l=$();for(const h of r){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(s,l).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:c}))})})}function jv(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let R=b.resolve();return g.forEach(P=>{R=R.next(()=>f.getEntry(l,P)).next(O=>{const k=h.docVersions.get(P);X(k!==null,48541),O.version.compareTo(k)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),f.addEntry(O)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(c){let l=$();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Tp(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function $v(n,e){const t=B(n),s=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const c=[];e.targetChanges.forEach((f,p)=>{const g=r.get(p);if(!g)return;c.push(t.li.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.li.addMatchingKeys(i,f.addedDocuments,p)));let R=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?R=R.withResumeToken(Se.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,s)),r=r.insert(p,R),function(O,k,z){return O.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Bv?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(g,R,f)&&c.push(t.li.updateTargetData(i,R))});let l=Rt(),h=$();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Hv(i,o,e.documentUpdates).next(f=>{l=f.Bs,h=f.Ls})),!s.isEqual(U.min())){const f=t.li.getLastRemoteSnapshotVersion(i).next(p=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,s));c.push(f)}return b.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.vs=r,i))}function Hv(n,e,t){let s=$(),r=$();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=Rt();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(r=r.add(c)),l.isNoDocument()&&l.version.isEqual(U.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):M(Ic,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Bs:o,Ls:r}})}function zv(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=lc),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Gv(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.li.getTargetData(s,e).next(i=>i?(r=i,b.resolve(r)):t.li.allocateTargetId(s).next(o=>(r=new qt(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.vs.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s})}async function Pa(n,e,t){const s=B(n),r=s.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!gs(o))throw o;M(Ic,`Failed to update sequence numbers for target ${e}: ${o}`)}s.vs=s.vs.remove(e),s.Fs.delete(r.target)}function gh(n,e,t){const s=B(n);let r=U.min(),i=$();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=B(l),g=p.Fs.get(f);return g!==void 0?b.resolve(p.vs.get(g)):p.li.getTargetData(h,f)}(s,o,ut(e)).next(c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>s.Cs.getDocumentsMatchingQuery(o,e,t?r:U.min(),t?i:$())).next(c=>(Kv(s,OI(e),c),{documents:c,ks:i})))}function Kv(n,e,t){let s=n.Ms.get(e)||U.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Ms.set(e,s)}class yh{constructor(){this.activeTargetIds=UI()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qv{constructor(){this.vo=new yh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new yh,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="ConnectivityMonitor";class Th{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(Eh,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){M(Eh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zr=null;function Na(){return Zr===null?Zr=function(){return 268435456+Math.round(2147483648*Math.random())}():Zr++,"0x"+Zr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="RestConnection",Jv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Xv{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${s}/databases/${r}`,this.$o=this.databaseId.database===Ai?`project_id=${s}`:`project_id=${s}&database_id=${r}`}Wo(e,t,s,r,i){const o=Na(),c=this.Qo(e,t.toUriEncodedString());M(Jo,`Sending RPC '${e}' ${o}:`,c,s);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,r,i);const{host:h}=new URL(c),f=bn(h);return this.zo(e,c,l,s,f).then(p=>(M(Jo,`Received RPC '${e}' ${o}: `,p),p),p=>{throw vn(Jo,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",s),p})}jo(e,t,s,r,i,o){return this.Wo(e,t,s,r,i)}Go(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ms}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}Qo(e,t){const s=Jv[e];let r=`${this.Ko}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="WebChannelConnection",Us=(n,e,t)=>{n.listen(e,s=>{try{t(s)}catch(r){setTimeout(()=>{throw r},0)}})};class Yn extends Xv{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Yn.c_){const e=Af();Us(e,wf.STAT_EVENT,t=>{t.stat===_a.PROXY?M(Pe,"STAT_EVENT: detected buffering proxy"):t.stat===_a.NOPROXY&&M(Pe,"STAT_EVENT: detected no buffering proxy")}),Yn.c_=!0}}zo(e,t,s,r,i){const o=Na();return new Promise((c,l)=>{const h=new If;h.setWithCredentials(!0),h.listenOnce(vf.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case oi.NO_ERROR:const p=h.getResponseJson();M(Pe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case oi.TIMEOUT:M(Pe,`RPC '${e}' ${o} timed out`),l(new V(C.DEADLINE_EXCEEDED,"Request time out"));break;case oi.HTTP_ERROR:const g=h.getStatus();if(M(Pe,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const O=function(z){const G=z.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(G)>=0?G:C.UNKNOWN}(P.status);l(new V(O,P.message))}else l(new V(C.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new V(C.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{M(Pe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(r);M(Pe,`RPC '${e}' ${o} sending request:`,r),h.send(t,"POST",f,s,15)})}T_(e,t,s){const r=Na(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const h=i.join("");M(Pe,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);this.E_(f);let p=!1,g=!1;const R=new Zv({Jo:P=>{g?M(Pe,`Not sending because RPC '${e}' stream ${r} is closed:`,P):(p||(M(Pe,`Opening RPC '${e}' stream ${r} transport.`),f.open(),p=!0),M(Pe,`RPC '${e}' stream ${r} sending:`,P),f.send(P))},Ho:()=>f.close()});return Us(f,zs.EventType.OPEN,()=>{g||(M(Pe,`RPC '${e}' stream ${r} transport opened.`),R.i_())}),Us(f,zs.EventType.CLOSE,()=>{g||(g=!0,M(Pe,`RPC '${e}' stream ${r} transport closed`),R.o_(),this.I_(f))}),Us(f,zs.EventType.ERROR,P=>{g||(g=!0,vn(Pe,`RPC '${e}' stream ${r} transport errored. Name:`,P.name,"Message:",P.message),R.o_(new V(C.UNAVAILABLE,"The operation could not be completed")))}),Us(f,zs.EventType.MESSAGE,P=>{var O;if(!g){const k=P.data[0];X(!!k,16349);const z=k,G=(z==null?void 0:z.error)||((O=z[0])==null?void 0:O.error);if(G){M(Pe,`RPC '${e}' stream ${r} received error:`,G);const te=G.status;let Fe=function(I){const _=de[I];if(_!==void 0)return op(_)}(te),Re=G.message;te==="NOT_FOUND"&&Re.includes("database")&&Re.includes("does not exist")&&Re.includes(this.databaseId.database)&&vn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Fe===void 0&&(Fe=C.INTERNAL,Re="Unknown error status: "+te+" with message "+G.message),g=!0,R.o_(new V(Fe,Re)),f.close()}else M(Pe,`RPC '${e}' stream ${r} received:`,k),R.__(k)}}),Yn.u_(),setTimeout(()=>{R.s_()},0),R}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Sf()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(n){return new Yn(n)}function Xo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n){return new rv(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yn.c_=!1;class Ip{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-s);r>0&&M("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="PersistentStream";class vp{constructor(e,t,s,r,i,o,c,l){this.Ci=e,this.S_=s,this.b_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Ip(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(St(t.toString()),St("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.D_===t&&this.G_(s,r)},s=>{e(()=>{const r=new V(C.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(r)})})}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.Yo(()=>{s(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(r=>{s(()=>this.z_(r))}),this.stream.onMessage(r=>{s(()=>++this.F_==1?this.J_(r):this.onNext(r))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return M(Ih,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(M(Ih,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tw extends vp{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=av(this.serializer,e),s=function(i){if(!("targetChange"in i))return U.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?U.min():o.readTime?dt(o.readTime):U.min()}(e);return this.listener.H_(t,s)}Z_(e){const t={};t.database=ba(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=va(l)?{documents:uv(i,l)}:{query:hv(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=lp(i,o.resumeToken);const h=Sa(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(U.min())>0){c.readTime=Pi(i,o.snapshotVersion.toTimestamp());const h=Sa(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const s=fv(this.serializer,e);s&&(t.labels=s),this.q_(t)}X_(e){const t={};t.database=ba(this.serializer),t.removeTarget=e,this.q_(t)}}class nw extends vp{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=lv(e.writeResults,e.commitTime),s=dt(e.commitTime);return this.listener.na(s,t)}ra(){const e={};e.database=ba(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>cv(this.serializer,s))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{}class rw extends sw{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Ra(t,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(C.UNKNOWN,i.toString())})}jo(e,t,s,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(e,Ra(t,s),r,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(C.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function iw(n,e,t,s){return new rw(n,e,t,s)}class ow{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(St(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="RemoteStore";class aw{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{s.enqueueAndForget(async()=>{Dn(this)&&(M(wn,"Restarting streams for network reachability change."),await async function(l){const h=B(l);h.Ia.add(4),await Sr(h),h.Va.set("Unknown"),h.Ia.delete(4),await ao(h)}(this))})}),this.Va=new ow(s,r)}}async function ao(n){if(Dn(n))for(const e of n.Ra)await e(!0)}async function Sr(n){for(const e of n.Ra)await e(!1)}function wp(n,e){const t=B(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Sc(t)?Ac(t):Es(t).O_()&&wc(t,e))}function vc(n,e){const t=B(n),s=Es(t);t.Ea.delete(e),s.O_()&&Ap(t,e),t.Ea.size===0&&(s.O_()?s.L_():Dn(t)&&t.Va.set("Unknown"))}function wc(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Es(n).Z_(e)}function Ap(n,e){n.da.$e(e),Es(n).X_(e)}function Ac(n){n.da=new ev({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ea.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Es(n).start(),n.Va.ua()}function Sc(n){return Dn(n)&&!Es(n).x_()&&n.Ea.size>0}function Dn(n){return B(n).Ia.size===0}function Sp(n){n.da=void 0}async function cw(n){n.Va.set("Online")}async function lw(n){n.Ea.forEach((e,t)=>{wc(n,e)})}async function uw(n,e){Sp(n),Sc(n)?(n.Va.ha(e),Ac(n)):n.Va.set("Unknown")}async function hw(n,e,t){if(n.Va.set("Online"),e instanceof cp&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const c of i.targetIds)r.Ea.has(c)&&(await r.remoteSyncer.rejectListen(c,o),r.Ea.delete(c),r.da.removeTarget(c))}(n,e)}catch(s){M(wn,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ki(n,s)}else if(e instanceof ui?n.da.Xe(e):e instanceof ap?n.da.st(e):n.da.tt(e),!t.isEqual(U.min()))try{const s=await Tp(n.localStore);t.compareTo(s)>=0&&await function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ea.get(h);f&&i.Ea.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ea.get(l);if(!f)return;i.Ea.set(l,f.withResumeToken(Se.EMPTY_BYTE_STRING,f.snapshotVersion)),Ap(i,l);const p=new qt(f.target,l,h,f.sequenceNumber);wc(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(s){M(wn,"Failed to raise snapshot:",s),await ki(n,s)}}async function ki(n,e,t){if(!gs(e))throw e;n.Ia.add(1),await Sr(n),n.Va.set("Offline"),t||(t=()=>Tp(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M(wn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await ao(n)})}function Rp(n,e){return e().catch(t=>ki(n,t,e))}async function co(n){const e=B(n),t=tn(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:lc;for(;dw(e);)try{const r=await zv(e.localStore,s);if(r===null){e.Ta.length===0&&t.L_();break}s=r.batchId,fw(e,r)}catch(r){await ki(e,r)}Cp(e)&&bp(e)}function dw(n){return Dn(n)&&n.Ta.length<10}function fw(n,e){n.Ta.push(e);const t=tn(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Cp(n){return Dn(n)&&!tn(n).x_()&&n.Ta.length>0}function bp(n){tn(n).start()}async function pw(n){tn(n).ra()}async function mw(n){const e=tn(n);for(const t of n.Ta)e.ea(t.mutations)}async function _w(n,e,t){const s=n.Ta.shift(),r=mc.from(s,e,t);await Rp(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await co(n)}async function gw(n,e){e&&tn(n).Y_&&await async function(s,r){if(function(o){return JI(o)&&o!==C.ABORTED}(r.code)){const i=s.Ta.shift();tn(s).B_(),await Rp(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await co(s)}}(n,e),Cp(n)&&bp(n)}async function vh(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),M(wn,"RemoteStore received new credentials");const s=Dn(t);t.Ia.add(3),await Sr(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await ao(t)}async function yw(n,e){const t=B(n);e?(t.Ia.delete(2),await ao(t)):e||(t.Ia.add(2),await Sr(t),t.Va.set("Unknown"))}function Es(n){return n.ma||(n.ma=function(t,s,r){const i=B(t);return i.sa(),new tw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:cw.bind(null,n),Yo:lw.bind(null,n),t_:uw.bind(null,n),H_:hw.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),Sc(n)?Ac(n):n.Va.set("Unknown")):(await n.ma.stop(),Sp(n))})),n.ma}function tn(n){return n.fa||(n.fa=function(t,s,r){const i=B(t);return i.sa(),new nw(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:pw.bind(null,n),t_:gw.bind(null,n),ta:mw.bind(null,n),na:_w.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await co(n)):(await n.fa.stop(),n.Ta.length>0&&(M(wn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,c=new Rc(e,t,o,r,i);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cc(n,e){if(St("AsyncQueue",`${e}: ${n}`),gs(n))return new V(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{static emptySet(e){return new Jn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||L.comparator(t.key,s.key):(t,s)=>L.comparator(t.key,s.key),this.keyedMap=Gs(),this.sortedSet=new me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Jn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this.ga=new me(L.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):F(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,s)=>{e.push(s)}),e}}class as{constructor(e,t,s,r,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new as(e,t,Jn.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&to(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Tw{constructor(){this.queries=Ah(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const r=B(t),i=r.queries;r.queries=Ah(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(s)})})(this,new V(C.ABORTED,"Firestore shutting down"))}}function Ah(){return new kn(n=>Gf(n),to)}async function Pp(n,e){const t=B(n);let s=3;const r=e.query;let i=t.queries.get(r);i?!i.ba()&&e.Da()&&(s=2):(i=new Ew,s=e.Da()?0:1);try{switch(s){case 0:i.wa=await t.onListen(r,!0);break;case 1:i.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const c=Cc(o,`Initialization of query '${qn(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&bc(t)}async function Np(n,e){const t=B(n),s=e.query;let r=3;const i=t.queries.get(s);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?r=e.Da()?0:1:!i.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Iw(n,e){const t=B(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const c of o.Sa)c.Fa(r)&&(s=!0);o.wa=r}}s&&bc(t)}function vw(n,e,t){const s=B(n),r=s.queries.get(e);if(r)for(const i of r.Sa)i.onError(t);s.queries.delete(e)}function bc(n){n.Ca.forEach(e=>{e.next()})}var ka,Sh;(Sh=ka||(ka={})).Ma="default",Sh.Cache="cache";class kp{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new as(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.qa||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=as.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ka.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e){this.key=e}}class Op{constructor(e){this.key=e}}class ww{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=$(),this.mutatedKeys=$(),this.eu=Kf(e),this.tu=new Jn(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new wh,r=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,c=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((f,p)=>{const g=r.get(f),R=no(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),O=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let k=!1;g&&R?g.data.isEqual(R.data)?P!==O&&(s.track({type:3,doc:R}),k=!0):this.su(g,R)||(s.track({type:2,doc:R}),k=!0,(l&&this.eu(R,l)>0||h&&this.eu(R,h)<0)&&(c=!0)):!g&&R?(s.track({type:0,doc:R}),k=!0):g&&!R&&(s.track({type:1,doc:g}),k=!0,(l||h)&&(c=!0)),k&&(R?(o=o.add(R),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),s.track({type:1,doc:f})}return{tu:o,iu:s,bs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,r){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(R,P){const O=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Vt:k})}};return O(R)-O(P)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(s),r=r??!1;const c=t&&!r?this._u():[],l=this.Ya.size===0&&this.current&&!r?1:0,h=l!==this.Xa;return this.Xa=l,o.length!==0||h?{snapshot:new as(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new wh,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=$(),this.tu.forEach(s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))});const t=[];return e.forEach(s=>{this.Ya.has(s)||t.push(new Op(s))}),this.Ya.forEach(s=>{e.has(s)||t.push(new Dp(s))}),t}cu(e){this.Za=e.ks,this.Ya=$();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return as.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Pc="SyncEngine";class Aw{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Sw{constructor(e){this.key=e,this.hu=!1}}class Rw{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new kn(c=>Gf(c),to),this.Eu=new Map,this.Iu=new Set,this.Ru=new me(L.comparator),this.Au=new Map,this.Vu=new yc,this.du={},this.mu=new Map,this.fu=os.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Cw(n,e,t=!0){const s=Up(n);let r;const i=s.Tu.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.lu()):r=await Vp(s,e,t,!0),r}async function bw(n,e){const t=Up(n);await Vp(t,e,!0,!1)}async function Vp(n,e,t,s){const r=await Gv(n.localStore,ut(e)),i=r.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return s&&(c=await Pw(n,e,i,o==="current",r.resumeToken)),n.isPrimaryClient&&t&&wp(n.remoteStore,r),c}async function Pw(n,e,t,s,r){n.pu=(p,g,R)=>async function(O,k,z,G){let te=k.view.ru(z);te.bs&&(te=await gh(O.localStore,k.query,!1).then(({documents:I})=>k.view.ru(I,te)));const Fe=G&&G.targetChanges.get(k.targetId),Re=G&&G.targetMismatches.get(k.targetId)!=null,Ce=k.view.applyChanges(te,O.isPrimaryClient,Fe,Re);return Ch(O,k.targetId,Ce.au),Ce.snapshot}(n,p,g,R);const i=await gh(n.localStore,e,!0),o=new ww(e,i.ks),c=o.ru(i.documents),l=Ar.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),h=o.applyChanges(c,n.isPrimaryClient,l);Ch(n,t,h.au);const f=new Aw(e,t,o);return n.Tu.set(e,f),n.Eu.has(t)?n.Eu.get(t).push(e):n.Eu.set(t,[e]),h.snapshot}async function Nw(n,e,t){const s=B(n),r=s.Tu.get(e),i=s.Eu.get(r.targetId);if(i.length>1)return s.Eu.set(r.targetId,i.filter(o=>!to(o,e))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Pa(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),t&&vc(s.remoteStore,r.targetId),Da(s,r.targetId)}).catch(_s)):(Da(s,r.targetId),await Pa(s.localStore,r.targetId,!0))}async function kw(n,e){const t=B(n),s=t.Tu.get(e),r=t.Eu.get(s.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),vc(t.remoteStore,s.targetId))}async function Dw(n,e,t){const s=Uw(n);try{const r=await function(o,c){const l=B(o),h=oe.now(),f=c.reduce((R,P)=>R.add(P.key),$());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",R=>{let P=Rt(),O=$();return l.xs.getEntries(R,f).next(k=>{P=k,P.forEach((z,G)=>{G.isValidDocument()||(O=O.add(z))})}).next(()=>l.localDocuments.getOverlayedDocuments(R,P)).next(k=>{p=k;const z=[];for(const G of c){const te=zI(G,p.get(G.key).overlayedDocument);te!=null&&z.push(new on(G.key,te,Uf(te.value.mapValue),ht.exists(!0)))}return l.mutationQueue.addMutationBatch(R,h,z,c)}).next(k=>{g=k;const z=k.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(R,k.batchId,z)})}).then(()=>({batchId:g.batchId,changes:Yf(p)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,c,l){let h=o.du[o.currentUser.toKey()];h||(h=new me(j)),h=h.insert(c,l),o.du[o.currentUser.toKey()]=h}(s,r.batchId,t),await Rr(s,r.changes),await co(s.remoteStore)}catch(r){const i=Cc(r,"Failed to persist write");t.reject(i)}}async function Mp(n,e){const t=B(n);try{const s=await $v(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.Au.get(i);o&&(X(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?X(o.hu,14607):r.removedDocuments.size>0&&(X(o.hu,42227),o.hu=!1))}),await Rr(t,s,e)}catch(s){await _s(s)}}function Rh(n,e,t){const s=B(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&r.push(c.snapshot)}),function(o,c){const l=B(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(c)&&(h=!0)}),h&&bc(l)}(s.eventManager,e),r.length&&s.Pu.H_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Ow(n,e,t){const s=B(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.Au.get(e),i=r&&r.key;if(i){let o=new me(L.comparator);o=o.insert(i,ke.newNoDocument(i,U.min()));const c=$().add(i),l=new io(U.min(),new Map,new me(j),o,c);await Mp(s,l),s.Ru=s.Ru.remove(i),s.Au.delete(e),Nc(s)}else await Pa(s.localStore,e,!1).then(()=>Da(s,e,t)).catch(_s)}async function Vw(n,e){const t=B(n),s=e.batch.batchId;try{const r=await jv(t.localStore,e);xp(t,s,null),Lp(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Rr(t,r)}catch(r){await _s(r)}}async function Mw(n,e,t){const s=B(n);try{const r=await function(o,c){const l=B(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(X(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(s.localStore,e);xp(s,e,t),Lp(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Rr(s,r)}catch(r){await _s(r)}}function Lp(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function xp(n,e,t){const s=B(n);let r=s.du[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.du[s.currentUser.toKey()]=r}}function Da(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Eu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Eu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(s=>{n.Vu.containsKey(s)||Fp(n,s)})}function Fp(n,e){n.Iu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(vc(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Nc(n))}function Ch(n,e,t){for(const s of t)s instanceof Dp?(n.Vu.addReference(s.key,e),Lw(n,s)):s instanceof Op?(M(Pc,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||Fp(n,s.key)):F(19791,{wu:s})}function Lw(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Iu.has(s)||(M(Pc,"New document in limbo: "+t),n.Iu.add(s),Nc(n))}function Nc(n){for(;n.Iu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new L(ne.fromString(e)),s=n.fu.next();n.Au.set(s,new Sw(t)),n.Ru=n.Ru.insert(t,s),wp(n.remoteStore,new qt(ut(eo(t.path)),s,"TargetPurposeLimboResolution",Ji.ce))}}async function Rr(n,e,t){const s=B(n),r=[],i=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach((c,l)=>{o.push(s.pu(l,e,t).then(h=>{var f;if((h||t)&&s.isPrimaryClient){const p=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:f.current;s.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){r.push(h);const p=Tc.Is(l.targetId,h);i.push(p)}}))}),await Promise.all(o),s.Pu.H_(r),await async function(l,h){const f=B(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(h,g=>b.forEach(g.Ts,R=>f.persistence.referenceDelegate.addReference(p,g.targetId,R)).next(()=>b.forEach(g.Es,R=>f.persistence.referenceDelegate.removeReference(p,g.targetId,R)))))}catch(p){if(!gs(p))throw p;M(Ic,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const R=f.vs.get(g),P=R.snapshotVersion,O=R.withLastLimboFreeSnapshotVersion(P);f.vs=f.vs.insert(g,O)}}}(s.localStore,i))}async function xw(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){M(Pc,"User change. New user:",e.toKey());const s=await Ep(t.localStore,e);t.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new V(C.CANCELLED,o))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Rr(t,s.Ns)}}function Fw(n,e){const t=B(n),s=t.Au.get(e);if(s&&s.hu)return $().add(s.key);{let r=$();const i=t.Eu.get(e);if(!i)return r;for(const o of i){const c=t.Tu.get(o);r=r.unionWith(c.view.nu)}return r}}function Up(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Fw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ow.bind(null,e),e.Pu.H_=Iw.bind(null,e.eventManager),e.Pu.yu=vw.bind(null,e.eventManager),e}function Uw(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Vw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Mw.bind(null,e),e}class Di{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oo(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Wv(this.persistence,new Uv,e.initialUser,this.serializer)}Cu(e){return new yp(Ec.Vi,this.serializer)}Du(e){return new Qv}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Di.provider={build:()=>new Di};class Bw extends Di{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){X(this.persistence.referenceDelegate instanceof Ni,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new Av(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Be.withCacheSize(this.cacheSizeBytes):Be.DEFAULT;return new yp(s=>Ni.Vi(s,t),this.serializer)}}class Oa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Rh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=xw.bind(null,this.syncEngine),await yw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Tw}()}createDatastore(e){const t=oo(e.databaseInfo.databaseId),s=ew(e.databaseInfo);return iw(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,r,i,o,c){return new aw(s,r,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Rh(this.syncEngine,t,0),function(){return Th.v()?new Th:new Yv}())}createSyncEngine(e,t){return function(r,i,o,c,l,h,f){const p=new Rw(r,i,o,c,l,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(r){const i=B(r);M(wn,"RemoteStore shutting down."),i.Ia.add(5),await Sr(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Oa.provider={build:()=>new Oa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):St("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="FirestoreClient";class qw{constructor(e,t,s,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=r,this.user=Ne.UNAUTHENTICATED,this.clientId=cc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{M(nn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(M(nn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Cc(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Zo(n,e){n.asyncQueue.verifyOperationInProgress(),M(nn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Ep(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function bh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ww(n);M(nn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(s=>vh(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,r)=>vh(e.remoteStore,r)),n._onlineComponents=e}async function Ww(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(nn,"Using user provided OfflineComponentProvider");try{await Zo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(r){return r.name==="FirebaseError"?r.code===C.FAILED_PRECONDITION||r.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(t))throw t;vn("Error using user provided cache. Falling back to memory cache: "+t),await Zo(n,new Di)}}else M(nn,"Using default OfflineComponentProvider"),await Zo(n,new Bw(void 0));return n._offlineComponents}async function qp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(nn,"Using user provided OnlineComponentProvider"),await bh(n,n._uninitializedComponentsProvider._online)):(M(nn,"Using default OnlineComponentProvider"),await bh(n,new Oa))),n._onlineComponents}function jw(n){return qp(n).then(e=>e.syncEngine)}async function Va(n){const e=await qp(n),t=e.eventManager;return t.onListen=Cw.bind(null,e.syncEngine),t.onUnlisten=Nw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kw.bind(null,e.syncEngine),t}function $w(n,e,t,s){const r=new Bp(s),i=new kp(e,r,t);return n.asyncQueue.enqueueAndForget(async()=>Pp(await Va(n),i)),()=>{r.Nu(),n.asyncQueue.enqueueAndForget(async()=>Np(await Va(n),i))}}function Hw(n,e,t={}){const s=new Ht;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new Bp({next:g=>{f.Nu(),o.enqueueAndForget(()=>Np(i,p));const R=g.docs.has(c);!R&&g.fromCache?h.reject(new V(C.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&g.fromCache&&l&&l.source==="server"?h.reject(new V(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new kp(eo(c.path),f,{includeMetadataChanges:!0,qa:!0});return Pp(i,p)}(await Va(n),n.asyncQueue,e,t,s)),s.promise}function zw(n,e){const t=new Ht;return n.asyncQueue.enqueueAndForget(async()=>Dw(await jw(n),e,t)),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="ComponentProvider",Ph=new Map;function Kw(n,e,t,s,r){return new pI(n,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Wp(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp="firestore.googleapis.com",Nh=!0;class kh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jp,this.ssl=Nh}else this.host=e.host,this.ssl=e.ssl??Nh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vv)throw new V(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wp(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lo{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new GT;switch(s.type){case"firstParty":return new JT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new V(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Ph.get(t);s&&(M(Gw,"Removing Datastore"),Ph.delete(t),s.terminate())}(this),Promise.resolve()}}function Qw(n,e,t,s={}){var h;n=It(n,lo);const r=bn(e),i=n._getSettings(),o={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;r&&Ya(`https://${c}`),i.host!==jp&&i.host!==c&&vn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:r,emulatorOptions:s};if(!Qt(l,o)&&(n._setSettings(l),s.mockUserToken)){let f,p;if(typeof s.mockUserToken=="string")f=s.mockUserToken,p=Ne.MOCK_USER;else{f=Nd(s.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const g=s.mockUserToken.sub||s.mockUserToken.user_id;if(!g)throw new V(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ne(g)}n._authCredentials=new KT(new Cf(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new On(this.firestore,e,this._query)}}class he{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new he(this.firestore,e,this._key)}toJSON(){return{type:he._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(vr(t,he._jsonSchema))return new he(e,s||null,new L(ne.fromString(t.referencePath)))}}he._jsonSchemaVersion="firestore/documentReference/1.0",he._jsonSchema={type:pe("string",he._jsonSchemaVersion),referencePath:pe("string")};class Gt extends On{constructor(e,t,s){super(e,t,eo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new he(this.firestore,null,new L(e))}withConverter(e){return new Gt(this.firestore,e,this._path)}}function dC(n,e,...t){if(n=ce(n),bf("collection","path",e),n instanceof lo){const s=ne.fromString(e,...t);return $u(s),new Gt(n,null,s)}{if(!(n instanceof he||n instanceof Gt))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ne.fromString(e,...t));return $u(s),new Gt(n.firestore,null,s)}}function Yw(n,e,...t){if(n=ce(n),arguments.length===1&&(e=cc.newId()),bf("doc","path",e),n instanceof lo){const s=ne.fromString(e,...t);return ju(s),new he(n,null,new L(s))}{if(!(n instanceof he||n instanceof Gt))throw new V(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ne.fromString(e,...t));return ju(s),new he(n.firestore,n instanceof Gt?n.converter:null,new L(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="AsyncQueue";class Oh{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Ip(this,"async_queue_retry"),this._c=()=>{const s=Xo();s&&M(Dh,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Xo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Xo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Ht;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!gs(e))throw e;M(Dh,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,St("INTERNAL UNHANDLED ERROR: ",Vh(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=Rc.createAndSchedule(this,e,t,s,i=>this.hc(i));return this.tc.push(r),r}uc(){this.nc&&F(47125,{Pc:Vh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Vh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class cs extends lo{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Oh,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Oh(e),this._firestoreClient=void 0,await e}}}function Jw(n,e){const t=typeof n=="object"?n:Xa(),s=typeof n=="string"?n:Ai,r=Hi(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Cd("firestore");i&&Qw(r,...i)}return r}function kc(n){if(n._terminated)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Xw(n),n._firestoreClient}function Xw(n){var s,r,i,o;const e=n._freezeSettings(),t=Kw(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(r=n._app)==null?void 0:r.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new qw(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ge(Se.fromBase64String(e))}catch(t){throw new V(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ge(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ge._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vr(e,Ge._jsonSchema))return Ge.fromBase64String(e.bytes)}}Ge._jsonSchemaVersion="firestore/bytes/1.0",Ge._jsonSchema={type:pe("string",Ge._jsonSchemaVersion),bytes:pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ft._jsonSchemaVersion}}static fromJSON(e){if(vr(e,ft._jsonSchema))return new ft(e.latitude,e.longitude)}}ft._jsonSchemaVersion="firestore/geoPoint/1.0",ft._jsonSchema={type:pe("string",ft._jsonSchemaVersion),latitude:pe("number"),longitude:pe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vr(e,Ze._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Ze(e.vectorValues);throw new V(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ze._jsonSchemaVersion="firestore/vectorValue/1.0",Ze._jsonSchema={type:pe("string",Ze._jsonSchemaVersion),vectorValues:pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=/^__.*__$/;class eA{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new on(e,this.data,this.fieldMask,t,this.fieldTransforms):new wr(e,this.data,t,this.fieldTransforms)}}class $p{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new on(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Hp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{dataSource:n})}}class Vc{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Vc({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.mc(e),s}fc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),s=this.i({path:t,arrayElement:!1});return s.Ac(),s}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Oi(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Hp(this.dataSource)&&Zw.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class tA{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||oo(e)}I(e,t,s,r=!1){return new Vc({dataSource:e,methodName:t,targetDoc:s,path:Ae.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mc(n){const e=n._freezeSettings(),t=oo(n._databaseId);return new tA(n._databaseId,!!e.ignoreUndefinedProperties,t)}function nA(n,e,t,s,r,i={}){const o=n.I(i.merge||i.mergeFields?2:0,e,t,r);Lc("Data must be an object, but it was:",o,s);const c=zp(s,o);let l,h;if(i.merge)l=new He(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=An(e,p,t);if(!o.contains(g))throw new V(C.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Qp(f,g)||f.push(g)}l=new He(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new eA(new qe(c),l,h)}class uo extends Oc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof uo}}function sA(n,e,t,s){const r=n.I(1,e,t);Lc("Data must be an object, but it was:",r,s);const i=[],o=qe.empty();rn(s,(l,h)=>{const f=Kp(e,l,t);h=ce(h);const p=r.fc(f);if(h instanceof uo)i.push(f);else{const g=Cr(h,p);g!=null&&(i.push(f),o.set(f,g))}});const c=new He(i);return new $p(o,c,r.fieldTransforms)}function rA(n,e,t,s,r,i){const o=n.I(1,e,t),c=[An(e,s,t)],l=[r];if(i.length%2!=0)throw new V(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(An(e,i[g])),l.push(i[g+1]);const h=[],f=qe.empty();for(let g=c.length-1;g>=0;--g)if(!Qp(h,c[g])){const R=c[g];let P=l[g];P=ce(P);const O=o.fc(R);if(P instanceof uo)h.push(R);else{const k=Cr(P,O);k!=null&&(h.push(R),f.set(R,k))}}const p=new He(h);return new $p(f,p,o.fieldTransforms)}function iA(n,e,t,s=!1){return Cr(t,n.I(s?4:3,e))}function Cr(n,e){if(Gp(n=ce(n)))return Lc("Unsupported field value:",e,n),zp(n,e);if(n instanceof Oc)return function(s,r){if(!Hp(r.dataSource))throw r.yc(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.yc(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const c of s){let l=Cr(c,r.gc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(s,r){if((s=ce(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return BI(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=oe.fromDate(s);return{timestampValue:Pi(r.serializer,i)}}if(s instanceof oe){const i=new oe(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Pi(r.serializer,i)}}if(s instanceof ft)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ge)return{bytesValue:lp(r.serializer,s._byteString)};if(s instanceof he){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:gc(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Ze)return function(o,c){const l=o instanceof Ze?o.toArray():o;return{mapValue:{fields:{[xf]:{stringValue:Ff},[Si]:{arrayValue:{values:l.map(f=>{if(typeof f!="number")throw c.yc("VectorValues must only contain numeric values.");return pc(c.serializer,f)})}}}}}}(s,r);if(_p(s))return s._toProto(r.serializer);throw r.yc(`Unsupported field value: ${Yi(s)}`)}(n,e)}function zp(n,e){const t={};return kf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rn(n,(s,r)=>{const i=Cr(r,e.dc(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Gp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof oe||n instanceof ft||n instanceof Ge||n instanceof he||n instanceof Oc||n instanceof Ze||_p(n))}function Lc(n,e,t){if(!Gp(t)||!Pf(t)){const s=Yi(t);throw s==="an object"?e.yc(n+" a custom object"):e.yc(n+" "+s)}}function An(n,e,t){if((e=ce(e))instanceof Dc)return e._internalPath;if(typeof e=="string")return Kp(n,e);throw Oi("Field path arguments must be of type string or ",n,!1,void 0,t)}const oA=new RegExp("[~\\*/\\[\\]]");function Kp(n,e,t){if(e.search(oA)>=0)throw Oi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Dc(...e.split("."))._internalPath}catch{throw Oi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Oi(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new V(C.INVALID_ARGUMENT,c+n+l)}function Qp(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{convertValue(e,t="none"){switch(en(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Zt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return rn(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertVectorValue(e){var s,r,i;const t=(i=(r=(s=e.fields)==null?void 0:s[Si].arrayValue)==null?void 0:r.values)==null?void 0:i.map(o=>ue(o.doubleValue));return new Ze(t)}convertGeoPoint(e){return new ft(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Zi(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ur(e));default:return null}}convertTimestamp(e){const t=Xt(e);return new oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ne.fromString(e);X(mp(s),9688,{name:e});const r=new hr(s.get(1),s.get(3)),i=new L(s.popFirst(5));return r.isEqual(t)||St(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp extends aA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ge(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new he(this.firestore,null,t)}}const Mh="@firebase/firestore",Lh="4.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(n){return function(t,s){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(An("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class cA extends Jp{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xc{}class Xp extends xc{}function fC(n,e,...t){let s=[];e instanceof xc&&s.push(e),s=s.concat(t),function(i){const o=i.filter(l=>l instanceof Fc).length,c=i.filter(l=>l instanceof ho).length;if(o>1||o>0&&c>0)throw new V(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class ho extends Xp{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ho(e,t,s)}_apply(e){const t=this._parse(e);return Zp(e._query,t),new On(e.firestore,e.converter,wa(e._query,t))}_parse(e){const t=Mc(e.firestore);return function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Uh(p,f);const P=[];for(const O of p)P.push(Fh(l,i,O));g={arrayValue:{values:P}}}else g=Fh(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Uh(p,f),g=iA(c,o,p,f==="in"||f==="not-in");return fe.create(h,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function pC(n,e,t){const s=e,r=An("where",n);return ho._create(r,s,t)}class Fc extends xc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Fc(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:nt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,i){let o=r;const c=i.getFlattenedFilters();for(const l of c)Zp(o,l),o=wa(o,l)}(e._query,t),new On(e.firestore,e.converter,wa(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Uc extends Xp{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Uc(e,t)}_apply(e){const t=function(r,i,o){if(r.startAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fr(i,o)}(e._query,this._field,this._direction);return new On(e.firestore,e.converter,DI(e._query,t))}}function mC(n,e="asc"){const t=e,s=An("orderBy",n);return Uc._create(s,t)}function Fh(n,e,t){if(typeof(t=ce(t))=="string"){if(t==="")throw new V(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zf(e)&&t.indexOf("/")!==-1)throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(ne.fromString(t));if(!L.isDocumentKey(s))throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Xu(n,new L(s))}if(t instanceof he)return Xu(n,t._key);throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yi(t)}.`)}function Uh(n,e){if(!Array.isArray(n)||n.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Zp(n,e){const t=function(r,i){for(const o of r)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function uA(n,e,t){let s;return s=n?n.toFirestore(e):e,s}class Qs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gn extends Jp{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new hi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(An("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=gn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}gn._jsonSchemaVersion="firestore/documentSnapshot/1.0",gn._jsonSchema={type:pe("string",gn._jsonSchemaVersion),bundleSource:pe("string","DocumentSnapshot"),bundleName:pe("string"),bundle:pe("string")};class hi extends gn{data(e={}){return super.data(e)}}class Xn{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Qs(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new hi(this._firestore,this._userDataWriter,s.key,s,new Qs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(c=>{const l=new hi(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Qs(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new hi(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Qs(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:hA(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=cc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],r=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),s.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function hA(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xn._jsonSchemaVersion="firestore/querySnapshot/1.0",Xn._jsonSchema={type:pe("string",Xn._jsonSchemaVersion),bundleSource:pe("string","QuerySnapshot"),bundleName:pe("string"),bundle:pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(n){n=It(n,he);const e=It(n.firestore,cs),t=kc(e);return Hw(t,n._key).then(s=>tm(e,n,s))}function gC(n,e,t,...s){n=It(n,he);const r=It(n.firestore,cs),i=Mc(r);let o;return o=typeof(e=ce(e))=="string"||e instanceof Dc?rA(i,"updateDoc",n._key,e,t,s):sA(i,"updateDoc",n._key,e),em(r,[o.toMutation(n._key,ht.exists(!0))])}function yC(n,e){const t=It(n.firestore,cs),s=Yw(n),r=uA(n.converter,e),i=Mc(n.firestore);return em(t,[nA(i,"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,ht.exists(!1))]).then(()=>s)}function EC(n,...e){var h,f,p;n=ce(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||xh(e[s])||(t=e[s++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(xh(e[s])){const g=e[s];e[s]=(h=g.next)==null?void 0:h.bind(g),e[s+1]=(f=g.error)==null?void 0:f.bind(g),e[s+2]=(p=g.complete)==null?void 0:p.bind(g)}let i,o,c;if(n instanceof he)o=It(n.firestore,cs),c=eo(n._key.path),i={next:g=>{e[s]&&e[s](tm(o,n,g))},error:e[s+1],complete:e[s+2]};else{const g=It(n,On);o=It(g.firestore,cs),c=g._query;const R=new Yp(o);i={next:P=>{e[s]&&e[s](new Xn(o,R,g,P))},error:e[s+1],complete:e[s+2]},lA(n._query)}const l=kc(o);return $w(l,c,r,i)}function em(n,e){const t=kc(n);return zw(t,e)}function tm(n,e,t){const s=t.docs.get(e._key),r=new Yp(n);return new gn(n,r,e._key,s,new Qs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){zT(Pn),yn(new Yt("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),c=new cs(new QT(s.getProvider("auth-internal")),new XT(o,s.getProvider("app-check-internal")),mI(o,r),o);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),at(Mh,Lh,e),at(Mh,Lh,"esm2020")})();var dA="firebase",fA="12.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */at(dA,fA,"app");var Bh={};const qh="@firebase/database",Wh="1.1.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nm="";function pA(n){nm=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:or(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Pt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mA(e)}}catch{}return new _A},_n=sm("localStorage"),gA=sm("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=new $i("@firebase/database"),yA=function(){let n=1;return function(){return n++}}(),rm=function(n){const e=Sg(n),t=new Tg;t.update(e);const s=t.digest();return Ga.encodeByteArray(s)},br=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=br.apply(null,s):typeof s=="object"?e+=we(s):e+=s,e+=" "}return e};let nr=null,jh=!0;const EA=function(n,e){D(!0,"Can't turn on custom loggers persistently."),Zn.logLevel=W.VERBOSE,nr=Zn.log.bind(Zn)},De=function(...n){if(jh===!0&&(jh=!1,nr===null&&gA.get("logging_enabled")===!0&&EA()),nr){const e=br.apply(null,n);nr(e)}},Pr=function(n){return function(...e){De(n,...e)}},Ma=function(...n){const e="FIREBASE INTERNAL ERROR: "+br(...n);Zn.error(e)},Ct=function(...n){const e=`FIREBASE FATAL ERROR: ${br(...n)}`;throw Zn.error(e),new Error(e)},ze=function(...n){const e="FIREBASE WARNING: "+br(...n);Zn.warn(e)},TA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},im=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},IA=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ls="[MIN_NAME]",Sn="[MAX_NAME]",Ts=function(n,e){if(n===e)return 0;if(n===ls||e===Sn)return-1;if(e===ls||n===Sn)return 1;{const t=$h(n),s=$h(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},vA=function(n,e){return n===e?0:n<e?-1:1},Bs=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+we(e))},Bc=function(n){if(typeof n!="object"||n===null)return we(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=we(e[s]),t+=":",t+=Bc(n[e[s]]);return t+="}",t},om=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let r=0;r<t;r+=e)r+e>t?s.push(n.substring(r,t)):s.push(n.substring(r,r+e));return s};function Qe(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const am=function(n){D(!im(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let r,i,o,c,l;n===0?(i=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(c=Math.min(Math.floor(Math.log(n)/Math.LN2),s),i=c+s,o=Math.round(n*Math.pow(2,t-c)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-s-t))));const h=[];for(l=t;l;l-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)h.push(i%2?1:0),i=Math.floor(i/2);h.push(r?1:0),h.reverse();const f=h.join("");let p="";for(l=0;l<64;l+=8){let g=parseInt(f.substr(l,8),2).toString(16);g.length===1&&(g="0"+g),p=p+g}return p.toLowerCase()},wA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},AA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},SA=new RegExp("^-?(0*)\\d{1,10}$"),RA=-2147483648,CA=2147483647,$h=function(n){if(SA.test(n)){const e=Number(n);if(e>=RA&&e<=CA)return e}return null},Nr=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ze("Exception was thrown by user callback.",t),e},Math.floor(0))}},bA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},sr=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,$e(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(De("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class di{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}di.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="5",cm="v",lm="s",um="r",hm="f",dm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,fm="ls",pm="p",La="ac",mm="websocket",_m="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t,s,r,i=!1,o="",c=!1,l=!1,h=null){this.secure=t,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=l,this.emulatorOptions=h,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_n.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_n.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function kA(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ym(n,e,t){D(typeof e=="string","typeof type must == string"),D(typeof t=="object","typeof params must == object");let s;if(e===mm)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===_m)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);kA(n)&&(t.ns=n.namespace);const r=[];return Qe(t,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(){this.counters_={}}incrementCounter(e,t=1){Pt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return tg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea={},ta={};function Wc(n){const e=n.toString();return ea[e]||(ea[e]=new DA),ea[e]}function OA(n,e){const t=n.toString();return ta[t]||(ta[t]=e()),ta[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Nr(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="start",MA="close",LA="pLPCommand",xA="pRTLPCB",Em="id",Tm="pw",Im="ser",FA="cb",UA="seg",BA="ts",qA="d",WA="dframe",vm=1870,wm=30,jA=vm-wm,$A=25e3,HA=3e4;class Hn{constructor(e,t,s,r,i,o,c){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pr(e),this.stats_=Wc(t),this.urlFn=l=>(this.appCheckToken&&(l[La]=this.appCheckToken),ym(t,_m,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new VA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(HA)),IA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jc((...i)=>{const[o,c,l,h,f]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Hh)this.id=c,this.password=l;else if(o===MA)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,c]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,c)},()=>{this.onClosed_()},this.urlFn);const s={};s[Hh]="t",s[Im]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[FA]=this.scriptTagHolder.uniqueCallbackIdentifier),s[cm]=qc,this.transportSessionId&&(s[lm]=this.transportSessionId),this.lastSessionId&&(s[fm]=this.lastSessionId),this.applicationId&&(s[pm]=this.applicationId),this.appCheckToken&&(s[La]=this.appCheckToken),typeof location<"u"&&location.hostname&&dm.test(location.hostname)&&(s[um]=hm);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Hn.forceAllow_=!0}static forceDisallow(){Hn.forceDisallow_=!0}static isAvailable(){return Hn.forceAllow_?!0:!Hn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wA()&&!AA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=we(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ad(t),r=om(s,jA);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[WA]="t",s[Em]=e,s[Tm]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=we(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class jc{constructor(e,t,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yA(),window[LA+this.uniqueCallbackIdentifier]=e,window[xA+this.uniqueCallbackIdentifier]=t,this.myIFrame=jc.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(c){De("frame writing exception"),c.stack&&De(c.stack),De(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||De("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Em]=this.myID,e[Tm]=this.myPW,e[Im]=this.currentSerial;let t=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wm+s.length<=vm;){const o=this.pendingSegs.shift();s=s+"&"+UA+r+"="+o.seg+"&"+BA+r+"="+o.ts+"&"+qA+r+"="+o.d,r++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(s,Math.floor($A)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{De("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=16384,GA=45e3;let Vi=null;typeof MozWebSocket<"u"?Vi=MozWebSocket:typeof WebSocket<"u"&&(Vi=WebSocket);class Ye{constructor(e,t,s,r,i,o,c){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pr(this.connId),this.stats_=Wc(t),this.connURL=Ye.connectionURL_(t,o,c,r,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,r,i){const o={};return o[cm]=qc,typeof location<"u"&&location.hostname&&dm.test(location.hostname)&&(o[um]=hm),t&&(o[lm]=t),s&&(o[fm]=s),r&&(o[La]=r),i&&(o[pm]=i),ym(e,mm,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_n.set("previous_websocket_failure",!0);try{let s;hg(),this.mySock=new Vi(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Vi!==null&&!Ye.forceDisallow_}static previouslyFailed(){return _n.isInMemoryStorage||_n.get("previous_websocket_failure")===!0}markConnectionHealthy(){_n.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=or(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(D(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=we(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=om(t,zA);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(GA))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ye.responsesRequiredToBeHealthy=2;Ye.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{static get ALL_TRANSPORTS(){return[Hn,Ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Ye&&Ye.isAvailable();let s=t&&!Ye.previouslyFailed();if(e.webSocketOnly&&(t||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ye];else{const r=this.transports_=[];for(const i of _r.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);_r.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_r.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=6e4,QA=5e3,YA=10*1024,JA=100*1024,na="t",zh="d",XA="s",Gh="r",ZA="e",Kh="o",Qh="a",Yh="n",Jh="p",eS="h";class tS{constructor(e,t,s,r,i,o,c,l,h,f){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=c,this.onDisconnect_=l,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pr("c:"+this.id+":"),this.transportManager_=new _r(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=sr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>JA?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>YA?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(na in e){const t=e[na];t===Qh?this.upgradeIfSecondaryHealthy_():t===Gh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Kh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Bs("t",e),s=Bs("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Bs("t",e),s=Bs("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Bs(na,e);if(zh in e){const s=e[zh];if(t===eS){const r={...s};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===Yh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===XA?this.onConnectionShutdown_(s):t===Gh?this.onReset_(s):t===ZA?Ma("Server Error: "+s):t===Kh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ma("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),qc!==s&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),sr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(KA))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):sr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(QA))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_n.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{put(e,t,s,r){}merge(e,t,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e){this.allowedEvents_=e,this.listeners_={},D(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const r=this.getInitialEvent(e);r&&t.apply(s,r)}off(e,t,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){D(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends Sm{static getInstance(){return new Mi}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Qa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return D(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=32,Zh=768;class ae{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Z(){return new ae("")}function Q(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function sn(n){return n.pieces_.length-n.pieceNum_}function ie(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ae(n.pieces_,e)}function Rm(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function nS(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Cm(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function bm(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ae(e,0)}function ve(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof ae)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&t.push(s[r])}return new ae(t,0)}function H(n){return n.pieceNum_>=n.pieces_.length}function Ke(n,e){const t=Q(n),s=Q(e);if(t===null)return e;if(t===s)return Ke(ie(n),ie(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Pm(n,e){if(sn(n)!==sn(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Xe(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(sn(n)>sn(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class sS{constructor(e,t){this.errorPrefix_=t,this.parts_=Cm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ji(this.parts_[s]);Nm(this)}}function rS(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ji(e),Nm(n)}function iS(n){const e=n.parts_.pop();n.byteLength_-=ji(e),n.parts_.length>0&&(n.byteLength_-=1)}function Nm(n){if(n.byteLength_>Zh)throw new Error(n.errorPrefix_+"has a key path longer than "+Zh+" bytes ("+n.byteLength_+").");if(n.parts_.length>Xh)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xh+") or object contains a cycle "+pn(n))}function pn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c extends Sm{static getInstance(){return new $c}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return D(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=1e3,oS=60*5*1e3,ed=30*1e3,aS=1.3,cS=3e4,lS="server_kill",td=3;class vt extends Am{constructor(e,t,s,r,i,o,c,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=c,this.authOverride_=l,this.id=vt.nextPersistentConnectionId_++,this.log_=Pr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qs,this.maxReconnectDelay_=oS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$c.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Mi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(we(i)),D(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const t=new Ka,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const c=o.d;o.s==="ok"?t.resolve(c):t.reject(c)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),D(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const c={onComplete:r,hashFn:t,query:e,tag:s};this.listens.get(o).set(i,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,c=>{const l=c.d,h=c.s;vt.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",c),h!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(h,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Pt(e,"w")){const s=ts(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Eg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ed)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=yg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),D(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,t)}sendUnlisten_(e,t,s,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,r){const i={p:t,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,s,r){this.putInternal("p",e,t,s,r)}merge(e,t,s,r){this.putInternal("m",e,t,s,r)}putInternal(e,t,s,r,i){this.initConnection_();const o={p:t,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ma("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){D(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cS&&(this.reconnectDelay_=qs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+vt.nextConnectionId_++,i=this.lastSessionId;let o=!1,c=null;const l=function(){c?c.close():(o=!0,s())},h=function(p){D(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(p)};this.realtime_={close:l,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?De("getToken() completed but was canceled"):(De("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=g&&g.token,c=new tS(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,R=>{ze(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(lS)},i))}catch(p){this.log_("Failed to get token: "+p),o||(this.repoInfo_.nodeAdmin&&ze(p),l())}}}interrupt(e){De("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){De("Resuming connection for reason: "+e),delete this.interruptReasons_[e],aa(this.interruptReasons_)&&(this.reconnectDelay_=qs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(i=>Bc(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const s=new ae(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,t){De("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=td&&(this.reconnectDelay_=ed,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){De("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=td&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+nm.replace(/\./g,"-")]=1,Qa()?e["framework.cordova"]=1:kd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Mi.getInstance().currentlyOnline();return aa(this.interruptReasons_)&&e}}vt.nextPersistentConnectionId_=0;vt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Y(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Y(ls,e),r=new Y(ls,t);return this.compare(s,r)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei;class km extends fo{static get __EMPTY_NODE(){return ei}static set __EMPTY_NODE(e){ei=e}compare(e,t){return Ts(e.name,t.name)}isDefinedOn(e){throw hs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Sn,ei)}makePost(e,t){return D(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,ei)}toString(){return".key"}}const es=new km;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??Ie.RED,this.left=r??We.EMPTY_NODE,this.right=i??We.EMPTY_NODE}copy(e,t,s,r,i){return new Ie(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,r;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class uS{copy(e,t,s,r,i){return this}insert(e,t,s){return new Ie(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,t=We.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new We(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,r=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ti(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new ti(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new ti(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new ti(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new uS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(n,e){return Ts(n.name,e.name)}function Hc(n,e){return Ts(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa;function dS(n){xa=n}const Dm=function(n){return typeof n=="number"?"number:"+am(n):"string:"+n},Om=function(n){if(n.isLeafNode()){const e=n.val();D(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Pt(e,".sv"),"Priority must be a string or number.")}else D(n===xa||n.isEmpty(),"priority of unexpected type.");D(n===xa||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nd;class Ee{static set __childrenNodeConstructor(e){nd=e}static get __childrenNodeConstructor(){return nd}constructor(e,t=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,D(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Om(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return H(e)?this:Q(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Q(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(D(s!==".priority"||sn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(ie(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dm(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=am(this.value_):e+=this.value_,this.lazyHash_=rm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(D(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,r=Ee.VALUE_TYPE_ORDER.indexOf(t),i=Ee.VALUE_TYPE_ORDER.indexOf(s);return D(r>=0,"Unknown leaf type: "+t),D(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vm,Mm;function fS(n){Vm=n}function pS(n){Mm=n}class mS extends fo{compare(e,t){const s=e.node.getPriority(),r=t.node.getPriority(),i=s.compareTo(r);return i===0?Ts(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Sn,new Ee("[PRIORITY-POST]",Mm))}makePost(e,t){const s=Vm(e);return new Y(t,new Ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ve=new mS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=Math.log(2);class gS{constructor(e){const t=i=>parseInt(Math.log(i)/_S,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Li=function(n,e,t,s){n.sort(e);const r=function(l,h){const f=h-l;let p,g;if(f===0)return null;if(f===1)return p=n[l],g=t?t(p):p,new Ie(g,p.node,Ie.BLACK,null,null);{const R=parseInt(f/2,10)+l,P=r(l,R),O=r(R+1,h);return p=n[R],g=t?t(p):p,new Ie(g,p.node,Ie.BLACK,P,O)}},i=function(l){let h=null,f=null,p=n.length;const g=function(P,O){const k=p-P,z=p;p-=P;const G=r(k+1,z),te=n[k],Fe=t?t(te):te;R(new Ie(Fe,te.node,O,null,G))},R=function(P){h?(h.left=P,h=P):(f=P,h=P)};for(let P=0;P<l.count;++P){const O=l.nextBitIsOne(),k=Math.pow(2,l.count-(P+1));O?g(k,Ie.BLACK):(g(k,Ie.BLACK),g(k,Ie.RED))}return f},o=new gS(n.length),c=i(o);return new We(s||e,c)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa;const Un={};class Et{static get Default(){return D(Un&&Ve,"ChildrenNode.ts has not been loaded"),sa=sa||new Et({".priority":Un},{".priority":Ve}),sa}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ts(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof We?t:null}hasIndex(e){return Pt(this.indexSet_,e.toString())}addIndex(e,t){D(e!==es,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=t.getIterator(Y.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let c;r?c=Li(s,e.getCompare()):c=Un;const l=e.toString(),h={...this.indexSet_};h[l]=e;const f={...this.indexes_};return f[l]=c,new Et(f,h)}addToIndexes(e,t){const s=mi(this.indexes_,(r,i)=>{const o=ts(this.indexSet_,i);if(D(o,"Missing index implementation for "+i),r===Un)if(o.isDefinedOn(e.node)){const c=[],l=t.getIterator(Y.Wrap);let h=l.getNext();for(;h;)h.name!==e.name&&c.push(h),h=l.getNext();return c.push(e),Li(c,o.getCompare())}else return Un;else{const c=t.get(e.name);let l=r;return c&&(l=l.remove(new Y(e.name,c))),l.insert(e,e.node)}});return new Et(s,this.indexSet_)}removeFromIndexes(e,t){const s=mi(this.indexes_,r=>{if(r===Un)return r;{const i=t.get(e.name);return i?r.remove(new Y(e.name,i)):r}});return new Et(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws;class J{static get EMPTY_NODE(){return Ws||(Ws=new J(new We(Hc),null,Et.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Om(this.priorityNode_),this.children_.isEmpty()&&D(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ws}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ws:t}}getChild(e){const t=Q(e);return t===null?this:this.getImmediateChild(t).getChild(ie(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(D(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Y(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?Ws:this.priorityNode_;return new J(r,o,i)}}updateChild(e,t){const s=Q(e);if(s===null)return t;{D(Q(e)!==".priority"||sn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(ie(e),t);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,r=0,i=!0;if(this.forEachChild(Ve,(o,c)=>{t[o]=c.val(e),s++,i&&J.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const c in t)o[c]=t[c];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dm(this.getPriority().val())+":"),this.forEachChild(Ve,(t,s)=>{const r=s.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":rm(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Y(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Y(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Y(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Y.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===kr?-1:0}withIndex(e){if(e===es||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===es||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Ve),r=t.getIterator(Ve);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===es?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yS extends J{constructor(){super(new We(Hc),J.EMPTY_NODE,Et.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const kr=new yS;Object.defineProperties(Y,{MIN:{value:new Y(ls,J.EMPTY_NODE)},MAX:{value:new Y(Sn,kr)}});km.__EMPTY_NODE=J.EMPTY_NODE;Ee.__childrenNodeConstructor=J;dS(kr);pS(kr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=!0;function Oe(n,e=null){if(n===null)return J.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),D(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Ee(t,Oe(e))}if(!(n instanceof Array)&&ES){const t=[];let s=!1;if(Qe(n,(o,c)=>{if(o.substring(0,1)!=="."){const l=Oe(c);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new Y(o,l)))}}),t.length===0)return J.EMPTY_NODE;const i=Li(t,hS,o=>o.name,Hc);if(s){const o=Li(t,Ve.getCompare());return new J(i,Oe(e),new Et({".priority":o},{".priority":Ve}))}else return new J(i,Oe(e),Et.Default)}else{let t=J.EMPTY_NODE;return Qe(n,(s,r)=>{if(Pt(n,s)&&s.substring(0,1)!=="."){const i=Oe(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(s,i))}}),t.updatePriority(Oe(e))}}fS(Oe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS extends fo{constructor(e){super(),this.indexPath_=e,D(!H(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),r=this.extractChild(t.node),i=s.compareTo(r);return i===0?Ts(e.name,t.name):i}makePost(e,t){const s=Oe(e),r=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(t,r)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,kr);return new Y(Sn,e)}toString(){return Cm(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS extends fo{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ts(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,t){const s=Oe(e);return new Y(t,s)}toString(){return".value"}}const vS=new IS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(n){return{type:"value",snapshotNode:n}}function AS(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function SS(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function sd(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function RS(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return D(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return D(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ls}hasEnd(){return this.endSet_}getIndexEndValue(){return D(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return D(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return D(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const e=new zc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rd(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Ve?t="$priority":n.index_===vS?t="$value":n.index_===es?t="$key":(D(n.index_ instanceof TS,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=we(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=we(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+we(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=we(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+we(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function id(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Ve&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends Am{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(D(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Pr("p:rest:"),this.listens_={}}listen(e,t,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=xi.getListenId_(e,s),c={};this.listens_[o]=c;const l=rd(e._queryParams);this.restRequest_(i+".json",l,(h,f)=>{let p=f;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(i,p,!1,s),ts(this.listens_,o)===c){let g;h?h===401?g="permission_denied":g="rest_error:"+h:g="ok",r(g,null)}})}unlisten(e,t){const s=xi.getListenId_(e,t);delete this.listens_[s]}get(e){const t=rd(e._queryParams),s=e._path.toString(),r=new Ka;return this.restRequest_(s+".json",t,(i,o)=>{let c=o;i===404&&(c=null,i=null),i===null?(this.onDataUpdate_(s,c,!1,null),r.resolve(c)):r.reject(new Error(c))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ds(t);this.log_("Sending REST request for "+o);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(s&&c.readyState===4){this.log_("REST Response for "+o+" received. status:",c.status,"response:",c.responseText);let l=null;if(c.status>=200&&c.status<300){try{l=or(c.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+c.responseText)}s(null,l)}else c.status!==401&&c.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+c.status),s(c.status);s=null}},c.open("GET",o,!0),c.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(){return{value:null,children:new Map}}function Lm(n,e,t){if(H(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=Q(e);n.children.has(s)||n.children.set(s,Fi());const r=n.children.get(s);e=ie(e),Lm(r,e,t)}}function Fa(n,e,t){n.value!==null?t(e,n.value):bS(n,(s,r)=>{const i=new ae(e.toString()+"/"+s);Fa(r,i,t)})}function bS(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Qe(this.last_,(s,r)=>{t[s]=t[s]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=10*1e3,NS=30*1e3,kS=5*60*1e3;class DS{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new PS(e);const s=od+(NS-od)*Math.random();sr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Qe(e,(r,i)=>{i>0&&Pt(this.statsToReport_,r)&&(t[r]=i,s=!0)}),s&&this.server_.reportStats(t),sr(this.reportStats_.bind(this),Math.floor(Math.random()*2*kS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function xm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Fm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Um(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ot.ACK_USER_WRITE,this.source=xm()}operationForChild(e){if(H(this.path)){if(this.affectedTree.value!=null)return D(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ae(e));return new Ui(Z(),t,this.revert)}}else return D(Q(this.path)===e,"operationForChild called for unrelated child."),new Ui(ie(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ot.OVERWRITE}operationForChild(e){return H(this.path)?new Rn(this.source,Z(),this.snap.getImmediateChild(e)):new Rn(this.source,ie(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ot.MERGE}operationForChild(e){if(H(this.path)){const t=this.children.subtree(new ae(e));return t.isEmpty()?null:t.value?new Rn(this.source,Z(),t.value):new gr(this.source,Z(),t)}else return D(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gr(this.source,ie(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(H(e))return this.isFullyInitialized()&&!this.filtered_;const t=Q(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function OS(n,e,t,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(RS(o.childName,o.snapshotNode))}),js(n,r,"child_removed",e,s,t),js(n,r,"child_added",e,s,t),js(n,r,"child_moved",i,s,t),js(n,r,"child_changed",e,s,t),js(n,r,"value",e,s,t),r}function js(n,e,t,s,r,i){const o=s.filter(c=>c.type===t);o.sort((c,l)=>MS(n,c,l)),o.forEach(c=>{const l=VS(n,c,i);r.forEach(h=>{h.respondsTo(c.type)&&e.push(h.createEvent(l,n.query_))})})}function VS(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function MS(n,e,t){if(e.childName==null||t.childName==null)throw hs("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),r=new Y(t.childName,t.snapshotNode);return n.index_.compare(s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n,e){return{eventCache:n,serverCache:e}}function rr(n,e,t,s){return Bm(new Gc(e,t,s),n.serverCache)}function qm(n,e,t,s){return Bm(n.eventCache,new Gc(e,t,s))}function Ua(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Cn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra;const LS=()=>(ra||(ra=new We(vA)),ra);class re{static fromObject(e){let t=new re(null);return Qe(e,(s,r)=>{t=t.set(new ae(s),r)}),t}constructor(e,t=LS()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Z(),value:this.value};if(H(e))return null;{const s=Q(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(ie(e),t);return i!=null?{path:ve(new ae(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(H(e))return this;{const t=Q(e),s=this.children.get(t);return s!==null?s.subtree(ie(e)):new re(null)}}set(e,t){if(H(e))return new re(t,this.children);{const s=Q(e),i=(this.children.get(s)||new re(null)).set(ie(e),t),o=this.children.insert(s,i);return new re(this.value,o)}}remove(e){if(H(e))return this.children.isEmpty()?new re(null):new re(null,this.children);{const t=Q(e),s=this.children.get(t);if(s){const r=s.remove(ie(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new re(null):new re(this.value,i)}else return this}}get(e){if(H(e))return this.value;{const t=Q(e),s=this.children.get(t);return s?s.get(ie(e)):null}}setTree(e,t){if(H(e))return t;{const s=Q(e),i=(this.children.get(s)||new re(null)).setTree(ie(e),t);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new re(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(ve(e,r),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Z(),t)}findOnPath_(e,t,s){const r=this.value?s(t,this.value):!1;if(r)return r;if(H(e))return null;{const i=Q(e),o=this.children.get(i);return o?o.findOnPath_(ie(e),ve(t,i),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Z(),t)}foreachOnPath_(e,t,s){if(H(e))return this;{this.value&&s(t,this.value);const r=Q(e),i=this.children.get(r);return i?i.foreachOnPath_(ie(e),ve(t,r),s):new re(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,t){this.children.inorderTraversal((s,r)=>{r.foreach_(ve(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.writeTree_=e}static empty(){return new et(new re(null))}}function ir(n,e,t){if(H(e))return new et(new re(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=Ke(r,e);return i=i.updateChild(o,t),new et(n.writeTree_.set(r,i))}else{const r=new re(t),i=n.writeTree_.setTree(e,r);return new et(i)}}}function ad(n,e,t){let s=n;return Qe(t,(r,i)=>{s=ir(s,ve(e,r),i)}),s}function cd(n,e){if(H(e))return et.empty();{const t=n.writeTree_.setTree(e,new re(null));return new et(t)}}function Ba(n,e){return Vn(n,e)!=null}function Vn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Ke(t.path,e)):null}function ld(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ve,(s,r)=>{e.push(new Y(s,r))}):n.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Y(s,r.value))}),e}function Kt(n,e){if(H(e))return n;{const t=Vn(n,e);return t!=null?new et(new re(t)):new et(n.writeTree_.subtree(e))}}function qa(n){return n.writeTree_.isEmpty()}function us(n,e){return Wm(Z(),n.writeTree_,e)}function Wm(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(D(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):t=Wm(ve(n,r),i,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(ve(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(n,e){return Km(e,n)}function xS(n,e,t,s,r){D(s>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:r}),r&&(n.visibleWrites=ir(n.visibleWrites,e,t)),n.lastWriteId=s}function FS(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function US(n,e){const t=n.allWrites.findIndex(c=>c.writeId===e);D(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let r=s.visible,i=!1,o=n.allWrites.length-1;for(;r&&o>=0;){const c=n.allWrites[o];c.visible&&(o>=t&&BS(c,s.path)?r=!1:Xe(s.path,c.path)&&(i=!0)),o--}if(r){if(i)return qS(n),!0;if(s.snap)n.visibleWrites=cd(n.visibleWrites,s.path);else{const c=s.children;Qe(c,l=>{n.visibleWrites=cd(n.visibleWrites,ve(s.path,l))})}return!0}else return!1}function BS(n,e){if(n.snap)return Xe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Xe(ve(n.path,t),e))return!0;return!1}function qS(n){n.visibleWrites=$m(n.allWrites,WS,Z()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function WS(n){return n.visible}function $m(n,e,t){let s=et.empty();for(let r=0;r<n.length;++r){const i=n[r];if(e(i)){const o=i.path;let c;if(i.snap)Xe(t,o)?(c=Ke(t,o),s=ir(s,c,i.snap)):Xe(o,t)&&(c=Ke(o,t),s=ir(s,Z(),i.snap.getChild(c)));else if(i.children){if(Xe(t,o))c=Ke(t,o),s=ad(s,c,i.children);else if(Xe(o,t))if(c=Ke(o,t),H(c))s=ad(s,Z(),i.children);else{const l=ts(i.children,Q(c));if(l){const h=l.getChild(ie(c));s=ir(s,Z(),h)}}}else throw hs("WriteRecord should have .snap or .children")}}return s}function Hm(n,e,t,s,r){if(!s&&!r){const i=Vn(n.visibleWrites,e);if(i!=null)return i;{const o=Kt(n.visibleWrites,e);if(qa(o))return t;if(t==null&&!Ba(o,Z()))return null;{const c=t||J.EMPTY_NODE;return us(o,c)}}}else{const i=Kt(n.visibleWrites,e);if(!r&&qa(i))return t;if(!r&&t==null&&!Ba(i,Z()))return null;{const o=function(h){return(h.visible||r)&&(!s||!~s.indexOf(h.writeId))&&(Xe(h.path,e)||Xe(e,h.path))},c=$m(n.allWrites,o,e),l=t||J.EMPTY_NODE;return us(c,l)}}}function jS(n,e,t){let s=J.EMPTY_NODE;const r=Vn(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ve,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(t){const i=Kt(n.visibleWrites,e);return t.forEachChild(Ve,(o,c)=>{const l=us(Kt(i,new ae(o)),c);s=s.updateImmediateChild(o,l)}),ld(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Kt(n.visibleWrites,e);return ld(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function $S(n,e,t,s,r){D(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=ve(e,t);if(Ba(n.visibleWrites,i))return null;{const o=Kt(n.visibleWrites,i);return qa(o)?r.getChild(t):us(o,r.getChild(t))}}function HS(n,e,t,s){const r=ve(e,t),i=Vn(n.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(t)){const o=Kt(n.visibleWrites,r);return us(o,s.getNode().getImmediateChild(t))}else return null}function zS(n,e){return Vn(n.visibleWrites,e)}function GS(n,e,t,s,r,i,o){let c;const l=Kt(n.visibleWrites,e),h=Vn(l,Z());if(h!=null)c=h;else if(t!=null)c=us(l,t);else return[];if(c=c.withIndex(o),!c.isEmpty()&&!c.isLeafNode()){const f=[],p=o.getCompare(),g=i?c.getReverseIteratorFrom(s,o):c.getIteratorFrom(s,o);let R=g.getNext();for(;R&&f.length<r;)p(R,s)!==0&&f.push(R),R=g.getNext();return f}else return[]}function KS(){return{visibleWrites:et.empty(),allWrites:[],lastWriteId:-1}}function Wa(n,e,t,s){return Hm(n.writeTree,n.treePath,e,t,s)}function zm(n,e){return jS(n.writeTree,n.treePath,e)}function ud(n,e,t,s){return $S(n.writeTree,n.treePath,e,t,s)}function Bi(n,e){return zS(n.writeTree,ve(n.treePath,e))}function QS(n,e,t,s,r,i){return GS(n.writeTree,n.treePath,e,t,s,r,i)}function Kc(n,e,t){return HS(n.writeTree,n.treePath,e,t)}function Gm(n,e){return Km(ve(n.treePath,e),n.writeTree)}function Km(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;D(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),D(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(s,sd(s,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(s,SS(s,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(s,AS(s,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(s,sd(s,e.snapshotNode,r.oldSnap));else throw hs("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Qm=new JS;class Qc{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Gc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Kc(this.writes_,e,s)}}getChildAfterChild(e,t,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Cn(this.viewCache_),i=QS(this.writes_,r,t,1,s,e);return i.length===0?null:i[0]}}function XS(n,e){D(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),D(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ZS(n,e,t,s,r){const i=new YS;let o,c;if(t.type===ot.OVERWRITE){const h=t;h.source.fromUser?o=ja(n,e,h.path,h.snap,s,r,i):(D(h.source.fromServer,"Unknown source."),c=h.source.tagged||e.serverCache.isFiltered()&&!H(h.path),o=qi(n,e,h.path,h.snap,s,r,c,i))}else if(t.type===ot.MERGE){const h=t;h.source.fromUser?o=tR(n,e,h.path,h.children,s,r,i):(D(h.source.fromServer,"Unknown source."),c=h.source.tagged||e.serverCache.isFiltered(),o=$a(n,e,h.path,h.children,s,r,c,i))}else if(t.type===ot.ACK_USER_WRITE){const h=t;h.revert?o=rR(n,e,h.path,s,r,i):o=nR(n,e,h.path,h.affectedTree,s,r,i)}else if(t.type===ot.LISTEN_COMPLETE)o=sR(n,e,t.path,s,i);else throw hs("Unknown operation type: "+t.type);const l=i.getChanges();return eR(e,o,l),{viewCache:o,changes:l}}function eR(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=Ua(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&t.push(wS(Ua(e)))}}function Ym(n,e,t,s,r,i){const o=e.eventCache;if(Bi(s,t)!=null)return e;{let c,l;if(H(t))if(D(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Cn(e),f=h instanceof J?h:J.EMPTY_NODE,p=zm(s,f);c=n.filter.updateFullNode(e.eventCache.getNode(),p,i)}else{const h=Wa(s,Cn(e));c=n.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const h=Q(t);if(h===".priority"){D(sn(t)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const p=ud(s,t,f,l);p!=null?c=n.filter.updatePriority(f,p):c=o.getNode()}else{const f=ie(t);let p;if(o.isCompleteForChild(h)){l=e.serverCache.getNode();const g=ud(s,t,o.getNode(),l);g!=null?p=o.getNode().getImmediateChild(h).updateChild(f,g):p=o.getNode().getImmediateChild(h)}else p=Kc(s,h,e.serverCache);p!=null?c=n.filter.updateChild(o.getNode(),h,p,f,r,i):c=o.getNode()}}return rr(e,c,o.isFullyInitialized()||H(t),n.filter.filtersNodes())}}function qi(n,e,t,s,r,i,o,c){const l=e.serverCache;let h;const f=o?n.filter:n.filter.getIndexedFilter();if(H(t))h=f.updateFullNode(l.getNode(),s,null);else if(f.filtersNodes()&&!l.isFiltered()){const R=l.getNode().updateChild(t,s);h=f.updateFullNode(l.getNode(),R,null)}else{const R=Q(t);if(!l.isCompleteForPath(t)&&sn(t)>1)return e;const P=ie(t),k=l.getNode().getImmediateChild(R).updateChild(P,s);R===".priority"?h=f.updatePriority(l.getNode(),k):h=f.updateChild(l.getNode(),R,k,P,Qm,null)}const p=qm(e,h,l.isFullyInitialized()||H(t),f.filtersNodes()),g=new Qc(r,p,i);return Ym(n,p,t,r,g,c)}function ja(n,e,t,s,r,i,o){const c=e.eventCache;let l,h;const f=new Qc(r,e,i);if(H(t))h=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=rr(e,h,!0,n.filter.filtersNodes());else{const p=Q(t);if(p===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),s),l=rr(e,h,c.isFullyInitialized(),c.isFiltered());else{const g=ie(t),R=c.getNode().getImmediateChild(p);let P;if(H(g))P=s;else{const O=f.getCompleteChild(p);O!=null?Rm(g)===".priority"&&O.getChild(bm(g)).isEmpty()?P=O:P=O.updateChild(g,s):P=J.EMPTY_NODE}if(R.equals(P))l=e;else{const O=n.filter.updateChild(c.getNode(),p,P,g,f,o);l=rr(e,O,c.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function hd(n,e){return n.eventCache.isCompleteForChild(e)}function tR(n,e,t,s,r,i,o){let c=e;return s.foreach((l,h)=>{const f=ve(t,l);hd(e,Q(f))&&(c=ja(n,c,f,h,r,i,o))}),s.foreach((l,h)=>{const f=ve(t,l);hd(e,Q(f))||(c=ja(n,c,f,h,r,i,o))}),c}function dd(n,e,t){return t.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function $a(n,e,t,s,r,i,o,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,h;H(t)?h=s:h=new re(null).setTree(t,s);const f=e.serverCache.getNode();return h.children.inorderTraversal((p,g)=>{if(f.hasChild(p)){const R=e.serverCache.getNode().getImmediateChild(p),P=dd(n,R,g);l=qi(n,l,new ae(p),P,r,i,o,c)}}),h.children.inorderTraversal((p,g)=>{const R=!e.serverCache.isCompleteForChild(p)&&g.value===null;if(!f.hasChild(p)&&!R){const P=e.serverCache.getNode().getImmediateChild(p),O=dd(n,P,g);l=qi(n,l,new ae(p),O,r,i,o,c)}}),l}function nR(n,e,t,s,r,i,o){if(Bi(r,t)!=null)return e;const c=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(H(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return qi(n,e,t,l.getNode().getChild(t),r,i,c,o);if(H(t)){let h=new re(null);return l.getNode().forEachChild(es,(f,p)=>{h=h.set(new ae(f),p)}),$a(n,e,t,h,r,i,c,o)}else return e}else{let h=new re(null);return s.foreach((f,p)=>{const g=ve(t,f);l.isCompleteForPath(g)&&(h=h.set(f,l.getNode().getChild(g)))}),$a(n,e,t,h,r,i,c,o)}}function sR(n,e,t,s,r){const i=e.serverCache,o=qm(e,i.getNode(),i.isFullyInitialized()||H(t),i.isFiltered());return Ym(n,o,t,s,Qm,r)}function rR(n,e,t,s,r,i){let o;if(Bi(s,t)!=null)return e;{const c=new Qc(s,e,r),l=e.eventCache.getNode();let h;if(H(t)||Q(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Wa(s,Cn(e));else{const p=e.serverCache.getNode();D(p instanceof J,"serverChildren would be complete if leaf node"),f=zm(s,p)}f=f,h=n.filter.updateFullNode(l,f,i)}else{const f=Q(t);let p=Kc(s,f,e.serverCache);p==null&&e.serverCache.isCompleteForChild(f)&&(p=l.getImmediateChild(f)),p!=null?h=n.filter.updateChild(l,f,p,ie(t),c,i):e.eventCache.getNode().hasChild(f)?h=n.filter.updateChild(l,f,J.EMPTY_NODE,ie(t),c,i):h=l,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wa(s,Cn(e)),o.isLeafNode()&&(h=n.filter.updateFullNode(h,o,i)))}return o=e.serverCache.isFullyInitialized()||Bi(s,Z())!=null,rr(e,h,o,n.filter.filtersNodes())}}function iR(n,e){const t=Cn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!H(e)&&!t.getImmediateChild(Q(e)).isEmpty())?t.getChild(e):null}function fd(n,e,t,s){e.type===ot.MERGE&&e.source.queryId!==null&&(D(Cn(n.viewCache_),"We should always have a full cache before handling merges"),D(Ua(n.viewCache_),"Missing event cache, even though we have a server cache"));const r=n.viewCache_,i=ZS(n.processor_,r,e,t,s);return XS(n.processor_,i.viewCache),D(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,oR(n,i.changes,i.viewCache.eventCache.getNode())}function oR(n,e,t,s){const r=n.eventRegistrations_;return OS(n.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pd;function aR(n){D(!pd,"__referenceConstructor has already been defined"),pd=n}function Yc(n,e,t,s){const r=e.source.queryId;if(r!==null){const i=n.views.get(r);return D(i!=null,"SyncTree gave us an op for an invalid query."),fd(i,e,t,s)}else{let i=[];for(const o of n.views.values())i=i.concat(fd(o,e,t,s));return i}}function Jc(n,e){let t=null;for(const s of n.views.values())t=t||iR(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let md;function cR(n){D(!md,"__referenceConstructor has already been defined"),md=n}class _d{constructor(e){this.listenProvider_=e,this.syncPointTree_=new re(null),this.pendingWriteTree_=KS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lR(n,e,t,s,r){return xS(n.pendingWriteTree_,e,t,s,r),r?mo(n,new Rn(xm(),e,t)):[]}function zn(n,e,t=!1){const s=FS(n.pendingWriteTree_,e);if(US(n.pendingWriteTree_,e)){let i=new re(null);return s.snap!=null?i=i.set(Z(),!0):Qe(s.children,o=>{i=i.set(new ae(o),!0)}),mo(n,new Ui(s.path,i,t))}else return[]}function po(n,e,t){return mo(n,new Rn(Fm(),e,t))}function uR(n,e,t){const s=re.fromObject(t);return mo(n,new gr(Fm(),e,s))}function hR(n,e,t,s){const r=e_(n,s);if(r!=null){const i=t_(r),o=i.path,c=i.queryId,l=Ke(o,e),h=new Rn(Um(c),l,t);return n_(n,o,h)}else return[]}function dR(n,e,t,s){const r=e_(n,s);if(r){const i=t_(r),o=i.path,c=i.queryId,l=Ke(o,e),h=re.fromObject(t),f=new gr(Um(c),l,h);return n_(n,o,f)}else return[]}function Jm(n,e,t){const r=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,c)=>{const l=Ke(o,e),h=Jc(c,l);if(h)return h});return Hm(r,e,i,t,!0)}function mo(n,e){return Xm(e,n.syncPointTree_,null,jm(n.pendingWriteTree_,Z()))}function Xm(n,e,t,s){if(H(n.path))return Zm(n,e,t,s);{const r=e.get(Z());t==null&&r!=null&&(t=Jc(r,Z()));let i=[];const o=Q(n.path),c=n.operationForChild(o),l=e.children.get(o);if(l&&c){const h=t?t.getImmediateChild(o):null,f=Gm(s,o);i=i.concat(Xm(c,l,h,f))}return r&&(i=i.concat(Yc(r,n,s,t))),i}}function Zm(n,e,t,s){const r=e.get(Z());t==null&&r!=null&&(t=Jc(r,Z()));let i=[];return e.children.inorderTraversal((o,c)=>{const l=t?t.getImmediateChild(o):null,h=Gm(s,o),f=n.operationForChild(o);f&&(i=i.concat(Zm(f,c,l,h)))}),r&&(i=i.concat(Yc(r,n,s,t))),i}function e_(n,e){return n.tagToQueryMap.get(e)}function t_(n){const e=n.indexOf("$");return D(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ae(n.substr(0,e))}}function n_(n,e,t){const s=n.syncPointTree_.get(e);D(s,"Missing sync point for query tag that we're tracking");const r=jm(n.pendingWriteTree_,e);return Yc(s,t,r,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Xc(t)}node(){return this.node_}}class Zc{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ve(this.path_,e);return new Zc(this.syncTree_,t)}node(){return Jm(this.syncTree_,this.path_)}}const fR=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},gd=function(n,e,t){if(!n||typeof n!="object")return n;if(D(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return pR(n[".sv"],e,t);if(typeof n[".sv"]=="object")return mR(n[".sv"],e);D(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},pR=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:D(!1,"Unexpected server value: "+n)}},mR=function(n,e,t){n.hasOwnProperty("increment")||D(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&D(!1,"Unexpected increment value: "+s);const r=e.node();if(D(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},_R=function(n,e,t,s){return el(e,new Zc(t,n),s)},gR=function(n,e,t){return el(n,new Xc(e),t)};function el(n,e,t){const s=n.getPriority().val(),r=gd(s,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,c=gd(o.getValue(),e,t);return c!==o.getValue()||r!==o.getPriority().val()?new Ee(c,Oe(r)):n}else{const o=n;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new Ee(r))),o.forEachChild(Ve,(c,l)=>{const h=el(l,e.getImmediateChild(c),t);h!==l&&(i=i.updateImmediateChild(c,h))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function nl(n,e){let t=e instanceof ae?e:new ae(e),s=n,r=Q(t);for(;r!==null;){const i=ts(s.node.children,r)||{children:{},childCount:0};s=new tl(r,s,i),t=ie(t),r=Q(t)}return s}function Is(n){return n.node.value}function s_(n,e){n.node.value=e,Ha(n)}function r_(n){return n.node.childCount>0}function yR(n){return Is(n)===void 0&&!r_(n)}function _o(n,e){Qe(n.node.children,(t,s)=>{e(new tl(t,n,s))})}function i_(n,e,t,s){t&&e(n),_o(n,r=>{i_(r,e,!0)})}function ER(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Dr(n){return new ae(n.parent===null?n.name:Dr(n.parent)+"/"+n.name)}function Ha(n){n.parent!==null&&TR(n.parent,n.name,n)}function TR(n,e,t){const s=yR(t),r=Pt(n.node.children,e);s&&r?(delete n.node.children[e],n.node.childCount--,Ha(n)):!s&&!r&&(n.node.children[e]=t.node,n.node.childCount++,Ha(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=/[\[\].#$\/\u0000-\u001F\u007F]/,vR=/[\[\].#$\u0000-\u001F\u007F]/,ia=10*1024*1024,o_=function(n){return typeof n=="string"&&n.length!==0&&!IR.test(n)},wR=function(n){return typeof n=="string"&&n.length!==0&&!vR.test(n)},AR=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),wR(n)},a_=function(n,e,t){const s=t instanceof ae?new sS(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+pn(s));if(typeof e=="function")throw new Error(n+"contains a function "+pn(s)+" with contents = "+e.toString());if(im(e))throw new Error(n+"contains "+e.toString()+" "+pn(s));if(typeof e=="string"&&e.length>ia/3&&ji(e)>ia)throw new Error(n+"contains a string greater than "+ia+" utf8 bytes "+pn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(Qe(e,(o,c)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!o_(o)))throw new Error(n+" contains an invalid key ("+o+") "+pn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rS(s,o),a_(n,c,s),iS(s)}),r&&i)throw new Error(n+' contains ".value" child '+pn(s)+" in addition to actual children.")}},SR=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!o_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!AR(t))throw new Error(Ag(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function CR(n,e){let t=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();t!==null&&!Pm(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&n.eventLists_.push(t)}function Mn(n,e,t){CR(n,t),bR(n,s=>Xe(s,e)||Xe(e,s))}function bR(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const r=n.eventLists_[s];if(r){const i=r.path;e(i)?(PR(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function PR(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();nr&&De("event: "+t.toString()),Nr(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="repo_interrupt",kR=25;class DR{constructor(e,t,s,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new RR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Fi(),this.transactionQueueTree_=new tl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function OR(n,e,t){if(n.stats_=Wc(n.repoInfo_),n.forceRestClient_||bA())n.server_=new xi(n.repoInfo_,(s,r,i,o)=>{yd(n,s,r,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ed(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new vt(n.repoInfo_,e,(s,r,i,o)=>{yd(n,s,r,i,o)},s=>{Ed(n,s)},s=>{MR(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=OA(n.repoInfo_,()=>new DS(n.stats_,n.server_)),n.infoData_=new CS,n.infoSyncTree_=new _d({startListening:(s,r,i,o)=>{let c=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(c=po(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),c},stopListening:()=>{}}),sl(n,"connected",!1),n.serverSyncTree_=new _d({startListening:(s,r,i,o)=>(n.server_.listen(s,i,r,(c,l)=>{const h=o(c,l);Mn(n.eventQueue_,s._path,h)}),[]),stopListening:(s,r)=>{n.server_.unlisten(s,r)}})}function VR(n){const t=n.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function c_(n){return fR({timestamp:VR(n)})}function yd(n,e,t,s,r){n.dataUpdateCount++;const i=new ae(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(s){const l=mi(t,h=>Oe(h));o=dR(n.serverSyncTree_,i,l,r)}else{const l=Oe(t);o=hR(n.serverSyncTree_,i,l,r)}else if(s){const l=mi(t,h=>Oe(h));o=uR(n.serverSyncTree_,i,l)}else{const l=Oe(t);o=po(n.serverSyncTree_,i,l)}let c=i;o.length>0&&(c=il(n,i)),Mn(n.eventQueue_,c,o)}function Ed(n,e){sl(n,"connected",e),e===!1&&xR(n)}function MR(n,e){Qe(e,(t,s)=>{sl(n,t,s)})}function sl(n,e,t){const s=new ae("/.info/"+e),r=Oe(t);n.infoData_.updateSnapshot(s,r);const i=po(n.infoSyncTree_,s,r);Mn(n.eventQueue_,s,i)}function LR(n){return n.nextWriteId_++}function xR(n){l_(n,"onDisconnectEvents");const e=c_(n),t=Fi();Fa(n.onDisconnect_,Z(),(r,i)=>{const o=_R(r,i,n.serverSyncTree_,e);Lm(t,r,o)});let s=[];Fa(t,Z(),(r,i)=>{s=s.concat(po(n.serverSyncTree_,r,i));const o=qR(n,r);il(n,o)}),n.onDisconnect_=Fi(),Mn(n.eventQueue_,Z(),s)}function FR(n){n.persistentConnection_&&n.persistentConnection_.interrupt(NR)}function l_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),De(t,...e)}function u_(n,e,t){return Jm(n.serverSyncTree_,e,t)||J.EMPTY_NODE}function rl(n,e=n.transactionQueueTree_){if(e||go(n,e),Is(e)){const t=d_(n,e);D(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&UR(n,Dr(e),t)}else r_(e)&&_o(e,t=>{rl(n,t)})}function UR(n,e,t){const s=t.map(h=>h.currentWriteId),r=u_(n,e,s);let i=r;const o=r.hash();for(let h=0;h<t.length;h++){const f=t[h];D(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const p=Ke(e,f.path);i=i.updateChild(p,f.currentOutputSnapshotRaw)}const c=i.val(!0),l=e;n.server_.put(l.toString(),c,h=>{l_(n,"transaction put response",{path:l.toString(),status:h});let f=[];if(h==="ok"){const p=[];for(let g=0;g<t.length;g++)t[g].status=2,f=f.concat(zn(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&p.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();go(n,nl(n.transactionQueueTree_,e)),rl(n,n.transactionQueueTree_),Mn(n.eventQueue_,e,f);for(let g=0;g<p.length;g++)Nr(p[g])}else{if(h==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{ze("transaction at "+l.toString()+" failed: "+h);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=h}il(n,e)}},o)}function il(n,e){const t=h_(n,e),s=Dr(t),r=d_(n,t);return BR(n,r,s),s}function BR(n,e,t){if(e.length===0)return;const s=[];let r=[];const o=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const l=e[c],h=Ke(t,l.path);let f=!1,p;if(D(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,p=l.abortReason,r=r.concat(zn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=kR)f=!0,p="maxretry",r=r.concat(zn(n.serverSyncTree_,l.currentWriteId,!0));else{const g=u_(n,l.path,o);l.currentInputSnapshot=g;const R=e[c].update(g.val());if(R!==void 0){a_("transaction failed: Data returned ",R,l.path);let P=Oe(R);typeof R=="object"&&R!=null&&Pt(R,".priority")||(P=P.updatePriority(g.getPriority()));const k=l.currentWriteId,z=c_(n),G=gR(P,g,z);l.currentOutputSnapshotRaw=P,l.currentOutputSnapshotResolved=G,l.currentWriteId=LR(n),o.splice(o.indexOf(k),1),r=r.concat(lR(n.serverSyncTree_,l.path,G,l.currentWriteId,l.applyLocally)),r=r.concat(zn(n.serverSyncTree_,k,!0))}else f=!0,p="nodata",r=r.concat(zn(n.serverSyncTree_,l.currentWriteId,!0))}Mn(n.eventQueue_,t,r),r=[],f&&(e[c].status=2,function(g){setTimeout(g,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&(p==="nodata"?s.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):s.push(()=>e[c].onComplete(new Error(p),!1,null))))}go(n,n.transactionQueueTree_);for(let c=0;c<s.length;c++)Nr(s[c]);rl(n,n.transactionQueueTree_)}function h_(n,e){let t,s=n.transactionQueueTree_;for(t=Q(e);t!==null&&Is(s)===void 0;)s=nl(s,t),e=ie(e),t=Q(e);return s}function d_(n,e){const t=[];return f_(n,e,t),t.sort((s,r)=>s.order-r.order),t}function f_(n,e,t){const s=Is(e);if(s)for(let r=0;r<s.length;r++)t.push(s[r]);_o(e,r=>{f_(n,r,t)})}function go(n,e){const t=Is(e);if(t){let s=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[s]=t[r],s++);t.length=s,s_(e,t.length>0?t:void 0)}_o(e,s=>{go(n,s)})}function qR(n,e){const t=Dr(h_(n,e)),s=nl(n.transactionQueueTree_,e);return ER(s,r=>{oa(n,r)}),oa(n,s),i_(s,r=>{oa(n,r)}),t}function oa(n,e){const t=Is(e);if(t){const s=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(D(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(D(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(zn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?s_(e,void 0):t.length=i+1,Mn(n.eventQueue_,Dr(e),r);for(let o=0;o<s.length;o++)Nr(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let r=t[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function jR(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ze(`Invalid query segment '${t}' in query '${n}'`)}return e}const Td=function(n,e){const t=$R(n),s=t.namespace;t.domain==="firebase.com"&&Ct(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ct("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||TA();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new gm(t.host,t.secure,s,r,e,"",s!==t.subdomain),path:new ae(t.pathString)}},$R=function(n){let e="",t="",s="",r="",i="",o=!0,c="https",l=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(c=n.substring(0,h-1),n=n.substring(h+2));let f=n.indexOf("/");f===-1&&(f=n.length);let p=n.indexOf("?");p===-1&&(p=n.length),e=n.substring(0,Math.min(f,p)),f<p&&(r=WR(n.substring(f,p)));const g=jR(n.substring(Math.min(n.length,p)));h=e.indexOf(":"),h>=0?(o=c==="https"||c==="wss",l=parseInt(e.substring(h+1),10)):h=e.length;const R=e.slice(0,h);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const P=e.indexOf(".");s=e.substring(0,P).toLowerCase(),t=e.substring(P+1),i=s}"ns"in g&&(i=g.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:c,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t,s,r){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=r}get key(){return H(this._path)?null:Rm(this._path)}get ref(){return new vs(this._repo,this._path)}get _queryIdentifier(){const e=id(this._queryParams),t=Bc(e);return t==="{}"?"default":t}get _queryObject(){return id(this._queryParams)}isEqual(e){if(e=ce(e),!(e instanceof ol))return!1;const t=this._repo===e._repo,s=Pm(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+nS(this._path)}}class vs extends ol{constructor(e,t){super(e,t,new zc,!1)}get parent(){const e=bm(this._path);return e===null?null:new vs(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}aR(vs);cR(vs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR="FIREBASE_DATABASE_EMULATOR_HOST",za={};let zR=!1;function GR(n,e,t,s){const r=e.lastIndexOf(":"),i=e.substring(0,r),o=bn(i);n.repoInfo_=new gm(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function KR(n,e,t,s,r){let i=s||n.options.databaseURL;i===void 0&&(n.options.projectId||Ct("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),De("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Td(i,r),c=o.repoInfo,l;typeof process<"u"&&Bh&&(l=Bh[HR]),l?(i=`http://${l}?ns=${c.namespace}`,o=Td(i,r),c=o.repoInfo):o.repoInfo.secure;const h=new NA(n.name,n.options,e);SR("Invalid Firebase Database URL",o),H(o.path)||Ct("Database URL must point to the root of a Firebase Database (not including a child path).");const f=YR(c,n,h,new PA(n,t));return new JR(f,n)}function QR(n,e){const t=za[e];(!t||t[n.key]!==n)&&Ct(`Database ${e}(${n.repoInfo_}) has already been deleted.`),FR(n),delete t[n.key]}function YR(n,e,t,s){let r=za[e.name];r||(r={},za[e.name]=r);let i=r[n.toURLString()];return i&&Ct("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new DR(n,zR,t,s),r[n.toURLString()]=i,i}class JR{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(OR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new vs(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(QR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ct("Cannot call "+e+" on a deleted database.")}}function XR(n=Xa(),e){const t=Hi(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Cd("database");s&&ZR(t,...s)}return t}function ZR(n,e,t,s={}){n=ce(n),n._checkNotDeleted("useEmulator");const r=`${e}:${t}`,i=n._repoInternal;if(n._instanceStarted){if(r===n._repoInternal.repoInfo_.host&&Qt(s,i.repoInfo_.emulatorOptions))return;Ct("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ct('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new di(di.OWNER);else if(s.mockUserToken){const c=typeof s.mockUserToken=="string"?s.mockUserToken:Nd(s.mockUserToken,n.app.options.projectId);o=new di(c)}bn(e)&&Ya(e),GR(i,r,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(n){pA(Pn),yn(new Yt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return KR(s,r,i,t)},"PUBLIC").setMultipleInstances(!0)),at(qh,Wh,n),at(qh,Wh,"esm2020")}vt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};vt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};eC();const tC={apiKey:"AIzaSyCNe8-dYnbPW5Ja8Ixb9xuxB0PIwWu2-Ns",authDomain:"edutap-thesis.firebaseapp.com",databaseURL:"https://edutap-thesis-default-rtdb.firebaseio.com",projectId:"edutap-thesis",storageBucket:"edutap-thesis.firebasestorage.app",messagingSenderId:"925689449246",appId:"1:925689449246:web:50092c0c3f35c73e39170f",measurementId:"G-S0LN7ZY452"},al=Md(tC),TC=$T(al),IC=Jw(al);XR(al);export{sC as C,ps as E,TC as a,IC as b,Y_ as c,Yw as d,aC as e,gC as f,_C as g,cC as h,lC as i,mC as j,dC as k,yC as l,EC as o,fC as q,rC as r,iC as s,oC as u,pC as w};
