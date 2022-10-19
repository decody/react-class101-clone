import './assets/App.css';
import GlobalStyle from './assets/GlobalStyle';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import Routes from './Routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </>
  );
}

export default App;
