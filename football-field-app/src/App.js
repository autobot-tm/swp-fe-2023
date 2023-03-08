import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Layout from './components/router/Layout';

function App() {
  return (
    <>
      <Header />
      <Layout />
      <Footer fixed/>
    </>
  );
}

export default App;
