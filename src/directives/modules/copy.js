/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */
import { ElMessage } from "element-plus";

const copy = {
  mounted(el, binding) {
    el.copyData = binding.value;
    el.addEventListener("click", handleClick);
  },
  updated(el, binding) {
    el.copyData = binding.value;
  },
  beforeUnmount(el) {
    // eslint-disable-next-line no-underscore-dangle
    el.removeEventListener("click", el.__handleClick__);
  },
};

function handleClick(that) {
  const input = document.createElement("input");
  input.value = that.copyData.toLocaleString();
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  document.body.removeChild(input);
  ElMessage({
    type: "success",
    message: "复制成功",
  });
}

export default copy;
