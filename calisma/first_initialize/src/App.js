import Header from "./components/header";
import Body from "./components/body";


const name = "Melih";
const surname = "Tufekcioglu";
const isLoggedIn = true;

function App() {
  return (
    <div>
      <Header />
      <Body />
      <p>benim adim {name},soyadim {surname} </p>
     
      {isLoggedIn    /* özellikle kelimeleri(if,for,,) kullanmak için {} parantez açmak ve içime yazmak yeterlidir. */
        ? `Welcome ${name}`
        : "Bye Bye"
      }

    </div>
  )
}
export default App;