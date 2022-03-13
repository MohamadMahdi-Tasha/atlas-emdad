// Variables
const nav = document.getElementById('nav-mobile-nav');
const nav_toggle = document.getElementById('btn-header-show-on-mobile');
const dark_bg = document.getElementById('dv-mobile-nav-dark-bg');
const dv_mobile_nav_items_toggle_1 = document.getElementById('dv-mobile-nav-items-toggle-1');
const dv_mobile_nav_items_toggle_2 = document.getElementById('dv-mobile-nav-items-toggle-2');
const dv_mobile_nav_items_toggle_3 = document.getElementById('dv-mobile-nav-items-toggle-3');
const dv_mobile_nav_items_toggle_4 = document.getElementById('dv-mobile-nav-items-toggle-4');
const dv_mobile_nav_items_toggle_5 = document.getElementById('dv-mobile-nav-items-toggle-5');
const dv_mobile_nav_items_toggle_1_items = document.getElementById('dv-mobile-nav-items-toggle-1-items');
const dv_mobile_nav_items_toggle_2_items = document.getElementById('dv-mobile-nav-items-toggle-2-items');
const dv_mobile_nav_items_toggle_3_items = document.getElementById('dv-mobile-nav-items-toggle-3-items');
const dv_mobile_nav_items_toggle_4_items = document.getElementById('dv-mobile-nav-items-toggle-4-items');
const dv_mobile_nav_items_toggle_5_items = document.getElementById('dv-mobile-nav-items-toggle-5-items');
let nav_is_Showing = false;
let tap_of_item_1 = 0;
let tap_of_item_2 = 0;
let tap_of_item_3 = 0;
let tap_of_item_4 = 0;
let tap_of_item_5 = 0;

// A Function That Shows Nav And Dark Background Of It If Value Of 'nav_is_Showing' Variable Is True
function show_hide_nav() {
    if (nav_is_Showing) {
        nav.style.left = '25%';
        dark_bg.style.left = '0';
    } else {
        nav.style.left = '100%';
        dark_bg.style.left = '100%';
    }
}

// Function That Checks If Times Of Clicked On / 2 Returns 0 Then It Sets The Color Of Btn And Sets Height Of Given List Of Items
function show_nav_items(tap, btn, items) {
    if (tap % 2 !== 0) {
        btn.style.backgroundColor = 'var(--bs-dark)';
        items.style.height = '21rem';
    } else {
        btn.style.backgroundColor = 'unset';
        items.style.height = '0';
    }
}

// Adding Event Listeners To Call 'show_nav_items' Function, On Mobile Right Side Nav Items
dv_mobile_nav_items_toggle_1.addEventListener('click', () => {tap_of_item_1 ++;show_nav_items(tap_of_item_1, dv_mobile_nav_items_toggle_1, dv_mobile_nav_items_toggle_1_items)})
dv_mobile_nav_items_toggle_2.addEventListener('click', () => {tap_of_item_2 ++;show_nav_items(tap_of_item_2, dv_mobile_nav_items_toggle_2, dv_mobile_nav_items_toggle_2_items)})
dv_mobile_nav_items_toggle_3.addEventListener('click', () => {tap_of_item_3 ++;show_nav_items(tap_of_item_3, dv_mobile_nav_items_toggle_3, dv_mobile_nav_items_toggle_3_items)})
dv_mobile_nav_items_toggle_4.addEventListener('click', () => {tap_of_item_4 ++;show_nav_items(tap_of_item_4, dv_mobile_nav_items_toggle_4, dv_mobile_nav_items_toggle_4_items)})
dv_mobile_nav_items_toggle_5.addEventListener('click', () => {tap_of_item_5 ++;show_nav_items(tap_of_item_5, dv_mobile_nav_items_toggle_5, dv_mobile_nav_items_toggle_5_items)})

// Adding Event Listener On Click For Navigations Toggler And It Sets Value Of 'nav_is_Showing' Variable To True And Calls 'show_hide_nav' Function
nav_toggle.addEventListener('click', () => {
    nav_is_Showing = true;
    show_hide_nav()
})

// Adding Event Listener On Click For Dark Background Of Nav And It Sets Value Of 'nav_is_Showing' Variable To False And Calls 'show_hide_nav' Function
dark_bg.addEventListener('click', () => {
    nav_is_Showing = false;
    show_hide_nav()
})