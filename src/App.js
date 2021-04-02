import "./App.scss"
import Header from "../src/header"
import Headline from "./headline"
function App() {
    return (
        <div className="App">
            <Header />
            <section className="main">
              <Headline header="Post" desc= "Click to render post!"/>
            </section>
        </div>
    )
}

export default App
