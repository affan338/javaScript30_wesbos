const checkboxes = document.querySelectorAll('input[type=checkbox]');

const handleStrike = () => {
    checkboxes.forEach((checkBox) => {
        label = checkBox.nextElementSibling;
        if (checkBox.checked) {
            label.classList.add('strike');
        } else {
            label.classList.remove('strike');
        }
    })
}

const handleStrikeAll = (e) => {
    inBetween = false;
    checkboxes.forEach((checkBox) => {
        if (e.shiftKey && checkBox.checked) {
            inBetween = !inBetween;
        }
        if (inBetween) {
            checkBox.checked = true;
            handleStrike();
        }
    })
}









checkboxes.forEach((checkBox) => {
    checkBox.addEventListener('click', handleStrike)
    checkBox.addEventListener('click', handleStrikeAll)
})