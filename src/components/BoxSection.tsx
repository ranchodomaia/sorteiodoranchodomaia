const BoxSection = () => {
    return (
        <div className="flex flex-col mt-10 items-center justify-center ">

            <div className="flex gap-8 flex-wrap items-center justify-center mt-5">
                <div className="w-64 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                    <h2 className="text-2xl font-extrabold mb-4 text-red-500">CHEGOU A HORA</h2>
                    <p className="text-gray-700 font-medium">
                        TENHA A OPORTUNIDADE DE VIVER COM A INTERNET E PARTICIPAR DO RANCHO DO MAIA!!
                    </p>
                </div>

                <div className="w-64 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                    <h2 className="text-2xl font-extrabold mb-4 text-red-500">MAIS CHANCES</h2>
                    <p className="text-gray-700 font-medium">
                        QUANTO MAIS VEZES VOCÊ SE INSCREVER, MAIS CHANCES TERÁ DE GANHAR!
                    </p>
                </div>

                <div className="w-64 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                    <h2 className="text-2xl font-extrabold mb-4 text-red-500">FÁCIL E RÁPIDO</h2>
                    <p className="text-gray-700 font-medium">
                        CASO VOCÊ GANHE, SERÁ NOTIFICADO DE IMEDIATO E NÃO IRÁ PAGAR MAIS NADA!
                    </p>
                </div>
            </div>

        </div>
    )
}

export default BoxSection;