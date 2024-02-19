export type HttpResponseData = {
  id: number | null
  nome: string | null
  sobrenome: string | null
  telefone: string | null
  cpf: string | null
  renda: number | null
  aprovado: boolean | null
  observacao: string | null
  valor_solicitado: number | null
  prazo_pagamento: number | null
}

export type BodyInterface = {
  id: number
  cpf: string
  valor: number | string
  prazo: string
  status: string
}
