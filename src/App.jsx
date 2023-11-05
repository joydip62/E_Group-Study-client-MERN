import { Outlet } from 'react-router-dom'
import './App.css'
import MainLayout from './components/layouts/MainLayout'
import Footer from './components/layouts/Footer';

function App() {

  return (
    <>
      <MainLayout>
        <div className="w-full max-w-[1280px] mx-auto p-5">
          <Outlet></Outlet>
        </div>
        <Footer />
      </MainLayout>
    </>
  );
}

export default App
