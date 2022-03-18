// Variables
const like_btn = document.getElementById( "dv-like-btn");
const save_btn = document.getElementById( "dv-save-btn");
const cm_input = document.getElementById('dv-cm-input');

const cm_btn = document.getElementById('dv-cm-btn');
const like_number_element = document.getElementById( "dv-like-number");
const save_number_element = document.getElementById( "dv-save-number");

let like_number = 5;
let save_number = 0;

let tap_1 = 0;
let tap_2 = 0;

// Adding Event Listener On Like Btn On Click That Adds 1 To It Number And Adds A Class To Like Btn
like_btn.addEventListener('click', () => {
    tap_1 ++
    if (tap_1 % 2 !== 0) {
        like_number ++;
        like_btn.classList.add('dv-like-btn-active')
    } else {
        like_number --;
        like_btn.classList.remove('dv-like-btn-active')
    }
    like_number_element.textContent = like_number;
})

// Adding Event Listener On Save Btn On Click That Adds 1 To It Number And Adds A Class To Save Btn
save_btn.addEventListener('click', () => {
    tap_2 ++
    if (tap_2 % 2 !== 0) {
        save_number ++;
        save_btn.classList.add('dv-save-btn-active')
    } else {
        save_number --;
        save_btn.classList.remove('dv-save-btn-active')
    }
    save_number_element.textContent = save_number;
})

// Adding Event Listener On Comment Button That Listens To Click And Focuses On Input Of Comments At Bottom Side Of Page
cm_btn.addEventListener('click', () => cm_input.focus())