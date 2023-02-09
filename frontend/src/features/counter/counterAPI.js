// A mock function to mimic making an async request for data
export function fetchCount(amount) {
  return new Promise((resolve, reject) => {
    if (amount % 2 === 1) {
      setTimeout(() => resolve({ data: amount }), 1000);
    } else {
      // setTimeout(() => { throw new Error("Can't update the counter") }, 1000)
      setTimeout(() => reject("Can't update counter"), 1000);
    }
  });
}
