const isAndroid = () => {
  const ua = navigator.userAgent.toLowerCase();
  const Android = String(ua.match(/android/i)) == 'android';

  if (!Android) return false;

  return true;
};

export default isAndroid;
