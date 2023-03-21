import React , {useState} from 'react'
import RegisterInput from '../components/RegisterInput'

export default function Register() {
    // hooks 
    const [lastName,setLastName]=useState("")
    const [firstName,setFirstName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [city,setCity]=useState("")

    async function signUp(event)
    {
        event.preventDefault()
        let item={lastName,firstName,password,email}
        console.log(item)
        
        // api call 
        

        
        let response = await fetch("https://localhost/users/register",{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-type":'application/json',
                "Accept":'application/json'
            }
        })
        let status = response.status
        response = await response.json()
        console.log(response)
        console.log(status)
        // todo
        if(status===200)
        {
            console.log("user created")
        }

    }



        // register form
        return (
        <div class="bg-[url('/public/vignoble.jpeg')] h-full bg-no-repeat bg-center absolute bg-cover bg-top inset-0 overflow-hidden">
            <div class="max-w-2xl max-h-4xl mx-auto my-10 ">
                <h1 class="text-6xl font-bold text-center my-6 text-color shadow_title ">Inscription</h1>
                <form class="px-4 my-10 max-w-3xl mx-auto space-y-6 " onSubmit={signUp}>
                    <div class="mb-4 mt-4 space-y-6">  
                       <RegisterInput label="lastName" onChange={setLastName}/>
                       <RegisterInput label="firstName" onChange={setFirstName} />
                       <RegisterInput label="password" onChange={setPassword}/>
                       <RegisterInput label="city" onChange={setCity}/>
                       <RegisterInput label="email" onChange={setEmail}/>

                        <div class="flex justify-center" >
                            <button type="submit" class="w-full text-white bg-blue-700 text-l hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                            text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-300 dark:focus:ring-blue-300">
                                Validé
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
        )
}
