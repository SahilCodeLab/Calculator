function calculatePrices(): void {
  const priceInput = document.getElementById("pricePerKg") as HTMLInputElement;
  const price = parseFloat(priceInput.value);
  const gramsList: number[] = [1000, 500, 400, 300, 200, 100, 50, 40, 30, 20, 10];
  const priceResult = document.getElementById("priceResult") as HTMLDivElement;

  if (isNaN(price) || price <= 0) {
    priceResult.innerHTML = "Please enter a valid price per kg.";
    return;
  }

  let output = "<ul>";
  gramsList.forEach((g) => {
    const amount = (price / 1000) * g;
    output += `<li>${g}g = ₹${amount.toFixed(2)}</li>`;
  });
  output += "</ul>";
  priceResult.innerHTML = output;
}

function calculateQuantity(): void {
  const priceInput = document.getElementById("price") as HTMLInputElement;
  const budgetInput = document.getElementById("budget") as HTMLInputElement;
  const quantityResult = document.getElementById("quantityResult") as HTMLDivElement;

  const price = parseFloat(priceInput.value);
  const budget = parseFloat(budgetInput.value);

  if (isNaN(price) || isNaN(budget) || price <= 0 || budget < 0) {
    quantityResult.innerHTML = "Please enter valid numbers.";
    return;
  }

  const grams = (budget / price) * 1000;
  quantityResult.innerText = `₹${budget} mein milega: ${grams.toFixed(2)} grams`;
}