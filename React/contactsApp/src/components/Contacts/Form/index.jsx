import React , {useState , useEffect} from 'react'

const initialValues = {fullName:"",phoneNumber:""}

function Form({addContacts , contacts}) {
    const [form , setForm] = useState(initialValues);


    useEffect(()=>{
        setForm(initialValues)
    },[contacts])

const onChangeInput = (e) => {
    setForm ({...form , [e.target.name]: e.target.value })

}

const onSubmit= (e) => {
    e.preventDefault()
    if(form.fullName === "" || form.phoneNumber === ""){
        return false
    }

    addContacts([...contacts,form])


  
    console.log(form)

}
    return (
        <div>
            <form onSubmit={onSubmit}>
            <div>
            <input name="fullName" placeholder="Full Name" value ={form.fullName}  onChange = {onChangeInput}/>

            </div>
            <div>
            <input name="phoneNumber" placeholder="Phone Number" value={form.phoneNumber} onChange = {onChangeInput}/>

            </div>
            <div className="btn">
            <button type="submit" >Add</button>

            </div>
            </form>
        </div>
    )
}

export default Form
