(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{259:function(n,e,i){"use strict";i.r(e);var l=i(0),s=Object(l.a)({},(function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("p",[n._v("该书地址："),i("a",{attrs:{href:"http://www.apress.com/cn/book/9781484224410",target:"_blank",rel:"noopener noreferrer"}},[n._v("这里"),i("OutboundLink")],1),i("br"),n._v("\n该书代码： "),i("a",{attrs:{href:"https://github.com/caio-ribeiro-pereira/building-apis-with-nodejs",target:"_blank",rel:"noopener noreferrer"}},[n._v("这里"),i("OutboundLink")],1)]),n._v(" "),i("h2",{attrs:{id:"_1-安装sqlite3时出现卡主不动问题："}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装sqlite3时出现卡主不动问题："}},[n._v("#")]),n._v(" 1. 安装sqlite3时出现卡主不动问题：")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v("$ npm i  sqlite3 --save\n> sqlite3@3.1.8 install /Users/zyx/code/lean-api/ntask-api/node_modules/sqlite3\n> node-pre-gyp install --fallback-to-build\n")])])]),i("p",[n._v("一直卡到这里不动，而加载其他npm包则没有问题。在查找错误原因时发现了 "),i("a",{attrs:{href:"http://support.ghost.org/troubleshooting/#sqlite3-errors",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://support.ghost.org/troubleshooting/#sqlite3-errors"),i("OutboundLink")],1),n._v("\n里面有提到通过")]),n._v(" "),i("blockquote",[i("p",[n._v("To get more information about what’s failing, run "),i("code",[n._v("npm install sqlite3 --loglevel=info")]),n._v(". You should then find a more detailed messages explaining")])]),n._v(" "),i("p",[n._v("通过这个终于发现应该还是 GFW 的原因。\n详细信息如下：")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v("> sqlite3@3.1.8 install /Users/zyx/code/lean-api/ntask-api/node_modules/sqlite3\n> node-pre-gyp install --fallback-to-build\n\nnode-pre-gyp info it worked if it ends with ok\nnode-pre-gyp info using node-pre-gyp@0.6.31\nnode-pre-gyp info using node@7.3.0 | darwin | x64\nnode-pre-gyp info check checked for \"/Users/zyx/code/lean-api/ntask-api/node_modules/sqlite3/lib/binding/node-v51-darwin-x64/node_sqlite3.node\" (not found)\nnode-pre-gyp http GET https://mapbox-node-binary.s3.amazonaws.com/sqlite3/v3.1.8/node-v51-darwin-x64.tar.gz\nnode-pre-gyp http 200 https://mapbox-node-binary.s3.amazonaws.com/sqlite3/v3.1.8/node-v51-darwin-x64.tar.gz\nnode-pre-gyp info install unpacking node_sqlite3.node\nnode-pre-gyp info tarball done parsing tarball\nnode-pre-gyp info validate Running test command: '/usr/local/bin/node --eval 'require(\\'/Users/zyx/code/lean-api/ntask-api/node_modules/sqlite3/lib/binding/node-v51-darwin-x64/node_sqlite3.node\\')''\n[sqlite3] Success: \"/Users/zyx/code/lean-api/ntask-api/node_modules/sqlite3/lib/binding/node-v51-darwin-x64/node_sqlite3.node\" is installed via remote\nnode-pre-gyp info ok\nnpm info lifecycle minimist@0.0.8~postinstall: minimist@0.0.8\nnpm info lifecycle mkdirp@0.5.1~postinstall: mkdirp@0.5.1\nnpm info lifecycle abbrev@1.0.9~postinstall: abbrev@1.0.9\nnpm info lifecycle nopt@3.0.6~postinstall: nopt@3.0.6\nnpm info lifecycle delegates@1.0.0~postinstall: delegates@1.0.0\nnpm info lifecycle buffer-shims@1.0.0~postinstall: buffer-shims@1.0.0\nnpm info lifecycle core-util-is@1.0.2~postinstall: core-util-is@1.0.2\nnpm info lifecycle inherits@2.0.3~postinstall: inherits@2.0.3\nnpm info lifecycle isarray@1.0.0~postinstall: isarray@1.0.0\nnpm info lifecycle process-nextick-args@1.0.7~postinstall: process-nextick-args@1.0.7\nnpm info lifecycle string_decoder@0.10.31~postinstall: string_decoder@0.10.31\nnpm info lifecycle util-deprecate@1.0.2~postinstall: util-deprecate@1.0.2\nnpm info lifecycle readable-stream@2.1.5~postinstall: readable-stream@2.1.5\nnpm info lifecycle are-we-there-yet@1.1.2~postinstall: are-we-there-yet@1.1.2\nnpm info lifecycle console-control-strings@1.1.0~postinstall: console-control-strings@1.1.0\nnpm info lifecycle aproba@1.0.4~postinstall: aproba@1.0.4\nnpm info lifecycle has-color@0.1.7~postinstall: has-color@0.1.7\nnpm info lifecycle has-unicode@2.0.1~postinstall: has-unicode@2.0.1\nnpm info lifecycle object-assign@4.1.0~postinstall: object-assign@4.1.0\nnpm info lifecycle signal-exit@3.0.1~postinstall: signal-exit@3.0.1\nnpm info lifecycle number-is-nan@1.0.1~postinstall: number-is-nan@1.0.1\nnpm info lifecycle code-point-at@1.0.1~postinstall: code-point-at@1.0.1\nnpm info lifecycle number-is-nan@1.0.1~postinstall: number-is-nan@1.0.1\nnpm info lifecycle is-fullwidth-code-point@1.0.0~postinstall: is-fullwidth-code-point@1.0.0\nnpm info lifecycle ansi-regex@2.0.0~postinstall: ansi-regex@2.0.0\nnpm info lifecycle strip-ansi@3.0.1~postinstall: strip-ansi@3.0.1\nnpm info lifecycle string-width@1.0.2~postinstall: string-width@1.0.2\nnpm info lifecycle wide-align@1.1.0~postinstall: wide-align@1.1.0\nnpm info lifecycle gauge@2.6.0~postinstall: gauge@2.6.0\nnpm info lifecycle set-blocking@2.0.0~postinstall: set-blocking@2.0.0\nnpm info lifecycle npmlog@4.0.0~postinstall: npmlog@4.0.0\nnpm info lifecycle deep-extend@0.4.1~postinstall: deep-extend@0.4.1\nnpm info lifecycle ini@1.3.4~postinstall: ini@1.3.4\nnpm info lifecycle minimist@1.2.0~postinstall: minimist@1.2.0\nnpm info lifecycle strip-json-comments@1.0.4~postinstall: strip-json-comments@1.0.4\nnpm info lifecycle rc@1.1.6~postinstall: rc@1.1.6\nnpm info lifecycle aws-sign2@0.6.0~postinstall: aws-sign2@0.6.0\nnpm info lifecycle aws4@1.5.0~postinstall: aws4@1.5.0\nnpm info lifecycle caseless@0.11.0~postinstall: caseless@0.11.0\nnpm info lifecycle delayed-stream@1.0.0~postinstall: delayed-stream@1.0.0\nnpm info lifecycle combined-stream@1.0.5~postinstall: combined-stream@1.0.5\nnpm info lifecycle extend@3.0.0~postinstall: extend@3.0.0\nnpm info lifecycle forever-agent@0.6.1~postinstall: forever-agent@0.6.1\nnpm info lifecycle asynckit@0.4.0~postinstall: asynckit@0.4.0\nnpm info lifecycle ansi-styles@2.2.1~postinstall: ansi-styles@2.2.1\nnpm info lifecycle escape-string-regexp@1.0.5~postinstall: escape-string-regexp@1.0.5\nnpm info lifecycle ansi-regex@2.0.0~postinstall: ansi-regex@2.0.0\nnpm info lifecycle has-ansi@2.0.0~postinstall: has-ansi@2.0.0\nnpm info lifecycle ansi-regex@2.0.0~postinstall: ansi-regex@2.0.0\nnpm info lifecycle strip-ansi@3.0.1~postinstall: strip-ansi@3.0.1\nnpm info lifecycle supports-color@2.0.0~postinstall: supports-color@2.0.0\nnpm info lifecycle chalk@1.1.3~postinstall: chalk@1.1.3\nnpm info lifecycle graceful-readlink@1.0.1~postinstall: graceful-readlink@1.0.1\nnpm info lifecycle commander@2.9.0~postinstall: commander@2.9.0\nnpm info lifecycle generate-function@2.0.0~postinstall: generate-function@2.0.0\nnpm info lifecycle is-property@1.0.2~postinstall: is-property@1.0.2\nnpm info lifecycle generate-object-property@1.2.0~postinstall: generate-object-property@1.2.0\nnpm info lifecycle jsonpointer@4.0.0~postinstall: jsonpointer@4.0.0\nnpm info lifecycle xtend@4.0.1~postinstall: xtend@4.0.1\nnpm info lifecycle is-my-json-valid@2.15.0~postinstall: is-my-json-valid@2.15.0\nnpm info lifecycle pinkie@2.0.4~postinstall: pinkie@2.0.4\nnpm info lifecycle pinkie-promise@2.0.1~postinstall: pinkie-promise@2.0.1\nnpm info lifecycle har-validator@2.0.6~postinstall: har-validator@2.0.6\nnpm info lifecycle hoek@2.16.3~postinstall: hoek@2.16.3\nnpm info lifecycle boom@2.10.1~postinstall: boom@2.10.1\nnpm info lifecycle cryptiles@2.0.5~postinstall: cryptiles@2.0.5\nnpm info lifecycle sntp@1.0.9~postinstall: sntp@1.0.9\nnpm info lifecycle hawk@3.1.3~postinstall: hawk@3.1.3\nnpm info lifecycle assert-plus@0.2.0~postinstall: assert-plus@0.2.0\nnpm info lifecycle extsprintf@1.0.2~postinstall: extsprintf@1.0.2\nnpm info lifecycle json-schema@0.2.3~postinstall: json-schema@0.2.3\nnpm info lifecycle verror@1.3.6~postinstall: verror@1.3.6\nnpm info lifecycle jsprim@1.3.1~postinstall: jsprim@1.3.1\nnpm info lifecycle asn1@0.2.3~postinstall: asn1@0.2.3\nnpm info lifecycle assert-plus@1.0.0~postinstall: assert-plus@1.0.0\nnpm info lifecycle dashdash@1.14.0~postinstall: dashdash@1.14.0\nnpm info lifecycle getpass@0.1.6~postinstall: getpass@0.1.6\nnpm info lifecycle jsbn@0.1.0~postinstall: jsbn@0.1.0\nnpm info lifecycle ecc-jsbn@0.1.1~postinstall: ecc-jsbn@0.1.1\nnpm info lifecycle jodid25519@1.0.2~postinstall: jodid25519@1.0.2\nnpm info lifecycle tweetnacl@0.14.3~postinstall: tweetnacl@0.14.3\nnpm info lifecycle bcrypt-pbkdf@1.0.0~postinstall: bcrypt-pbkdf@1.0.0\nnpm info lifecycle sshpk@1.10.1~postinstall: sshpk@1.10.1\nnpm info lifecycle http-signature@1.1.1~postinstall: http-signature@1.1.1\nnpm info lifecycle is-typedarray@1.0.0~postinstall: is-typedarray@1.0.0\nnpm info lifecycle isstream@0.1.2~postinstall: isstream@0.1.2\nnpm info lifecycle json-stringify-safe@5.0.1~postinstall: json-stringify-safe@5.0.1\nnpm info lifecycle mime-db@1.24.0~postinstall: mime-db@1.24.0\nnpm info lifecycle mime-types@2.1.12~postinstall: mime-types@2.1.12\nnpm info lifecycle form-data@2.1.1~postinstall: form-data@2.1.1\nnpm info lifecycle node-uuid@1.4.7~postinstall: node-uuid@1.4.7\nnpm info lifecycle oauth-sign@0.8.2~postinstall: oauth-sign@0.8.2\nnpm info lifecycle qs@6.3.0~postinstall: qs@6.3.0\nnpm info lifecycle stringstream@0.0.5~postinstall: stringstream@0.0.5\nnpm info lifecycle punycode@1.4.1~postinstall: punycode@1.4.1\nnpm info lifecycle tough-cookie@2.3.2~postinstall: tough-cookie@2.3.2\nnpm info lifecycle tunnel-agent@0.4.3~postinstall: tunnel-agent@0.4.3\nnpm info lifecycle request@2.76.0~postinstall: request@2.76.0\nnpm info lifecycle fs.realpath@1.0.0~postinstall: fs.realpath@1.0.0\nnpm info lifecycle wrappy@1.0.2~postinstall: wrappy@1.0.2\nnpm info lifecycle inherits@2.0.3~postinstall: inherits@2.0.3\nnpm info lifecycle balanced-match@0.4.2~postinstall: balanced-match@0.4.2\nnpm info lifecycle concat-map@0.0.1~postinstall: concat-map@0.0.1\nnpm info lifecycle brace-expansion@1.1.6~postinstall: brace-expansion@1.1.6\nnpm info lifecycle minimatch@3.0.3~postinstall: minimatch@3.0.3\nnpm info lifecycle wrappy@1.0.2~postinstall: wrappy@1.0.2\nnpm info lifecycle once@1.4.0~postinstall: once@1.4.0\nnpm info lifecycle inflight@1.0.6~postinstall: inflight@1.0.6\nnpm info lifecycle path-is-absolute@1.0.1~postinstall: path-is-absolute@1.0.1\nnpm info lifecycle glob@7.1.1~postinstall: glob@7.1.1\nnpm info lifecycle rimraf@2.5.4~postinstall: rimraf@2.5.4\nnpm info lifecycle semver@5.3.0~postinstall: semver@5.3.0\nnpm info lifecycle ms@0.7.1~postinstall: ms@0.7.1\nnpm info lifecycle debug@2.2.0~postinstall: debug@2.2.0\nnpm info lifecycle inherits@2.0.3~postinstall: inherits@2.0.3\nnpm info lifecycle balanced-match@0.4.2~postinstall: balanced-match@0.4.2\nnpm info lifecycle concat-map@0.0.1~postinstall: concat-map@0.0.1\nnpm info lifecycle brace-expansion@1.1.6~postinstall: brace-expansion@1.1.6\nnpm info lifecycle minimatch@3.0.3~postinstall: minimatch@3.0.3\nnpm info lifecycle graceful-fs@4.1.9~postinstall: graceful-fs@4.1.9\nnpm info lifecycle inherits@2.0.3~postinstall: inherits@2.0.3\nnpm info lifecycle fstream@1.0.10~postinstall: fstream@1.0.10\nnpm info lifecycle fstream-ignore@1.0.5~postinstall: fstream-ignore@1.0.5\nnpm info lifecycle wrappy@1.0.2~postinstall: wrappy@1.0.2\nnpm info lifecycle once@1.3.3~postinstall: once@1.3.3\nnpm info lifecycle buffer-shims@1.0.0~postinstall: buffer-shims@1.0.0\nnpm info lifecycle core-util-is@1.0.2~postinstall: core-util-is@1.0.2\nnpm info lifecycle inherits@2.0.3~postinstall: inherits@2.0.3\nnpm info lifecycle isarray@1.0.0~postinstall: isarray@1.0.0\nnpm info lifecycle process-nextick-args@1.0.7~postinstall: process-nextick-args@1.0.7\nnpm info lifecycle string_decoder@0.10.31~postinstall: string_decoder@0.10.31\nnpm info lifecycle util-deprecate@1.0.2~postinstall: util-deprecate@1.0.2\nnpm info lifecycle readable-stream@2.1.5~postinstall: readable-stream@2.1.5\nnpm info lifecycle uid-number@0.0.6~postinstall: uid-number@0.0.6\nnpm info lifecycle graceful-fs@4.1.9~postinstall: graceful-fs@4.1.9\nnpm info lifecycle inherits@2.0.3~postinstall: inherits@2.0.3\nnpm info lifecycle block-stream@0.0.9~postinstall: block-stream@0.0.9\nnpm info lifecycle fstream@1.0.10~postinstall: fstream@1.0.10\nnpm info lifecycle tar@2.2.1~postinstall: tar@2.2.1\nnpm info lifecycle tar-pack@3.3.0~postinstall: tar-pack@3.3.0\nnpm info lifecycle nan@2.4.0~postinstall: nan@2.4.0\nnpm info lifecycle node-pre-gyp@0.6.31~postinstall: node-pre-gyp@0.6.31\nnpm info lifecycle sqlite3@3.1.8~postinstall: sqlite3@3.1.8\nntask-api@1.0.0 /Users/zyx/code/lean-api/ntask-api\n└─┬ sqlite3@3.1.8\n  ├── nan@2.4.0\n  └─┬ node-pre-gyp@0.6.31\n    ├─┬ mkdirp@0.5.1\n    │ └── minimist@0.0.8\n    ├─┬ nopt@3.0.6\n    │ └── abbrev@1.0.9\n    ├─┬ npmlog@4.0.0\n    │ ├─┬ are-we-there-yet@1.1.2\n    │ │ ├── delegates@1.0.0\n    │ │ └─┬ readable-stream@2.1.5\n    │ │   ├── buffer-shims@1.0.0\n    │ │   ├── core-util-is@1.0.2\n    │ │   ├── inherits@2.0.3\n    │ │   ├── isarray@1.0.0\n    │ │   ├── process-nextick-args@1.0.7\n    │ │   ├── string_decoder@0.10.31\n    │ │   └── util-deprecate@1.0.2\n    │ ├── console-control-strings@1.1.0\n    │ ├─┬ gauge@2.6.0\n    │ │ ├── aproba@1.0.4\n    │ │ ├── has-color@0.1.7\n    │ │ ├── has-unicode@2.0.1\n    │ │ ├── object-assign@4.1.0\n    │ │ ├── signal-exit@3.0.1\n    │ │ ├─┬ string-width@1.0.2\n    │ │ │ ├─┬ code-point-at@1.0.1\n    │ │ │ │ └── number-is-nan@1.0.1\n    │ │ │ └─┬ is-fullwidth-code-point@1.0.0\n    │ │ │   └── number-is-nan@1.0.1\n    │ │ ├─┬ strip-ansi@3.0.1\n    │ │ │ └── ansi-regex@2.0.0\n    │ │ └── wide-align@1.1.0\n    │ └── set-blocking@2.0.0\n    ├─┬ rc@1.1.6\n    │ ├── deep-extend@0.4.1\n    │ ├── ini@1.3.4\n    │ ├── minimist@1.2.0\n    │ └── strip-json-comments@1.0.4\n    ├─┬ request@2.76.0\n    │ ├── aws-sign2@0.6.0\n    │ ├── aws4@1.5.0\n    │ ├── caseless@0.11.0\n    │ ├─┬ combined-stream@1.0.5\n    │ │ └── delayed-stream@1.0.0\n    │ ├── extend@3.0.0\n    │ ├── forever-agent@0.6.1\n    │ ├─┬ form-data@2.1.1\n    │ │ └── asynckit@0.4.0\n    │ ├─┬ har-validator@2.0.6\n    │ │ ├─┬ chalk@1.1.3\n    │ │ │ ├── ansi-styles@2.2.1\n    │ │ │ ├── escape-string-regexp@1.0.5\n    │ │ │ ├─┬ has-ansi@2.0.0\n    │ │ │ │ └── ansi-regex@2.0.0\n    │ │ │ ├─┬ strip-ansi@3.0.1\n    │ │ │ │ └── ansi-regex@2.0.0\n    │ │ │ └── supports-color@2.0.0\n    │ │ ├─┬ commander@2.9.0\n    │ │ │ └── graceful-readlink@1.0.1\n    │ │ ├─┬ is-my-json-valid@2.15.0\n    │ │ │ ├── generate-function@2.0.0\n    │ │ │ ├─┬ generate-object-property@1.2.0\n    │ │ │ │ └── is-property@1.0.2\n    │ │ │ ├── jsonpointer@4.0.0\n    │ │ │ └── xtend@4.0.1\n    │ │ └─┬ pinkie-promise@2.0.1\n    │ │   └── pinkie@2.0.4\n    │ ├─┬ hawk@3.1.3\n    │ │ ├── boom@2.10.1\n    │ │ ├── cryptiles@2.0.5\n    │ │ ├── hoek@2.16.3\n    │ │ └── sntp@1.0.9\n    │ ├─┬ http-signature@1.1.1\n    │ │ ├── assert-plus@0.2.0\n    │ │ ├─┬ jsprim@1.3.1\n    │ │ │ ├── extsprintf@1.0.2\n    │ │ │ ├── json-schema@0.2.3\n    │ │ │ └── verror@1.3.6\n    │ │ └─┬ sshpk@1.10.1\n    │ │   ├── asn1@0.2.3\n    │ │   ├── assert-plus@1.0.0\n    │ │   ├── bcrypt-pbkdf@1.0.0\n    │ │   ├── dashdash@1.14.0\n    │ │   ├── ecc-jsbn@0.1.1\n    │ │   ├── getpass@0.1.6\n    │ │   ├── jodid25519@1.0.2\n    │ │   ├── jsbn@0.1.0\n    │ │   └── tweetnacl@0.14.3\n    │ ├── is-typedarray@1.0.0\n    │ ├── isstream@0.1.2\n    │ ├── json-stringify-safe@5.0.1\n    │ ├─┬ mime-types@2.1.12\n    │ │ └── mime-db@1.24.0\n    │ ├── node-uuid@1.4.7\n    │ ├── oauth-sign@0.8.2\n    │ ├── qs@6.3.0\n    │ ├── stringstream@0.0.5\n    │ ├─┬ tough-cookie@2.3.2\n    │ │ └── punycode@1.4.1\n    │ └── tunnel-agent@0.4.3\n    ├─┬ rimraf@2.5.4\n    │ └─┬ glob@7.1.1\n    │   ├── fs.realpath@1.0.0\n    │   ├─┬ inflight@1.0.6\n    │   │ └── wrappy@1.0.2\n    │   ├── inherits@2.0.3\n    │   ├─┬ minimatch@3.0.3\n    │   │ └─┬ brace-expansion@1.1.6\n    │   │   ├── balanced-match@0.4.2\n    │   │   └── concat-map@0.0.1\n    │   ├─┬ once@1.4.0\n    │   │ └── wrappy@1.0.2\n    │   └── path-is-absolute@1.0.1\n    ├── semver@5.3.0\n    ├─┬ tar@2.2.1\n    │ ├── block-stream@0.0.9\n    │ ├─┬ fstream@1.0.10\n    │ │ └── graceful-fs@4.1.9\n    │ └── inherits@2.0.3\n    └─┬ tar-pack@3.3.0\n      ├─┬ debug@2.2.0\n      │ └── ms@0.7.1\n      ├─┬ fstream@1.0.10\n      │ ├── graceful-fs@4.1.9\n      │ └── inherits@2.0.3\n      ├─┬ fstream-ignore@1.0.5\n      │ ├── inherits@2.0.3\n      │ └─┬ minimatch@3.0.3\n      │   └─┬ brace-expansion@1.1.6\n      │     ├── balanced-match@0.4.2\n      │     └── concat-map@0.0.1\n      ├─┬ once@1.3.3\n      │ └── wrappy@1.0.2\n      ├─┬ readable-stream@2.1.5\n      │ ├── buffer-shims@1.0.0\n      │ ├── core-util-is@1.0.2\n      │ ├── inherits@2.0.3\n      │ ├── isarray@1.0.0\n      │ ├── process-nextick-args@1.0.7\n      │ ├── string_decoder@0.10.31\n      │ └── util-deprecate@1.0.2\n      └── uid-number@0.0.6\n\nnpm WARN ntask-api@1.0.0 No description\nnpm WARN ntask-api@1.0.0 No repository field.\nnpm info ok\n")])])]),i("h2",{attrs:{id:"_2-安装bcrypt包问题-error-bcrypt-0-8-7-install-node-gyp-rebuild"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装bcrypt包问题-error-bcrypt-0-8-7-install-node-gyp-rebuild"}},[n._v("#")]),n._v(" 2.安装bcrypt包问题 Error: bcrypt@0.8.7 install: "),i("code",[n._v("node-gyp rebuild")])]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v("Agreeing to the Xcode/iOS license requires admin privileges, please re-run as root via sudo.\nAgreeing to the Xcode/iOS license requires admin privileges, please re-run as root via sudo.\n")])])]),i("p",[n._v("解决方法如下：")]),n._v(" "),i("blockquote",[i("p",[n._v("this generally occurs after the mac OS update. All you need to do in terminal is run "),i("code",[n._v("sudo xcodebuild -license")]),n._v(" and then agree to the terms. and then "),i("code",[n._v("npm install")]),n._v(" is ok")])]),n._v(" "),i("p",[i("a",{attrs:{href:"http://stackoverflow.com/questions/32720476/agreeing-to-the-xcode-ios-license-requires-admin-privileges-please-re-run-as-ro",target:"_blank",rel:"noopener noreferrer"}},[n._v("key about the solution"),i("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);