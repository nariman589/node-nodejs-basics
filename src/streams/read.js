import fs from "fs";
const read = async () => {
	// Write your code here
	const pathName = "./files/fileToRead.txt";
	fs.readFile(pathName, "utf-8", (err, data) => {
		if (err) throw err;
		process.stdout.write(data);
	});
};

await read();
