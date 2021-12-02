export default function scroll(hash: string) {
  // raf向下兼容
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback: FrameRequestCallback) {
      return setTimeout(callback, 17);
    };
  }

  // 目标锚点
  const target: HTMLDivElement = document.querySelector(hash) as HTMLDivElement;
  let offset = -50; // 偏移量
  let topTarget = target!.offsetTop + offset; // 目标滚动高度

  // 当前滚动高度
  let topOrigin = window.scrollY || document.documentElement.scrollTop;

  // 滚动速率
  let rate = 8;

  let step = function () {
    // 距离目标滚动距离
    let distance = topTarget - topOrigin;
    // 更新当前滚动高度
    topOrigin += distance / rate;

    if (Math.abs(distance) < 1) {
      window.scrollTo(0, topTarget);
    } else {
      window.scrollTo(0, topOrigin);
      requestAnimationFrame(step);
    }
  };

  step();
}
