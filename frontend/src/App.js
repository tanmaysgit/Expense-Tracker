import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import {MainLayout} from './styles/Layouts'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import bg from './img/bg.png'
import g from './img/graphbg.png'
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
function App() {
  const [active, setActive] = useState(1)
  // dashboard as default
  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }


  return (
    <AppStyled bg={bg} className="App">
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  // image repeat no
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.5);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 12px;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
  
  *{
    border-radius: 12px !important;
  }
  
`;

export default App;
