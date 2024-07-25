import { useContext } from "react";
import { UserContext } from "./contexts/contexts";
import Login from "./pages/users/login";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import MinhasRotas from "./routes";




function App() {

  const {loginPage} = useContext(UserContext);

  return (
    <div>
      
      {loginPage? 
      
        <Login />
        
      :
        <>
          <Header />

          <div style={{width:'100%', display:'flex'}}>
            <Menu />

            <MinhasRotas />
          </div> 
          

        </>
      }
    </div>
  );
}

export default App;
