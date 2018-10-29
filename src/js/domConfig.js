var mh = function (module) {
	module.config = {
		initConfig: {
			section: 'section1',
			site: 'testme'
		},
		myvalue: ['value1', 'value2'],
		altUrl: ''
	};
	return module; 
}(mh || {});
