import './style/ant-designer.less';

import { Configurator } from 'vuc3';
import { createApp } from 'vue';

import { componentConfigs, comboConfigs } from './configs';
import FormDesigner, { getFormExplorerComponents } from './components/FormDesigner';
import ValidatorEditor from './components/attrEditor/ValidatorEditor';

import ElementPlus from 'element-plus';

Configurator.registerValueEditor(ValidatorEditor.editorConfig.id, {
  ...ValidatorEditor.editorConfig,
  Editor: ValidatorEditor,
});
Configurator.setVucProxyHooks('onCreatedApp', (app) => {
  return app.use(ElementPlus);
});

componentConfigs.forEach(Configurator.setVucConfig);
comboConfigs.forEach(Configurator.registerComboType);

export {
  Configurator,
  FormDesigner,
  getFormExplorerComponents,
};
