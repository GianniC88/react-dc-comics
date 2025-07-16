import PropsComics from "./props/PropsComics";
import ArrayComics from "./ArrayComics";

export default function ArrayComics() {
  return (
    <div className="jumbotron jumbotron-fluid bg-dark p-5 position-relative ">
      <div className="container">
        <div className="row ">
          <h4 className="currentSeries">CURRENT SERIE</h4>

          {comics.map(({ title, src }) => {
            return <PropsComics src={src} title={title} />;
          })}

          <h4 className="loadMore">LOAD MORE</h4>
        </div>
      </div>
    </div>
  );
}
