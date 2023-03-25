const menuLista = document.querySelectorAll('ul');
const menuItem = document.querySelectorAll('ul li');
const barra = document.getElementById('barra')

console.log(menuItem);

menuItem.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
        const width = e.target.offsetWidth;
        const left = e.target.offsetLeft;
        if(menuItem) {
            barra.style.display = 'flex'
            barra.style.width = `${width}px`
            barra.style.transform = `translate(${left}px)`;
        } else {
            barra.style.display = 'none'
        }
    })
})