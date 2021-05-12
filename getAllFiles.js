function fetchPageAssets() {
let images = document.querySelectorAll('img[src*=files]');
images.forEach(function(image) {
files.push('<a href="' + image.src.replace(/_60x60/, "") + '"><img src="' + image.src.replace(/_60x60/, "") + '">');
});
}

function downloadListFile() {
let button = document.createElement("a");
let data = 'data:application/octet-stream;base64,' + window.btoa(files.join('\n'));
button.id = "download-file";
button.href = data;
button.download = "shopify-files.html";
document.querySelector("body").append(button);
button.click();
}

var files = []
files.push('\n')
fetchPageAssets()
files.push('\n\n')
downloadListFile()
