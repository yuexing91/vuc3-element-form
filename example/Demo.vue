<template>
  <FormDesigner :formExplorerComponents="formExplorerComponents"></FormDesigner>
</template>
<script>
// 依赖 ant-design-vue
import 'ant-design-vue/dist/antd.css';
// 依赖 vuc3
import 'vuc3/dist/vuc.css';
// 依赖 element-plus
import 'element-plus/dist/index.css';

// 导入 vuc3-element-form
import { FormDesigner, Configurator, getFormExplorerComponents } from '@';

import DemoButton from './DemoButton';

Configurator.setVucConfig({
  id: 'demo-button',
  props: {
    text: {
      label: '按钮标签',
      editors: 'string',
    },
  },
});

Configurator.setVucProxyHooks('onCreatedApp', (app) => {
  return app.component('DemoButton', DemoButton);
});

export default {
  components: {
    FormDesigner,
  },
  data() {
    return {
      formExplorerComponents: [
        ...getFormExplorerComponents(),
        {
          title: '自定义组件',
          children: [
            {
              title: '测试按钮',
              node: '<demo-button text="按钮"></demo-button>',
            },
          ],
        },
      ],
    };
  },
};
</script>
