import React, { useState } from "react";
import RegisterInput from "../components/RegisterInput";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import vignoble from "../assets/img/vignoble.png";

export default function Register() {
  // hooks
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState(false);

  // rooter
  const navigate = useNavigate();

  async function signUp(event) {
    event.preventDefault();
    let item = { lastName, firstName, password, email };
    console.log(item);

    // api call
    let response = await fetch("https://localhost/users/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });
    let status = response.status;
    response = await response.json();
    console.log(response);
    console.log(status);
    // todo
    if (status === 201) {
      setIsRegistered(true);
    } else {
      // error
      setError(true);
    }
  }

  if (!isRegistered) {
    // register form
    return (
      <>
        <section class="h-screen">
          <div class="h-full text-gray-800">
            <div class="grid grid-cols-2 w-full h-full g-6">
              <div class="col-span-1 mb-12 md:mb-0 h-full inset-0">
                <img
                  src={vignoble}
                  class="w-full h-full object-cover object-left ml-0"
                  alt="Sample"
                />
              </div>

              <div class="col-span-1 w-full ">
                <div>
                  <Navbar />
                </div>
                <div class="mt-24 my-10 flex items-center justify-center flex-col">
                  <h1 class="text-6xl font-bold text-center  text-color ">
                    Inscription
                  </h1>
                  <form
                    class="px-4 my-6 max-w-3xl mx-auto space-y-6 "
                    onSubmit={signUp}
                  >
                    <div class="mb-4 mt-4 space-y-6">
                      <RegisterInput label="Nom" onChange={setLastName} />
                      <RegisterInput label="Prenom" onChange={setFirstName} />
                      <RegisterInput
                        label="Mot de Passe"
                        onChange={setPassword}
                      />
                      <RegisterInput label="Ville" onChange={setCity} />
                      <RegisterInput label="Email" onChange={setEmail} />

                      <div class="flex justify-center">
                        <button
                          type="submit"
                          class="w-full text-white bg-blue-700 text-l hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
                                                    text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-300 dark:focus:ring-blue-300"
                        >
                          Validé
                        </button>
                      </div>
                    </div>
                  </form>
                  {error && (
                    <div className="error">
                      Erreur lors de la création du compte, veuillez saisir à
                      nouveau vos informations!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    // registered
    return (
      <div className="bg-[url('assets/img/vignoble.png')] h-full bg-no-repeat bg-top absolute bg-cover inset-0 overflow-hidden">
        <div class="text-center mt-16">
          <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {" "}
            Votre compte a été crée !
          </h1>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/")}
          >
            Retour a l'acceuil{" "}
          </button>
        </div>
      </div>
    );
  }
}
