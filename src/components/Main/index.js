
import Header from '../Header'
import YellowBanner from '../yellowBanner';
import Content from '../Content';
import Footer from '../Footer'
import './main.css'

function Main() {
  return (
    <div className="App">
      <Header/>
      <YellowBanner/>
      <Content/>
      <div  className='app-footer'>
      <Footer/>
      </div>
      
    </div>
  );
}

export default Main;
