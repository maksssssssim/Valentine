document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.menu')?.classList.add('dissable');
    document.querySelector('.cupon')?.classList.add('dissable'); 
    document.querySelector('.msg')?.classList.add('dissable');
    document.querySelector('.top')?.classList.add('dissable');
    document.querySelector('.invite')?.classList.add('dissable');
    document.querySelector('.end')?.classList.add('dissable');
})

function change_page(active_pos, prev_pos) {
    document.getElementsByClassName(active_pos)[0].classList.remove('dissable')
    document.getElementsByClassName(prev_pos)[0].classList.add('dissable')
}