localStorage.setItem('showing', 0);
let quotesfull = []; // list of quote objects -> contains an Index and a Quote
let quotes = []; // list of just quotes
fetch('quotes/quotes.json')
    .then (results => results.json())
    .then (data => { 
        for (var i = 0; i < data.length; i++){
            quotesfull.push(data[i]);
        }
    
    console.log(JSON.stringify(quotesfull));

    for (let i = 0; i < quotesfull.length; i++){
        quotes.push(quotesfull[i].Quote);
    }

    console.log(quotes);
    document.getElementById('quote').innerHTML =  '" ' + quotes[Math.floor(Math.random() * 22)] + ' "';


})

function showoldstuff(){
    let quotesfull = []; // list of quote objects -> contains an Index and a Quote
    let quotes = []; // list of just quotes
    fetch('quotes/quotes.json')
        .then (results => results.json())
        .then (data => { 
            for (var i = 0; i < data.length; i++){
                quotesfull.push(data[i]);
            }

        for (let i = 0; i < quotesfull.length; i++){
            quotes.push(quotesfull[i].Quote);
        }

        let ele = document.getElementById('oldquotes');
        if (localStorage.getItem('showing') == 0){
           for (let i = 0; i < quotesfull.length; i++){
            let ind = parseInt(quotesfull[i].Index)+1;
            ele.innerHTML += ind + ") " + quotesfull[i].Quote + '<br>';
            } 
        }
        localStorage.setItem('showing', 1);
        
        const y = ele.getBoundingClientRect().top + window.pageYOffset + 100;
        window.scrollTo({top: y, behavior: 'smooth'});


    })
}