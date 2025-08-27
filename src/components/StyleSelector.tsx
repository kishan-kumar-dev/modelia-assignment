import React from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const StyleSelector: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="mb-2">
      <label className="block mb-1 font-medium">Style:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded p-2 focus:outline-none focus:ring focus:ring-blue-400"
      >
        <option>Editorial</option>
        <option>Streetwear</option>
        <option>Vintage</option>
      </select>
    </div>
  );
};

export default StyleSelector;
