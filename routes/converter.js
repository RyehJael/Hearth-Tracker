/* global __dirname */
var express = require('express');
var router = express.Router();
var babel = require('babel-core')

router.get('/',function(res,req){
	var filename = __dirname + req.url
	console.log('converting javascript file',':',filename)
	babel.transformFile(filename,function(err,result){
		res.send(result.code)
	})
})



module.exports = router;