//your JS code here. If required.
const handleForm = (e)=>{
	e.preventDefault()
	const age = document.getElementById("age").value
	const name = document.getElementById("name").value

	if(!age || !name){
		manageAlert("Please enter valid details.")
		return false
	}
	if(age>18) manageAlert(`Welcome, ${name}. You can vote.`)
	else manageAlert("Oh sorry . You aren't old enough.")
	document.getElementById("age").value=''
	document.getElementById("name").value=''
}
const manageAlert=(e)=>{
	alert(e)
}
