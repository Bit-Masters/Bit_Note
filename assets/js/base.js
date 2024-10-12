var not_elm = document.getElementById("Notas")

var mrc_elm = document.getElementById("Marcadores")

var lix_elm = document.getElementById("Lixeira")

not_elm.classList.add('selected');

function changeClass(elm) {
	console.log('clicked')

	if (elm.target == mrc_elm) {
		document.getElementById('bkg').style.display = 'flex'
		document.getElementById('mrcModal').style.display = 'flex'
	}
	
	var sel = document.getElementsByClassName('selected');
	
	if (sel.length > 0) {
		sel[0].classList.remove('selected');
	}
	
	elm.target.classList.add('selected');
}

not_elm.addEventListener('click', function (e) {changeClass(e)})
mrc_elm.addEventListener('click', function (e) {changeClass(e)})
lix_elm.addEventListener('click', function (e) {changeClass(e)})


function closeModal() {
	console.log('close')
	document.getElementById('bkg').style.display = 'none'
	document.getElementById('mrcModal').style.display = 'none'
	not_elm.classList.add('selected');
	mrc_elm.classList.remove('selected');

	
}



