let timeLeft = 3600; // 1 hora em segundos

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(updateTimer, 1000);
    } else {
        document.querySelector('.claim-btn').disabled = false;
        document.getElementById('timer').textContent = 'Pronto para claim!';
    }
}

function claimTokens() {
    const resultDiv = document.getElementById('result');
    const randomAmount = (Math.random() * 0.001).toFixed(6);
    resultDiv.innerHTML = `<p>Você ganhou ${randomAmount} BTC!</p>`;
    
    // Reiniciar timer
    timeLeft = 3600;
    document.querySelector('.claim-btn').disabled = true;
    updateTimer();
}

// Iniciar timer ao carregar página
updateTimer();