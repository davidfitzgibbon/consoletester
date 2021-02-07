let consoletester = (result, expected) => {
	let status = "fail";
	let color = "red";

	if (JSON.stringify(result) == JSON.stringify(expected)) {
		status = "success";
		color = "green";
  }
  
	console.log({ result }, { expected });
	console.log(
		`%c${status}`,
		`background: ${color}; color: white; padding: 0 .5rem;`
  );
  
  return status;
};
export default consoletester