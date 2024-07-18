const shimmerCount = 10;

const Body = () => {
  return (
    <>
    <div className="container">
      {Array.from({ length: shimmerCount }).map((_, index) => (
        <div className="shimmer" key={index}></div>
      ))}
    </div>
    </>
  );
};

export default Body;
