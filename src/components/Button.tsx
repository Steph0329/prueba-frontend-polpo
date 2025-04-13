
type ButtonProps = {
  onClick: () => void
}

const Button = ({onClick} : ButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="mt-5 justify-center p-2 uppercase font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-4xl text-sm transition-colors cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-shuffle-2"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 4l3 3l-3 3" />
        <path d="M18 20l3 -3l-3 -3" />
        <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
        <path d="M3 17h3a5 5 0 0 0 5 -5a5 5 0 0 1 5 -5h5" />
      </svg>
    </button>
  );
};

export default Button;
