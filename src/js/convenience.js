var mh = (function(module){
	function getUrl(){
		return module.domfree.getUrl(module.config, module.dom);
	}

	var extensions = {
		api:{
			getUrl
		}
	};
	return Object.assign(module, extensions);
})(mh || {});