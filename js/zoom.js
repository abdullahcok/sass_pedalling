const img_box = document.querySelectorAll('.img_box');
img_box.forEach(popup => popup.addEventListener('click', () => {
    popup.classList.toggle('active');
}));
