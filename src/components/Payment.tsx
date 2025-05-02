import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Payment = () => {
    const mensagem = "00020126580014br.gov.bcb.pix013632594ce7-4e02-4031-bb80-103603a651825204000053039865802BR5917S PAGAMENTOS LTDA6014BELO HORIZONTE62290525fb6d7ddd3f5a4ed3ba9c9451b63041972";

    const copyCode = async () => {
        try {
            await navigator.clipboard.writeText(mensagem);
            // Usando Toastify para exibir uma notificação de sucesso
            toast.success("Código copiado com sucesso!", {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: 'dark',
            });
        } catch (err) {
            // Exibir erro caso o processo de cópia falhe
            toast.error("Erro ao copiar o código.", {
                position: 'top-center',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: 'dark',
            });
        }
    };

    return (
        <div id="payment" className="flex flex-col items-center justify-center mt-10 px-4">
            <ToastContainer />
            <h1 className="font-bold text-4xl animate-pulse text-red-600">PAGAMENTO</h1>
            <p className="text-[10px]">*assim que o pagamento for feito, seus dados serão computados*</p>
            <div className="bg-[#2b2b2b] py-8 rounded-xl shadow-md w-full max-w-md mt-5"> {/* Alterado para bg-white */}
                <h1 className="font-bold text-3xl">Escaneie o QR CODE:</h1>
                <img src="/qrcode.jpg" className="w-75 h-75 mx-auto p-2 bg-[#111] border-4 rounded-md border-[#111] mt-5" />
                <p className="bg-white max-w-[90%] mx-auto text-black rounded-md text-[10px] p-2 mt-5">
                    {mensagem}
                </p>

                <button
                    onClick={copyCode}
                    className="flex items-center justify-center bg-red-600 font-bold hover:bg-red-800 animate-pulse rounded-md text-[20px] md:text-[20px] md:max-w-[100%] mx-auto px-10 md:px-20 py-3 gap-2 mt-5"
                >
                    COPIAR CÓDIGO PIX
                    <img src="/pix.png" className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default Payment;
