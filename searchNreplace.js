function myReplace(str, before, after) {

    let sentence = str.split(" ");
    let modSentence = "";

    for (let x = 0; x < sentence.length; x++) {
        if (sentence[x] === before) {

            if (before[0] === before[0].toUpperCase()) {
                modSentence += (after[0].toUpperCase() + 
                                after.substring(1) + " ");
                            } 
            else if (before[0] === before[0].toLowerCase()) {
                modSentence += (after[0].toLowerCase() + 
                                after.substring(1) + " ");
                            }
            else {
                modSentence += sentence[x].replace(sentence[x], after+" ");
            }
        } 
        else {
            modSentence += sentence[x]+" ";
        }
    } 
    return modSentence.trimEnd();
  }

console.log(myReplace("I think we should look up there", "up", "Down"));