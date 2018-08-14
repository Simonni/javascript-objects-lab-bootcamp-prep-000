var recipes = {};
//non-destructive 
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value});
}

// destructive 
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key]=value;
  return recipes;
}


function deleteFromObjectByKey(recipes, key){
  delete recipes.key;

}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes.key;
  return recipes;
}

