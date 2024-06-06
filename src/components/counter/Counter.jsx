import { useState } from 'react'

const Counter = (props) => {
  const { classBoxCount } = props
  const [counter, setCounter] = useState(0)
  return (
    <>
      <div >
        <button className={counter <= 0 ? "hide" : "show"} onClick={() => setCounter(counter - 1)}>
          <p>-</p>
        </button>
        <p className={counter > 9 || counter === 0 ? "red" : "black"}>{counter}</p>
        <button className={counter > 9 ? "hide" : "show"} onClick={() => setCounter(counter + 1)}>
          <p>+</p>
        </button>
      </div>
    </>
  )
}

export default Counter