import React , {useState} from 'react'
import RegisterInput from '../components/RegisterInput'

export default function Register() {
    // hooks 
    const [name,setName]=useState("")
    const [nickName,setNickName]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [pseudo,setPseudo]=useState("")
    const [city,setCity]=useState("")
    const [badge,setBadge]=useState("")

    async function signUp(event)
    {
        event.preventDefault()
        let item={name,nickName,password,email,pseudo,city,badge}
        console.log(item)
        
        // api call 
        /*
        let response = await fetch("http://example.com/api/register",{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                "Content-type":'application/json',
                "Accept":'application/json'
            }
        })
        response = await response.json()
        // put the connection token in local storage
        if (response.token) {
            localStorage.setItem("token",response.token)
        }
        */
        //todo : stocker dans un store

    }



        // register form
        return (
        <div class="bg-[url('/public/vignoble.jpeg')] h-full bg-no-repeat bg-center absolute bg-cover bg-top inset-0 overflow-hidden">
            <div class="max-w-2xl max-h-4xl mx-auto my-10 ">
                <h1 class="text-6xl font-bold text-center my-6 text-color shadow_title ">Inscription</h1>
                <form class="px-4 my-10 max-w-3xl mx-auto space-y-6 " onSubmit={signUp}>
                    <div class="mb-4 mt-4 space-y-6">  
                       <RegisterInput label="name" onChange={setName}/>
                       <RegisterInput label="nickName" onChange={setNickName} />
                       <RegisterInput label="password" onChange={setPassword}/>
                       <RegisterInput label="pseudo" onChange={setPseudo}/>
                       <RegisterInput label="city" onChange={setCity}/>
                       <RegisterInput label="email" onChange={setEmail}/>

                        <div class="space-y-2">
                        <select class="form-control block w-full px-4 py-1 text-2xl font-normal text-white bg-transparent bg-clip-padding border-2 border-solid 
                        border-gray-300 rounded transition ease-in-out m-0 focus:text-dark focus:bg-transparent focus:border-blue-600 focus:outline-none " 
                        id="userBadge" placeholder="Votre badge"
                        onChange={(e)=>setBadge(e.target.value)}
                        value={badge}>
                            <option value="Amateur">Amateur</option>
                            <option value="Passioné">Passioné</option>
                            <option value="Professionnelle">Professionnelle</option>
                        </select>
                        </div>
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
