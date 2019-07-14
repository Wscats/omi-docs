# Update

update 方法是内置的重要核心方法，用于更新组件自身。比如:

```js
this.update()
```

也可以传递参数，决定是否在 html 模式下忽略 attributes，强行更新:

```js
this.update(true)
```

当我们组件的 data 值发生变化，我们可以使用`this.update()`更新视图

```html
<template name="component-name">
    <div>
        <button onClick={this.toggle.bind(this)}>Update</button>
        <p style={{display:this.data.bool?'block':'none'}}>显示或者隐藏</p>
    </div>
</template>
<script>
    export default class {
        data = {
            bool: !0
        }
        toggle() {
            this.data.bool = !this.data.bool
            this.update()
        }
    }
</script>
```