function showHobby(){
	var text = $('input_box').value;
	text = text.replace(/[\s,，、；;]+/g,' ');
	var hobbies =text.split(' ');
	console.log(hobbies);
	


}
$('#input_submit').onclick = function(){
	console.log('爱好是')
}
$('#input_submit').onclick = showHoobby;