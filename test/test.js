var assert = require("assert");
var nodecr = require('../lib/nodecr');

// uncomment this to quiet nodecr
//nodecr.log = function() {};

nodecr.process(__dirname + '/image.png',function(err, text) {
	if(err) {
		console.error(err);
	} else {
		console.log(text);
    var expected = "Tesseract for Node.js\n\nA simple wrapper for the Tesseract OCR package for Node.js\n\n";
    assert.equal(text, expected);

	}
}, null, null, null, nodecr.preprocessors.convert);