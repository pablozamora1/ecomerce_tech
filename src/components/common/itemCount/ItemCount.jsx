import { useCount } from "../../Hooks/useCount";


const ItemCount = () => {
    const {count ,decrement ,increment ,reset} = useCount(1,15)
  return (
    <div>
        <div>
        <button onClick={decrement}> - </button>
        <span>{count}</span>
        <button onClick={increment}> + </button>
        </div>
        <button onClick={reset}> reset </button>
    </div>
  )
}

export default ItemCount