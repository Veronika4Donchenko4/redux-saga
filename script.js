const canvas = document.getElementById('new-canvas');
const ctx = canvas.getContext('2d');
const colorList = document.getElementsByClassName('color');
const colorInput = document.getElementById('color');
let currentColor = 'black';
const clearAll = document.getElementById('clear');
const lines = document.querySelectorAll('#line-height');
let currentWidth = '3';
colorInput.addEventListener('click', () => {
    for (let i = 0; i < colorList.length; i++) {
        colorList[i].classList.remove('current');
    }
})
colorInput.oninput = function () {
    currentColor = this.value;
}
for (let elem of colorList) {
    elem.addEventListener('click', () => {
        currentColor = elem.innerHTML
        for (let i = 0; i < colorList.length; i++) {
            colorList[i].classList.remove('current');
        }
        elem.classList.add('current');
    })
}
for (let line of lines) {
    line.addEventListener('click', () => {
        for (let i = 0; i < lines.length; i++) {
            lines[i].classList.remove('current')
        }
        line.classList.add('current')
        currentWidth = line.innerHTML
    })
}
canvas.onmousedown = event => {
    ctx.beginPath();
    canvas.onmousemove = event => {
    let x = event.offsetX;
    let y = event.offsetY;
    ctx.strokeStyle = currentColor;
    ctx.lineWidth = currentWidth;
    ctx.lineTo(x,y);
    ctx.stroke();
    }
    canvas.onmouseup = () => {
        ctx.closePath()
        canvas.onmousemove = null;
    }
}
clearAll.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})
function save() {
    const img = canvas.toDataURL('image/png');
    const link = document.createElement('a')
    link.href = img;
    link.download = 'canvasJs[Export].png';
    link.click();
    console.log(link)
}
console.log ("hey")