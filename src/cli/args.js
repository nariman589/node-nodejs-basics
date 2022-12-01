const parseArgs = () => {
	// Write your code here
	const args = process.argv.slice(2);
	const result = args.reduce((acc, item, index) => {
		return item.includes("--")
			? (acc += item.slice(2) + " is ")
			: (acc += item + (index !== args.length - 1 ? ", " : ""));
	}, "");
	console.log(result);
};

parseArgs();
