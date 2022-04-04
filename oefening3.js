const questions = [
  'Where did Frodo destroy the One Ring?',
  'What is Batman\'s real name?',
  'Which company developed the video game Minecraft?',
  'Which character is portrayed by Henry Cavill in the Netflix adaptation of The Witcher?',
  'Who likes to jump around on his tail in the Winnie The Pooh stories?'];
const answers = ['Mount Doom', 'Bruce Wayne', 'Mojang', 'Geralt of Rivia', 'Tigger'];
const userAnswers = [];

function oefening3(){

  let oefening3 = document.querySelector('.oefening3');
  oefening3.innerHTML="";
  table =  document.createElement('table');
  table.setAttribute('style', 'text-align:center; color: white;');

  for(let i = 0; i < questions.length; i++){ 
    let answer = prompt(questions[i]);

    //Check null for 'Cancel' prompt
    userAnswers[i] = answer === null ? "No answer" : answer ;

    //Create element    
    tr = document.createElement('tr');      
    td = document.createElement('td');
    h6 = document.createElement('h6');    
    p = document.createElement('p');  

    //td style
    td.setAttribute('class', 'border-3 border-white');      
    td.setAttribute('style', 'padding:15px; border-radius: 10px');

    //Question/Answer
    h6.innerText = questions[i];       
    p.innerText = `You answered: ${userAnswers[i]}`;  
    td.appendChild(h6); 
    td.appendChild(p);

    //Check answer
    if(answers[i].toLowerCase() === userAnswers[i].toLowerCase()){
      tr.setAttribute('class', 'bg-success');          
    }else{
      tr.setAttribute('class', 'bg-danger');    
      pCorrect = document.createElement('p');      
      pCorrect.innerText = `The correct answer was: ${answers[i]}`;   
      td.appendChild(pCorrect);
    }

    tr.appendChild(td);
    table.appendChild(tr);
  };

  oefening3.appendChild(table);

}