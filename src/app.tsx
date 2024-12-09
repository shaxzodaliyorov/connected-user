import {Routes} from 'react-router-dom'
import {AppRouter} from './router'
import {ROUTES} from './routes'

export const App = () => <Routes>{AppRouter(ROUTES)}</Routes>
