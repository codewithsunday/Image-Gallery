const images = [
    'images/plant1.jpg',
    'images/plant2.jpg',
    'images/plant3.jpg',
    'images/plant4.jpg',
    'images/plant5.jpg',
    'images/plant6.jpg',
    'images/plant7.jpg',
    'images/plant8.jpg',
    'images/plant9.jpg',
    'images/plant10.jpg',
    'images/plant11.jpg',
    'images/plant12.jpg',
];

let currentIndex = 0;

const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

// Open modal and display the selected image
function openModal(index) {
    currentIndex = index;
    modal.style.display = 'block';
    modalImage.src = images[currentIndex];
}

// Close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Change image (Next/Previous)
function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    modalImage.src = images[currentIndex];
}

// Close modal when clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});