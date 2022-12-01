import * as fs from "fs";
const rename = async () => {
	// Write your code here
	const fileName = "./files/wrongFilename.txt";
	const renameFileName = "./files/properFilename.md";
	if (!fs.existsSync(fileName) || fs.existsSync(renameFileName))
		throw new Error("FS operation failed");
	else
		fs.rename(fileName, renameFileName, (err) => {
			if (err) throw err;
			console.log("success");
		});
};

await rename();
