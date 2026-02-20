let score = JSON.parse(localStorage.getItem('score'))
            || {
            wins: 0,
            losses: 0,
            ties: 0
        };
        function updateScore() {
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`
        }
        updateScore();

        let result = '';
        function pickComputerMove() {
            const randomNumber = Math.random();
            let computerMove = '';

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'paper';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = 'scissors';
            }
            return computerMove;
        }

        function resultShown(youPick) {
            const computerMove = pickComputerMove();

            if (computerMove === 'rock') {
                if (youPick === 'rock') {
                    result = 'Tie';
                } else if (youPick === 'paper') {
                    result = 'You win';
                } else if (youPick === 'scissors') {
                    result = 'You lose';
                }
            } else if (computerMove === 'paper') {
                if (youPick === 'rock') {
                    result = 'You lose';
                } else if (youPick === 'paper') {
                    result = 'Tie';
                } else if (youPick === 'scissors') {
                    result = 'You win';
                }
            } else if (computerMove === 'scissors') {
                if (youPick === 'rock') {
                    result = 'You win';
                } else if (youPick === 'paper') {
                    result = 'You lose';
                } else if (youPick === 'scissors') {
                    result = 'Tie';
                }
            }
            console.log(computerMove);

            if (result === 'You win') {
                score.wins += 1;
            } else if (result === 'You lose') {
                score.losses += 1;
            } else if (result === 'Tie') {
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScore();
            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = `You <img src="images/${youPick}-emoji.png" alt="rock-image" class="move-icon"><img
            src="images/${computerMove}-emoji.png" alt="scissors-image" class="move-icon"> Computer`;

        }