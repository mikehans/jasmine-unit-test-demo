describe('my first test', function () {
	var config;
	var fakeDom = {};
	const fakeDomUrl = 'http://dom.testme';

	beforeEach(function () {
		config = {
			initConfig: {
				section: 'section1',
				site: 'testme'
			},
			myvalue: ['value1', 'value2'],
			altUrl: ''
		};

		// These examples work where we can fully control the dependencies
		// Example 1: a manual mock, creating a fake method then spying on it - unnecessary
		// fakeDom = {
		// 	getUrl: function(){}
		// }

		// spyOn(fakeDom, 'getUrl').and.returnValue(fakeDomUrl);

		// Example 2: mock on a non-existent object. Good for a single method - required me to init fakeDom as an empty object.
		// fakeDom.getUrl = jasmine.createSpy('fakeDom spy');
		// fakeDom.getUrl.and.returnValue(fakeDomUrl);

		// Example 3: in this instance, the object name "dom" doesn't matter, only the method name. This is overkill in this scenario.
		//    This is useful where we have multiple methods to mock (could alternatively use jasmine.createSpy several times)
		fakeDom = jasmine.createSpyObj('dom', ['getUrl']);
		fakeDom.getUrl.and.returnValue(fakeDomUrl);
	});

	afterEach(function() {
		config.altUrl='';
	});
		

	it('should get page URL when config.altUrl is empty', function () {
		expect(mh.domfree.getUrl(config, fakeDom)).toEqual("http://dom.testme");
			
		expect(fakeDom.getUrl).toHaveBeenCalled();
	});

	it('should get provided URL when config.altUrl is provided', function () {
		config.altUrl="http://altUrl.testme";

		expect(mh.domfree.getUrl(config, fakeDom)).toEqual("http://altUrl.testme");
		expect(fakeDom.getUrl).not.toHaveBeenCalled();
	});

	it('should get window.location when config.altUrl is empty', function () {
		spyOn(mh.dom, 'getUrl').and.returnValue(fakeDomUrl);

		expect(mh.api.getUrl()).toEqual("http://dom.testme");
		expect(mh.dom.getUrl).toHaveBeenCalled();
	});

	it('should get provided URL when config.altUrl is provided', function () {
		mh.config.altUrl="http://altUrl.testme";

		spyOn(mh.dom, 'getUrl');

		expect(mh.api.getUrl()).toEqual("http://altUrl.testme");
		expect(mh.dom.getUrl).not.toHaveBeenCalled();
	});
});