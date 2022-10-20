/// <reference path="./global.d.ts" />
// @ts-check

export const cookingStatus = remainingTime => {
  if (remainingTime === undefined) return 'You forgot to set the timer.';
  if (remainingTime === 0) return 'Lasagna is done.';
  return 'Not done, please wait.';
};

export const preparationTime = (layers, avgTime = 2) => {
  return layers.length * avgTime;
};

export const quantities = layers => {
  let noodles = 0;
  let sauce = 0;
  for (const layer of layers) {
    if (layer === 'noodles') noodles += 50;
    if (layer === 'sauce') sauce += 0.2;
  }

  return { noodles, sauce };
};

export const addSecretIngredient = (friendsList, myList) => {
  const lastIngredient = friendsList.at(-1);
  myList.push(lastIngredient);
};

export const scaleRecipe = (recipe, portions) => {
  const scaledRecipe = Object.create(recipe);
  for (const item in scaledRecipe) {
    scaledRecipe[item] *= portions / 2;
  }
  return scaledRecipe;
};
