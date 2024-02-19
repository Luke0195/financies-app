import { Header, Container } from '../../components'
import { DataGrid } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import {
  BodyInterface,
  parseToDomain,
  columns,
  getAllPropostas,
} from './modules'
import { useState, useEffect, useCallback } from 'react'

export function Home() {
  const navigate = useNavigate()
  const [rows, setRows] = useState<BodyInterface[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const loadData = useCallback(async () => {
    setLoading(true)
    try {
      const response = await getAllPropostas()
      setRows(parseToDomain(response.content))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  return (
    <div>
      <Header />
      <Container>
        <div className="flex items-center justify-between my-5 bg-blue-700 p-2">
          <h2 className="text-white font-semibold text-lg"> Resultado </h2>
          <button
            className="bg-slate-400 p-2 text-white rounded-md "
            onClick={() => navigate('/register')}>
            {' '}
            Cadastrar Novo +{' '}
          </button>
        </div>
        <div>
          <DataGrid
            loading={loading}
            rows={rows || []}
            columns={columns}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </Container>
    </div>
  )
}
