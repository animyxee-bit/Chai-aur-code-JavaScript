const marvel_heroes = ["thor", "ironman", "drstrange"]
const dc_heroes = ["superman", "batman", "flash"] 

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

const all_newheroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_newheroes);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)
  
const numarr = [1, [3], [5], 2, [3,4], [5, 6, [7, 8]]]
// const realnum = numarr.flat(Infinity)
// console.log(numarr.flat(Infinity))

// const array = ["nikhil"]
console.log(Array.isArray("nikhil"));
console.log(Array.isArray(["Nikhil"]));

