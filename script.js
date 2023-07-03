const input = document.getElementById("input_area");
const submitButton = document.getElementById("generate_btn");
const image = document.getElementById("image");
const clear = document.getElementById("clear_btn");


chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  let url = tabs[0].url;
  input.value = url;
  let qrLink = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=225x225`;
  image.src = qrLink;
});


submitButton.addEventListener("click", () => {
    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;

})

clear.addEventListener("click", () => {
    input.value = "";
})