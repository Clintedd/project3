$(function() {
    const lowHat = document.getElementsByClassName('clHat');

    $('#c').on('click', function() {
        lowHat.currentTime = 0;
        console.log('clicked');
        return lowHat.play();
        
    });
})