var recipes = {foo: 'bar'};
function updateObjectWithKeyAndValue(recipes, key, value){
  recipes[key]=value;
  recipes[key];
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key]=value;
  return recipes;
}

function nonDestructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  return recipes.assign({},recipes,{[key]:value});
}

function deleteFromObjectByKey(recipes, key){
  delete recipes.key;

}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes.key;
  return recipes;
}

