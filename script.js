let b = document.getElementById("start")
let s=document.getElementById("newbt")
let player={
    name:"Per",
    chips:300
}
let cards=[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageel = document.getElementById('message-el')
let sumel=document.getElementById('sum-el')
let cardsel=document.getElementById('cards-el')
let playerel=document.getElementById('player-el')
playerel.textContent=player.name+":"+player.chips+" INR"
function getRandomCard()
{
    let x= Math.floor((Math.random()*13)+1);
    if(x==1)
    {
        return 11;
    }
    else if(x==11||x==12||x==13)
    {
        return 10;
    }
    return x;
}
function startGame()
{
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum=firstCard+secondCard;
    renderGame();
}
function renderGame()
{
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageel.textContent=message;
    sumel.textContent="Sum:"+sum
    cardsel.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsel.textContent+=cards[i]+" "
    }  
}
function newCard()
{
   if(isAlive&&!hasBlackJack)
   {
    let card=getRandomCard();
    cards.push(card);
    sum+=card;
    renderGame();
   }
    
}
b.addEventListener('click',startGame)
s.addEventListener('click',newCard)

