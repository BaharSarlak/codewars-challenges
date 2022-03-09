// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.//

function shortcuts (string) {

    const result=string.split('').map(char=>char.toLowerCase()).filter(char=> (char!='a' && char!='e' && char!='i' && char!='o' && char!='u')).join('')
    console.log(string.split(''))
    return result
}

console.log(shortcuts('Emily Joulies'))
