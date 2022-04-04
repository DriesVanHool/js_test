const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let tableBody = document.getElementById('tableBody');
let tableRow = document.getElementById('tableRow');

let oefening2 = () => {
    tableRow.innerHTML='';
    let teller = 0;
    //Create td in first row
    for(let i = 0; i < rainbow.length; i++){ 
        td = document.createElement('td');
        td.innerText = rainbow[i];        
        td.setAttribute('class', 'colors');        
        td.setAttribute('style', 'text-align:center');
        tableRow.appendChild(td);
    }

    let colors = document.querySelectorAll('.colors');

    //Hover change color
    for(let i = 0; i < colors.length; i++){
        colors[i].addEventListener('mouseover', () => {        
            colors[i].setAttribute('style',  getStyle('white', colors[i].innerText))
        });
        colors[i].addEventListener('mouseout', () => {        
            colors[i].setAttribute('style', getStyle('black', 'white'))
        });
    }    

    //Select color
    for(let i = 0; i < colors.length; i++){
        colors[i].addEventListener('click', () => {        
            teller++;
           let position = parseInt(prompt(`At which position should I add it (1-${colors.length})?`));

           if(parseInt(position)>= 1 && parseInt(position)<=colors.length){
                tr = document.createElement('tr');                      
                tr.setAttribute('class', `row${teller}`);  
                for(let j = 0; j < colors.length; j++){
                    newTd = document.createElement('td');                      
                    newTd.setAttribute('class', `col${j} colorUnique`);                             
                    newTd.setAttribute('style', 'cursor: pointer');  
                    if(j+1===position){         
                        newTd.innerText = colors[i].innerText;       
                        newTd.setAttribute('style', getStyle('white', colors[i].innerText)); 
                    } 
                    tr.appendChild(newTd);
                }
                tableBody.appendChild(tr);
           }else{
            alert(`Only integers between 1 and ${colors.length} allowed!`)
           }

           //Create unique event per td
           let colorUnique = document.querySelectorAll('.colorUnique');
           for(let i = 0; i < colorUnique.length; i++){
                colorUnique[i].addEventListener('click', () => {    
                    let choosenColor = prompt('Which color would you like to add?').toLowerCase();   
                    if(colorCheck(choosenColor)){
                        colorUnique[i].setAttribute('style', getStyle('white', choosenColor));                 
                        colorUnique[i].innerText = choosenColor; 
                    }else{                        
                        alert(`Only valid colors are allowed.`)
                    }
                });
            }    
        });
    }    
}


//Re-use td styling
function getStyle(textColor, bgColor){
    return `color: ${textColor}; background-color: ${bgColor}; text-align: center; cursor: pointer`
}

//Valid color control
    //(Bij ongeldige kleur > lege string. Dit returned false)
function colorCheck(col){
    const s = new Option().style;
    s.color = col;
    return s.color !== '';
}
