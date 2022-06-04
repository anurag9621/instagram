import { Header } from "../components/header";
import { Status } from "../components/status";


function Home() {
  return (
    <>
    <Header/>
    <div className="box-thats-des-width">
      <div className="center-home-all">
        <Status/>
        
      </div>
    </div>
    </>
  );
}

export default Home;
