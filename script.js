//your JS code here. If required.
const handleForm = (e)=>{
	e.preventDefault()
	const age = document.getElementById("age").value
	const name = document.getElementById("name").value
	const button = document.getElementById("btn");

	if(!age || !name){
		manageAlert("Please enter valid details.")
		return 
	}

	button.disabled = true;

	new Promise((res,err)=>{
		setTimeout(()=>{
			if(age>18) res(`Welcome, ${name}. You can vote.`)
			else err(`Oh sorry ${name}. You aren't old enough.`)
		},4000)
	}).then((mess)=>{
		manageAlert(mess)
	}).catch((err)=>{
		manageAlert(err)
	}).finally(() => {
        button.disabled = false;
    });
	
	document.getElementById("age").value=''
	document.getElementById("name").value=''
}
const manageAlert=(e)=>{
	alert(e)
}
