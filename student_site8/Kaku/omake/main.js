const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-button');
const maxRoundsSelect = document.getElementById('max-rounds');
const currentCardDiv = document.getElementById('current-card');
const nextCardDiv = document.getElementById('next-card');
const betAmountInput = document.getElementById('bet-amount');
const highButton = document.getElementById('high-button');
const lowButton = document.getElementById('low-button');
const currentChipsSpan = document.getElementById('current-chips');
const remainingRoundsSpan = document.getElementById('remaining-rounds');
const resultHistoryTableBody = document.getElementById('result-history-body');
const finalChipsSpan = document.getElementById('final-chips');
const resetButton = document.getElementById('reset-button');

let maxRounds;
let currentRound;
let currentChips = 1000;
let currentCard;
let nextCard;
let betAmount;
const gameHistory = [];

function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1;
}

function updateChipsDisplay() {
    currentChipsSpan.textContent = currentChips;
}

function updateRoundsDisplay() {
    remainingRoundsSpan.textContent = maxRounds - currentRound;
}

function showCard(cardDiv, cardValue) {
    cardDiv.textContent = cardValue;
    cardDiv.classList.remove('back-card');
    cardDiv.classList.remove('hidden');
}

function hideNextCard() {
    nextCardDiv.classList.add('hidden');
    nextCardDiv.classList.add('back-card');
    nextCardDiv.textContent = '';
}

function startGame() {
    maxRounds = parseInt(maxRoundsSelect.value);
    currentRound = 0;
    currentChips = 1000;
    gameHistory.length = 0; // 履歴をリセット
    updateChipsDisplay();
    updateRoundsDisplay();
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    drawNewCard();
}

function drawNewCard() {
    currentCard = getRandomCard();
    showCard(currentCardDiv, currentCard);
    hideNextCard();
    betAmountInput.value = 1; // ベット額を初期化
    highButton.disabled = false;
    lowButton.disabled = false;
}

function predictCard(prediction) {
    betAmount = parseInt(betAmountInput.value);
    if (betAmount < 1 || betAmount > currentChips) {
        alert('1以上の所持チップ以内の金額を賭けてください。');
        return;
    }

    highButton.disabled = true;
    lowButton.disabled = true;
    nextCard = getRandomCard();
    showCard(nextCardDiv, nextCard);

    let result = '';
    let chipChangeAmount = 0;
    if ((prediction === 'high' && nextCard > currentCard) || (prediction === 'low' && nextCard < currentCard)) {
        chipChangeAmount = betAmount * 2;
        currentChips += chipChangeAmount;
        result = '成功';
    } else {
        chipChangeAmount = -betAmount;
        currentChips += chipChangeAmount;
        result = '失敗';
    }

    gameHistory.push({
        round: currentRound + 1,
        currentCard: currentCard,
        nextCard: nextCard,
        prediction: prediction,
        bet: betAmount,
        result: result,
        chips: currentChips
    });

    updateChipsDisplay();
    currentRound++;

    if (currentChips <= 0) {
        endGame('gameOver');
    } else if (currentRound >= maxRounds) {
        endGame('gameClear');
    } else {
        setTimeout(drawNewCard, 1500); // 少し待ってから次のカード
    }
}

function endGame(status) {
    gameScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalChipsSpan.textContent = currentChips;

    resultHistoryTableBody.innerHTML = ''; // テーブルのボディをクリア

    gameHistory.forEach(record => {
        const chipChange = record.result === '成功' ? `<span class="chip-increase">+${record.bet}</span>` : `<span class="chip-decrease">-${record.bet}</span>`;
        const resultClass = record.result === '成功' ? 'result-win-bg' : 'result-lose-bg';

        const row = resultHistoryTableBody.insertRow();
        row.classList.add(resultClass);

        let cell = row.insertCell();
        cell.textContent = record.round;

        cell = row.insertCell();
        cell.textContent = record.currentCard;

        cell = row.insertCell();
        cell.textContent = record.prediction;

        cell = row.insertCell();
        cell.textContent = record.nextCard;

        cell = row.insertCell();
        cell.textContent = record.bet;

        cell = row.insertCell();
        cell.innerHTML = chipChange;

        cell = row.insertCell();
        cell.textContent = record.chips;
    });

    const resultTitle = status === 'gameOver' ? 'ゲームオーバー' : 'ゲームクリア！';
    const titleElement = document.createElement('h2');
    titleElement.textContent = resultTitle;
    resultScreen.insertBefore(titleElement, document.getElementById('result-history-table'));
}

function resetGame() {
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

startButton.addEventListener('click', startGame);
highButton.addEventListener('click', () => predictCard('high'));
lowButton.addEventListener('click', () => predictCard('low'));
resetButton.addEventListener('click', resetGame);

// 初期の所持チップを表示
updateChipsDisplay();

function startGame() {
    maxRounds = parseInt(maxRoundsSelect.value);
    currentRound = 0;
    currentChips = 1000;
    gameHistory.length = 0; // 履歴をリセット
    updateChipsDisplay();
    updateRoundsDisplay(); // ゲーム開始時に表示
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    drawNewCard();
}

function predictCard(prediction) {
    betAmount = parseInt(betAmountInput.value);
    if (betAmount < 1 || betAmount > currentChips) {
        alert('1以上の所持チップ以内の金額を賭けてください。');
        return;
    }

    highButton.disabled = true;
    lowButton.disabled = true;
    nextCard = getRandomCard();
    showCard(nextCardDiv, nextCard);

    let result = '';
    let chipChangeAmount = 0;
    if ((prediction === 'high' && nextCard > currentCard) || (prediction === 'low' && nextCard < currentCard)) {
        chipChangeAmount = betAmount * 2;
        currentChips += chipChangeAmount;
        result = '成功';
    } else {
        chipChangeAmount = -betAmount;
        currentChips += chipChangeAmount;
        result = '失敗';
    }

    gameHistory.push({
        round: currentRound + 1,
        currentCard: currentCard,
        nextCard: nextCard,
        prediction: prediction,
        bet: betAmount,
        result: result,
        chips: currentChips
    });

    updateChipsDisplay();
    currentRound++;
    updateRoundsDisplay(); // カード予測後に表示を更新

    if (currentChips <= 0) {
        endGame('gameOver');
    } else if (currentRound >= maxRounds) {
        endGame('gameClear');
    } else {
        setTimeout(drawNewCard, 1500); // 少し待ってから次のカード
    }
}