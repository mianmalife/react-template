// import { useContext } from "react"
// import { context } from './Provider'
import Button from "@/components/Button"
import { useSubscribe } from "@/store"

export default function Counter1() {
  // const { counter11, setCounter11 } = useContext(context)
  const [counter, setCounter] = useSubscribe('counter1', 0)
  console.log('re-render11')
  function handleClick() {
    setCounter(counter+1)
  }
  return <div className="bg-slate-400 px-4 py-4">
    <p className="text-white mb-3">{counter}</p>
    <Button type="primary" size="sm" onClick={handleClick}>递增1</Button>
  </div>
}