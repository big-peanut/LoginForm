const myForm=document.querySelector('#my-form')
const nameInput=document.querySelector('#name')
const emailInput=document.querySelector('#email')
const phoneInput=document.querySelector('#phone')
const userList=document.querySelector('#users')

myForm.addEventListener('submit',onSubmit)
function onSubmit(e)
{
    e.preventDefault()
    if(nameInput.value=="" || emailInput.value=="" || phoneInput.value=="")
    {
        alert('Please Enter Details!!!')
    }
    else
    {   let myObj={
        name:nameInput.value,
        email:emailInput.value,
        phone:phoneInput.value
        }
        let myObj_serialised=JSON.stringify(myObj)
        localStorage.setItem(nameInput.value,myObj_serialised)
        document.querySelector('#head').textContent="USER ADDED"
        const li=document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${phoneInput.value}`))
        userList.appendChild(li)
        
        nameInput.value=""
        emailInput.value=""
    }
}
