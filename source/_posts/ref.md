# Ref

```html
<template name="component-name">
    <div>
        <h1 ref={e=> { this.h1 = e }} onClick={this.onClick}>Hello, world!</h1>
    </div>
</template>
<script>
    export default class {
        onClick = (evt) => {
            console.log(this.h1)
        }
    }
</script>
```

在元素上添加 `ref={e => { this.anyNameYouWant = e }}` ，然后你就可以 JS 代码里使用 `this.anyNameYouWant` 访问该元素。你可以使用两种方式来提高 update 的性能：

- 提前赋值
- createRef


## 提前赋值

```html
<template name="component-name">
    <div>
        <h1 ref={e=> { this.myRef = e }} onClick={this.onClick}>Hello, world!</h1>
    </div>
</template>
<script>
    export default class {
        myRef = e => { this.h1 = e }
        onClick = (evt) => {
            console.log(this.h1)
        }
    }
</script>
```

## createRef

你也可以使用 `createRef` 来得到更高的性能，使用前需要引用 `import { createRef } from "omi"`:

```html
<template name="component-name">
    <div>
        <h1 ref={this.myRef} onClick={this.onClick}>Hello, world!</h1>
    </div>
</template>
<script>
    import { createRef } from "omi";
    export default class {
        myRef = createRef()
        onClick = (evt) => {
            console.log(this.myRef.current)
        }
    }
</script>
```