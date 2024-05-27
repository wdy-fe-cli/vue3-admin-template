/**
 * v-blur
 *  去掉焦点
 */

const blur = {
  mounted(el, binding) {
    el.addEventListener("click", () => {
      el.blur();
    });
    el.addEventListener("focus", () => {
      el.blur();
    });
  },
};

export default blur;
