document.addEventListener("DOMContentLoaded", function() {
    const sparks = document.querySelectorAll('.spark');
    sparks.forEach((spark) => {
        spark.style.left = `${positionLeft()}%`;
        spark.style.animationDelay = `${durationAnimation()}s`;
    });
});

function positionLeft() {
    return Math.random() * 101;
}

function durationAnimation() {
    return Math.random() * 2;
}