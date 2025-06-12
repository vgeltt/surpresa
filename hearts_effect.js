// hearts_effect.js
function createHeart() {
    const heart = document.createElement('span');
    heart.classList.add('heart-emoji');
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);

    const size = Math.random() * 20 + 20;
    heart.style.fontSize = `${size}px`;
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
    heart.style.animationDelay = `${Math.random() * 0.5}s`;

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

function startHeartsEffect() {
    let heartsCount = 0;
    const interval = setInterval(() => {
        createHeart();
        heartsCount++;
        if (heartsCount >= 30) {
            clearInterval(interval);
        }
    }, 150);
}