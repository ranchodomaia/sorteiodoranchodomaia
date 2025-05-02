import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from "./Payment";
import ScrollToPayment from "../hooks/ScrollToPayment";
import useScrollToRancho from "../hooks/ScrollToRancho";
// Importando a função ScrollToPayment

// Definindo o tipo para os dados do formulário
interface FormData {
    nome: string;
    instagram: string;
    numero: string;
    endereco: string;
}

const FormSection = () => {
    const LoadingSpinner = () => (
        <div id="rancho" className="mt-5 flex flex-col items-center justify-center text-center">
            <h1 className="text-[15px] md:text-2xl font-bold text-red-600 typing-animation animate-pulse">Carregando sua passagema para o Rancho do Maia...</h1>
        </div>
    );

    const [loading, setLoading] = useState(false); // Controla se o spinner está visível
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        instagram: '',
        numero: '',
        endereco: '',
    });
    const [showPayment, setShowPayment] = useState(false); // Controla se o componente Payment deve ser exibido
    const scrollToPayment = ScrollToPayment(); // Usando o hook para rolar até o componente de pagamento
    const scrollToRancho = useScrollToRancho();

    // Função de mudança de valor nos inputs
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Função para tratar o envio do formulário
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Dados enviados:', formData);

        // Simula o carregamento
        setLoading(true);
        scrollToRancho();

        // Exibe uma notificação
        toast.success('🎉 Parabéns! Dados recebidos com sucesso. Prossiga para o pagamento.', {
            position: 'top-center',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'dark',
        });

        // Limpa os dados do formulário
        setFormData({
            nome: '',
            instagram: '',
            numero: '',
            endereco: '',
        });

        // Simula o tempo de carregamento (2 segundos)
        setTimeout(() => {
            setLoading(false); // Finaliza o carregamento
            setShowPayment(true); // Exibe o componente de pagamento
        }, 5000);
    };

    useEffect(() => {
        if (showPayment) {
            scrollToPayment(); // Rola até a seção de pagamento
        }

        if (loading) {
            // Espera um pequeno tempo para garantir que o elemento foi renderizado
            setTimeout(() => {
                scrollToRancho();
            }, 100);
        }

    }, [showPayment, scrollToPayment, loading, scrollToRancho]);

    return (
        <div>
            <ToastContainer />
            <div className="flex flex-col items-center justify-center mt-10 px-4">
                <h1 className="font-bold text-4xl animate-pulse text-red-600">CHEGOU A HORA!</h1>
                <p className="mb-2 text-[10px]">*após o envio dos dados, o pagamento será processado*</p>
                <div className="bg-[#2b2b2b] p-8 rounded-xl shadow-md w-full max-w-md">
                    <form className="flex flex-col gap-4" id="form" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <label className="font-semibold mb-1">Nome</label>
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                                placeholder="Insira seu nome completo"
                                className="bg-gray-100 text-black placeholder-gray-400 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-semibold mb-1">Instagram</label>
                            <input
                                type="text"
                                name="instagram"
                                value={formData.instagram}
                                onChange={handleChange}
                                placeholder="Insira o seu @ do Instagram"
                                required
                                className="bg-gray-100 text-black placeholder-gray-400 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-semibold mb-1">Número</label>
                            <input
                                type="tel"
                                name="numero"
                                value={formData.numero}
                                onChange={handleChange}
                                placeholder="Insira seu número de telefone"
                                required
                                className="bg-gray-100 text-black placeholder-gray-400 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="font-semibold mb-1">Endereço</label>
                            <input
                                type="text"
                                name="endereco"
                                value={formData.endereco}
                                onChange={handleChange}
                                required
                                placeholder="Insira aqui o seu endereço"
                                className="bg-gray-100 text-black placeholder-gray-400 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-md transition-colors"
                        >
                            PROCESSAR PAGAMENTO
                        </button>
                    </form>
                </div>
                <div className="mt-5">
                    {loading && <LoadingSpinner />}
                    {showPayment && <Payment />}
                </div>
            </div>
        </div>
    );
};

export default FormSection;
