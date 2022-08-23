// Common function for select player and show to display section
function addPlayerName(player, playerBtn) {
    const playerNameField = document.getElementById(player);
    const playerName = playerNameField.innerText;
    const playerList = document.getElementById('best-five');
    const li = document.createElement('li');
    li.innerText = playerName;
    const list = playerList.querySelectorAll("li");
    let noOfPlayers = list.length;
    const noOfPlayerField = document.getElementById('player-count');
    const noOfPlayerString = noOfPlayerField.innerText;
    const noOfPlayer = parseInt(noOfPlayerString);
    let count = 0;
    count = noOfPlayer + 1;
    if (count > 5) {
        count = 5;
    }
    noOfPlayerField.innerText = count;
   
    if (noOfPlayers < 5) {
        document.getElementById('best-five').appendChild(li);
        document.getElementById(playerBtn).setAttribute('disabled', '');
        document.getElementById(playerBtn).style.backgroundColor = 'green';
       
    }
    else{
        alert('Ops!!! You have already selected best-five');
    }
    budgetCalculator(count);
}

// function call for Messi
document.getElementById('btn-Messi').addEventListener('click', function () {
    addPlayerName('pName-Messi','btn-Messi');
})
// function call for Neymar
document.getElementById('btn-Neymar').addEventListener('click', function () {
    addPlayerName('pName-Neymar','btn-Neymar');
    
})
// function call for Mbappe

document.getElementById('btn-Mbappe').addEventListener('click', function () {
    addPlayerName('pName-Mbappe','btn-Mbappe');
})
// function call for Ronaldo

document.getElementById('btn-Ronaldo').addEventListener('click', function () {
    addPlayerName('pName-Ronaldo','btn-Ronaldo');
})

// function call for Lewandowski
document.getElementById('btn-Lewandowski').addEventListener('click', function () {
    addPlayerName('pName-Lewandowski','btn-Lewandowski');
})

// function call for Di-maria

document.getElementById('btn-Dimaria').addEventListener('click', function () {
    addPlayerName('pName-Dimaria','btn-Dimaria');
})
// function call for Machado

document.getElementById('btn-Machado').addEventListener('click', function () {
    addPlayerName('pName-Machado','btn-Machado');
})
// function call for Ramos
document.getElementById('btn-Ramos').addEventListener('click', function () {
    addPlayerName('pName-Ramos','btn-Ramos');
})
// function call for Renato

document.getElementById('btn-Renato').addEventListener('click', function () {
    addPlayerName('pName-Renato','btn-Renato');
})


function budgetCalculator(noOfPlayers) {
    // player expenses
    document.getElementById('btn-Cal').addEventListener('click', function () {
        const playerPrizeField = document.getElementById('player-prize');
        const playerPrizeString = playerPrizeField.value;
        const playerPrize = parseInt(playerPrizeString);
        const playerExpenses = noOfPlayers * playerPrize;
        document.getElementById('player-expenses').innerText = playerExpenses;    
    })
    // total expenses
    document.getElementById('btn-Total-Cal').addEventListener('click', function () {
        const playerPrizeField = document.getElementById('player-prize');
        const playerPrizeString = playerPrizeField.value;
        const playerPrize = parseInt(playerPrizeString);
        const playerExpenses = noOfPlayers * playerPrize; 

        const managerPrizeField = document.getElementById('manager-prize');
        const managerPrizeString = managerPrizeField.value;
        const managerPrize = parseInt(managerPrizeString);

        const coachPrizeField = document.getElementById('coach-prize');
        const coachPrizeString = coachPrizeField.value;
        const coachPrize = parseInt(coachPrizeString);
        console.log(coachPrize, managerPrize);
        const totalExpenses = playerExpenses + managerPrize + coachPrize;
        document.getElementById('total-expenses').innerText=totalExpenses;
    })
}