const Player = (name, sign) => {
    let score = 0;
    const getName = () => name;
    const getSign = () => sign;
    const winRound = () => {
        return score++;
    };
    return {getName, getSign, score, winRound}
}

// const Jimmy = Player(prompt('Select a name for palyer one.'), 'x')
// const Emmet = Player(prompt('Select a name for player two.'), 'o')
const playerOne = Player('Jim', 'x')
const playerTwo = Player('Mij', 'o')



const Gameboard = (() => {
    let turn = 1;
    for (i = 1; i <= 9; i++) {
        const b = document.getElementById('gameboard')
        let d = document.createElement('div')
        d.id = i
        d.className = 'boardcell'
        d.innerHTML = 'This is ' + i
        b.appendChild(d)
        d.addEventListener('click', e = () => {
            addingSign(turn, d);
            turn++;})
        // if (!(i % 3)) {
        //     b.appendChild(document.createElement('hr'))
        // }
    }
    let array = []
    array = document.getElementsByClassName('boardcell')
    return array
})();

const Scorecard = (() => {
    const s = document.getElementById('scorecard')
    s.innerHTML = playerOne.getName() + ': ' + playerOne.score + '  ' + playerTwo.getName() + ': ' + playerTwo.score
})();

const addingSign = (turn, i) => {
    turn % 2 ? s = playerOne.getSign() : s = playerTwo.getSign();
    i.innerHTML = s;
    console.log(turn);
}