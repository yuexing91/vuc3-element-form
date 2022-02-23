export function getFormExplorerComponents() {
  let base = {
    title: '基础',
    children: [
      {
        title: '按钮',
        node: `<el-button>按钮</el-button>`,
      },
      {
        title: 'div',
        node: `<div style="min-height: 20px;"></div>`,
      },
    ],
  };

  let layout = {
    title: '布局',
    children: [
      {
        title: '栅格行',
        node: `<el-row type="flex"></el-row>`,
      },
      {
        title: '栅格列',
        node: `<el-col :span="12"></el-col>`,
      },
      {
        title: '卡片',
        node: '<el-card header="基础信息"></el-card>',
      },
      {
        title: '标签页',
        node: '<el-tabs model-value="pane1"><el-tab-pane label="标签页1" name="pane1"></el-tab-pane> <el-tab-pane label="标签页2" name="pane2"></el-tab-pane> </el-tabs>',
      },
    ],
  };

  let inputs = [
    {
      title: '输入框',
      tag: 'el-input',
      node: `<el-input></el-input>`,
    },
    {
      title: '文本域',
      tag: 'el-textarea',
      node: `<el-input type="textarea"></el-input>`,
    },
    {
      title: '下拉框',
      tag: 'el-select',
      node: `<el-select><el-option label="1">选项1</el-option><el-option label="2">选项2</el-option></el-select>`,
    },
    {
      title: '单选框',
      tag: 'el-radio-group',
      node: `<el-radio-group><el-radio label="1">选项1</el-radio><el-radio label="2">选项2</el-radio></el-radio-group>`,
    },
    {
      title: '复选框',
      tag: 'el-checkbox-group',
      node: `<el-checkbox-group :model-value="[]"> <el-checkbox label="1">选项1</el-checkbox> <el-checkbox label="2">选项2</el-checkbox> </el-checkbox-group>`,
    },
    {
      title: '自动补全框',
      tag: 'el-autocomplete',
      node: `<el-autocomplete/>`,
    },
    {
      title: '级联选择',
      tag: 'el-cascader',
      node: `<el-cascader/>`,
    },
    {
      title: '日期选择框',
      tag: 'el-date-picker',
      node: `<el-date-picker format="YYYY-MM-DD" valueFormat="YYYY-MM-DD"/>`,
    },
    {
      title: '数字输入框',
      tag: 'el-input-number',
      node: `<el-input-number/>`,
    },
    {
      title: '评分',
      tag: 'el-rate',
      node: `<el-rate/>`,
    },
    {
      title: '滑块',
      tag: 'el-slider',
      node: `<el-slider/>`,
    },
    {
      title: '开关',
      tag: 'el-switch',
      node: `<el-switch/>`,
    },
  ];

  let baseForm = {
    title: '表单',
    children: [/*{
      title: '表单',
      node: '<el-form></el-form>',
    },*/ {
      title: '表单项',
      node: '<el-form-item label="表单项"></el-form-item>',
    }].concat(inputs.map((item) => {
      return {
        title: item.title,
        tag({ parentNode, targetNode }) {
          if (!parentNode) return;
          if (parentNode.tag === 'el-row') {
            return 'el-col';
          }
          if (parentNode.tag === 'el-col' && parentNode.isEmpty()) {
            return 'el-form-item';
          }
          if (parentNode.tag === 'el-form' || ( parentNode.tag === 'el-col' && parentNode.isEmpty() ) || ( targetNode?.tag === 'el-form-item' && !targetNode.isEmpty() )) {
            return `el-form-item`;
          }
          return item.tag;
        },
        node({ parentNode, targetNode, dblClick }) {
          if (!parentNode) return;

          const colNode = `<el-col :span="12"><el-form-item label="${ item.title }">${ item.node }</el-form-item></el-col>`;

          if (parentNode.tag === 'el-row') {
            return colNode;
          }

          const formItemNode = `<el-form-item label="${ item.title }">${ item.node }</el-form-item>`;
          if (parentNode.tag === 'el-form' ||
              ( parentNode.tag === 'el-col' && parentNode.isEmpty() ) ||
              ( targetNode?.tag === 'el-form-item' && !targetNode.isEmpty() )) {
            return formItemNode;
          }

          if (dblClick && parentNode.tag === 'el-form-item') {
            if (parentNode.isEmpty()) {
              return item.node;
            }
            return formItemNode;
          }
        },
      };
    })),
  };

  return [base, layout, baseForm];
};
