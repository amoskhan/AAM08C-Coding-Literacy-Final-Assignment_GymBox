
// Pick Image Function
// This function randomly selects an image from a predefined list and sets it as the source of an image element with the ID "header_img".
// function pickImage() {
//     const options = ["gymboximage1.jpg", "gymboximage2.jpg", "gymboximage3.jpg"];
//     const randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
//     const img = document.querySelector("#header_img");
//     if (img) {
//         img.setAttribute("src", randomImg);
//         img.setAttribute("alt", "");
//     }
// }


function setImages() {
    options = ["gymboximage1.jpg", "gymboximage2.jpg", "gymboximage3.jpg"];

    currentImages = document.querySelectorAll(".flex img")
    for (var i = 0; i < currentImages.length; i++) {
        console.log("Image" + i)
        randomImg = "images/" + options[Math.floor(Math.random() * options.length)];

        currentImages[i].src = randomImg;
    }
}


// 

/*Name this external file gallery.js*/

function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image

       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
console.log(previewPic);
console.log("upDate event is Triggered");
console.log("previewPic.alt;", previewPic.alt);
console.log("previewPic.src;", previewPic.src);
document.getElementById("image").innerHTML = previewPic.alt;
document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    /* In this function you should 
   1) Update the url for the background image of the div with the id = "image" 
   back to the orginal-image.  You can use the css code to see what that original URL was
   2) Change the text  of the div with the id = "image" 
   back to the original text.  You can use the html code to see what that original text was
   */

console.log("unDo event is Triggered");
document.getElementById("image").style.backgroundImage = "url('')";
document.getElementById("image").innerHTML = "Hover over an image below to display here";
}