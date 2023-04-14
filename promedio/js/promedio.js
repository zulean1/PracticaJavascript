productos= ([
	{
		name: "Product 1",
		price: 1000,
		stock: 10
	},
	{
		name: "Product 2",
		price: 2000,
		stock: 20
	}
]);

const taxes = productos.map (function solution (item){
	return {
		...item,
		 tax: Math.trunc(item.price * .19),
	 }
});

function solution(array) {
	return array.map((item) => {
		return {
			...item,
			item : item.name
		}
		 
	 });
}; 

   

console.log('original', productos);
console.log('copia', taxes ); 

palabras = (['amor', 'sol', 'piedra', 'día']);

const palabra = palabras.filter( item => item.leght <= 4);

console.log('copia', palabra);