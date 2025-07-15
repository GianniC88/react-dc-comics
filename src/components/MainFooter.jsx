const icon = [
  {
    id: 1,
    href: "#",
    src: "/img/buy-comics-digital-comics.png",
    name: "DIGITAL COMICS",
  },
  {
    id: 2,
    href: "#",
    src: "/img/buy-comics-merchandise.png",
    name: "DC MERCHANDISE",
  },
  {
    id: 3,
    href: "#",
    src: "/img/buy-comics-subscriptions.png",
    name: "SUBSCRIPTION",
  },
  {
    id: 4,
    href: "#",
    src: "/img/buy-comics-shop-locator.png",
    name: "COMIC SHOP LOCATOR",
  },
  {
    id: 5,
    href: "#",
    src: "/img/buy-dc-power-visa.svg",
    name: "DC POWER VISA",
  },
];

export default function MainFooter() {
  return (
    <>
      <div className=" bg-primary">
        <div class="container">
        <div className="row justify-content-between align-items-center">
          {icon.map((item) => {
            return (
              <a key={item.id} className="text-white fs-6 col-2 text-decoration-none" href={item.href}>
                {item.text}
                <img className="text-white" width="25px" src={item.src} alt={item.name} />{item.name}
              </a>
            );
          })}

          {/*	<a className="text-white row" href="#"><img src="/img/buy-comics-digital-comics.png"></img>digital comics</a>
					<a className="text-white row" href="#"><img src="/img/buy-comics-merchandise.png"></img>DC Merchandise</a>
					<a className="text-white row" href="#"><img src="/img/buy-comics-subscriptions.png"></img>Subsription</a>
					<a className="text-white row" href="#"><img src="/img/buy-comics-shop-locator.png"></img>Comic Shop Locator</a>
					<a className="text-white row" href="#"><img src="/img/buy-dc-power-visa.svg.png"></img>DC power visa</a>*/}

        </div>
        </div>
      </div>
    </>
  );
}
