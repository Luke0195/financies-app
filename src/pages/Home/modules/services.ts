import { axiosInstance as axios } from '../../../services'

export const getAllPropostas = async (): Promise<any> => {
  const response = await axios.get('/proposta')
  if (typeof response.data !== 'object') throw new Error('Invalid Response')
  return response.data
}
