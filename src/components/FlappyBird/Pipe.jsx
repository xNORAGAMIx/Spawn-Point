/* eslint-disable react/prop-types */

const Pipe = ({ x, topHeight, bottomHeight }) => {
  return (
    <>
      <div
        className="absolute w-[50px] bg-arcadeGreen border-4 border-inkBlack rounded-b-md shadow-toon"
        style={{ height: topHeight, left: x, top: 0 }}
      />
      <div
        className="absolute w-[50px] bg-arcadeGreen border-4 border-inkBlack rounded-t-md shadow-toon"
        style={{ height: bottomHeight, left: x, bottom: 0 }}
      />
    </>
  );
};

export default Pipe;
