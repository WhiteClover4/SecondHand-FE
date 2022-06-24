export default function XIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 5L5 15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M5 5L15 15"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
