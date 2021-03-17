# Vue Append To Directive

You probably don't need to use this plugin. If you think you do, you should probably rethink your implementation. Defining elements in one component, and then magically teleporting them into another part of the page is probably not a great practice overall. You're better off defining your elements within the component where they'll actually show up. If you want to manipulate them from another component, you should use some kind of state management like Vuex.

However, if you (like me) have some kind of development constraints which are forcing you to do this, then this plugin will allow you to move an element from one component into any other element on the page that has an `id` using the `v-append-to` directive.



An example of including this module as a script tag can be seen below.

```
<head>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"></script>
    <script src="./vue-append-to.js"></script>
</head>
<body>

    <div id="app" style="display: flex; flex-direction: column; height: 100%">
        <div id="blue-box" style="background: cyan; flex: 1">
            <p v-append-to="'yellow-box'">I was written in the blue box, but using the Vue Append To directive I was moved to the yellow box!</p>
        </div>
        <div id="yellow-box" style="background: yellow; flex: 1">
        </div>
    </div>

    <script>
        app = new Vue({
            el: "#app"
        })
    </script>

</body>
```
