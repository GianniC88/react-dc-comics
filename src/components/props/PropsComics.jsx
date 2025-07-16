export default function PropsComics(props) {
  console.log(props);
  return (
    <div key={id} className="col-2 mb-5">
      <div className="card bg-transparent align-items-center ">
        <img className="card-img-top" src={thumb} alt="" />
        <div className="card-body">
          <h4 className="card-title text-white">{title}</h4>
          {/* <p>Description{description}</p> */}
          {/* <p>Price:{`$${price}`}</p>
                      <p>Series: {series}</p>
                      <p>Sale Date: {sale_date}</p>
                      <p>Type: {type}</p>
                      <p>Artists: {artists.join(", ")}</p>
                      <p>Writers: {writers.join(", ")}</p> */}
        </div>
      </div>
    </div>
  );
}

/*
<div key={id} className="col-2 mb-5">
  <div className="card bg-transparent align-items-center ">
    <img className="card-img-top" src={thumb} alt="" />
    <div className="card-body">
      <h4 className="card-title text-white">{title}</h4>
      {/* <p>Description{description}</p> */ //}
{
  /* <p>Price:{`$${price}`}</p>
                      <p>Series: {series}</p>
                      <p>Sale Date: {sale_date}</p>
                      <p>Type: {type}</p>
                      <p>Artists: {artists.join(", ")}</p>
                      <p>Writers: {writers.join(", ")}</p> */
}
// </div>
// </div>
//</div>;
//*/
