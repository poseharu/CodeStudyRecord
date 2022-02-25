function initBackground(){
  const images = ["bg1", "bg2", "bg3", "bg4", "bg5"];

  const linkArea = document.querySelector("div#freepikLink a");
  linkArea.href = "https://www.freepik.com/vectors/background";
  linkArea.innerText = "Banner vector created by freepik - www.freepik.com";

  const randomImg = Math.floor(Math.random() * images.length);
  const bgImg = images[randomImg];

  document.body.style.backgroundImage = `url('img/${bgImg}.jpg')`;
}