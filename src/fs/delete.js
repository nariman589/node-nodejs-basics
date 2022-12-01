import * as fs from "fs";
const remove = async () => {
	// Write your code here
	const fileName = "./files/fileToRemove.txt";
	if (!fs.existsSync(fileName)) throw new Error("FS operation failed");
	fs.unlink(fileName, (err) => {
		if (err) throw err;
		console.log("succes");
	});
};

await remove();
