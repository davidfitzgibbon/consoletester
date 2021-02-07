(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.consoletester = factory());
}(this, (function () { 'use strict';

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

	return consoletester;

})));
