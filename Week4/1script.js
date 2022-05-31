
   const randomNumber = parseInt(Math.random() *100);
    if(randomNumber % 5 === 0){
        PromiseRejectionEvent(`rejected  number ${randomNumber}`);
    }
    

