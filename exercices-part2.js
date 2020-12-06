/**
 * Exercices-part1 : Closures
 */
function clist(...args){
	return args;
}
function add(...args){
	return args.reduce((a,b)=>a+b);
}
function sub(...args){
	return args.reduce((a,b)=>a-b);
}
function compose(...calls){
	if(calls.length===1){
		return (...args)=>calls[0](...args);
	}
	let func=calls.shift(0);
	return (...args)=>func(compose(...calls)(...args));
}

function zip(...rows){
	return rows[0].map((_,c) => rows.map(row=>row[c]));
}

function zipmap(keys,values){
	return keys.reduce((obj, key, index) => ({ ...obj, [key]: values[index] }), {});
}

console.log(clist(1,2,3,4));
console.log(add(1,2,3,4));
console.log(sub(5,1,2));

console.log(compose((i)=>2*i, (i)=>-i)(3));

console.log(compose(clist, (i)=>2*i, sub)(1, 2, 3));

console.log(zip([1, 2, 3], [4, 5, 6]));

console.log(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]));

console.log(zipmap([1, 2, 3], [4, 5, 6]));