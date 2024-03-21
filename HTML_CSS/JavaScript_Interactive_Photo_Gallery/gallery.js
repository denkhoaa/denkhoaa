function upDate(previewPic) {
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url(" + previewPic.src + ")";
}

function unDo() {
    document.getElementById('image').style.backgroundImage = "url('')"
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
}
