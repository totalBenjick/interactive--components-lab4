/* 02 - FORM VALIDATION :: YOUR CODE BELOW */
//QUEREMOS HACER VARIAS COSAS
// HACER QUE DONDE DICE USERNAME NO PUEDE SER BLANCO, CAMBIARLO A SUCCESS DESPUES DE APRETAR SUBMIT
// EN PASSWORD LA CONTRA > 8 CARACTERES Y DEE SER IGUAL AL PRIMER BOX
// EL TAXT ID NUMBER DEBE DECIR  "TAX ID MUST BE NUMBER AND ONLY 10 DIGITS"
//username
//userpassword
//confirmpassword
//taxid "Must provide a TaxID number" "TaxID is only numbers and must be 10 digits"
//account "Must select account type"
//termsofservice "Must approve terms of service"
//parte de TaxId verificar que tenga 10 digitos


var registerForm = document.forms.formaLab;


registerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var parrafoAbajoUsername = document.querySelector(".validation--username")
  var theForm = e.target.elements.username.value
	  if (theForm.length>0) {
		parrafoAbajoUsername.innerHTML= "Success"
	  } else {
	  	parrafoAbajoUsername.innerHTML= "Username cannot be blank!"
	  }
 var parrafoAbajoUserpassword = document.querySelector(".validation--user-password")
 var theForm2 = e.target.elements.userpassword.value
	  if (theForm2.length>8) {
		parrafoAbajoUserpassword.innerHTML= "Success"
	  } else {
	  	parrafoAbajoUserpassword.innerHTML= "Password must have a minimum of 8 characteres"
	  }

 var parrafoAbajoConfirm = document.querySelector(".validation--confirm-password")
 var theForm3 = e.target.elements.confirmpassword.value
	  if (theForm3===theForm2 && theForm3>0) {
		parrafoAbajoConfirm.innerHTML= "Success"
	  } else if (theForm3==="") {
	  	parrafoAbajoConfirm.innerHTML="Password must match"
	  }

	  else {
	  	parrafoAbajoConfirm.innerHTML= "Password must match"
	  }
 

 var parrafoAbajoTaxId = document.querySelector(".validation--tax-id")
 var theFormTax = e.target.elements.taxid.value
 var evaluarFormTax= Number(theFormTax)
 
	if (typeof evaluarFormTax==="number" && theFormTax.length===10) {
		parrafoAbajoTaxId.innerHTML= "Success"
	  }
	  else if(theFormTax===""){
	  	parrafoAbajoTaxId.innerHTML="Must provide a TaxID number"
	  } else if ((typeof theFormTax!== "number")  && theFormTax.length!==10 ) {
	  	parrafoAbajoTaxId.innerHTML= "TaxID is only numbers and must be 10 digits"
	  }
 


 var parrafoAbajoAccount = document.querySelector(".validation--account") 
 var account = e.target.elements.account.value
	if (account==="") {
		parrafoAbajoAccount.innerHTML="Must select account type"
	} else if (account!=="") {
		parrafoAbajoAccount.innerHTML="Success"
	}
 var parrafoAbajoChecker = document.querySelector(".validation--terms-of-service")

 var boxCheck = e.target.elements.termsofservice.checked

 	if (boxCheck===false) {
 		parrafoAbajoChecker.innerHTML= "Must approve terms of service"
 	} else if (boxCheck===true) {
 		parrafoAbajoChecker.innerHTML= "Success"
 	}
var parrafoAbajoSubmit = document.querySelector(".validation--entire-form")
console.log(parrafoAbajoUserpassword.innerHTML)
	if( parrafoAbajoChecker.innerHTML=== "Success" && parrafoAbajoAccount.innerHTML==="Success" && parrafoAbajoTaxId.innerHTML==="Success" && parrafoAbajoTaxId.innerHTML=== "Success" && parrafoAbajoConfirm.innerHTML=== "Success" && parrafoAbajoUserpassword.innerHTML=== "Success"	&& parrafoAbajoUsername.innerHTML=== "Success"){
		parrafoAbajoSubmit.innerHTML="Success"
	}


})


