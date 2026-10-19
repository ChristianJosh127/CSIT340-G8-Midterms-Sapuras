
import { useState } from "react";

function Feedback() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);

  function handleClear() {
    setYes(0);
    setNo(0);
  }

  return (
    <div className="px-20 py-8">
      <h2 className="mb-4 text-2xl font-bold">Feedback</h2>

      <div className="flex items-center gap-4">
        <button
          className="cursor-pointer rounded-lg bg-[#5C766D] px-6 py-3 text-lg font-bold text-[#EDE9E6]"
          onClick={() => setYes(yes + 1)}
        >
          Yes ({yes})
        </button>

        <button
          className="cursor-pointer rounded-lg bg-[#C9996B] px-6 py-3 text-lg font-bold text-[#5C4F4A]"
          onClick={() => setNo(no + 1)}
        >
          No ({no})
        </button>

        <button
          className="cursor-pointer rounded-lg border-2 border-[#5C4F4A] px-6 py-3 text-lg font-bold"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Feedback;
