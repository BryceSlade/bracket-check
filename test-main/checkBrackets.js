function checkBrackets(s) {
    let arr = [];
    let current;
    const match = {
      '{' : '}'
    }
    
    for (let i = 0; i < s.length; i++) {
      current = s[i];
      
      if (current === '{') {
        arr.push(current);
        
      } else if (current === '}') {
        const lastBracket = arr.pop();
        
        if (match[lastBracket] !== current) { 
          return false;
        }
      }
    }
    
    return arr.length === 0;
}

module.exports = checkBrackets;