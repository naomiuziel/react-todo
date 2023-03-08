import * as React from "react"

const Tick = (props) => (
  <svg className="tick" height={20} width={20} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title />
    <path
      d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0ZM8 15l-5-5 1.4-1.4L8 12.2l7.6-7.6L17 6l-9 9Z"
      fill="#000"
      fillRule="evenodd"
    />
  </svg>
);

export default Tick;