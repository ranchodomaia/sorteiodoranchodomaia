const StepSection = () => {

    return (
        <div className="mt-10 font-bold mx-auto p-4">
            <h1 className="text-4xl text-red-600 animate-pulse">PASSO A PASSO:</h1>
            <div className="bg-[#2b2b2b] py-8 rounded-xl shadow-md w-full max-w-md mt-5">
                <ul className="flex flex-col list-disc list-inside text-center max-w-[100%] md:max-w-[90%] mx-auto space-y-2">
                    <li> Preencha o formulário nessa página e prossiga para o pagamento; </li>
                    <li> COTA NO VALOR DE <span className="text-red-600"> R$ 5,00 REAIS</span>!</li>
                    <li> Insira um valor válido (R$5, R$10, R$15...); </li>
                    <li> Após o pagamento, as cotas serão <span className="text-red-600">reservadas</span>; </li>
                    <li> <span className="text-red-600">LEMBRE-SE!</span> Quanto mais cotas você tiver, mais chances de ganhar! </li>
                </ul>
            </div>
        </div>
    )
}

export default StepSection;
