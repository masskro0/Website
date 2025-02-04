// Function to display an image after an user selected it of his computer. Uses jquery library
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#uploaded')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
        document.getElementById("uploaded").style.display = "block"; 
    }
}