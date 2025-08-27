import React from "react";
import type { ChangeEvent } from "react";


interface Props {
  value: string;
  onChange: (val: string) => void;
}

const PromptInput: React.FC<Props> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);

  return (
    <div className="mb-2">
      <label className="block mb-1 font-medium">Prompt:</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type your prompt..."
        className="w-full border rounded p-2 focus:outline-none focus:ring focus:ring-blue-400"
      />
    </div>
  );
};

export default PromptInput;
