import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { Home, Register } from '../pages'

export function Routes() {
  return (
    <ReactRoutes>
      <Route index element={<Home />} />
      <Route path="/register" element={<Register />} />
    </ReactRoutes>
  )
}
