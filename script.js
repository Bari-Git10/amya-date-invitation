// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function goToScreen2() {
    showScreen('screen2');
}

function selectMovie(movie) {
    console.log('Selected movie:', movie);
    showScreen('screen3');
}

function goToScreen6() {
    showScreen('screen6');
}

// No Button Chase Logic
const noBtn = document.getElementById('noBtn');
let isChasing = false;

noBtn.addEventListener('mouseover', function() {
    if (isChasing) return;
    isChasing = true;
    
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.6s ease-out';
    
    setTimeout(() => {
        isChasing = false;
    }, 600);
});

// Chase Button Logic (Ok button on screen 3)
const chaseBtn = document.getElementById('chaseBtn');
let isChasingOk = false;

chaseBtn.addEventListener('mouseover', function() {
    if (isChasingOk) return;
    isChasingOk = true;
    
    const randomX = Math.random() * (window.innerWidth - 200);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    chaseBtn.style.position = 'fixed';
    chaseBtn.style.left = randomX + 'px';
    chaseBtn.style.top = randomY + 'px';
    chaseBtn.style.transition = 'all 0.7s ease-out';
    
    setTimeout(() => {
        isChasingOk = false;
    }, 700);
});

// When the chase button is finally clicked
chaseBtn.addEventListener('click', function() {
    showScreen('screen4');
    createConfetti();
});

// Confetti Animation
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        
        const colors = ['#ff1744', '#ff6e40', '#ffca28', '#76ff03', '#00e5ff', '#e040fb'];
        confettiPiece.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.top = '-10px';
        confettiPiece.style.animation = `confetti-fall ${2 + Math.random() * 1.5}s ease-out forwards`;
        confettiPiece.style.animationDelay = Math.random() * 0.3 + 's';
        
        confettiContainer.appendChild(confettiPiece);
    }
}

// Gift Opening Logic
function openGift() {
    const rosesDiv = document.getElementById('roses');
    rosesDiv.innerHTML = '🌹 🌹 🌹 🌹 🌹';
    rosesDiv.style.fontSize = '100px';
    rosesDiv.style.animation = 'roses-appear 1s ease-out';
    
    // Hide the gift box
    const presentBox = document.querySelector('.present-box');
    presentBox.style.display = 'none';
    
    // Show close button
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.style.display = 'inline-block';
    closeBtn.style.animation = 'fadeIn 0.5s ease-in';
}

// Add fade in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);