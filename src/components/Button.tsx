import useScrollToForm from "../hooks/ScrollToForm";

const DonateButton = () => {
    const scrollToForm = useScrollToForm();

    return (
        <div>
            <button onClick={scrollToForm} className="bg-red-600 text-white animate-pulse hover:bg-red-800 font-bold text-[18px] rounded-md px-20 py-5 max-w-[95%] md:max-w-[50%] mx-auto mt-10">
                EU QUERO PARTICIPAR!
            </button>
        </div>
    )
}

export default DonateButton;