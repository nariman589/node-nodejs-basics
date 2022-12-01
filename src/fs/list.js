import fs from "fs";
const list = async () => {
	// Write your code here
	const pathName = "./files";
	if (!fs.existsSync(pathName)) throw new Error("FS operation failed");
	else
		fs.readdir(pathName, (err, file) => {
			if (err) throw err;
			console.log(file);
		});
};

await list();
