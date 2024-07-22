class Solutionpp {
  //Function to find the days of buying and selling stock for max profit.
  stockBuySell(A, N) {
    let result = [];
    let i = 0;

    while (i < N - 1) {
      // Find local minima
      while (i < N - 1 && A[i] >= A[i + 1]) {
        i++;
      }
      console.log("i", i);
      if (i === N - 1) {
        break;
      }

      let buy = i++;

      // Find local maxima
      while (i < N && A[i] >= A[i - 1]) {
        i++;
      }

      let sell = i - 1;
      result.push([buy, sell]);
    }

    return result.length ? result : [["No Profit"]];
  }
}
const arr = [100, 180, 260, 310, 40, 535, 695];
const ObjectForAlternativepp = new Solutionpp();
console.log(ObjectForAlternativepp.stockBuySell(arr, 7));
