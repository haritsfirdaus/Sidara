import React from "react";

export function Slider({ min = 0, max = 100, step = 1, value, onChange }) {
  return (
    <div className="w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="w-full accent-blue-600"
      />
      <div className="text-sm text-gray-700 mt-1 text-right">{value}</div>
    </div>
  );
}
