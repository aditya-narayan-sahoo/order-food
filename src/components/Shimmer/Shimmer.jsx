import "./shimmer.css";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-logo"></div>
          <div className="shimmer-text shimmer-title"></div>
          <div className="shimmer-text shimmer-subtitle"></div>
          <div className="shimmer-text shimmer-rating"></div>
          <div className="shimmer-text shimmer-cost"></div>
          <div className="shimmer-text shimmer-sla"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
