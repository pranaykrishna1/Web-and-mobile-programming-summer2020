function upDate(previewPic) {
    /* In this function you should
       1) change the url for the background image of the div with the id = "image"
       to the source file of the preview image

       2) Change the text  of the div with the id = "image"
       to the alt text of the preview image
       */
console.log(previewPic.src);
document.getElementById('image').innerHTML='<span id="hovertxt" style="\n' +
    '    z-index: 1000;\n' +
    '    position:fixed;\n' +
    '" align="center">'+previewPic.alt+'</span><img id="hoverimg" style="height:100%; width:100%" src='+previewPic.src+'>';
}

function unDo() {

    var image_x = document.getElementById('hoverimg');
    image_x.parentNode.removeChild(image_x);
    var hovertxt = document.getElementById('hovertxt');
    hovertxt.parentNode.removeChild(hovertxt);

    document.getElementById('image').innerHTML="Hover over an image below to display here.";
    /* In this function you should
   1) Update the url for the background image of the div with the id = "image"
   back to the orginal-image.  You can use the css code to see what that original URL was

   2) Change the text  of the div with the id = "image"
   back to the original text.  You can use the html code to see what that original text was
   */

}
