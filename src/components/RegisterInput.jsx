export default function registerInput(props) {
    const { label, onChange } = props;

    return (
    <input
        type="text"
        class="form-control block w-full px-4 py-2 text-2xl font-normal text-white bg-clip-padding border-2 border-solid bg-transparent
        border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
        id="prenomInput"
        placeholder={String(label)}
        onChange={(e)=>onChange(e.target.value)}
    />
    )


}