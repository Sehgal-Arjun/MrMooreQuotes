localStorage.setItem('showing', 0);
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

    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);

    document.getElementById('date').innerHTML = 'Today\'s quote:<br> ' + "#" +day;

    for (let i = 0; i < quotesfull.length; i++){
        if (day == parseInt(quotesfull[i].Index)){
            document.getElementById('quote').innerHTML =  '" ' + quotesfull[i].Quote + ' "';
        }
    }


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
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);

        if (localStorage.getItem('showing') == 0){
           for (let i = 0; i < quotesfull.length; i++){
                if (parseInt(quotesfull[i].Index) <= day){
                    ele.innerHTML += (i+1) + ") " + quotesfull[i].Quote + '<br>';
                }
            } 
        }
        localStorage.setItem('showing', 1);
        
        const y = ele.getBoundingClientRect().top + window.pageYOffset + 100;
        window.scrollTo({top: y, behavior: 'smooth'});


    })
}