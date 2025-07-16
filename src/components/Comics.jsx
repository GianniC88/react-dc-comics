import PropsComics from "./props/PropsComics";
import { comics } from "./ArrayComics";

export default function Comics() {
  return (
    <div className="jumbotron jumbotron-fluid bg-dark p-5 position-relative ">
      <div className="container">
        <div className="row ">
          <h4 className="currentSeries">CURRENT SERIE</h4>

          {comics.map(({ id, thumb, title }) => (
            <PropsComics
              key={id}
              src={thumb}
              title={title.replace(/#1/g, "")}
            />
          ))}

          <h4 className="loadMore">LOAD MORE</h4>
        </div>
      </div>
    </div>
  );
}
