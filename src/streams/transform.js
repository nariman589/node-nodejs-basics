import { Transform } from "stream";
const transform = async () => {
	// Write your code here
	process.stdin.on("data", (input) => {
		process.stdout.write(input.reverse().toString().slice(2) + "\n");
	});
};
await transform();
