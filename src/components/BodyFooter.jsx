import PropsFooter from "./props/PropsFooter";
import { ComicsItems } from "../components/props/array/arrayDcComics";
export default function BodyFooter() {
  return (
    <div className="">
      <div className="container p-5">
        <div className="row">
          <div className="col-2 text-light">
            <h4>DC COMICS</h4>
            <PropsFooter items={ComicsItems} />
            <h4>SHOP</h4>
            <ul>
              <li>
                <a href="#">Shop DC</a>
              </li>
              <li>
                <a href="#">Shop DC collectibles</a>
              </li>
            </ul>
          </div>
          <div className="col-2 text-light">
            <h4>DC </h4>
            <ul>
              <li>
                <a href="#">Terms OF Use</a>
              </li>
              <li>
                <a href="#">Privacy policy (New)</a>
              </li>
              <li>
                <a href="#">Ad Choices</a>
              </li>
              <li>
                <a href="#">Advertising</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Subscriptions</a>
              </li>
              <li>
                <a href="#">Talent Workshop</a>
              </li>
              <li>
                <a href="#">CPCS Certificates</a>
              </li>
              <li>
                <a href="#">Raiting</a>
              </li>
              <li>
                <a href="#">Shop Help</a>
              </li>
            </ul>
          </div>
          <div className="col-2 text-light">
            <h4>SITES </h4>
            <ul>
              <li>
                <a href="#">DC</a>
              </li>
              <li>
                <a href="#">MAD Magazine</a>
              </li>
              <li>
                <a href="#">DC Kids</a>
              </li>
              <li>
                <a href="#">DC Universe</a>
              </li>
              <li>
                <a href="#">DC Power Visa</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
