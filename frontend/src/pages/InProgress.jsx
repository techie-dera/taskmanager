import "../css/InProgress.css";

const InProgress = () => {
  return (
    <div className="inProgress-container">
      <div className="inProgress-box">
        <h3>High Probability</h3>
        <p>Tasks with a high chance of being prioritized.</p>
      </div>
      <div className="inProgress-box">
        <h3>Moderate Probability</h3>
        <p>Tasks with a moderate chance of being prioritized.</p>
      </div>
      <div className="inProgress-box">
        <h3>Low Probability</h3>
        <p>Tasks with a lower chance of being prioritized.</p>
      </div>
    </div>
  );
};

export default InProgress;
