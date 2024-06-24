const imageArrays = [
    [
        "https://i.pinimg.com/564x/cb/31/1c/cb311c6745aee33d0a5f7d121e96263a.jpg",
        "https://i.pinimg.com/564x/05/43/fc/0543fc4e20840f88ba33f631edf3bb1e.jpg",
        "https://i.pinimg.com/564x/50/62/01/506201b0bf2e6ba260255a05ff222ab6.jpg"
    ],
    [
        "https://i.pinimg.com/236x/db/f2/ad/dbf2ad6aed22f3499889e5fbe29050d8.jpg",
        "https://i.pinimg.com/236x/34/92/c0/3492c06d5e8a8e2fbb28bda3fa299b56.jpg",
        "https://i.pinimg.com/236x/25/54/2b/25542bcf5003c28d394a83c8a4880c32.jpg"
    ],
    [
        "https://i.pinimg.com/474x/c6/c5/ca/c6c5ca604a645cebaefecc76b1d8e093.jpg",
        "https://i.pinimg.com/474x/8e/5e/33/8e5e3328cc39e38d3eef15a74a6a1b09.jpg",
        "https://i.pinimg.com/474x/a4/6e/76/a46e76e48c4e5f295b6fbd8ee9fe2d1f.jpg"
    ]
];

function changeImage(cardIndex, direction) {
    let currentImage = document.querySelector(`#gallery-item-${cardIndex + 1} img`);
    let currentSrc = currentImage.src;

    // Outer loop: iterate through the card arrays
    for (let i = 0; i < imageArrays.length; i++) {
        // Inner loop: iterate through the images in each card array
        for (let j = 0; j < imageArrays[i].length; j++) {
            if (currentSrc.includes(imageArrays[i][j])) {
                let newIndex;
                if (direction === 'next') {
                    newIndex = (j + 1) % imageArrays[i].length;
                } else if (direction === 'prev') {
                    newIndex = (j - 1 + imageArrays[i].length) % imageArrays[i].length;
                }
                currentImage.src = imageArrays[i][newIndex];
                return; // Exit the function after changing the image
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < imageArrays.length; i++) {
        let nextBtn = document.querySelector(`#gallery-item-${i + 1} .next-btn`);
        let prevBtn = document.querySelector(`#gallery-item-${i + 1} .prev-btn`);

        nextBtn.addEventListener("click", () => changeImage(i, 'next'));
        prevBtn.addEventListener("click", () => changeImage(i, 'prev'));
    }
});