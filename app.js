const mainImage = document.querySelector('#image');
const images =['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg',  'pic6.jpg', 'pic7.jpg', 'pic8.jpg'];

'pic5.jpg'
function changeImage() {
    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
     mainImage.src = 'images/' + images[randomIndex];
}