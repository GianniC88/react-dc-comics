const icon=[
		{
			id:1,
			href:'#',
			src:'/img/buy-comics-digital-comics.png',
			name:'DIGITAL COMICS',

		},
		{
			id:2,
			href:'#',
			src:"/img/buy-comics-merchandise.png",
			name: 'DC MERCHANDISE',

		},
		{
			id:3,
			href:'#',
			src:"/img/buy-comics-subscriptions.png",
			name: 'SUBSCRIPTION',

		},
		{
			id:4,
			href:'#',
			src:"/img/buy-comics-shop-locator.png",
			name: 'COMIC SHOP LOCATOR',

		},
		{
			id:5,
			href:'#',
			src:'/img/buy-comics-digital-comics.png',
			name: 'DC POWER VISA',

		}

	]

export default function MainFooter (){

	
	return(
		<>
			<div className="container bg-primary ">
		
     	   
				<div className="d-flex justify-content-between gap-5">


					<a className="text-white row" href="#"><img src="/img/buy-comics-digital-comics.png"></img>digital comics</a>
					<a className="text-white row" href="#"><img src="/img/buy-comics-merchandise.png"></img>DC Merchandise</a>
					<a className="text-white row" href="#"><img src="/img/buy-comics-subscriptions.png"></img>Subsription</a>
					<a className="text-white row" href="#"><img src="/img/buy-comics-shop-locator.png"></img>Comic Shop Locator</a>
					<a className="text-white row" href="#"><img src="/img/buy-dc-power-visa.svg.png"></img>DC power visa</a>
					
				</div>
	  	    
			</div>
		</>
	)
}