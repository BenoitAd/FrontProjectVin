export default function Register() {
        // register form
        return (
        <div class="bg-[url('/public/vignoble.jpeg')] h-full bg-no-repeat bg-center absolute bg-cover inset-0">
            <div class="max-w-2xl max-h-4xl mx-auto my-10 ">
                <h1 class="text-6xl font-bold text-center my-6 text-color shadow_title ">Inscription</h1>
                <form class="px-4 my-10 max-w-3xl mx-auto space-y-6 ">
                    <div class="mb-4 mt-4 space-y-6">  
                        <input
                            type="text"
                            class="form-control block w-full px-4 py-2 text-2xl font-normal text-white bg-clip-padding border-solid border-2
                            border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none bg-transparent"
                            id="nomInput"
                            placeholder="Nom"
                        />

                        <input
                            type="text"
                            class="form-control block w-full px-4 py-2 text-2xl font-normal text-white bg-clip-padding border-2 border-solid bg-transparent
                            border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="prenomInput"
                            placeholder="Prénom"
                        />

                        <input
                            type="text"
                            class="form-control block w-full px-4 py-2 text-2xl font-normal text-white bg-clip-padding border-solid border-2 bg-transparent
                            border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="pseudoInput"
                            placeholder="Pseudo"
                        />

                        <input
                            type="text"
                            class="form-control block w-full px-4 py-2 text-2xl font-normal text-white bg-clip-padding border-solid border-2 bg-transparent
                            border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="villeInput"
                            placeholder="Ville"
                        />

                        <input
                            type="text"
                            class="form-control block w-full px-4 py-2 text-2xl font-normal text-white bg-clip-padding border-2 border-solid bg-transparent
                            border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="mailInput"
                            placeholder="Addresse Email"
                        />

                        <div class="space-y-2">
                        <select class="form-control block w-full px-4 py-2 text-2xl font-normal text-white bg-transparent bg-clip-padding border-2 border-solid 
                        border-gray-300 rounded transition ease-in-out m-0 focus:text-dark focus:bg-transparent focus:border-blue-600 focus:outline-none " 
                        id="userBadge" placeholder="Votre badge">
                            <option value="Amateur">Amateur</option>
                            <option value="Passioné">Passioné</option>
                            <option value="Professionnelle">Professionnelle</option>
                        </select>
                        </div>
                        <div class="flex justify-center" >
                            <button type="submit" class="w-full text-white bg-blue-700 text-l hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                            text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-300 dark:focus:ring-blue-300">
                                Validé
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
        )
}
