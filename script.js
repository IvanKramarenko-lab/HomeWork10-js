const createArray = () => {
    let createArray = [];
  while (true) {
      const getInput = prompt('Enter your word');

      if (!(getInput === null || getInput === '')) {
          createArray.push(`${getInput[1].toUpperCase()}${getInput.toLowerCase().slice(1)}`);
      } else {
          return createArray.sort((a, b) => a.length-b.length);
      }
  }
}

createArray();