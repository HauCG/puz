const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

const imagesSet1 = ['meo1.png', 'meo2.png'];
const imagesSet2 = ['meo3.png', 'meo4.png'];

image1.addEventListener('click', () => {
    let currentIndex = imagesSet1.indexOf(image1.src.split('/').pop());
    image1.src = imagesSet1[(currentIndex + 1) % imagesSet1.length];
    checkWin();
});

image2.addEventListener('click', () => {
    let currentIndex = imagesSet2.indexOf(image2.src.split('/').pop());
    image2.src = imagesSet2[(currentIndex + 1) % imagesSet2.length];
    checkWin();
});

function checkWin() {
    const src1 = image1.src.split('/').pop();
    const src2 = image2.src.split('/').pop();

    if ((src1 === 'meo1.png' && src2 === 'meo3.png') || (src1 === 'meo2.png' && src2 === 'meo4.png')) {
        alert('Bạn đã chiến thắng!');
    }
}