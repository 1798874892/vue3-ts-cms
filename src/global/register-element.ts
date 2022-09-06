import { App } from 'vue'
import 'element-plus/theme-chalk/index.css'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElAlert,
  ElAside,
  ElIcon,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElAvatar,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  ElLink,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag
} from 'element-plus/lib/index'
import {
  UserFilled,
  Iphone,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  Fold,
  Expand,
  ArrowDown,
  CircleClose,
  InfoFilled,
  Management,
  Bell,
  CollectionTag,
  ChatDotRound,
  Avatar,
  SetUp,
  Stamp,
  Refresh,
  Search,
  Edit,
  Delete,
  Promotion
} from '@element-plus/icons-vue'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElAlert,
  ElAside,
  ElIcon,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElDropdown,
  ElDropdownMenu,
  ElAvatar,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElImage,
  ElDialog,
  ElTree,
  ElCard,
  ElLink,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag
]
export const icons = [
  UserFilled,
  Iphone,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  Fold,
  Expand,
  CircleClose,
  InfoFilled,
  Management,
  ChatDotRound,
  ArrowDown,
  CollectionTag,
  Bell,
  Avatar,
  SetUp,
  Stamp,
  Refresh,
  Search,
  Edit,
  Delete,
  Promotion
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, components)
  }
  // for (const [key, component] of Object.entries(components)) {
  //   app.component(key, component)
  // }

  for (const icon of icons) {
    app.component(icon.name, icon)
  }
}
