export const arrayRemoveItemByIndex = (array, indexFromOne) => {
  const index = indexFromOne - 1;
  const left = array.slice(0, index);
  const right = array.slice(index + 1);

  return left.concat(right);
};

export const arrayAddItem = (array, item) => {
  return [...array, item];
};

/* array.map method with if (item.id == action.id)*/
