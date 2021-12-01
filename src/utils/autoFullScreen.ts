const fullscreen = function (elem: any) {
  const prefix = 'webkit';
  if (elem[prefix + 'EnterFullScreen']) {
    return prefix + 'EnterFullScreen';
  } else if (elem[prefix + 'RequestFullScreen']) {
    return prefix + 'RequestFullScreen';
  }
  return false;
};

export default function autoFullScreen(v: HTMLVideoElement) {
  const ua = navigator.userAgent.toLowerCase();
  const Android = String(ua.match(/android/i)) == 'android';

  // 非android系统不使用;
  if (!Android) return;

  let video = v;
  let doc: Document = new Document();
  const fullscreenvideo: string | false = fullscreen(doc.createElement('video'));

  if (fullscreenvideo == false) {
    alert('不支持全屏模式');
    return;
  }

  video.addEventListener(
    'webkitfullscreenchange',
    function (e) {
      if (doc.hasOwnProperty('webkitIsFullScreen')) {
        //退出全屏暂停视频
        video.pause();
      }
    },
    false
  );

  video.addEventListener(
    'click',
    function () {
      video.play();
      // video[fullscreenvideo]();
    },
    false
  );

  video.addEventListener(
    'ended',
    function () {
      // doc.webkitCancelFullScreen(); //播放完毕自动退出全屏
    },
    false
  );
}
