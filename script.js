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
    {
        document.querySelector('#head').textContent="USER ADDED"
        localStorage.setItem(nameInput.value,emailInput.value)
        nameInput.value=""
        emailInput.value=""
    }
}
