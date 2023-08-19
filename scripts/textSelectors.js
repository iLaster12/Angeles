const hide1 = document.getElementById('1');
const hide2 = document.getElementById('2');
const hide3 = document.getElementById('3');

hide1.addEventListener('click', () => {
    
    document.getElementById("msg1").style.visibility = 'visible'
    document.getElementById("msg2").style.visibility = 'hidden'
    document.getElementById("msg3").style.visibility = 'hidden'
})

hide2.addEventListener('click', () => {
    
    document.getElementById("msg1").style.visibility = 'hidden'
    document.getElementById("msg2").style.visibility = 'visible'
    document.getElementById("msg3").style.visibility = 'hidden'
})

hide3.addEventListener('click', () => {
    
    document.getElementById("msg1").style.visibility = 'hidden'
    document.getElementById("msg2").style.visibility = 'hidden'
    document.getElementById("msg3").style.visibility = 'visible'
})