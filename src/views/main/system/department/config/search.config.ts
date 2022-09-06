import { IForm } from '@/base-ui/form'
export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '部门名称',
      placeholder: '请输入部门名称',
      type: 'input'
    },
    {
      field: 'leader',
      label: '领导',
      placeholder: '请输入领导姓名',
      type: 'input'
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  itemStyle: {
    padding: '10px 40px'
  },
  labelWidth: '120px',
  colLayout: {
    // ≥1920px 响应式栅格数或者栅格属性对象
    xl: 8,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }
}
