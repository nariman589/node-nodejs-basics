import fs from "fs";
const write = async () => {
	// Write your code here
	const pathName = "./files/fileToWrite.txt";
	const write = fs.createWriteStream(pathName, { flags: "w" });
	// write.write(process.stdin.write());
	process.stdin.pipe(write);
};

await write();
