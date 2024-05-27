window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    const percentageScrolled = (scrollPosition / (documentHeight - windowHeight)) * 100;

    const startColor = { r: 19, g: 113, b: 111 };
    const endColor = { r: 19, g: 21, b: 25 };

    const newR = Math.round(startColor.r + (endColor.r - startColor.r) * (percentageScrolled / 100));
    const newG = Math.round(startColor.g + (endColor.g - startColor.g) * (percentageScrolled / 100));
    const newB = Math.round(startColor.b + (endColor.b - startColor.b) * (percentageScrolled / 100));

    const newColor = `rgb(${newR}, ${newG}, ${newB})`;

    document.body.style.background = `linear-gradient(90deg, ${newColor} 5%, rgba(19,21,25,1) 68%)`;
});