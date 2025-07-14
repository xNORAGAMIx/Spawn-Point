/* eslint-disable react/prop-types */
const Bird = ({ y }) => {
  return (
    <div
      className="absolute left-[50px] w-[36px] h-[36px] bg-arcadeYellow rounded-full border-4 border-inkBlack shadow-toon animate-float transition-all duration-200"
      style={{ top: `${y}px` }}
    />
  );
};

export default Bird;
