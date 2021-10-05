let order = [];
let clickedOrder = [];
let score = 0;

// 0 - Verde
// 1 - Vermelho
// 2 - Amarelo
// 3 - Azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const do1 = document.getElementById('do1');
const re1 = document.getElementById('re1');
const mi1 = document.getElementById('mi1');
const fa1 = document.getElementById('fa1');
const over = document.getElementById('over');


//Cria ordem aleatória de cores
//-----------------------------
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//Acende a próxima cor
//----------------------
let lightColor = (element, number) => {
    
    number = number * 500;




    setTimeout(() => {
        element.classList.add('selected');
        
        if(element == green ){
            do1.currentTime = 0;
            do1.play();
        }
        else if (element == red){
            re1.currentTime = 0;
            re1.play();
        }else if(element == yellow){
            mi1.currentTime = 0;
            mi1.play();
        }else if(element == blue){
            fa1.currentTime = 0;
            fa1.play();
        }

        
        setTimeout(() => {
            element.classList.remove('selected');
    
        }, 300);
    }, number - 250);


}

// Veririca se os botões clicados são os mesmos da ordem gerada no jogo
//---------------------------------------------------------------------
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo Nivel! `);
    nextLevel();
    }

}

//Função para clique do Jogador
//--------------------------------

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
        if(color == 0n ){
            do1.currentTime = 0;
            do1.play();
        }
        else if (color == 1){
            re1.currentTime = 0;
            re1.play();
        }else if(color == 2){
            mi1.currentTime = 0;
            mi1.play();
        }else if(color == 3){
            fa1.currentTime = 0;
            fa1.play();
        }

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}



//Função que retorna a cor
//---------------------------------

let createColorElement = (color) =>{
    if(color == 0 ){
        return green;
    }
    else if (color == 1){
        return red;
    }else if(color == 2){
        return yellow;
    }else if(color == 3){
        return blue;

    }

}

//Função para próximo nivel do Jogo
//-----------------------------------

let nextLevel =()=>{
    score++;
    shuffleOrder();
}

//Função para Game Over
//------------------------

let gameOver = () => {
    over.currentTime = 0;
    over.play();
    alert(`Pontuação: ${score}!\nVocê perdeu o Jogo!\nClick em Ok para iniciar um novo jogo`);
    order=[];
    clickedOrder = [];

    playGame();
}



let playGame = () =>{
    alert(`Bem vindo ao Genesis!\nIniciando novo jogo`);
    score = 0;

    nextLevel();
}

//green.addEventListener(click, click(0));
//red.addEventListener(click, click(1));
//yellow.addEventListener(click, click(2));
//blue.addEventListener(click, click(3));

green.onclick = ()=>click(0);
red.onclick = ()=>click(1);
yellow.onclick = ()=>click(2);
blue.onclick = ()=>click(3);




playGame();