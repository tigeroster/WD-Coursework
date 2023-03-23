function success(){
    let fullname = document.getElementById('name').value
    let email = document.getElementById('email').value
    let address = document.getElementById('address').value
    let city = document.getElementById('city').value
    let country = document.getElementById('country').value
    let zip = document.getElementById('zip').value
    let cardname = document.getElementById('cardname').value
    let ccnumber = document.getElementById('ccnumber').value
    let month = document.getElementById('month').value
    let year = document.getElementById('year').value
    let ccv = document.getElementById('ccv').value
    if(fullname != null && email != null && address != null && city != null && country != null && zip != null && cardname != null && ccnumber != null && month != null && year != null && ccv != null){
        location.href = "index.html"
        window.alert('Payment done successfully')
        
    }else{
        window.alert('Please fill all the fields')
    }

}