var text = document.querySelector('.text');
var body = document.querySelector('.app-body');
var button = document.querySelector('.button');
var closeBtn = document.querySelector('.close-btn');
var init = document.querySelector('.app-init')
const colors = ['chartreuse', 'coral', 'cyan', 'gold', 'brown', 'purple', 'lightskyblue', 'pink', 'violet']
const rands = [ 'rotate(-1deg)', 'rotate(-2deg)', 'rotate(-3deg)', 'rotate(-4deg)', 'rotate(-5deg)', 'rotate(-6deg)', 'rotate(-7deg)', 'rotate(0deg)', 'rotate(1deg)', 'rotate(2deg)', 'rotate(3deg)', 'rotate(4deg)', 'rotate(5deg)', 'rotate(6deg)', 'rotate(7deg)'];
var index = 0;



text.value = ''

closeBtn.addEventListener('click', () => {
    text.value = ''
    init.style.display = 'none';
})

button.addEventListener('click', () => {
        text.value = '' 
        init.style.display = 'flex';
})

text.addEventListener('keydown', (event) => {
    if(event.key == 'Enter'){
        sticker();
    }
})

sticker = () => {
    var newstk = document.createElement('div');
    newstk.className = 'sticker';
    if(index > colors.length - 1)
    index = 0;
    newstk.setAttribute('style', `background-color: ${colors[index++]}; transform: ${rands[Math.floor(Math.random() * rands.length)]}`);
    console.log(rands[Math.floor(Math.random() * rands.length)])
    newstk.textContent = text.value;
    body.appendChild(newstk);
    text.value = '';
    newstk.addEventListener('dblclick', () => {
        newstk.remove()
    })
}