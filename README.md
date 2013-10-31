# Tesseract for Node.js

A simple wrapper for the Tesseract OCR package for Node.js

[![Build Status](https://travis-ci.org/joscha/nodecr.png)](https://travis-ci.org/joscha/nodecr)
[![NPM version](https://badge.fury.io/js/nodecr.png)](http://badge.fury.io/js/nodecr)

## Test

		./bin/test

## Demo
nodecr has been used in a NodeCopter demo, translating text into real-time flight commands.
Here's a little video created by stitching together the photos taken by the onboard camera (each image was passed through nodecr):
http://youtu.be/aGo6oPC92QE.

Source code available here: https://github.com/photomoose/OCRDrone

## Installation
`npm install nodecr`

## Versions
* **0.0.5**: Add possibility to override logger (quiet nodecr, see example below)
* **0.0.4**: Changed name to nodecr and published node module (formerly node-tesseract)
* **0.0.3**: Added support for custom preprocessors, OTB Preprocessor using ImageMagick 'convert'
* **0.0.2**: Refactored to support tesseract 3.01, added language parameter, config parameter, documentation
* **0.0.1**: Initial version from Desmond Morris

## Usage

```JavaScript
var nodecr = require('nodecr');

// Recognise text of any language in any format
nodecr.process(__dirname + '/path/to/image.jpg',function(err, text) {
	if(err) {
		console.error(err);
	} else {
		console.log(text);
	}
});

// Recognise German text in a single uniform block of text
nodecr.process(__dirname + '/path/to/image.jpg',function(err, text) {
	if(err) {
		console.error(err);
	} else {
		console.log(text);
	}
}, 'deu', 6);

// Recognise text of any language in any format but preprocess the image
// with ImageMagick 'convert' (This requires ImageMagick to be installed)

// uncomment this to quiet nodecr
//nodecr.log = function() {};

// You can write and use your own preprocessors easily, just have a look at src/nodecr.coffee
nodecr.process(__dirname + '/path/to/image.jpg',function(err, text) {
	if(err) {
		console.error(err);
	} else {
		console.log(text);
	}
}, null, null, null, nodecr.preprocessors.convert);
```

## License
MIT
