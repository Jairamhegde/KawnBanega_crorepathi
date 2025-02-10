const questions = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Delhi",
        prize: 1000
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
        prize: 2000
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare",
        prize: 5000
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "H2O",
        prize: 10000
    },
    {
        question: "Who is the current PM of India?",
        options: ["Deve gowda", "Narendra modii", "Amit shah", "Salman Khan"],
        answer: "Narendra modii",
        prize: 15000
    },
    {
        question: "Where is the maha Kumbh mela happend in 2025? ",
        options: ["Prayagraj", "yadgiri", "nagaland", "Maharashtra"],
        answer: "Prayagraj",
        prize: 20000
    },
    
];



let questionIndex=0;

let questionLabel=document.querySelector('#ques-para');
let optionsLabel=document.querySelectorAll('.options');
let priceIs=document.querySelector('.pricewon');
let quesfor=document.querySelector('.ques-for');
let listts=document.querySelectorAll('.listt');
let shallwe=true;
let rightanswer=false
let currentQ='';
let price=0;
let priceTotal=0;
let priceTpr=0;
let priceIndex=0;
function loadQuestions(){
    let currentQ=questions[questionIndex].question;
    questionLabel.innerText=currentQ;
    let i=0;
    price=questions[questionIndex].prize;
    quesfor.innerText=`Question for ${price}`
    
    console.log(price)
    optionsLabel.forEach((element,index)=>{
        element.innerText=questions[questionIndex].options[i];
        i++;    
    })
}

function check(ans){
    let questionIs=questions[questionIndex];
    let answer=questionIs.answer;
   
    if (ans===answer){
        rightanswer=true;
    }else{
        rightanswer=false;
    }
};

function reset(){
    questionIndex=0;
    rightanswer=false;
    price=0;
    currentQ='';
}
let pr=0;
function perform(){
    optionsLabel.forEach((element)=>{
        element.onclick=()=>{
            let intext=element.innerText;
            check(intext);            
            if (rightanswer===true){  
                for (let h of listts){
                    console.log(listts)
                    if (Number(h.innerText)===price){
                        h.style.backgroundColor='green';
                    }
                }  
                priceIndex+=1;
                priceTotal+=price;
                

                
                
               
                questionIndex+=1;
                loadQuestions() 
            
            }else{
                priceIs.style.color='red';
                priceIs.innerText=`Wrong answer,you won total of : ${priceTotal}`
                element.style.backgroundColor='red'
                h.backgroundColor='red'
                reset()
            }
   
        }
    })

}


loadQuestions()
perform()

