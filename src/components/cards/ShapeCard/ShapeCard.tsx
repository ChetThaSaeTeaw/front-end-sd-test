import "./ShapeCard.scss"; // CSS

export default function ShapeCard({ shape , handleRandom } : any) {
  return (
    <div className="shape-box" onClick={handleRandom}>
        <span className={shape}></span>
    </div>
  );
};
