var currScore = 0;
var currPlayer = 0;
var score = [0, 0];
var playing = true;

document.querySelector('.dice').classList.add('hidden');

document.querySelector('.btn--roll').addEventListener('click',
    () => {
        if (playing) {
            const diceNo = Math.trunc(Math.random() * 6) + 1;
            document.querySelector('.dice').classList.remove('hidden');
            document.querySelector('.dice').src = `dice-${diceNo}.png`;

            if (diceNo === 1) {
                document.querySelector(`#current--${currPlayer}`).textContent = 0;
                document.querySelector(`.player--${currPlayer}`).classList.remove('player--active');
                currPlayer = currPlayer === 1 ? 0 : 1;
                currScore = 0;
                document.querySelector(`.player--${currPlayer}`).classList.add('player--active');

            } else {
                currScore += diceNo;
                document.querySelector(`#current--${currPlayer}`).textContent = currScore;
            }
        }
    });


document.querySelector('.btn--hold').addEventListener('click',
    () => {
        if (playing) {


            score[currPlayer] += currScore;
            document.getElementById(`score--${currPlayer}`).textContent = score[currPlayer];
            if (score[currPlayer] >= 20) {
                playing = false;
                document.querySelector('.dice').classList.add('hidden'); document.querySelector(`.player--${currPlayer}`).classList.add('player--winner')
                document.querySelector(`.player--${currPlayer}`).classList.remove('player--active');

            }
            else {
                document.querySelector(`#current--${currPlayer}`).textContent = 0;
                document.querySelector(`.player--${currPlayer}`).classList.remove('player--active');
                currPlayer = currPlayer === 1 ? 0 : 1;
                currScore = 0;
                document.querySelector(`.player--${currPlayer}`).classList.add('player--active');
            }

        }
    });

document.querySelector('.btn--new').addEventListener('click', () => {
    location.reload();
})