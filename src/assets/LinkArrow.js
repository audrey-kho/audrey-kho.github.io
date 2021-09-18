export default function LinkArrow({width, height, stroke = 1.5}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      strokeLinejoin="arcs"
      strokeWidth={stroke}
      className="feather feather-arrow-up-right"
      viewBox="0 0 20 22"
      style={{marginTop:"1px"}}
    >
      <path d="M7 17L17 7"></path>
      <path d="M7 7L17 7 17 17"></path>
    </svg>
  );
}