// buy some milk chocolate
const buyChocolate = () => {
     const newCandyObject = {type: 'milk chocolate'}
    return newCandyObject;
}

// add mint flavoring
const addFlavoring = (candyObject) => {
     candyObject.flovor = 'mint'
   return candyObject;
}
// Combine chocolate and mint
const makeBarkMixture = (candyObject) => { 
    if (candyObject.flavor === 'mint') {
      candyObject.mixed = true
 }
 else {candyObject.mixed = false} 
 return candyObject;
}
// Bake the mixture
const bakeCandy = (candyObject) => {
 if (candyObject.mixed === true){
     candyObject.baked = true
 }
 else {candyObject.baked = false}
return candyObject;
}
// break sheet into six pieces
const breakBark = (candyObject) => {
    if(candyObject.baked = true) {
     const candyPieces = ['Mint Chocolate Bark Piece','Mint Chocolate Bark Piece','Mint Chocolate Bark Piece',
     'Mint Chocolate Bark Piece','Mint Chocolate Bark Piece','Mint Chocolate Bark Piece']
    return candyPieces; 
    }

}
// enjoy
let makeCandy = buyChocolate()


let addedFlavor = addFlavoring(makeCandy);
let mixture = makeBarkMixture(makeCandy);
let bake = bakeCandy(makeCandy);
let breakingBark = breakBark(makeCandy);

console.log(makeCandy)
console.log(breakingBark)