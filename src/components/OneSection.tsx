import useScrollToForm from "../hooks/ScrollToForm";

const OneSection = () => {
    const scrollToForm = useScrollToForm();
    

    return (
        <div>
            <div className="flex gap-2 items-center justify-center">
                <h1 className="font-bold text-3xl animate-pulse text-red-600">AGORA É SUA CHANCE!</h1>
            </div>
            <div className="flex flex-col gap-2  max-w-[90%] md:max-w-[50%] mx-auto mt-5 font-bold">
                <p className="text-xl md:text-2xl ">A SUA CHANCE DE IR PARA O <span className="text-red-600">RANCHO DO MAIA</span> CHEGOU! PARTICIPE DO SORTEIO E CORRA ATRÁS DOS SEUS <span className="text-red-600">SONHOS</span>.</p>
                <div className="bg-red-600 hover:bg-red-800 animate-pulse rounded-md text-[10px] md:text-[12px] md:max-w-[80%] mx-auto px-15 py-1 gap-2" onClick={scrollToForm}>
                    <p>NÃO DEIXE ESSA OPORTUNIDADE PASSAR</p>
                </div>
            </div>
        </div>
    )
}

export default OneSection;