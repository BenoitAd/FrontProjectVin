export default function Register() {
        // register form
        return (
            <div class="border-4 border-slate-500 max-w-3xl max-h-4xl mx-auto my-10">
                <h1 class="text-4xl font-bold text-center my-8 ">Inscription</h1>
                <form class="px-4 my-10 max-w-3xl mx-auto space-y-6 ">
                    <div class="mb-4 mt-4 space-y-6">  
                        <input
                            type="text"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-solid border-2
                            border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="nomInput"
                            placeholder="Nom"
                        />

                        <input
                            type="text"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid
                            border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="prenomInput"
                            placeholder="Prénom"
                        />

                        <input
                            type="text"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-solid border-2
                            border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="pseudoInput"
                            placeholder="Pseudo"
                        />

                        <input
                            type="text"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-solid border-2
                            border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="villeInput"
                            placeholder="Ville"
                        />

                        <input
                            type="text"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid 
                            border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="mailInput"
                            placeholder="Addresse Email"
                        />

                        <div class="space-y-2">
                        <label for="userBadge" class="text-xl font-bold text-gray-700">Badge</label>
                        <select class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border-2 border-solid 
                        border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " 
                        id="userBadge" placeholder="Votre badge">
                            <option value="Amateur">Amateur</option>
                            <option value="Passioné">Passioné</option>
                            <option value="Professionnelle">Professionnelle</option>
                        </select>
                        </div>

                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                        text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Submit
                        </button>

                    </div>
                </form>
            </div>
        )
}
