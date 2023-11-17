
const rollButton = document.getElementById('rollButton')
rollButton.addEventListener('click', function(){
    let diceNumber = Math.floor(Math.random()*6 + 1)

    const image = document.getElementById('image') //displays the image according to the number
    image.src = 'img/dice_'+diceNumber+'.svg'
})