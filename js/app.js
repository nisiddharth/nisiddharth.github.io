const setDarkMode = () => {
    $('#css-mode').attr('class', 'fas fa-sun btn btn-info')
    $('link#styles').attr('href', './css/style-gruvbox.css')
    $('#mode-text').text('-- Go light')
    localStorage.setItem('dark', 'on');
}

const setLightMode = () => {
    $('#css-mode').attr('class', 'fas fa-cloud-moon btn btn-info')
    $('link#styles').attr('href', './css/style-light.css')
    $('#mode-text').text('-- Go dark')
    localStorage.setItem('dark', 'off');
}

const toggleTheme = () => {
    if ($('link#styles').attr('href') == "./css/style-light.css") { // Light mode is on
        setDarkMode();
    } else {  // Dark mode is on
        setLightMode();
    }
}

jQuery(function () {
    $('#css-mode').on('click', toggleTheme);

    let getDarkMode = localStorage.getItem('dark');
    // Check dark mode is on or off on page reload
    if (getDarkMode === 'on') {
        setDarkMode();
    } else {
        setLightMode();
    }
});
