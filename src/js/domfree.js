var mh = (function (module) {
	function getUrl(config, dom) {
		var resultUrl;
		if ((config.altUrl) && config.altUrl !== '') {
			resultUrl = config.altUrl;
		} else {
			resultUrl = dom.getUrl();
		}
		return resultUrl;
	}

	function getUrlPath(dom) {
		return dom.getUrlPath();
	}

	module.domfree = {
		getUrl,
		getUrlPath
	};

	return module;
})(mh || {});