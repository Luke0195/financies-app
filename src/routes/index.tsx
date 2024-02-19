import { Routes as ReactRoutes, Route } from 'react-router-dom'
import { Home } from '../pages'

export function Routes() {
  return (
    <ReactRoutes>
      <Route index element={<Home />} />
    </ReactRoutes>
  )
}
