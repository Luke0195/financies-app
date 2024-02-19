import { BodyInterface, HttpResponseData } from './interfaces'
import { GridColDef } from '@mui/x-data-grid'

export const parseToDomain = (data: HttpResponseData[]): BodyInterface[] => {
  return data.map((proposta) => {
    const parsed: BodyInterface = {
      id: proposta.id !== null ? proposta.id : 0,
      cpf: proposta.cpf !== null ? proposta.cpf : '-',
      valor:
        proposta.valor_solicitado !== null
          ? `R$ ${proposta.valor_solicitado.toFixed(2)}`
          : 0,
      prazo:
        proposta.prazo_pagamento !== null && proposta.prazo_pagamento > 0
          ? `${proposta.prazo_pagamento} meses`
          : '-',
      status: proposta.aprovado ? 'Aprovada' : 'Em análise',
    }
    return parsed
  })
}

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'cpf', headerName: 'CPF', width: 150 },
  { field: 'valor', headerName: 'Valor', width: 150 },
  { field: 'prazo', headerName: 'Prazo', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
]
