// for test
import { useState } from 'react';

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <div className="my-4">
      <div>Count {count}</div>
      <button
        className="bg-orange-200 rounded text-lg font-semibold py-1 px-4"
        onClick={() => setCount((count) => count + 1)}
      >
        Count Up
      </button>
    </div>
  );
}
