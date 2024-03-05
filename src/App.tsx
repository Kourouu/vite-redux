import { Avatar } from "antd"
import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"

const App = () => {
  return (
    <div className="App">
      {[].map(user => (
        <Avatar />
      ))}
    </div>
  )
}

export default App
