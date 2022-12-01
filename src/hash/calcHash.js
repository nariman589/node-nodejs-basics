import fs from "fs";
import crypto from "crypto";
const calculateHash = async () => {
	// Write your code here
	const pathName = "./files/fileToCalculateHashFor.txt";
	if (!fs.existsSync(pathName)) throw new Error("FS operation failed");
	else
		fs.readFile(pathName, "utf-8", (err, data) => {
			if (err) throw err;
			console.log(crypto.createHash("md5").update(data).digest("hex"));
		});
};

await calculateHash();
