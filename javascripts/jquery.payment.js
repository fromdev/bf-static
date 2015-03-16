/*
* jQuery Word Sequencer Plugin
* Author: Sachin Joshi sachin@fromdev.com
* Copyright (c) 2013 www.FromDev.com
* MIT Licensed: http://www.opensource.org/licenses/mit-license.php
*/ 
(function($) {
	$.fn.payment = function(userSettings) {
		var settings = {
			currentElement : this,
			encryptedElement : "#encrypted"
		};
		var calculatedSettings = {};
		$.extend(settings, calculatedSettings);
		$.extend(settings, userSettings);
		register(settings);
		apply(settings);
	}

	function exists(elm) {
		if (typeof elm == null)
			return false;
		if (typeof elm != "object")
			elm = $(elm);
		return elm.length ? true : false;
	}
	function register(options) {
		options.currentElement.click(function() { 
			$(encryptedElement).val(enc);
			options.currentElement.form.submit();  
		});
	};

	function apply(options) {}

})(jQuery);