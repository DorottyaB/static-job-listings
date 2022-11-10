import './App.css';
import bgMobile from './assets/bg-header-mobile.svg';
import bgDesktop from './assets/bg-header-desktop.svg';
import QueryContextProvider from './contexts/query.context';
import CardList from './components/card-list/CardList.component';
import SearchBar from './components/search-bar/SearchBar.component';
import Footer from './components/footer/Footer.component';

function App() {
  return (
    <QueryContextProvider>
      <div className='App'>
        <header>
          <picture>
            <source media='(max-width: 768px)' srcSet={`${bgMobile} 768w`} sizes='768px' />
            <source srcSet={`${bgDesktop} 1280w`} sizes='1280px' />
            <img className='header-img' src={bgDesktop} alt='' />
          </picture>
        </header>
        <SearchBar />
        <CardList />
        <Footer />
      </div>
    </QueryContextProvider>
  );
}

export default App;
