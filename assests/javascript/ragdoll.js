alert("Hello welcome to my webpage");

document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("ragdollImage");
    var showButton = document.getElementById("showImageButton");

    image.addEventListener("click", function() {
        image.style.display = "none";
    });

    showButton.addEventListener("click", function() {
        image.style.display = "block";
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("ragdollImage2");
    var showButton = document.getElementById("showImageButton");

    image.addEventListener("click", function() {
        image.style.display = "none";
    });

    showButton.addEventListener("click", function() {
        image.style.display = "block";
    });
});