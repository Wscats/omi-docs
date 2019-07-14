# CSS

这里说的是 props 的 css，而不是 static css，它提供了修改 shadow dom 内部 scoped style 的能力。

```html
<template name="component-name">
    <div>
        <h1>Look at my color!</h1>
    </div>
</template>
<script>
    export default class {
        static css = `h1{
            color: red;
        }`
    }
</script>
```

上面的 `my-element` 的 h1 标签颜色是红色。有什么办法修改吗？

```html
<template name="component-name">
    <div onClick={this.onClick}>
        <my-element css={this.myCSS} />
    </div>
</template>
<script>
    export default class {
        myCSS = `
            h1{
                color: green;
            }
        `
        onClick = () => {
            //动态修改
            this.myCSS = `
                h1{
                    color: blue;
                }
            `
            this.update()
        }
    }
</script>
```

而且还可以通过下面的方式保证一定能够修改：

```css
color: blue!important;
```