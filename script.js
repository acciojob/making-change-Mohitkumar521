const makeChange = (c) => {
  // Initialize variables to count each type of coin
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  // Convert input to a number
  const amount = Number(c);

  // Calculate the number of quarters
  quarters = Math.floor(amount / 25);
  // Update the amount after using quarters
  amount %= 25;

  // Calculate the number of dimes
  dimes = Math.floor(amount / 10);
  // Update the amount after using dimes
  amount %= 10;

  // Calculate the number of nickels
  nickels = Math.floor(amount / 5);
  // Update the amount after using nickels
  amount %= 5;

  // The remaining amount is the number of pennies
  pennies = amount;

  // Create and return the result object
  const result = {
    q: quarters,
    d: dimes,
    n: nickels,
    p: pennies,
  };

  return result;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

