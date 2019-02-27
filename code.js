"use strict";

const goods_prices = [200, 550, 4000, 23, 58, 5000, 485, 711];

const calculateBonus = (prices, minimum_sum = 10000, discount_in_percent = 5) => {
  const sum = sumArray(prices)
  if (sum > minimum_sum) {
    return Math.trunc((sum - minimum_sum) * discount_in_percent / 100);
  } else {
    return 0;
  }
}

const  sumArray = (array) => {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum;
}

calculateBonus(goods_prices);
