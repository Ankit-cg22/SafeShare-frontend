function arrayFromLowToHigh(low , high){
    const arr =[] ; 
    for(let i = low ; i<= high ; i++)arr.push(i);
    return arr;
}

function fillCharCodes(){
    
    const LOWER = arrayFromLowToHigh(97  , 122)
    const HIGHER = arrayFromLowToHigh(65 , 90)
    const NUMBER = arrayFromLowToHigh(48 , 57)

    let charCodes = LOWER ; 
    charCodes.push(...HIGHER)
    charCodes.push(...NUMBER)
    
    return charCodes ;
}

export default function generatePassword(){
    const ca = 15;
    let charCodes = fillCharCodes();
    
    const password = []
    for(let i = 0 ; i < ca ; i++)
    {
        const characterCode = charCodes[ Math.floor(Math.random() * charCodes.length ) ]
        password.push(String.fromCharCode(characterCode))
    }

    return password.join('')
}
