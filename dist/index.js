(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    } else {
        factory({},{})
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function install(Vue) {
        if (this.installed)
            return;
        this.installed = true;
        Vue.directive('appendTo', {
            priority: 2000,
            terminal: true,
            bind: function (el, binding, vnode) {
                vnode.context.$nextTick(function () {
                    var container = document.getElementById(binding.value);
                    container.appendChild(el);
                });
            }
        });
    }
    var plugin = {
        install: install,
    };
    var GlobalVue = null;
    if (typeof window !== 'undefined') {
        GlobalVue = window.Vue;
    }
    else if (typeof global !== 'undefined') {
        GlobalVue = global.Vue;
    }
    if (GlobalVue) {
        GlobalVue.use(plugin);
    }
    exports.default = plugin;
});
