function getExpr(objName, attr) {
  if (attr.isVBind()) {
    return objName + `[${ attr.attrValue }]`;
  }
  return objName + '.' + attr.attrValue;
}

export default {
  id: 'el-form-item',
  name: '表单项',
  eventTypes: [],
  type: ['container', 'form-item'],
  slots: [
    {
      slot: 'default',
      name: '内容',
    },
    {
      slot: 'label',
      name: '标签',
    },
    {
      slot: 'error',
      name: '错误信息',
    },
  ],
  props: {
    prop: {
      label: '字段名',
      editors: 'string',
      change(attr, old, node) {
        let form = node.closest('el-form');
        let input = node.findChild('.input');
        if (!input || !form) return;

        let formModel = form.getAttrValue(':model');
        if (!formModel) return;

        let [vModelConfig] = input.getConfig('vModel', []);
        if (!vModelConfig) return;

        let vModel = 'v-model';
        if (vModelConfig && vModelConfig != 'modelValue') {
          vModel += ':' + vModelConfig;
        }

        let expr = '';
        let propName = attr && attr.attrValue;
        if (propName) {
          expr = getExpr(formModel, attr);
        }

        input.setAttrValue(vModel, expr);
      },
    },
    label: {
      label: '标签文本',
      editors: 'string',
    },
    labelWidth: {
      label: '标签宽度',
      editors: 'string',
    },
    required: {
      label: '是否必填',
      editors: 'boolean',
    },
    rules: {
      label: '验证规则',
      editors: 'validator',
    },
    error: {
      label: '错误信息',
      editors: 'string',
    },
    showMessage: {
      label: '校验错误信息',
      editors: 'boolean?defaultValue=true',
    },
    inlineMessage: {
      label: '行内校验信息',
      editors: 'boolean?trueText=显示&falseText=隐藏',
    },
    size: {
      label: '尺寸',
      editors: 'select?@items=medium:大|small:中|mini:小',
    },
  },
};
