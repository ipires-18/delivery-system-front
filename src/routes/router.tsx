import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Clients } from '../components/Clients';
import { Orders } from '../components/Orders';

export const Router = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Clients />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </BrowserRouter>
  )
}
