const level = require('level');
// const db = level('./db');

async function createDb(path){ 
	return await level(path); // Automatically opens the connection, aka invokes db.open(), with the database
}

async function putInDb(db, key, value){
	let result;
	try {
		result = await db.put(key, value);
	} catch (error) {
		console.error(error);
	}
	// console.log('putResult:', result);
	return result;
}

async function getFromDb(db, key){
	let value;
	try {
		value = await db.get(key);
	} catch (error) {
		console.error(error);
	}
	// console.log('getResult:', value);
	return value;
}

async function delFromDb(db, key){
	let result;
	try {
		result = await db.del(key);
	} catch (error) {
		console.error(error);
	}
	// console.log('delResult:', result);
	return result;
}

async function closeDb(db){
	try {
		await db.close();
	} catch (error) {
		console.error(error);
	}
}

/* Immediately Invoked Function Expression to test usage
(async function main(){
	let db = await createDb('./db');
	await putInDb(db, 'name', 'sindelio');
	await getFromDb(db, 'name');
	await delFromDb(db, 'name');
	await getFromDb(db, 'name');
	await closeDb(db);
})();
*/

module.exports = {
	createDb,
	putInDb,
	getFromDb,
	delFromDb,
	closeDb
}