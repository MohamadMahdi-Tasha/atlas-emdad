// Variables
const copy_btn_1 = document.getElementById('dv-copy-btn-1');
const copy_btn_2 = document.getElementById('dv-copy-btn-2');
const pop_up = document.getElementById('dv-pop-up');
const pop_up_dark_bg = document.getElementById('dv-pop-up-dark-bg');
const pop_up_close_btn = document.getElementById('dv-pop-up-close-btn');

// A Function That Shows Pop Up
function show_pop_up() {
    pop_up.style.top = '30%';
    pop_up_dark_bg.style.top = '0';
}

// A Function That Closes Pop Up
function close_pop_up() {
    pop_up.style.top = '-60%';
    pop_up_dark_bg.style.top = '-100%';
}

// A Function That Copys Pages Url
function copy_url() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    show_pop_up();
}

// Adding Event Listener On Copy Buttons On Click That Runs 'copy_url' Function
copy_btn_1.addEventListener('click', copy_url);
copy_btn_2.addEventListener('click', copy_url);

// Adding Event Listener On Dark Background And Pop Up Close Buttton
// On Click That Runs 'close_pop_up' Function
pop_up_dark_bg.addEventListener('click', close_pop_up);
pop_up_close_btn.addEventListener('click', close_pop_up)