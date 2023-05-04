import Data from "./Data";
import "./MyWorkOrder.css";
const MyWorkOrder = () => {
  const workOrder = Data.map((item) => {
    return (
      <div className="col-md-3">
        <div className="box">
          <img src={item.img} alt="IMG" />
          <h5>{item.title}</h5>
          <span>{item.time}</span>
          <p>{item.price}</p>
          <button> Order Now</button>

        </div>
      </div>
    );
  });
  return (
    <section className="work">
      <div className="continer">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <h2> Explore My Work</h2>
            <p> Explore My Work and Order Now</p>
          </div>
        </div>
        <div className="row">{workOrder}</div>
      </div>
    </section>
  );
};

export default MyWorkOrder;
