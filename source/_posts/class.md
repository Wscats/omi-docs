# Class

Omi 有内置的两个 class 方法 `classNames` 和 `extractClass`：

```html
<template name="component-name">
    <div {...this.cls}>
        Test
    </div>
</template>
<script>
    import { classNames, extractClass } from 'omi'
    //extractClass 会取出 props 的  class 或 className 属性并与其他 classNames 合并在一起
    export default class {
        cls = extractClass(this.props, 'o-my-class', {
            'other-class': true,
            'other-class-b': this.xxx === 1
        })
    }
</script>
```

上面的 classNames 和 npm 上的 classNames 是一样的。