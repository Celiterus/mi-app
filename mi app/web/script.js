const formElement = document.getElementById("saveTransaction");

formElement.addEventListener("sumbit", (event) =>{
    event.preventDefault();
    let ransactionDescription = document.getElementById("transactionDescription").value;
    let transactionPrice = document.getElementById("transactionPrice").value;
    let transaction = {transactionDescription: transactionDescription, transactionPrice: transactionPrice};
    let transactionJson = JSON.sitringify(transaction);
    //Mandar los datos al backend y guardarlos ahi
    console.log(transactionJson);
});