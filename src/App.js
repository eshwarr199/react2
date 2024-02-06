
import './App.css';
// import Content1 from './components/content1';
// import Content2 from './components/content2';
// import Content3 from './components/content3';
// import Footer from './components/footer';
// import Logo from './components/logo';
// import Navbar from './components/navbar';


import NavigationStack from './navigationStack/navigationStack';


function App() {
  return (
   <div>
    <NavigationStack/>
    {/* <div style={{display:'flex'}}>
      <div style={{flex:1,textAlign:"center" }}>
      <Logo/>
      </div>
    <div style={{flex:3}}>
    <Navbar />
    </div>
    
    </div>
    <div style={{display:'flex'}}>
   <Content1/>
    <Content2/>
    <Content3/>
   </div>
    
    <Footer/> */}
   </div>
  )
}

export default App;

