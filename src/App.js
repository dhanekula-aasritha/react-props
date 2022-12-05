//import ClassComponent from './ClassComponent'
//import PropsExample from './PropsExample'
//import StateExample from './StateExample'
//import Events from './Events'
//import FuncProps from './FuncProps'
//import DemoExample from './DemoExample'
//import JSX from './JSX'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
function App(){
  return(
        <div>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>        
    
            {/*<FuncProps name="aasritha" year="2000"/>*/}
            {/*<DemoExample name="bhagi" year="1989"/>*/}
           {/*<StateExample/>*/}
            {/*<Events/>*/}
           {/* <JSX/>*/}
                       {/* <PropsExample name="aasritha" age="20"/>
                       <PropsExample name="bhagi" age="16"/>
                       <PropsExample name="ammu" age="15"/>*/}
                {/*<p>this is laptop</p>
                        <h1>TEDDY BEAR</h1>
                        <img src="https://img.freepik.com/free-vector/watercolor-bear-set_439185-6917.jpg?w=2000" width="30%" alt="teddy bear"/>
                        <ClassComponent/>*/}

        </div>     
    );
}
export default App;