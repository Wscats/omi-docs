# Props

我们可以在组件的属性上传入属性值，通过传入属性值让组件接受外部的数据而更改自身的状态。

```html
<component-name myObj={{ name: 'Eno Yao' }} />
```

组件内部通过props接受即可：

```html
<template name="component-name">
    <p>{props.myObj.name}</p>
</template>
```

我们还可以通过`static defaultProps`设置默认的props值和通过`static propTypes`设置默认的props类型。

```html
<template name="component-name">
    <div>
        <p>{props.name}</p>
        <p>{props.age}</p>
    </div>
</template>
<script>
    export default class {
        static defaultProps = {
            name: 'Omi',
            age: 18
        }

        static propTypes = {
            name: String,
            age: Number
        }
    }
</script>
```