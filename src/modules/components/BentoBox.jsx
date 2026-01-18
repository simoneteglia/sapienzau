export default function BentoBox({ children, style, className = "" }) {
  return (
    <div className={`${className} bg-[#d9d9d9] rounded-[30px]`} style={style}>
      {children}
    </div>
  );
}
