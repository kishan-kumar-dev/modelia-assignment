import React from "react";
import type { Generation } from "../utils/api";

interface Props {
  items: Generation[];
  onSelect: (item: Generation) => void;
}

const HistoryList: React.FC<Props> = React.memo(({ items, onSelect }) => {
  if (!items.length) return <p>No history yet.</p>;

  return (
    <div>
      <h2 className="font-semibold mb-2">History</h2>
      <ul className="flex gap-2 overflow-x-auto">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSelect(item)}
              className="border rounded p-1 focus:outline-none focus:ring focus:ring-blue-400"
            >
              <img src={item.imageUrl} alt={item.prompt} className="w-20 h-20 object-cover rounded" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default HistoryList;
