jQuery(function () {
    $('#css-mode').on('click',function () {
        if ($('link#styles').attr('href') == "./css/style-light.css") {
            $('#css-mode').attr('class', 'fas fa-sun btn btn-info')
            $('link#styles').attr('href', './css/style-gruvbox.css')
            $('#mode-text').text('-- Go light')
        }
        else {
            $('#css-mode').attr('class', 'fas fa-cloud-moon btn btn-info')
            $('link#styles').attr('href', './css/style-light.css')
            $('#mode-text').text('-- Go dark')
        }
    })
});
