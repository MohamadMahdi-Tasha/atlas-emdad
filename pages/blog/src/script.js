// Variables
const copy_btn_1 = document.getElementById('dv-copy-btn-1');
const copy_btn_2 = document.getElementById('dv-copy-btn-2');

// A Function That Copys Pages Url
function copy_url() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
}

// Adding Event Listener On Copy Buttons On Click That Runs 'copy_url' Function
copy_btn_1.addEventListener('click', copy_url);
copy_btn_2.addEventListener('click', copy_url);