import { Container } from '../../components'
import { FaUser } from 'react-icons/fa'
import InputMask from 'react-input-mask'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export function Register() {
  const navigate = useNavigate()
  return (
    <div className="w-screen h-screen flex-col relative ">
      <FaArrowLeft
        size={20}
        color="#ccc"
        className=" absolute top-8 left-3 cursor-pointer "
        onClick={() => navigate('/')}
      />
      <Container>
        <div className="w-full h-screen flex flex-col  items-center justify-center lign-middle p-8">
          <div className="bg-blue-600 w-24 h-24 rounded-full flex items-center justify-center">
            <FaUser size={60} color="#fff" />
          </div>
          <form className="my-4">
            <div className="flex flex-col my-2 gap-1">
              <label className="text-gray-600 gap-y-2"> Nome </label>
              <input
                type="text"
                placeholder="Informe o seu nome"
                className="border border-gray-400 h-10 px-2 rounded-md focus:border-blue-600 outline-none "
              />
            </div>
            <div className="flex flex-col my-2 gap-1">
              <label className="text-gray-600 gap-y-2"> Sobrenome </label>
              <input
                type="text"
                placeholder="Informe o seu sobrenome"
                className="border border-gray-400 h-10 px-2 rounded-md focus:border-blue-600 outline-none "
              />
            </div>
            <div className="flex flex-col my-2 gap-1">
              <label className="text-gray-600 gap-y-2"> CPF</label>
              <InputMask
                mask={'999.999.999-99'}
                type="text"
                placeholder="Informe o seu cpf"
                className="border border-gray-400 h-10 px-2 rounded-md focus:border-blue-600 outline-none "
              />
            </div>

            <div className="flex flex-col my-2 gap-1">
              <label className="text-gray-600 gap-y-2"> Renda </label>
              <InputMask
                mask={'R$999.999,99'}
                type="text"
                placeholder="Informe o seu cpf"
                className="border border-gray-400 h-10 px-2 rounded-md focus:border-blue-600 outline-none "
              />
            </div>
            <div className="flex flex-col my-2 gap-1">
              <label className="text-gray-600 gap-y-2">
                {' '}
                Valor Solicitado{' '}
              </label>
              <InputMask
                mask={'R$999.999,99'}
                type="text"
                placeholder="Informe o valor socilitado"
                className="border border-gray-400 h-10 px-2 rounded-md focus:border-blue-600 outline-none "
              />
            </div>

            <div className="flex flex-col w-full">
              <label> Prazo(em meses) </label>
              <div className="flex items-center">
                <input
                  min="1"
                  type="range"
                  max="48"
                  className="border border-gray-400 h-10 px-2 rounded-md w-full"
                  placeholder="Informe o seu nome"
                />
              </div>
            </div>

            <button
              disabled
              className="flex items-center justify-center w-80 h-10 bg-blue-600 text-white rounded-md disabled:bg-gray-400
            ">
              Enviar para Análise
            </button>
          </form>
        </div>
      </Container>
    </div>
  )
}
