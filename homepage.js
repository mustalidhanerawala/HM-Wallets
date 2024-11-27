console.log("Hello World");

window.addEventListener("scroll", function () {
    const exc = document.getElementById("the-exclusive");
    const excPosition = exc.getBoundingClientRect().top;

    // Get multiple elements with querySelectorAll
    const showimg = document.querySelectorAll("#box1, #box3, #box5");

    // Apply animation for #the-exclusive element
    if (excPosition < window.innerHeight && excPosition > 0) 
    {
        exc.style.animation = "entry 1s ease-out forwards";
    } 
    else 
    {
        exc.style.animation = "none";
    }

    // Loop through each element in showimg and apply animation
    showimg.forEach((img) => 
    {
        const showimgPosition = img.getBoundingClientRect().top;
        if (showimgPosition < window.innerHeight && showimgPosition > 0) {
            img.style.animation = "appear 1s ease-out forwards";
        } else {
            img.style.animation = "none";
        }
    });
});
