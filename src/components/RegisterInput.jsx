export default function registerInput(props) {
    const { label, onChange, placeholder = "" } = props;

    return (
    <label className="text-2xl font-normal text-color">
    {label}
    <input
        type="text"
        class="form-control block w-full px-4 py-2 text-2xl font-normal text-black bg-clip-padding border-2 border-solid bg-transparent
        border-gray-300 rounded transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-blue-600 focus:outline-none"
        id={String(label)}
        placeholder={String(placeholder)}
        onChange={(e)=>onChange(e.target.value)}
    />
    </label>
    )


}