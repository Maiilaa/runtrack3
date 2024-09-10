window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    const red = Math.min(255, Math.floor((scrollPercentage / 100) * 255));
    const green = 0;
    const blue = Math.max(0, 255 - red);
    const footer = document.querySelector('footer');
    footer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
