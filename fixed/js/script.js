// select all dom
const buttons = document.querySelectorAll('#card_btn .btn');
const selectedPlayer = document.getElementById('selected');


// Button click and selected player update
function addPlayer(playerName){
    const li = document.createElement('li');
    li.innerText = playerName;
    selectedPlayer.appendChild(li);
}

for(const button of buttons){
    button.addEventListener('click' , (e)=>{
        if(selectedPlayer.children.length <= 4){
            button.classList.add('disabled');
            addPlayer(button.parentNode.children[0].innerText);
        } else{
            button.classList.remove('disabled');
            alert('5 Played already Selected');
        }
    })
} 

// A common function for getInput value
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    if (! inputFieldValue || inputFieldValue <0) {  
        inputField.value=''
        alert('input valid value'); 
    } else {
        inputField.value=''
        return inputFieldValue 
    }
  
};

function getValueOfElement(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}



// Budgets add event listeners
document.getElementById('calculate_budget').addEventListener('click', function(){
    if (selectedPlayer.children.length >= 4) {
        document.getElementById('alert_red').setAttribute('hidden', 'false');
        console.log(true);
        const perPlayerBudget = getInputValue('per_player_budget');
        let totalPlayerExpense =  isNaN(perPlayerBudget)? '00':perPlayerBudget *5;
        getValueOfElement( 'player_expense', totalPlayerExpense)    
    }
    else{
        document.getElementById('alert_red').setAttribute('hidden', 'true');
        console.log(false);
    }
   
})
let count =0;
document.getElementById('calculate_total_budget').addEventListener('click', function(e){
    const perPlayerBudget = document.getElementById('player_expense');
    const playerTotalBudget = parseFloat(perPlayerBudget.innerText)
    const managerBudget = parseFloat(getInputValue('manager_budget'));
    const coachBudget =parseFloat( getInputValue('coach_budget'));
   
    if (!managerBudget ||!coachBudget || ( managerBudget ||coachBudget) <0) {
     console.log(count++);
      
        alert('input valid value'); 
       
    } else {
        let totalExpense = playerTotalBudget + managerBudget + coachBudget;
        getValueOfElement( 'player_total_expense', totalExpense)
    }

   
})

