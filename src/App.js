import { Main } from './components/main'
import { Header } from './components/header'
import { Footer } from './components/footer'
import items from "./items";
import "./App.css";

const LoginBanner = ({ status }) => {
  return (
    <div className={`${status} ui message`}>
      <div className="header">You are not logged in.</div>
      <p>You may now log-in with the username you have chosen</p>
    </div>
  );
};

function App() {  
  const openingHours = "We are open from 9:00 AM to 6:00 PM";
  const isUserLoggedIn = false;

  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <Header />
      {isUserLoggedIn && <LoginBanner status="warning" />}
      <Main items={items} />
      <Footer opening={openingHours} />
    </div>
  );
}

export default App;
