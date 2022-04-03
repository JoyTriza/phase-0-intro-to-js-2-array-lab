const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
    cats.push(name)
};
function destructivelyPrependCat(name){
    cats.unshift(name)
};
function destructivelyRemoveLastCat(name){
    cats.pop(name)
};
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
};
function appendCat(name){
    let newcats = [...cats, "Broom"];
    return newcats;
};
function prependCat(name){
    let newcats1 = ["Arnold", ...cats];
    return newcats1;
};
function removeLastCat(name){
    let newcats2 = [...cats];
    newcats2.pop()
    return newcats2;
};
function removeFirstCat(name){
    let newcats3 = [...cats];
    newcats3.shift()
    return newcats3;
}