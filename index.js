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
  return recipes.assign({}recipes{[key]:value});
}