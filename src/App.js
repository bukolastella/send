import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Card from "./components/Card/Card";
import Service from "./components/Service/Service";
import Address from "./components/Address/Address";
import Cargo from "./components/Cargo/Cargo";
import Additional from "./components/Additional/Additional";
import classes from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={classes.appgrid}>
        <div className={classes.arrow}>
          <i class="fas fa-arrow-left"></i>
        </div>
        <div>
          <Title />
          <Card>
            <Service />
          </Card>
          <Card>
            <Address />
          </Card>
          <Card>
            <Cargo />
          </Card>
          <Card>
            <Additional />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
