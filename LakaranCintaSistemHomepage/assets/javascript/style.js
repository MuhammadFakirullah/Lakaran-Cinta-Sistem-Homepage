function playSound(audioName){
    let audio = new Audio(audioName);
    audio.loop = false;
    audio.play();
}
playSound("assets/music/Warisan Gamelan Melayu - Lambang Sari@Turun Gambang.mp3");
