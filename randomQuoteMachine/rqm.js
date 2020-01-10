
const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";



function getQuote(){
    fetch(endpoint)
    .then(function(response){
        return response.json();
    })
    .then(function(data) { 
        console.log(data);
    })

    .catch(function () {
        console.log("An error occured");
    });
}

function displayQuote(quote){
    const quoteText = document.querySelector('.quote-text');

    quoteText.textContent = quote;

    const tweetButton = document.querySelector('.tweet');
    tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
}

const newQuoteButton = document.querySelector(".new-quote");
newQuoteButton.addEventListener('click',getQuote);

getQuote();

