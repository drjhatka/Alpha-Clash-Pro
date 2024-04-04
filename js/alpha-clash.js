function play(){
    toggleVisibility('home')
    toggleVisibility('playground')
}


function toggleVisibility(elementId){
    const element = document.getElementById(elementId);
    return element.classList.contains('hidden')? element.classList.remove('hidden'):element.classList.add('hidden')
}