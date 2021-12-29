let dataset = [10, 23, 5, 4, 6];

const findindex = (searchelement) => {
  for (let i = 0; i < dataset.length; i++) {
    if (dataset[i] === searchelement) return i;
  }
  return -1;
};
console.log(findindex(5));

const insertAt = (data, index) => {
  for (let i = dataset.length; i > index; i--) {
    dataset[i] = dataset[i - 1];
  }
  dataset[index] = data;
};
insertAt(10, 3);
console.log(...dataset);

const reverse = () => {
  let end = dataset.length - 1;
  let temp = null;
  for (j = end, i = 0; i < j; i++, j--) {
    temp = dataset[i];
    dataset[i] = dataset[j];
    dataset[j] = temp;
  }
};
reverse();
console.log(dataset);
