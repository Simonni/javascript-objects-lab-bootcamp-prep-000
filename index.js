var recipes = {foo: 'bar'};
function updateObjectWithKeyAndValue(recipes, key, value){
  recipes[key]=value;
  recipes.key;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes[key]=value;
  recipes;
}

function nonDestructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return recipes.assign({},recipes,{[key]:value});
}

function deleteFromObjectByKey(object, key){
  delete recipes[key];
  return recipes;
}

function destructivelyDeleteFromObjectByKey(object, key){
  
}

