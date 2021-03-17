
const needle = `
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
`

const replacement = `
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory({}, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    } else {
        factory({},{})
    }
`;

(function main() {
    const fs = require('fs')
    let haystack = fs.readFileSync('dist/index.js', 'utf8')
    haystack = haystack.replace(needle, replacement)
    fs.writeFileSync('dist/index.js', haystack)
})()