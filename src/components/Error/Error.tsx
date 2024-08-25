// ErrorMessage.tsx
import React from "react";
import { ErrorMessageProps } from "../../interfaces/interfaces";

const Error: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="w-full bg-red-500 text-white p-4 rounded">
      <p>{message}</p>
    </div>
  );
};

export default Error;
