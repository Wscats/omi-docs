# 高阶组件

如果您用过 React，相信对高阶组件肯定不陌生，高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC 自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。

具体而言，高阶组件是参数为组件，返回值为新组件的函数。
```js
const EnhancedComponent = higherOrderComponent(WrappedComponent);
```
组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件。

HOC 在 React 的第三方库中很常见，例如 Redux 的 connect。

下面这个例子是是在组件中使用 Redux 高阶组件
```html
<template name="Component-name">
    <div><p>{this.state.title}</p></div>
</template>
<script>
    import { connect } from 'react-redux';
    export default connect((state) => {
        return state
    })(class {
        constructor(props) {
            super(props)
            this.state = {
                title: "react"
            }
        }
    })
</script>
<style>
    p {color: #58bc58;}
</style>
```