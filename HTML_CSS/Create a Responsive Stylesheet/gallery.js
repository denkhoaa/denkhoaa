function tabFocus(image) {
console.log("Tab Focus Event Triggered");
image.setAttribute("tabindex", "0");

const images = document.querySelectorAll("img");
for (const img of images) {
if (img !== image) {
img.removeAttribute("tabindex");
}
}
}
