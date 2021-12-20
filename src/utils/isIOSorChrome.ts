const isIOSorChrome = () => {
  const ua = navigator.userAgent.toLowerCase();
  const iOS = String(ua.match(/iphone/i)) == 'iphone';
  const chrome = String(ua.match(/chrome/i)) == 'chrome';

  // 第三方浏览器厂商的userAgent中经常携带有 自家的某某浏览器名称，如联想浏览器的“Lenovo Browser”
  const browser = String(ua.match(/browser/i)) == 'browser';
  if (browser) return false;

  if (iOS || chrome) return true;
  return false;
};

export default isIOSorChrome;
