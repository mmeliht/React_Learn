import Header from "./components/header";
import Body from "./components/body";


const name="Melih";
const surname="Tufekcioglu";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <p>benim adim {name},soyadim {surname} </p>

    </div>
  )
}
export default App;