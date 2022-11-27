function encrypt(text, key){
    key=key-'0';
    key=key%26;
    let result=""
    for (let i = 0; i < text.length; i++){
        let char = text[i];
        if (char==char.toUpperCase()){
            let ch =  String.fromCharCode((char.charCodeAt(0) + key-65) % 26 + 65);
            result += ch;
        }else{
            let ch = String.fromCharCode((char.charCodeAt(0) + key-97) % 26 + 97);
            result += ch;
        }
    }
    console.log(result);
    return result;
}

document.getElementById("submit").addEventListener("click",function(){
    let answer=encrypt(document.getElementById("message").value,document.getElementById("key").value);
    alert("Your Encrypted Message is : " + "\n" + answer);
})
