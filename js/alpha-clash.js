let life=parseInt(document.getElementById('life').innerText);
let score =0;
randomLetter = play(generateRandLetter());

document.getElementById('play_again').addEventListener('click', ()=>{
    play(generateRandLetter()); 
    navigate('score_container','playground')
    document.getElementById('life').innerText = 5;
})
document.addEventListener('keyup',(keyEvent)=>{
    //check if key matches
    if(keyEvent.key.localeCompare(randomLetter.toLowerCase())==0){
        score++;
        document.getElementById('score').innerText=score;
        toggleKeyHighlight(keyEvent.key)
        randomLetter = play(generateRandLetter())
    }
    else{
        life--;
        if(life==0){
            //end game 
            navigate('playground','score_container')
            //reset score
            document.getElementById('score_num').innerText=score;
            score=0;
            document.getElementById('score').innerText=score;
            life = 5;
            return
        }
        else{
            randomLetter = play(generateRandLetter())
            document.getElementById('life').innerText= life;
        }
    }
})

function clearKeyFormatting(className){
    const keys = document.getElementsByClassName('kbd')
    for (const key of keys) {
        const element = document.getElementById(key.innerText);
                element.classList.remove(className)
    }
}
function navigate(currentElementId, nextElementId){
    toggleVisibility(currentElementId)
    toggleVisibility(nextElementId)
}
function play(randomLetter){
    const screen = document.getElementById('screen');
    screen.classList.add('-rotate-90')
    screen.innerText = randomLetter;
    return randomLetter
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
    elementClassList.contains('hidden')? elementClassList.remove('hidden'):elementClassList.add('hidden')
}
function generateRandLetter(){
    return 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>letter.toUpperCase())[Math.round(Math.random()*25)];
}