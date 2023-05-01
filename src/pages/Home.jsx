import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import caveHome from '../images/caveHome.jpg';
import { useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [error,setError]=useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (event) => {
    event.preventDefault();
    let item = { email, password };
    console.log(item);
    /*
            // api call 
            let response = await fetch("https://localhost/users/login",{
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
  */
          if(false)
          {
              navigate("/Fmdp")
          } else {
            // error
            setError(true)
          }

  };




    return (
        <>
        <section class="h-screen">
          <div class="h-full text-gray-800">
            <div
              class="flex xl:justify-center lg:justify-between items-center flex-wrap h-full g-6"
            >
              <div
                class="absolute xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 h-full inset-0"
              >
                <img
                  src={caveHome}
                  class="w-full h-full object-cover object-left ml-0"
                  alt="Sample"
                />
              </div>
              <div class="xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 marginMid absolute">
                <form>
                  <div class="flex flex-row items-center justify-center lg:justify-start">
                    <p class="text-lg mb-0 mr-4 font-semibold">Se connecter </p>
                  </div>
                  <div
                    class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t
                    after:border-gray-300 after:mt-0.5"
                  >
                  </div>

                  <div class="mb-6">
                    <input
                      type="text"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                      border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Addresse Email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>

                  <div class="mb-6">
                    <input
                      type="password"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid
                      border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Mot de passe"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>

                  <div class="flex justify-between items-center mb-6">
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600
                        checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"
                      />
                      <label class="form-check-label inline-block italic font-semibold " for="exampleCheck2"
                        >Remember me</label
                      >
                    </div>
                    <h1 onClick={() => navigate("/Fmdp")} class="text-blue-800 italic hover:underline ">Mot de passe oublié ?</h1>
                  </div> 

                  <div class="text-center lg:text-left">
                    <button
                      type="button"
                      class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md
                      hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 
                      active:shadow-lg transition duration-150 ease-in-out"
                      onClick={login}
                    >
                      Login
                    </button>
                    <p class="text-sm font-semibold mt-2 pt-1 mb-0 flex">
                      Pas de compte ?&nbsp;
                      <h1
                        onClick={() => navigate("/inscription")} 
                        class="text-blue-800 italic hover:underline duration-200 ease-in-out"
                        >S'inscrire
                      </h1>
                    </p>
                  </div>
                </form>
                {error && (
                    <div className="error">
                    Erreur lors de la connection a votre compte, veuillez saisir à nouveau vos informations !
                    </div>
                )}
              </div>
            </div>
          </div>
        </section>
        </>
    )
}
