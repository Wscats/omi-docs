# 生命周期

以下表格是 Omi 的生命周期：

|生命周期钩子|描述|
|-|-|
|install|组件挂载到 DOM 前|
|installed|组件挂载到 DOM 后|
|uninstall|组件从 DOM 中移除前|
|beforeUpdate|update 更新前|
|updated|update 更新后|
|beforeRender|render() 之前|
|receiveProps|父元素重新渲染触发|

举个例子：

```html
<template name="component-name">
    <div>Seconds: {this.data.seconds}</div>
</template>
<script>
    export default class {
        data = {
            seconds: 0
        }
        tick() {
            this.data.seconds++
            this.update()
        }
        install() {
            this.interval = setInterval(() => this.tick(), 1000)
        }
        uninstall() {
            clearInterval(this.interval)
        }
    }
</script>
```