

$.getJSON('data/template.json',function(json){
	var form = generateForm(json)
	$('#form-area').append(form)
})