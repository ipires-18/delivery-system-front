import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Router } from './routes/router';

function App() {
  return (
    <>
      <Router />
      <ToastContainer position='bottom-center' />
    </>
  );
}

export default App;
