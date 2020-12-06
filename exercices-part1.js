/**
 * Exercices-part1 : récursivité
 */

function sumTree(tree){
    if(!Array.isArray(tree)){
        return tree;
    }/*
    let res=0;
    tree.forEach((item)=>{
       res+=sumTree(item);
    });
    return res;*/
    return tree.reduce((acc,item)=>acc+sumTree(item),0);
}
function depthTree(tree,a){
    a=a || 0;
    if(!Array.isArray(tree)){
        return a;
    }
    a++;
    return tree.reduce((acc,item)=>depthTree(item,acc),a);
}

function depth2(tree){
    if(!Array.isArray(tree)){
        return 0;
    }
    return 1+Math.max(...tree.map(depth2));
}
function clist(...args){
    return args;
}

let t=[1, [[2], 3], [4], 5, [6, 100, [[7], [[8]], 9]], 10];
console.log(...t);
console.log(sumTree(t));
console.log(depth2(t));
console.log(clist(1,2,3,4,"bla",true));