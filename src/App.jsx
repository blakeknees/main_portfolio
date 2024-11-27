import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <h1>Jennifer Blakney</h1>
            <div className="card">
              <p>
                Web Developer. Cannabis Content Creator.
              </p>
            </div>
        </header>

        <main>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto recusandae doloribus veniam eius fugit, nostrum voluptatibus tempora exercitationem repellat esse accusantium a modi corporis, id, ullam fuga vitae temporibus?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto recusandae doloribus veniam eius fugit, nostrum voluptatibus tempora exercitationem repellat esse accusantium a modi corporis, id, ullam fuga vitae temporibus?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid architecto recusandae doloribus veniam eius fugit, nostrum voluptatibus tempora exercitationem repellat esse accusantium a modi corporis, id, ullam fuga vitae temporibus?
          </p>
        </main>

        <footer>
          <p>Copyright © 2024 Jennifer Blakney. All Rights Reserved.</p>
        </footer>
      </div>
      
    </>
  )
}

export default App
