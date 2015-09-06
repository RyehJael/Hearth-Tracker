var hero = []

function buildHero() {

}

var generateForm = function(data){

	var form = document.createElement('div')
	form.className = 'form'
	form.id = 'hearth-form'
	for (var key in data){
		var group = document.createElement('div')
		group.className = 'form-group';
		form.appendChild(group)

		var label = document.createElement('label')
		label.textContent = key
		group.appendChild(label)

		var select = document.createElement('select')
		select.className = 'form-control'
		select.id = key
		group.appendChild(select)

		for (var i in data[key]){
			var option = document.createElement('option')
			option.text = data[key][i]
			select.appendChild(option)
		}

		var button = document.createElement('button')
		button.textContent = 'Save'
		button.className = 'btn btn-primary col-md-12'
		button.addEventListener('click',saveForm)
	}
	form.appendChild(button)
	return form
}

var saveForm = function(){
	var obj = {}
	$('#hearth-form select[id]').each(function(){
		obj[this.id] = this.value
	})
	obj.time = Date.now()

	$.post('/save',obj,function(){
		alert('Saved.')
		console.log(obj)
	})

}



