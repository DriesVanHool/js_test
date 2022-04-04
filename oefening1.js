const firstName = document.getElementById('name');
const surname = document.getElementById('surname');
const mail = document.getElementById('mail');
const address = document.getElementById('address');
const country = document.getElementById('country');
const province = document.getElementById('province');
const zip = document.getElementById('zip');    
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

function sendMessage(){
    const checkFields = [firstName, surname, mail, address, country, province, zip];

    let errorMsg = '';

    // Check empty values with loop through fields array 
    checkFields.forEach(field => {
        if(field.value === ''){
            switch(true){
                case (field === firstName):
                    errorMsg+='First name is required.<br>';
                    break;
                case (field === surname):            
                    errorMsg+='Name is required.<br>';
                    break;
                case (field === mail):            
                    errorMsg+='Email is required.<br>';
                    break;
                case (field === address):            
                    errorMsg+='Address is required.<br>';
                    break;
                case (field === country):            
                    errorMsg+='Country is required.<br>';            
                    break;
                case (field === province):            
                    errorMsg+='Province is required.<br>';            
                    break;
                case (field === zip):            
                    errorMsg+='Postal code is required.';            
                break;
            }
        }
    });

    //Check correct mail and zip values
    if(errorMsg===''){
        if(mail.value.indexOf('@') === -1 || mail.value.indexOf('.') === -1)
            errorMsg+='E-mail is not valid.<br>';
        if(!parseInt(zip.value) || parseInt(zip.value)<1000 || parseInt(zip.value)>9999)
            errorMsg+='Postal code value must be between 1000 & 9999';
    }

    //Show correct message
    if(errorMsg!==''){
        successMessage.setAttribute('style', 'display:none');        
        errorMessage.innerHTML = `<h6>You messed up ...</h6> ${errorMsg}`;
        errorMessage.setAttribute('style', 'display:block');
    }else{        
        successMessage.setAttribute('style', 'display:block');
        errorMessage.setAttribute('style', 'display:none');
    }
}

function changeCountry(){
    const countryValue = document.getElementById('country').value;
    let provinces = [];

    //Reset dropdown
    province.innerHTML = '<option value="" selected>Please select a province</option>'

    //Selected country
    switch(countryValue){
        case 'BE':
            provinces = ['Antwerp', 'Limburg', 'Luik', 'Namen'];
            break;        
        case 'FR':
            provinces = ['Maine', 'Lyonnais', 'Normandie'];
            break;
        case 'NL':
            provinces = ['Groningen', 'Overijssel', 'Friesland', 'Noord-Brabant'];
            break;
    }

    //Fill in dropdown
    for(let i = 0; i < provinces.length; i++){
        opt = document.createElement('option');
        opt.innerText = provinces[i];
        opt.value = provinces[i]
        province.appendChild(opt);
    }

}