# 事件处理

Omi 元素的事件处理和 React 一样和 DOM 元素的很相似，但是有一点语法上的不同:

- Omi 事件的命名采用小驼峰式（camelCase），而不是纯小写。
- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

```html
<template name="component-name">
    <div>
        <button onClick={this.onClick}>Hello Omi!</button>
        <button onClick={(evt)=> {alert('Hello Omi!')}}>Hello Omi!</button>
        <button onClick={onClick}>Hello Omi!</button>
    </div>
</template>
<script>
    const onClick = (evt) => {
        alert('Hello Omi!')
    }
    export default class {
        onClick(evt) {
            alert('Hello Omi!')
        }
    }
</script>
```

## 事件中的this

你必须谨慎对待 JSX 回调函数中的 this，在 JavaScript 中，class 的方法默认不会绑定 this。如果你忘记绑定 this.handleClick 并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined。

这并不是 React 特有的行为；这其实与 JavaScript 函数工作原理有关。通常情况下，如果你没有在方法后面添加 ()，例如 onClick={this.handleClick}，你应该为这个方法绑定 this。

```html
<template name="component-name">
    <div>
        <button onClick={this.onClick.bind(this)}>{this.data.title}</button>
    </div>
</template>
<script>
    export default class {
        install() {
            this.data = { title: 'Hello Omi!' }
        }
        onClick() {
            this.data.title = 'Hi Eno!'
            this.update()
        }
    }
</script>
```

## 向事件处理程序传递参数

在循环中，通常我们会为事件处理函数传递额外的参数。例如，若 id 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数：

```html
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```

上述两种方式是等价的，分别通过箭头函数和 Function.prototype.bind 来实现。

在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。