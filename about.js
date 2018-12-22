window.addEventListener("load", function (e) {
    let image = document.getElementById("image");
    let name = document.getElementById("name");
    let source = ["./honor1.jpg", "honor2.jpg", "honor3.jpg", "honor4.jpg", "honor5.jpg"];
    let names = ["Esraa Mohammed", "Mahmoud Ahmed", "Yassin Khry", "Yunis Khry", "Hamdy El-Gahsh"];
    let i = 0;
    setInterval(() => {
        console.log(image.src)
        console.log(name)
        name.innerText = names[i % 5];
        image.src = source[i % 5];
        i++
    }, 3000);

})