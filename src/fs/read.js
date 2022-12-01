import fs from "fs";
const read = async () => {
	// Write your code here
	const pathName = "./files/fileToRead.txt";
	if (!fs.existsSync(pathName)) throw new Error("FS operation failed");
	else
		fs.readFile(pathName, "utf-8", (err, fileData) => {
			if (err) throw err;
			console.log(fileData);
		});
};

await read();
