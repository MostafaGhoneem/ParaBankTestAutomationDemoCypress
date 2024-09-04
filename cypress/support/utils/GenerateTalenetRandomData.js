function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function generateRandomTalentData() {
    const firstNames = ['John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Chris', 'Anna'];
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Williams', 'Jones', 'Miller', 'Davis'];

    const timestamp = Date.now();
  
    return {
      firstName: `${getRandomElement(firstNames)}_${timestamp}`,
      lastName: `${getRandomElement(lastNames)}_${timestamp}`,
      dateOfBirth: '15/08/1990', 
      isCitizen: true,  
      isSenior: false,  
      hasValidAddress: false,  
      worksRemotely: true  
    };
  }
  
  module.exports = { generateRandomTalentData };