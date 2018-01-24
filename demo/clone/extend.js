function extend() {
	var isType = function(name) {
		return Object.prototype.toString
			.call(name)
			.slice(8, -1)
			.toLowerCase();
	};
	var i = 1;
	var target = arguments[0] || {};
	var len = arguments.length;
	var deep = false;
	var options, src, copy;
	if (isType(target) === "boolean") {
		deep = target;
		target = arguments[1] || {};
		i++;
	}
	if (isType(target) !== "object" && isType(target) !== "function") {
		target = {};
	}
	for (; i < len; i++) {
		options = arguments[i];
		if (options !== null) {
			for (var name in options) {
				src = target[key];
				copy = options[key];

				if (target == copy) {
					continue;
				}
				if (deep && copy && (isType(copy) == "object" || isType(copy) == "array")) {
					target[name] = extend(
						deep,
						src || (isType(copy)=='array' ? [] : {}),
						copy
					);
				} else if (copy !== undefined) {
					target[name] = copy;
				}
			}
		}
	}
	return target;
}
