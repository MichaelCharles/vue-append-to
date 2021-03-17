declare var document: any;
declare var global: any;
declare var window: any;

function install(Vue) {
    if (this.installed) return;
    this.installed = true;

    Vue.directive('appendTo', {
        priority: 2000,
        terminal: true,
        bind: function (el, binding, vnode) {
            vnode.context.$nextTick(() => {
                const container = document.getElementById(binding.value);
                container.appendChild(el)
            });
        }
    })
}

const plugin = {
    install,
}

let GlobalVue: any = null;
if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

export default plugin