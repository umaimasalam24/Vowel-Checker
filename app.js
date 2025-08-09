function vowelCheck(){
    let inputText = document.getElementById("inputText").value;
    let result = document.getElementById("result");
    let error = document.getElementById("error");
    result.textContent ='';
    error.textContent="";
        if(!inputText){
        error.textContent="Please enter some text.";
        return;
    }

    let vowels = ['a', 'e', 'i', 'o' , 'u','A','E','I', 'O', 'U'];
    let count = 0;
    for(let i=0; i<inputText.length ; i++){
        if(vowels.includes(inputText[i])){
            count++;
        }
    }
    result.textContent ="Numbers Of Vowels: " + count;


}
