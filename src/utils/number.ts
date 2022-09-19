export const koreanCurrencyFormatter = (num: number) => {
  const units = ["", "만", "억", "조", "경"];
  const unitHTML = [
    "",
    "<span>만</span>",
    "<span>억</span>",
    "<span>조</span>",
    "<span>경</span>",
  ];
  const nums = String(num).split("").reverse().map(Number);
  const result = nums
    .reduce((acc, cur, idx) => {
      if (idx % 4 === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(cur);
      return acc;
    }, [] as any[])
    .reverse()
    .map((arr, idx) => {
      return arr.join("");
    });
  console.log(result);
  // .map((arr, idx) => {
  //   const unit = unitHTML[idx];
  //   const num = arr.reverse().join("");
  //   return num + unit;
  // })
  // .reverse()
  // .join(" ");
  return result;
};
