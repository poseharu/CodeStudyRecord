//https://github.com/eidoriantan/mp3tag.js

const imageUplode = document.querySelector("#imageUplode");

imageUplode.addEventListener("change", setThumbnail);

function setThumbnail(event) { 
  var reader = new FileReader(); 
  reader.onload = function(event) { 
    var img = document.createElement("img"); 
    img.setAttribute("src", event.target.result); 
    document.querySelector("div#image_container").appendChild(img); 
    //data:image/jpeg;base64, 
  }; 

  reader.readAsDataURL(event.target.files[0]); 
}

const inputMp3 = document.querySelector("#inputMp3");
const playList = document.querySelector("#playList");

function makeElement(data, id){
  const el = document.createElement('div');
  el.innerText = data;
  el.id = id;
  playList.appendChild(el);
}

inputMp3.onchange = function () {
  const reader = new FileReader()
  reader.onload = function () {
    playList.innerHTML = "";
    const buffer = this.result;

    // MP3Tag Usage
    const mp3tag = new MP3Tag(buffer);
    mp3tag.read();
    // console.log(mp3tag.tags);
    //앨범 이미지 가져오는건 구현하기 힘들어서 포기

    makeElement("앨범: " + mp3tag.tags.album, "musicAlbum");
    makeElement("트랙: " + mp3tag.tags.track, "musicTrack");
    makeElement("곡명: " + mp3tag.tags.title, "musicTitle");
    makeElement("가수: " + mp3tag.tags.artist, "musicArtist");
    makeElement("장르: " + mp3tag.tags.genre, "musicGenre");
    makeElement("연도: " + mp3tag.tags.year, "musicYear");
    makeElement("가사: \n" + mp3tag.tags.lyrics, "musicLyrics");
    // makeElement("가사: \n" + mp3tag.tags.v2.USLT[0].text, "musicLyrics");
  }

  if (this.files.length > 0) {
    reader.readAsArrayBuffer(this.files[0]);
  }
}



