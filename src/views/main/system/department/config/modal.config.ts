import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'leader',
      type: 'input',
      label: '领导',
      placeholder: '请输入领导名称'
    },
    {
      field: 'parentId',
      type: 'select',
      label: '上级部门',
      placeholder: '请选择上级部门',
      selectOptions: []
    }
  ],
  colLayout: {
    span: 24
  },
  labelWidth: '70px',
  itemStyle: {
    margin: '8px 18px 8px 0px'
  }
}
