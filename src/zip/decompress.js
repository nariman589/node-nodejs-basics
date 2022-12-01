import zlib from "zlib";
import fs from "fs";
const decompress = async () => {
  // Write your code here
  const unzip = zlib.createGunzip();
  const read = fs.createReadStream("./files/archive.gz");
  const write = fs.createWriteStream("./files/fileToCompress.txt");
  read.pipe(unzip).pipe(write);
};

await decompress();
