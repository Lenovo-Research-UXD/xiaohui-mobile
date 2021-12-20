const isIOSorChrome = () => {
  const ua = navigator.userAgent.toLowerCase();
  const iOS = String(ua.match(/iphone/i)) == 'iphone';
  const chrome = String(ua.match(/chrome/i)) == 'chrome';

  if (iOS || chrome) return true;
  return false;
};

export default isIOSorChrome;
