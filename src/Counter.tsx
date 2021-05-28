import { useState } from 'react'

export const ClickCounter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount((val) => val + 1)}>Count {count}</button>
    </>
  )
}
