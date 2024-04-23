// insert current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear()


// menu toggle
const hb = document.querySelector('#hamburgerBtn')
const pn = document.querySelector('#primaryNav')

hb.addEventListener('click', () => {
    hb.classList.toggle('open');
    pn.classList.toggle('open');
})
