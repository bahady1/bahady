const quotetxt = document.getElementById("quote");
const twitterBtn = document.getElementById('twitter');
const authortxt = document.getElementById('author');
//event listners


function CQuote(){
    const quote = localQuotes[Math.floor(Math.random() *  localQuotes.length)];
    if (quote.text.length >80) {
        quotetxt.classList.add('long-quote');
    }else{
        quotetxt.classList.remove('long-quote');
    }
    window.quote.innerHTML = quote.text;
    if(quote.author == null){
        window.author.innerHTML = "Unknown";
    }
    else {window.author.innerHTML = quote.author;}
}
CQuote()
//Tweet quote
function tweet() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quotetxt.textContent} - ${authortxt.textContent}`;
    window.open(twitterURL , '_blank');
}


