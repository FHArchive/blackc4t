function otp(numberOfKeys) {
    let charInt, choice, inputString, outString, inputLength;
    let keyString = [];
    let keyIds = ["fieldkey", "fieldkey2"];
    for(let i = 0; i < numberOfKeys; i++){
        keyString.push(document.getElementById(keyIds[i]).value.replace(/\s/g, ""));
    }
    choice = document.getElementById("rad").checked;

    outString = "";
    inputString = document.getElementById("input").value;

    inputLength = inputString.normalize().length;
    for (let index = 0; (index < inputLength); index += 1) {
        for(let i = 0; i < numberOfKeys; i++){
            if ((index >= keyString[i].length)) {
                keyString[i] += keyString[i];
            }
        }
        let shift = 0;
        for(let i = 0; i < numberOfKeys; i++){
            shift += keyString[i].charCodeAt(index);
        }
        if ((choice === true)) {
            charInt = inputString.charCodeAt(index) + shift;
        } else {
            charInt = inputString.charCodeAt(index) - shift;
        }
        outString += String.fromCharCode(charInt);


    }
    document.getElementById("output").value = outString;
}
