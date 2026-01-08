import React, { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

interface Props {
  onSearch: (value: string) => void;
  placeholder?: string;
}

const Search: React.FC<Props> = ({
  onSearch,
  placeholder = "Search users by name...",
}) => {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 300); // 300ms delay

  useEffect(() => {
    onSearch(debouncedInput);
  }, [debouncedInput, onSearch]);

  return (
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder={placeholder}
      className="border p-2 rounded w-full"
    />
  );
};

export default Search;
