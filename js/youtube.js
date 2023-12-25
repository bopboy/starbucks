// 유튜브 영역
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const fisrtScriptTag = document.getElementsByTagName("script")[0];
fisrtScriptTag.parentNode.insertBefore(tag, fisrtScriptTag);

function onYouTubePlayerAPIReady() {
  new YT.Player("player", {
    videoId: "An6LvWQuj_8",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "An6LvWQuj_8",
    },
    events: {
      onReady: function (e) {
        e.target.mute();
      },
    },
  });
}
