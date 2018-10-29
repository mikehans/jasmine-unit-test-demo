var mh = (function(module){
	function getUrl() {
		return window.location;
	}

	function getUrlPath() {
		return window.location.pathname;
	}

	module.dom = {
		getUrl,
		getUrlPath
	};
	return module;

})(mh || {});