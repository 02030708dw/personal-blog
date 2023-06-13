import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content  消息内容
 * @param {String}  content  消息类型 info error success warn
 * @param {Number} duration  多久后消失
 * @param {HTMLElement} container 容器,消息会显示该容器的正中;如何不传,则显示到页面中
 */
export default function (options = {}) {
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  // 创建消息元素
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, { type });
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
  //设置样式
  console.log(styles);
  const typeClassName = styles[`message-${type}`];
  div.className = `${styles.message}  ${typeClassName}`;
  // 将div添加到容器中
  if (!container) {
    container = document.body;
  } else {
    //容器的position是否改动过
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }
  container.appendChild(div);
  div.clientHeight;
  div.style.opacity = 1;
  div.style.transform = `translate(-50%,-50%)`;

  //等一段时间消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%,-50%) translateY(-25px)`;
    setTimeout(() => {
      div.remove();
      options.callback && options.callback();
    }, duration);
  }, duration);
}