const Gameboard = (() => {
    const Player = (name, sign) => {
        let score = 0;
        const getName = () => name;
        const getSign = () => sign;
        return {getName, getSign, score}
    }

    const getPlayerName = (name, sign) => {
        let answer = prompt(`Select a name for ${name}`, name)
        if (answer && answer.length < 13) {
            return Player(answer, sign)
        }
        else
        {
        alert('Please provide a name with a length between 1 and 12 characters.');
        return getPlayerName(name, sign);
        }
    }

    const playerOne = getPlayerName('Player one', 'x');
    const playerTwo = getPlayerName('Player two', 'o');

    const flash = (textToFlash) => {
        const flashbox = document.getElementById('flash');
        flashbox.innerHTML = textToFlash;
        flashbox.style.display = "block";
        t = window.setTimeout(() => {flashbox.style.display = "none"}, 1200)
    }
    const Scorecard = () => {
        const s = document.getElementById('scorecard')
        s.innerHTML = '<b>Score: </b> ' + playerOne.getName() + ': ' + playerOne.score + '  ' + playerTwo.getName() + ': ' + playerTwo.score
    };
    //button to reset the game
    const display = document.getElementById('display');
    const resetButton = document.createElement('button');
    resetButton.innerHTML = 'Reset game';
    display.appendChild(resetButton);
    resetButton.addEventListener('click', e = () => {
        for (let i = 0; i < boardCells.length; i++) {boardCells[i].innerHTML = ''};
        playerOne.score = 0;
        playerTwo.score = 0;
        Scorecard();
    })

    Scorecard();
    let boardCells = document.getElementsByClassName('boardcell');
    let turn = 1;
    const turnEnd = (winner) => {
        turn = 1;
        flash(`${winner.getName()} won this round!`);
        for (let i = 0; i < boardCells.length; i++) {boardCells[i].innerHTML = ''}
        ++winner.score;
        Scorecard();

    //     if they game had score limit to reach, this would check for winner
    //     if (winner.score === 3) {
    //     alert(`The winner is ${winner.getName()}.`);
    //     playerOne.score = 0;
    //     playerTwo.score = 0;
    //     Scorecard();
    // }
        }
        
    for (i = 1; i <= 9; i++) {
        const b = document.getElementById('gameboard')
        let d = document.createElement('div')
        d.id = i
        d.className = 'boardcell'
        b.appendChild(d)
        d.addEventListener('click', e = () => {
            if (d.innerHTML != '') {
                return flash('Pick an unused tile.')
            }
            turn % 2 ? s = playerOne.getSign() : s = playerTwo.getSign();
            d.innerHTML = s;
            turn++;
            //checking for win
            let cells = [];
            for (let i = 0; i < boardCells.length; i++)
            cells.push(boardCells[i].innerHTML);
            if (cells[0] != '' && cells[0] === cells[1] && cells[1] === cells[2])
            cells[0] === 'x' ? turnEnd(playerOne) : turnEnd(playerTwo)
            if (cells[3] != '' && cells[3] === cells[4] && cells[4] === cells[5])
            cells[3] === 'x' ? turnEnd(playerOne) : turnEnd(playerTwo)
            if (cells[6] != '' && cells[6] === cells[7] && cells[7] === cells[8])
            cells[6] === 'x' ? turnEnd(playerOne) : turnEnd(playerTwo)
            if (cells[0] != '' && cells[0] === cells[3] && cells[3] === cells[6])
            cells[0] === 'x' ? turnEnd(playerOne) : turnEnd(playerTwo)
            if (cells[1] != '' && cells[1] === cells[4] && cells[4] === cells[7])
            cells[1] === 'x' ? turnEnd(playerOne) : turnEnd(playerTwo)
            if (cells[2] != '' && cells[2] === cells[5] && cells[5] === cells[8])
            cells[2] === 'x' ? turnEnd(playerOne) : turnEnd(playerTwo)
            if (cells[0] != '' && cells[0] === cells[4] && cells[4] === cells[8])
            cells[0] === 'x' ? turnEnd(playerOne) : turnEnd(playerTwo)
            if (cells[2] != '' && cells[2] === cells[4] && cells[4] === cells[6])
            cells[2] === 'x' ? turnEnd(playerOne) : turnEnd(playerTwo)
            console.log(cells)
            //checking if there's still empty cells
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            let mash = cells.reduce(reducer)
            console.log(mash)
            if (mash.length === 9) {
            for (let i = 0; i < boardCells.length; i++) {boardCells[i].innerHTML = ''};
            flash('It\'s a tie!');
        }
        })
    }
})();