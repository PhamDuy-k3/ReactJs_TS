import { useState } from "react";

// interface CounterProps {
//     init: number
// }
// const Counter: React.FC<CounterProps> = ({init})=>{
//     const [count, setCount] = useState<number>(init);
//     const increment = () => {
//         setCount(prevCount => prevCount + 1);
//       };
    
//       const decrement = () => {
//         setCount(prevCount => prevCount - 1);
//       };
//     return (
//         <div>
//           <h2>Counter</h2>
//           <p>Count: {count}</p>
//           <button onClick={increment}>Increment</button>
//           <button onClick={decrement}>Decrement</button>
//         </div>
//       );
// }

const Counter: React.FC = ()=>{
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
      };
    
      const decrement = () => {
        setCount(prevCount => prevCount - 1);
      };
    return (
        <div>
          <h2>Counter</h2>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      );
}
export default Counter;