// Menu buttons
document.getElementById('home').addEventListener('click', function(){
    menuButtonSelected('home')})
document.getElementById('page1').addEventListener('click', function(){
    menuButtonSelected('page1')})
document.getElementById('page2').addEventListener('click', function(){
    menuButtonSelected('page2')})
document.getElementById('page3').addEventListener('click', function(){
    menuButtonSelected('page3')})

function menuButtonSelected(button) {

    if(button == 'home') {
        location.href = 'home.html'
    }
    if(button == 'page1') {
        location.href = 'about.html'
    }
    if(button == 'page2') {
        location.href = 'cities.html'
    }
    if(button == 'page3') {
        location.href = 'sign_up.html'
    }
}