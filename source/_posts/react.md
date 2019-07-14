# 配合 React 开发

安装 React 脚手架和一些必要模块。
```bash
npm install create-react-app
# 初始化项目
create-react-app my-project
# 进入项目文件夹目录
cd my-project
# 安装项目依赖
npm install
# 安装 styled-components 这个务必得安装 用于处理 React 单文件组件局部样式
npm install styled-components --save
# 安装 omil 处理React单文件组件，把 .omi 或者 .eno 后缀文件处理为 JS
npm install omil --save-dev
```

在配置完 Omil 之后，我们可以在 VS Code 上同时安装好 [Omi Snippets](https://marketplace.visualstudio.com/items?itemName=Wscats.omi-snippets) 扩展，这个插件可以方便的让你把 .omi 和 .eno 后缀文件在未经过 webpack 处理前转化为 .js 文件，让你可以直观了解到单文件组件经过 omil 转化后的 JS 文件内容，这相当于局部编译减轻 webpack 处理单文件时候的不必要消耗。


# 编写第一个组件

现在你可以使用单文件组件来编写 React 组件，默认生成类组件。

- name属性值是组件名要满足 React 框架的组件名字定义规范，首字母必须大写字母;
- `<template>`模板中不能有`<script>`和`<style>`代码片段。

```html
<template name="Component-name">
    <div>
        <p>{this.state.title}</p>
    </div>
</template>
<script>
export default class {
    constructor(props) {
        super(props)
        this.state = {
            title: "react"
        }
    }
    componentDidMount(){
        console.log('生命周期')
    }
}

</script>
<style>
p {color: #58bc58};
</style>
```
以上文件经过 Omil 处理后将会转化为以下代码：

```js
import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  /* CSS */
  p {
    color: #58bc58;
  }
`;

class ComponentName extends WeElement {
  render() {
    return h(
      StyledComponents,
      null,
      h("div", null, h("p", null, this.state.title))
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "react"
    };
  }

  componentDidMount() {
    console.log("生命周期");
  }
}

ComponentName.css = `
/* CSS */
p {color: #58bc58};
`;
export default ComponentName;
```