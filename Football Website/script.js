function saveInfo() {
    const club = document.getElementById('Club').value;
    const player = document.getElementById('Player').value;
    
    localStorage.setItem('favouriteClub', club);
    localStorage.setItem('favouritePlayer', player);
    
    const fav_club = localStorage.getItem('favouriteClub');
    const fav_player = localStorage.getItem('favouritePlayer');
    
    document.getElementById('showClub').innerHTML = fav_club;
    document.getElementById('showPlayer').innerHTML = fav_player;

    saveInfo();
}

function showUserInfo() {
    const club = localStorage.getItem('favouriteClub');
    const player = localStorage.getItem('favouritePlayer');
    
    document.getElementById('showClub').textContent = club;
    document.getElementById('showPlayer').textContent = player;
}
showUserInfo();

function hideAndShowInfo() {
    const info = document.getElementById('User-Info');
    info.classList.toggle('hide');
}

function addMatchInfo() {

    const firstTeam = document.getElementById('firstTeam').value;
    const secondTeam = document.getElementById('secondTeam').value;
    const firstTeamScore = document.getElementById('firstTeamScore').value;
    const secondTeamScore = document.getElementById('secondTeamScore').value;


    const newMatch = document.createElement('div');
    const firstTeamElement = document.createElement('span');
    const vsElement = document.createElement('span');
    const secondTeamElement = document.createElement('span');
    const scoreElement = document.createElement('span');

    firstTeamElement.textContent = firstTeam;
    secondTeamElement.textContent = secondTeam;
    vsElement.textContent = ' vs ';
    scoreElement.textContent = ` ${firstTeamScore} - ${secondTeamScore}`;

    newMatch.appendChild(firstTeamElement);
    newMatch.appendChild(vsElement);
    newMatch.appendChild(secondTeamElement);
    newMatch.appendChild(scoreElement);

    const Match = document.getElementById('Match');
    Match.appendChild(newMatch);
}

function removeMatchInfo() {
    const Match = document.getElementById('Match'); 

    if(Match.lastChild) {
        Match.removeChild(Match.lastChild); 
    }
}