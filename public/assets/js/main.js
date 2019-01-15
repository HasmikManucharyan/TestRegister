$(function () {
    var input = $('#fileupload');
    input.change(function () {
       showFiles(input[0]);
    })

    function showFiles(input) {
        var reader = new FileReader();

        reader.onload = function(e) {
            $('.show_files img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
})