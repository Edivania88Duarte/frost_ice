import { config } from './data';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Segmentos from './components/Segmentos';
import Diferenciais from './components/Diferenciais';
import Produtos from './components/Produtos';
import Saborizado from './components/Saborizado';
import ComoPedir from './components/ComoPedir';
import Atendimento from './components/Atendimento';
import FAQ from './components/FAQ';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhats from './components/FloatingWhats';

export default function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Nav />
      <Hero />
      <Segmentos />
      <Diferenciais />
      <Produtos />
      <Saborizado />
      <ComoPedir />
      <Atendimento />
      <FAQ />
      <Contato />
      <Footer />
      {config.mostrarBotaoFlutuante && <FloatingWhats />}
    </div>
  );
}
