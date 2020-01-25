const Gameboard = (() => {
    for (i = 1; i <= 9; i++) {
        const b = document.getElementById('gameboard')
        let d = document.createElement('div')
        d.id = i
        d.className = 'boardcell'
        d.innerHTML = 'This is ' + i
        b.appendChild(d)
        // if (!(i % 3)) {
        //     b.appendChild(document.createElement('hr'))
        // }
    }
    let array = []
    array = document.getElementsByClassName('boardcell')
    return array
})();