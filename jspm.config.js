SystemJS.config({
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  map: {
    "ac": "src"
  },
  packages: {
    "ac": {
      "format": "esm",
      "meta": {
        "*.js": {
          "babelOptions": {
            "presets": [
              "babel-preset-react",
              "babel-preset-stage-2"
            ]
          }
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "babel": "npm:babel-core@6.7.7",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "babel-preset-react": "npm:babel-preset-react@6.5.0",
    "babel-preset-stage-2": "npm:babel-preset-stage-2@6.5.0",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "core-js": "npm:core-js@2.3.0",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "express": "npm:express@4.13.4",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "http": "github:jspm/nodelibs-http@0.2.0-alpha",
    "https": "github:jspm/nodelibs-https@0.2.0-alpha",
    "module": "github:jspm/nodelibs-module@0.2.0-alpha",
    "net": "github:jspm/nodelibs-net@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.1.0",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.9",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
    "react": "npm:react@15.0.1",
    "react-dom": "npm:react-dom@15.0.1",
    "react-helmet": "npm:react-helmet@3.0.2",
    "react-router": "npm:react-router@2.3.0",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
    "url": "github:jspm/nodelibs-url@0.2.0-alpha",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha"
  },
  packages: {
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.6.0"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "github:jspm/nodelibs-domain@0.2.0-alpha": {
      "map": {
        "domain-browserify": "npm:domain-browser@1.1.7"
      }
    },
    "github:jspm/nodelibs-http@0.2.0-alpha": {
      "map": {
        "http-browserify": "npm:stream-http@2.2.1"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "map": {
        "path-browserify": "npm:path-browserify@0.0.0"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "github:jspm/nodelibs-url@0.2.0-alpha": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "github:jspm/nodelibs-zlib@0.2.0-alpha": {
      "map": {
        "zlib-browserify": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:accepts@1.2.13": {
      "map": {
        "mime-types": "npm:mime-types@2.1.10",
        "negotiator": "npm:negotiator@0.5.3"
      }
    },
    "npm:asap@2.0.3": {
      "map": {}
    },
    "npm:asn1.js@4.5.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:babel-code-frame@6.7.7": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "chalk": "npm:chalk@1.1.3",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:babel-core@6.7.7": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.7.7",
        "babel-generator": "npm:babel-generator@6.7.7",
        "babel-helpers": "npm:babel-helpers@6.6.0",
        "babel-messages": "npm:babel-messages@6.7.2",
        "babel-register": "npm:babel-register@6.7.2",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-template": "npm:babel-template@6.7.0",
        "babel-traverse": "npm:babel-traverse@6.7.6",
        "babel-types": "npm:babel-types@6.7.7",
        "babylon": "npm:babylon@6.7.0",
        "convert-source-map": "npm:convert-source-map@1.2.0",
        "debug": "npm:debug@2.2.0",
        "json5": "npm:json5@0.4.0",
        "lodash": "npm:lodash@3.10.1",
        "minimatch": "npm:minimatch@2.0.10",
        "path-exists": "npm:path-exists@1.0.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "private": "npm:private@0.1.6",
        "shebang-regex": "npm:shebang-regex@1.0.0",
        "slash": "npm:slash@1.0.0",
        "source-map": "npm:source-map@0.5.4"
      }
    },
    "npm:babel-generator@6.7.7": {
      "map": {
        "babel-messages": "npm:babel-messages@6.7.2",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-types": "npm:babel-types@6.7.7",
        "detect-indent": "npm:detect-indent@3.0.1",
        "is-integer": "npm:is-integer@1.0.6",
        "lodash": "npm:lodash@3.10.1",
        "repeating": "npm:repeating@1.1.3",
        "source-map": "npm:source-map@0.5.4",
        "trim-right": "npm:trim-right@1.0.1"
      }
    },
    "npm:babel-helper-builder-binary-assignment-operator-visitor@6.6.5": {
      "map": {
        "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.6.5",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-types": "npm:babel-types@6.7.7"
      }
    },
    "npm:babel-helper-builder-react-jsx@6.7.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-types": "npm:babel-types@6.7.7",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:babel-helper-explode-assignable-expression@6.6.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-traverse": "npm:babel-traverse@6.7.6",
        "babel-types": "npm:babel-types@6.7.7"
      }
    },
    "npm:babel-helper-function-name@6.6.0": {
      "map": {
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.6.5",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-template": "npm:babel-template@6.7.0",
        "babel-traverse": "npm:babel-traverse@6.7.6",
        "babel-types": "npm:babel-types@6.7.7"
      }
    },
    "npm:babel-helper-get-function-arity@6.6.5": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-types": "npm:babel-types@6.7.7"
      }
    },
    "npm:babel-helper-remap-async-to-generator@6.7.0": {
      "map": {
        "babel-helper-function-name": "npm:babel-helper-function-name@6.6.0",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-template": "npm:babel-template@6.7.0",
        "babel-traverse": "npm:babel-traverse@6.7.6",
        "babel-types": "npm:babel-types@6.7.7"
      }
    },
    "npm:babel-helpers@6.6.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-template": "npm:babel-template@6.7.0"
      }
    },
    "npm:babel-messages@6.7.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-syntax-async-functions@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-syntax-exponentiation-operator@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-syntax-flow@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-syntax-jsx@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-syntax-object-rest-spread@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-syntax-trailing-function-commas@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-transform-async-to-generator@6.7.4": {
      "map": {
        "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.7.0",
        "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-transform-exponentiation-operator@6.5.0": {
      "map": {
        "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.6.5",
        "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-transform-flow-strip-types@6.7.0": {
      "map": {
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-transform-object-rest-spread@6.6.5": {
      "map": {
        "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-transform-react-display-name@6.5.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-transform-react-jsx-source@6.5.0": {
      "map": {
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-plugin-transform-react-jsx@6.7.5": {
      "map": {
        "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.7.5",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.5.0",
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:babel-preset-react@6.5.0": {
      "map": {
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.5.0",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.5.0",
        "babel-plugin-transform-flow-strip-types": "npm:babel-plugin-transform-flow-strip-types@6.7.0",
        "babel-plugin-transform-react-display-name": "npm:babel-plugin-transform-react-display-name@6.5.0",
        "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.7.5",
        "babel-plugin-transform-react-jsx-source": "npm:babel-plugin-transform-react-jsx-source@6.5.0"
      }
    },
    "npm:babel-preset-stage-2@6.5.0": {
      "map": {
        "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.5.0",
        "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.6.5",
        "babel-preset-stage-3": "npm:babel-preset-stage-3@6.5.0"
      }
    },
    "npm:babel-preset-stage-3@6.5.0": {
      "map": {
        "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.7.4",
        "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.5.0"
      }
    },
    "npm:babel-register@6.7.2": {
      "map": {
        "babel-core": "npm:babel-core@6.7.7",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "core-js": "npm:core-js@2.3.0",
        "home-or-tmp": "npm:home-or-tmp@1.0.0",
        "lodash": "npm:lodash@3.10.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "path-exists": "npm:path-exists@1.0.0",
        "source-map-support": "npm:source-map-support@0.2.10"
      }
    },
    "npm:babel-runtime@5.8.38": {
      "map": {}
    },
    "npm:babel-template@6.7.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-traverse": "npm:babel-traverse@6.7.6",
        "babel-types": "npm:babel-types@6.7.7",
        "babylon": "npm:babylon@6.7.0",
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:babel-traverse@6.7.6": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.7.7",
        "babel-messages": "npm:babel-messages@6.7.2",
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-types": "npm:babel-types@6.7.7",
        "babylon": "npm:babylon@6.7.0",
        "debug": "npm:debug@2.2.0",
        "globals": "npm:globals@8.18.0",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@3.10.1",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:babel-types@6.7.7": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38",
        "babel-traverse": "npm:babel-traverse@6.7.6",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@3.10.1",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babylon@6.7.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@5.8.38"
      }
    },
    "npm:bn.js@4.11.3": {
      "map": {}
    },
    "npm:brace-expansion@1.1.3": {
      "map": {
        "balanced-match": "npm:balanced-match@0.3.0",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.2.3",
        "inherits": "npm:inherits@2.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.8",
        "readable-stream": "npm:readable-stream@2.1.0"
      }
    },
    "npm:buffer-xor@1.0.3": {
      "map": {}
    },
    "npm:buffer@4.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:content-disposition@0.5.1": {
      "map": {}
    },
    "npm:cookie-signature@1.0.6": {
      "map": {}
    },
    "npm:core-js@1.2.6": {
      "map": {}
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "elliptic": "npm:elliptic@6.2.3"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.5"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "inherits": "npm:inherits@2.0.1",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:depd@1.1.0": {
      "map": {}
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:destroy@1.0.4": {
      "map": {}
    },
    "npm:detect-indent@3.0.1": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1",
        "minimist": "npm:minimist@1.2.0",
        "repeating": "npm:repeating@1.1.3"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:domain-browser@1.1.7": {
      "map": {}
    },
    "npm:elliptic@6.2.3": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "brorand": "npm:brorand@1.0.5",
        "hash.js": "npm:hash.js@1.0.3",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.13"
      }
    },
    "npm:etag@1.7.0": {
      "map": {}
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:express@4.13.4": {
      "map": {
        "accepts": "npm:accepts@1.2.13",
        "array-flatten": "npm:array-flatten@1.1.1",
        "content-disposition": "npm:content-disposition@0.5.1",
        "content-type": "npm:content-type@1.0.1",
        "cookie": "npm:cookie@0.1.5",
        "cookie-signature": "npm:cookie-signature@1.0.6",
        "debug": "npm:debug@2.2.0",
        "depd": "npm:depd@1.1.0",
        "escape-html": "npm:escape-html@1.0.3",
        "etag": "npm:etag@1.7.0",
        "finalhandler": "npm:finalhandler@0.4.1",
        "fresh": "npm:fresh@0.3.0",
        "merge-descriptors": "npm:merge-descriptors@1.0.1",
        "methods": "npm:methods@1.1.2",
        "on-finished": "npm:on-finished@2.3.0",
        "parseurl": "npm:parseurl@1.3.1",
        "path-to-regexp": "npm:path-to-regexp@0.1.7",
        "proxy-addr": "npm:proxy-addr@1.0.10",
        "qs": "npm:qs@4.0.0",
        "range-parser": "npm:range-parser@1.0.3",
        "send": "npm:send@0.13.1",
        "serve-static": "npm:serve-static@1.10.2",
        "type-is": "npm:type-is@1.6.12",
        "utils-merge": "npm:utils-merge@1.0.0",
        "vary": "npm:vary@1.0.1"
      }
    },
    "npm:falafel@1.2.0": {
      "map": {
        "acorn": "npm:acorn@1.2.2",
        "foreach": "npm:foreach@2.0.5",
        "isarray": "npm:isarray@0.0.1",
        "object-keys": "npm:object-keys@1.0.9"
      }
    },
    "npm:fbjs@0.1.0-alpha.10": {
      "map": {
        "core-js": "npm:core-js@1.2.6",
        "promise": "npm:promise@7.1.1",
        "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
      }
    },
    "npm:fbjs@0.8.1": {
      "map": {
        "babel-plugin-syntax-flow": "npm:babel-plugin-syntax-flow@6.5.0",
        "core-js": "npm:core-js@1.2.6",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "loose-envify": "npm:loose-envify@1.1.0",
        "promise": "npm:promise@7.1.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.10"
      }
    },
    "npm:finalhandler@0.4.1": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "escape-html": "npm:escape-html@1.0.3",
        "on-finished": "npm:on-finished@2.3.0",
        "unpipe": "npm:unpipe@1.0.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:history@2.1.0": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "invariant": "npm:invariant@2.2.1",
        "query-string": "npm:query-string@3.0.3",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:home-or-tmp@1.0.0": {
      "map": {
        "os-tmpdir": "npm:os-tmpdir@1.0.1",
        "user-home": "npm:user-home@1.1.1"
      }
    },
    "npm:http-errors@1.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "statuses": "npm:statuses@1.2.1"
      }
    },
    "npm:iconv-lite@0.4.13": {
      "map": {}
    },
    "npm:inherits@2.0.1": {
      "map": {}
    },
    "npm:inline-process-browser@2.0.1": {
      "map": {
        "falafel": "npm:falafel@1.2.0",
        "through2": "npm:through2@0.6.5"
      }
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:is-integer@1.0.6": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:isarray@1.0.0": {
      "map": {}
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.5.1",
        "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarguments": "npm:lodash.isarguments@3.0.8",
        "lodash.isarray": "npm:lodash.isarray@3.0.4"
      }
    },
    "npm:loose-envify@1.1.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:mime-db@1.22.0": {
      "map": {}
    },
    "npm:mime-types@2.1.10": {
      "map": {
        "mime-db": "npm:mime-db@1.22.0"
      }
    },
    "npm:mime@1.3.4": {
      "map": {}
    },
    "npm:minimatch@2.0.10": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.3"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:node-fetch@1.5.1": {
      "map": {
        "encoding": "npm:encoding@0.1.12",
        "is-stream": "npm:is-stream@1.1.0"
      }
    },
    "npm:on-finished@2.3.0": {
      "map": {
        "ee-first": "npm:ee-first@1.1.1"
      }
    },
    "npm:pako@0.2.8": {
      "map": {}
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.5.2",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.4"
      }
    },
    "npm:parseurl@1.3.1": {
      "map": {}
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:process-nextick-args@1.0.6": {
      "map": {}
    },
    "npm:promise@7.1.1": {
      "map": {
        "asap": "npm:asap@2.0.3"
      }
    },
    "npm:proxy-addr@1.0.10": {
      "map": {
        "forwarded": "npm:forwarded@0.1.0",
        "ipaddr.js": "npm:ipaddr.js@1.0.5"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:punycode@1.3.2": {
      "map": {}
    },
    "npm:query-string@3.0.3": {
      "map": {
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:randombytes@2.0.3": {
      "map": {}
    },
    "npm:react-dom@15.0.1": {
      "map": {}
    },
    "npm:react-helmet@3.0.2": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "object-assign": "npm:object-assign@4.0.1",
        "react-side-effect": "npm:react-side-effect@1.0.2",
        "shallowequal": "npm:shallowequal@0.2.2",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:react-router@2.3.0": {
      "map": {
        "history": "npm:history@2.1.0",
        "invariant": "npm:invariant@2.2.1",
        "warning": "npm:warning@2.1.0"
      }
    },
    "npm:react-side-effect@1.0.2": {
      "map": {
        "fbjs": "npm:fbjs@0.1.0-alpha.10"
      }
    },
    "npm:react@15.0.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.1",
        "loose-envify": "npm:loose-envify@1.1.0",
        "object-assign": "npm:object-assign@4.0.1"
      }
    },
    "npm:readable-stream@1.0.34": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@0.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:readable-stream@2.1.0": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "inline-process-browser": "npm:inline-process-browser@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.6",
        "string_decoder": "npm:string_decoder@0.10.31",
        "unreachable-branch-transform": "npm:unreachable-branch-transform@0.5.1",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:recast@0.11.5": {
      "map": {
        "ast-types": "npm:ast-types@0.8.16",
        "esprima": "npm:esprima@2.7.2",
        "private": "npm:private@0.1.6",
        "source-map": "npm:source-map@0.5.4"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1"
      }
    },
    "npm:ripemd160@1.0.1": {
      "map": {}
    },
    "npm:send@0.13.1": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "depd": "npm:depd@1.1.0",
        "destroy": "npm:destroy@1.0.4",
        "escape-html": "npm:escape-html@1.0.3",
        "etag": "npm:etag@1.7.0",
        "fresh": "npm:fresh@0.3.0",
        "http-errors": "npm:http-errors@1.3.1",
        "mime": "npm:mime@1.3.4",
        "ms": "npm:ms@0.7.1",
        "on-finished": "npm:on-finished@2.3.0",
        "range-parser": "npm:range-parser@1.0.3",
        "statuses": "npm:statuses@1.2.1"
      }
    },
    "npm:serve-static@1.10.2": {
      "map": {
        "escape-html": "npm:escape-html@1.0.3",
        "parseurl": "npm:parseurl@1.3.1",
        "send": "npm:send@0.13.1"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:shallowequal@0.2.2": {
      "map": {
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:source-map-support@0.2.10": {
      "map": {
        "source-map": "npm:source-map@0.1.32"
      }
    },
    "npm:source-map@0.1.32": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:statuses@1.2.1": {
      "map": {}
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.1.0"
      }
    },
    "npm:stream-http@2.2.1": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "inherits": "npm:inherits@2.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:through2@0.6.5": {
      "map": {
        "readable-stream": "npm:readable-stream@1.0.34",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:type-is@1.6.12": {
      "map": {
        "media-typer": "npm:media-typer@0.3.0",
        "mime-types": "npm:mime-types@2.1.10"
      }
    },
    "npm:ua-parser-js@0.7.10": {
      "map": {}
    },
    "npm:unreachable-branch-transform@0.5.1": {
      "map": {
        "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
        "recast": "npm:recast@0.11.5"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:util-deprecate@1.0.2": {
      "map": {}
    },
    "npm:warning@2.1.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.1.0"
      }
    }
  }
});
