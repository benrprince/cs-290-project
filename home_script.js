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

// photo carousel

selectedImage = document.getElementsByClassName('caro-photos')[0]
selectedImage.style.display = 'block'

document.getElementById('previous').addEventListener('click', function() {
    prevButton()})
document.getElementById('next').addEventListener('click', function() {
    nextButton()})

function prevButton() {
    if (selectedImage == document.getElementsByClassName('caro-photos')[0]) {
        selectedImage.style.display = 'none'
        selectedImage = document.getElementsByClassName('caro-photos')[3]
        selectedImage.style.display = 'block'
        return
    }
    if (selectedImage == document.getElementsByClassName('caro-photos')[1]) {
        selectedImage.style.display = 'none'
        selectedImage = document.getElementsByClassName('caro-photos')[0]
        selectedImage.style.display = 'block'
        return
    }
    if (selectedImage == document.getElementsByClassName('caro-photos')[2]) {
        selectedImage.style.display = 'none'
        selectedImage = document.getElementsByClassName('caro-photos')[1]
        selectedImage.style.display = 'block'
        return
    }
    if (selectedImage == document.getElementsByClassName('caro-photos')[3]) {
        selectedImage.style.display = 'none'
        selectedImage = document.getElementsByClassName('caro-photos')[2]
        selectedImage.style.display = 'block'
        return
    }
}

function nextButton() {
    if (selectedImage == document.getElementsByClassName('caro-photos')[0]) {
        selectedImage.style.display = 'none'
        selectedImage = document.getElementsByClassName('caro-photos')[1]
        selectedImage.style.display = 'block'
        return
    }
    if (selectedImage == document.getElementsByClassName('caro-photos')[1]) {
        selectedImage.style.display = 'none'
        selectedImage = document.getElementsByClassName('caro-photos')[2]
        selectedImage.style.display = 'block'
        return
    }
    if (selectedImage == document.getElementsByClassName('caro-photos')[2]) {
        selectedImage.style.display = 'none'
        selectedImage = document.getElementsByClassName('caro-photos')[3]
        selectedImage.style.display = 'block'
        return
    }
    if (selectedImage == document.getElementsByClassName('caro-photos')[3]) {
        selectedImage.style.display = 'none'
        selectedImage = document.getElementsByClassName('caro-photos')[0]
        selectedImage.style.display = 'block'
        return
    }
}