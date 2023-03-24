import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgottenPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  async function changementMdp() {
    // api call
    /*
        let response = await fetch("https://localhost/users/forgottenPassword", {
          method: "POST",
          body: JSON.stringify(email),
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        });
        let status = response.status;
        response = await response.json();
        */
    let status;
    if (email === "oui") {
      status = 201;
    } else {
      status = 404;
    }

    if (status === 201) {
      setError(false);
      setIsEmailSent(true);
    } else {
      // error
      setError(true);
    }
  }

  function onChange(emailValue) {
    setEmail(emailValue);
  }

  if (!isEmailSent) {
    return (
      <section className="h-screen max-h">
        <div class="h-full text-gray-800">
          <div class="grid grid-cols-2 w-full h-full g-6">
            <div class="col-span-1 mb-12 md:mb-0 h-full inset-0">
              <img
                src="https://cdn.aveine.paris/blog/wp-content/uploads/2021/09/27102902/shutterstock_619382510.jpg"
                class="w-full h-full object-cover object-left ml-0"
                alt="Sample"
              />
            </div>
            <div class="col-span-1 w-full ">
              <div>
                <Navbar />
              </div>
              <div class="mt-24 mx-auto my-10 flex items-center w-1/2 justify-center flex-col">
                <div class="px-8 mb-4 text-center">
                  {error && (
                    <div className="error" onClick={() => setError(false)}>
                      L'adresse Email renseigné n'éxiste pas dans nos données,
                      veillez réessayer.
                    </div>
                  )}
                  <h3 class="pt-4 mb-2 text-4xl font-bold">
                    Mot de passe oublié ?
                  </h3>
                  <p class="mb-4 text-xl	 text-gray-700 ">
                    Ca arrive pas de panique. Entrer l'adresse Email de votre
                    compte et nous vous enverrons un lien pour modifier votre
                    mot de passe !
                  </p>
                </div>
                <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div class="mb-4">
                    <label
                      class="block mb-2 text-xl font-bold text-gray-700"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      class="w-full px-3 py-2 text-xl leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Entrer votre Addresse Email ..."
                      onChange={(e) => onChange(e.target.value)}
                    />
                  </div>
                  <div class="mb-6 text-center">
                    <button
                      class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={changementMdp}
                    >
                      Changer de mot de passe
                    </button>
                  </div>
                  <hr class="mb-6 border-t" />
                  <div class="text-center">
                    <a
                      class="inline-block text-xl text-blue-500 align-baseline hover:text-blue-800"
                      onClick={() => navigate("/inscription")}
                    >
                      Creer un compte !
                    </a>
                  </div>
                  <div class="text-center">
                    <a
                      class="inline-block text-xl text-blue-500 align-baseline hover:text-blue-800"
                      onClick={() => navigate("/")}
                    >
                      Vous avez deja un compte ? Connectez-vous!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    // mail sent
    return (
      <div className="h-full bg-no-repeat bg-top absolute bg-cover inset-0 overflow-hidden">
        <div class="text-center m-16 border-4">
          <h1 className="my-6 font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            {" "}
            L'email de confirmation a bien été envoyé regarder votre boite mail,
            cela peux prendre plusieurs minutes.
          </h1>
          <button
            className="bg-blue-500 mb-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/")}
          >
            Retour a l'acceuil{" "}
          </button>
        </div>
      </div>
    );
  }
}
