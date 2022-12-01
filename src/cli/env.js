const parseEnv = () => {
	// Write your code here
	const keys = Object.keys(process.env)
		.filter((key) => key.startsWith("RSS_"))
		.reverse();
	console.log(keys.map((key) => key + "=" + process.env[key]).join("; "));
};

parseEnv();
