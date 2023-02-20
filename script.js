
// Sound function
function drumSound(sound) {
    switch (sound) {
        case 'w':
            let w = new Audio('./sounds/crash.mp3');
            w.play();
            break;

        case 'a':
            let a = new Audio('./sounds/kick-bass.mp3');
            a.play();
            break;

        case 's':
            let s = new Audio('./sounds/snare.mp3');
            s.play();
            break;

        case 'd':
            let d = new Audio('./sounds/tom-1.mp3');
            d.play();
            break;

        case 'j':
            let j = new Audio('./sounds/tom-2.mp3');
            j.play();
            break;

        case 'k':
            let k = new Audio('./sounds/tom-3.mp3');
            k.play();
            break;
        case 'l':
            let l = new Audio('./sounds/tom-4.mp3');
            l.play();
            break;

        default:
            console.log(sound)
            break;
    }
}


// Animation 
function makeAnimation(currentKey){
    let activeButton=document.querySelector("."+currentKey)
    activeButton.classList.add('pressed')
    setTimeout(()=>{
        activeButton.classList.remove('pressed')
    },500)
}



// Cliciked On Image Drum
let noOfDrum = document.querySelectorAll(".drum-item").length
for (let i = 0; i < noOfDrum; i++) {
    document.querySelectorAll(".drum-item")[i].addEventListener("click", function () {
        let selectedDrum = this.innerHTML
        drumSound(selectedDrum)
        makeAnimation(selectedDrum)

    })
}

// Clicked on Key Boards for Sound...
// about keypress-Deprecated For more Please Check MDN Document
document.addEventListener('keypress', (event) => {
    let keyPressed = event.key
    drumSound(keyPressed)
    makeAnimation(keyPressed)
});
