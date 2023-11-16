let diceFace = [
    'img\one.svg',
    'img\two.svg',
    'img\three.svg',
    'img\four.svg',
    'img\five.svg',
    'img\six.svg'
]

function showDiceFace(diceFaceUrl){
    const diceFace = document.createElement('img')
    diceFace.src = diceFaceUrl
}