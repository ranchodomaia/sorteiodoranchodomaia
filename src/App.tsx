import './App.css'
import OneSection from './components/OneSection'
import VideoSection from './components/VideoSection'
import DonateButton from './components/Button'
import BoxSection from './components/BoxSection'
import FormSection from './components/FormSection'
import StepSection from './components/StepSection'

function App() {
  return (
    <div
      className="relative bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('/carlinhos.jpg')",
        backgroundPosition: "center",
      }}
    >
      {/* CONTEÚDO CENTRAL */}
      <div className="relative flex flex-col text-center py-10 bg-[#111] backdrop-blur-sm rounded-md mx-auto max-w-[950px]">
        <OneSection />
        <VideoSection />
        <DonateButton />
        <BoxSection />
        <StepSection />
        <DonateButton />
        <FormSection />
        <br/>
        <hr></hr>
        <div className='flex item-center justify-center gap-2 mt-5'>
          <img src="/seg-dois.png" className="w-25 h-25"/>
        </div>
        <p className="text-[12px] mt-5"> @ 2023 - Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default App
