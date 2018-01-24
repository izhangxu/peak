var UglifyJS = require("uglify-js");
try {
	var result = UglifyJS.minify("var b = function -() {};", {fromString: true});
} catch(e) {
	console.log(223)
}
