import { RandomEnsure } from ".";

let ensure = new RandomEnsure([0,1,2,3], {
    ensure: 0.25
});
let results:{[key:string]:number} = {};

console.time("100k shuffle() test ran in");
for (let i = 0; i < 100000; i++) {
    let old = ensure.list.slice(ensure.list.length - ensure.options.ensure);
    ensure.shuffle();
    for (let ii = 0; ii < old.length; ii++) {
        if (ensure.list.indexOf(old[ii]) < ensure.options.ensure) {
            console.log(old, ensure.list);
            throw new Error("Invalid shuffle() ensure");
        }
    }
    let key = ensure.list.join("");
    if (results[key]) {
        results[key]++;
    } else {
        results[key] = 1;
    }
}
console.timeEnd("100k shuffle() test ran in");
console.log(results);

results = {};
let last:number[] = [];
console.time("100k next() test ran in");
for (let i = 0; i < 100000; i++) {
    let key = ensure.next();
    if (last.indexOf(key) > -1) {
        throw new Error("Invalid next() ensure");
    } else if (last.length == ensure.options.ensure) {
        last.shift();
    }
    last.push(key);
    if (results[key]) {
        results[key]++;
    } else {
        results[key] = 1;
    }
}
console.timeEnd("100k next() test ran in");
console.log(results);