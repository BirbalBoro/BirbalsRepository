const buttons = document.querySelectorAll('.btn');
const contents = document.querySelectorAll('.content');

/*This is my code to display particular content upon clicking its associated button
without needing to create multiple pages for each and every content and linking them */
for (let k = 0; k < buttons.length; k++) {
    buttons[k].addEventListener('click', () => {
        contents[k].style.display = 'block';
        for (let j = 0; j < contents.length; j++) {
            if (contents[j] !== contents[k]) {
                contents[j].style.display = 'none';
            }
        }
    });
}

/*To apply css property to the active button by adding new class on that button*/
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        var active_btn = document.getElementsByClassName("clicked-btn");
        if (active_btn.length > 0) {
            active_btn[0].classList.remove('clicked-btn');
        }
        buttons[i].classList.add('clicked-btn');
    });
}
