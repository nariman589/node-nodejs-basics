import * as fs from "fs";
const copy = async () => {
	// Write your code here
	const pathName = "./files";
	const copyPathName = "./files_copy";
	if (!fs.existsSync(pathName) || fs.existsSync(copyPathName))
		throw new Error("FS operation failed");
	else
		fs.cp(pathName, copyPathName, { recursive: true }, (error) => {
			if (error) throw error;
			console.log("successfull.");
		});
};

copy();
