
//console.log(randomLetter)
let score =0;
let randomLetter = generateRandLetter();
play()
document.addEventListener('keyup',(keyEvent)=>{
    if(randomLetter.toLowerCase().localeCompare(keyEvent.key)==0){
        toggleKeyHighlight(keyEvent.key,'bg-green-500')   
        console.log('adsasd')   
    }
    else{
        toggleKeyHighlight(keyEvent.key,'bg-red-500')    
    }
    randomLetter = generateRandLetter()
    play()
})


function navigate(currentElementId, nextElementId){
    toggleVisibility(currentElementId)
    toggleVisibility(nextElementId)
}
function play(){
    const screen = document.getElementById('screen');
    screen.classList.add('-rotate-90')
    screen.innerText = randomLetter;
    console.log(randomLetter)
    return randomLetter.toLowerCase()
}
function toggleKeyHighlight(exceptKey, color='bg-green-500'){ 
    const keys = document.getElementsByClassName('kbd')
    //clear previous formatting
    for (const key of keys) {
        const element = document.getElementById(key.innerText);
                element.classList.remove(color)
    }
    for (const key of keys) {
        const element = document.getElementById(key.innerText);
        if(element.innerText.localeCompare(exceptKey)==0){
            element.classList.add(color)
            element.classList.add('text-white')
        }
        else{
            element.classList.remove(color)
            element.classList.remove('text-white')
        }
    }
}
function toggleVisibility(elementId){
    const elementClassList = document.getElementById(elementId).classList;
    return elementClassList.contains('hidden')? elementClassList.remove('hidden'):elementClassList.add('hidden')
}
function generateRandLetter(){
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>letter.toUpperCase())[Math.round(Math.random()*25)];
}