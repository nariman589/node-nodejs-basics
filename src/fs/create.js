import * as fs from "fs";
const create = async () => {
	// Write your code here
	const pathName = "./files/fresh.txt";
	const fileContent = "I am fresh and young";
	if (fs.existsSync(pathName)) throw new Error("FS operation failed");
	else
		fs.appendFile(pathName, fileContent, function (err) {
			if (err) throw err;
			console.log("File is created successfully.");
		});
};

await create();
