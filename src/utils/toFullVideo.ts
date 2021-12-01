export default function toFullVideo(videoDom: any) {
  if (videoDom.requestFullscreen) {
    return videoDom.requestFullscreen();
  } else if (videoDom.webkitRequestFullscreen) {
    return videoDom.webkitRequestFullscreen();
  } else if (videoDom.mozRequestFullscreen) {
    return videoDom.mozRequestFullscreen();
  } else {
    return videoDom.msRequestFullscreen();
  }
}
