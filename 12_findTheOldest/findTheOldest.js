const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    arr.forEach(obj => {
        obj.ageId = obj.yearOfDeath ? obj.yearOfDeath - obj.yearOfBirth : currentYear - obj.yearOfBirth;
    });
    

    return maxAge = arr.reduce((maxObj, currentObj) => {
        return currentObj['ageId'] > maxObj['ageId'] ? currentObj : maxObj;
        
    });
};

        

    

// Do not edit below this line
module.exports = findTheOldest;
