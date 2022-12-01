import zlib from "zlib";
import fs from "fs";
const compress = async () => {
	// Write your code here
	const gzip = zlib.createGzip();
	const read = fs.createReadStream("./files/fileToCompress.txt");
	const write = fs.createWriteStream("./files/archive.gz");
	read.pipe(gzip).pipe(write);
};

await compress();
