const myForm=document.querySelector('#my-form')
const nameInput=document.querySelector('#name')
const emailInput=document.querySelector('#email')

myForm.addEventListener('submit',onSubmit)
function onSubmit(e)
{
    e.preventDefault()
    if(nameInput.value=="" || emailInput.value=="")
    {
        alert('Please Enter Details!!!')
    }
    else
    {   let myObj={
        name:nameInput.value,
        email:emailInput.value
        }
        let myObj_serialised=JSON.stringify(myObj)
        localStorage.setItem('obj',myObj_serialised)
        document.querySelector('#head').textContent="USER ADDED"
        
        nameInput.value=""
        emailInput.value=""
    }
}
