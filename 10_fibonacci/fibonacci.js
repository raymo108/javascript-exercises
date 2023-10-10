const fibonacci = function(n) {
    let nInt = parseInt(n);
    let prev = 0;
    let curr = 1;
    if (nInt > 0) {

        for (let i = 2; i <= nInt; i++) {
            let next = prev + curr;
            prev = curr;
            curr = next;
        }

        return curr;

    }   else {
        return 'OOPS';
    }
 
    
};



// Do not edit below this line
module.exports = fibonacci;
