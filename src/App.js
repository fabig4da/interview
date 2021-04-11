import frutas from './images/frutas.png';
import logo from './images/logo.png';
import logo2 from './images/logo2.png';
import search from './images/search.png';
import chamoy from './images/CHAMOY_1.png';
import mago from './images/MANGO_1.png';
import chelada from './images/CHELADA_1.png';
import i1 from './images/1.png';
import i2 from './images/2.png';
import i3 from './images/3.png';
import i4 from './images/4.png';
import vk from './images/vk.png';
import { useEffect } from 'react';


const App = () => {
  useEffect(() => {
    let scroll =document.getElementById('scroll')

    window.onscroll = function(){
      let y =window.scrollY;
      let width = scroll.clientWidth;
      let top = (scroll.offsetTop);
      let left = (width*y/top);
      console.log(left)
      if(y<=top  )
        scroll.style.left = (width-left)+'px'
    }
  }, [])

  return (
    <div className="container">
      <header>
        <img className="logo" src={logo} />


        <nav>
          <a>HOME</a>
          <a>REGOSTRO</a>
          <img src={search} />

        </nav>
      </header>
      <main className="main">
        <div className="img-left">
          <div className="img-bg">

            <img className="il-1" src={logo2} />
          </div>
          <img className="il-2" src={vk} />


        </div>
        <div className="img-right" id="scroll">
          <img src={mago} />
          <img src={chelada} />
          <img src={chamoy} />

        </div>
        <div className="media">
          <img src={i1} />
          <img src={i2} />
          <img src={i3} />
          <img src={i4} />

        </div>
      </main>

    </div>
  );
}

export default App;
