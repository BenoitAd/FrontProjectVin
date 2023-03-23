import Navbar from "../components/Navbar";

export default function ForgottenPassword() {
  return (
    <section className="h-screen">
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
                <h3 class="pt-4 mb-2 text-4xl font-bold">Mot de passe oublié ?</h3>
                <p class="mb-4 text-xl	 text-gray-700 ">
                  Ca arrive pas de panique. Entrer l'adresse Email de votre
                  compte et nous vous enverrons un lien pour modifier votre mot
                  de passe !
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
                  />
                </div>
                <div class="mb-6 text-center">
                  <button
                    class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Changer de mot de passe
                  </button>
                </div>
                <hr class="mb-6 border-t" />
                <div class="text-center">
                  <a
                    class="inline-block text-xl text-blue-500 align-baseline hover:text-blue-800"
                    href="./register.html"
                  >
                    Creer un compte !
                  </a>
                </div>
                <div class="text-center">
                  <a
                    class="inline-block text-xl text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
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
}
