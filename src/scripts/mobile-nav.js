// Variables
const nav = document.getElementById('nav-mobile-nav');
const nav_toggle = document.getElementById('btn-header-show-on-mobile');
const dark_bg = document.getElementById('dv-mobile-nav-dark-bg');
let nav_is_Showing = false;

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