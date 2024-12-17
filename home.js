let canvasOne = document.getElementById("canvasOne");
let rtxOne = canvasOne.getContext("2d");
let dino = new Image();
dino.src = "images/dino/T-Rex.png";
let dinoY = 56;
let velY = 0;
let gravity = 0.5;
let isJumping = false;
// let canvasTwo = document.getElementById("canvasTwo");
// let rtxTwo = canvasTwo.getContext("2d");
// let radius = 50;
// let angle = 0.2;
// let inc = true;

//Dino//

canvasOne.width = 100;
canvasOne.height = 100;
function draw(){
    rtxOne.clearRect(0, 0, canvasOne.width, canvasOne.height);
    rtxOne.drawImage(dino, 40, dinoY);
    if(dinoY <= 36){ 
        velY += gravity;
        dinoY += velY;
    }
    else if(dinoY >= 36){
        dinoY = 36;
        velY = 0;
        isJumping = false;
    }
}
function jump(){
    if(!isJumping){
        velY = -6;
        isJumping = true;
    }
}
setInterval(draw, 20);
setInterval(jump, 500);

//PackmaN//

// canvasTwo.width = 100;
// canvasTwo.height = 100;
// function circle(){
//     rtxTwo.clearRect(0, 0, canvasTwo.width, canvasTwo.height);
//     rtxTwo.beginPath(); 
//     rtxTwo.moveTo(canvasTwo.width / 2, canvasTwo.height / 2);
//     rtxTwo.arc(canvasTwo.width / 2, canvasTwo.height / 2, radius, angle * Math.PI, (2 - angle) * Math.PI); 
//     rtxTwo.fillStyle = "#1bd96a"; 
//     rtxTwo.fill(); 
//     rtxTwo.closePath(); 
//     if (inc) { 
//         angle += 0.02; 
//         if (angle >= 0.4) { 
//             inc = false; 
//             } 
//     } else { 
//         angle -= 0.02; 
//         if (angle <= 0) { 
//             inc = true; 
//         } }
// }
// setInterval(circle, 15);

//AnimationS//

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    function blinkNeon() {
        // Встановлення випадкової затримки від 0 до 1 секунди
        let randomDelay = Math.random();
        // Встановлення випадкової тривалості анімації від 0.1 до 0.5 секунди
        let randomDuration = Math.random() * 0.4 + 0.1;

        gsap.to("#trigOne", {
            duration: randomDuration, // Випадкова тривалість блимання
            ease: "none", // Вимкнення згладжування
            repeat: 1,
            yoyo: true, // Повернення до початкового стану
            color: "#16181c", // Колір неону
            onComplete: function() {
                gsap.delayedCall(randomDelay, blinkNeon); // Виклик функції після випадкової затримки
            }
        });
    }

    blinkNeon(); // Перший виклик функції
});


document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#imgLone", {
        scrollTrigger: {
            trigger: "#trigOne", // Анімація активується при прокрутці сторінки
            start: "top top",
            end: "bottom bottom",
            scrub: 0.1, // Пов'язує анімацію з прокруткою
            markers: false // Вимкніть це для виробництва
        },
        x: 0,
    });
});
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#imgRone", {
        scrollTrigger: {
            trigger: "#trigOne", // Анімація активується при прокрутці сторінки
            start: "top top",
            end: "bottom bottom",
            scrub: 0.1, // Пов'язує анімацію з прокруткою
            markers: false // Вимкніть це для виробництва
        },
        x: 0,
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#imgLwo", {
        scrollTrigger: {
            trigger: "#imgLone", // Анімація активується при прокрутці сторінки
            start: "top top",
            end: "bottom bottom",
            scrub: 0.1, // Пов'язує анімацію з прокруткою
            markers: false // Вимкніть це для виробництва
        },
        x: 0,
    });
});
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#imgRwo", {
        scrollTrigger: {
            trigger: "#imgRone", // Анімація активується при прокрутці сторінки
            start: "top top",
            end: "bottom bottom",
            scrub: 0.1, // Пов'язує анімацію з прокруткою
            markers: false // Вимкніть це для виробництва
        },
        x: 0,
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#imgLere", {
        scrollTrigger: {
            trigger: "#imgLwo", // Анімація активується при прокрутці сторінки
            start: "top top",
            end: "bottom bottom",
            scrub: 0.1, // Пов'язує анімацію з прокруткою
            markers: false // Вимкніть це для виробництва
        },
        x: 0,
    });
});
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#imgRere", {
        scrollTrigger: {
            trigger: "#imgRwo", // Анімація активується при прокрутці сторінки
            start: "top top",
            end: "bottom bottom",
            scrub: 0.1, // Пов'язує анімацію з прокруткою
            markers: false // Вимкніть це для виробництва
        },
        x: 0,
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#imgLiv", {
        scrollTrigger: {
            trigger: "#imgLere", // Анімація активується при прокрутці сторінки
            start: "top top",
            end: "bottom bottom",
            scrub: 0.1, // Пов'язує анімацію з прокруткою
            markers: false // Вимкніть це для виробництва
        },
        x: 0,
    });
});
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#imgRiv", {
        scrollTrigger: {
            trigger: "#imgRere", // Анімація активується при прокрутці сторінки
            start: "top top",
            end: "bottom bottom",
            scrub: 0.1, // Пов'язує анімацію з прокруткою
            markers: false // Вимкніть це для виробництва
        },
        x: 0,
    });
});

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#imgLix", {
        scrollTrigger: {
            trigger: "#imgLiv", // Анімація активується при прокрутці сторінки
            start: "top top",
            end: "bottom bottom",
            scrub: 0.1, // Пов'язує анімацію з прокруткою
            markers: false // Вимкніть це для виробництва
        },
        x: 0,
    });
});
document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#imgRix", {
        scrollTrigger: {
            trigger: "#imgRiv", // Анімація активується при прокрутці сторінки
            start: "top top",
            end: "bottom bottom",
            scrub: 0.1, // Пов'язує анімацію з прокруткою
            markers: false // Вимкніть це для виробництва
        },
        x: 0,
    });
});