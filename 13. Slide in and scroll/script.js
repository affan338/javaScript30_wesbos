const images = document.querySelectorAll('p>img');

const handleScroll = () => {
    images.forEach(image => {
        const slideAt = scrollY + innerHeight;
        const imageActive = image.offsetTop + image.height / 2;
        const imageInactive = scrollY < image.offsetTop + image.height / 2;
        if (slideAt > imageActive && imageInactive) {
            console.log(slideAt, imageActive, imageInactive);
            image.classList.remove('slide-in');
            image.classList.add('active');
        } else {
            image.classList.remove('active');
            image.classList.add('slide-in');
        }
    })
}


window.addEventListener('scroll', handleScroll);