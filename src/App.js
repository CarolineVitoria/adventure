import './App.css';
import Banner from './componentes/Banner';
import Categoria from './componentes/Categoria';
import Select from './componentes/Select';


function App() {
  const categoria = [
    {
      nome: 'princesa Jujuba',
      categoria: 'Princesas',
      corPrimaria: 'aliceblue',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'Canelinha',
      categoria: 'Cidadãos',
      corPrimaria: 'aliceblue',
      corSecundaria: '#FFF5D9'
    }
  ];
  return (
    <div className="App">
      <Banner></Banner>
      <Select
        categoria={categoria.map(item=>item.categoria)}
      />
      <Categoria
      nomeCategoria={categoria.map(item=>item.categoria)}
      corPrimaria={categoria.map(item=>item.corPrimaria)}
      corSecundaria={categoria.map(item=>item.corSecundaria)}
      >
        
      </Categoria>
    </div>
  );
}

export default App;
