import headLogo from '/img/dc-logo.png'

export default function Header(){
 const menù = [
	{
		id : 1,
		active: false,
		href: '#',
		text: 'Caracters',
	},
	{
		id: 2,
		active: false,
		href: '#',
		text: 'Commics',
	},
	{
		id: 3,
		active: false,
		href: '#',
		text: 'Movies',
	},
	{
		id: 4,
		active: false,
		href: '#',
		text: 'TV',
	},
	{
		id: 5,
		active: false,
		href: '#',
		text: 'Games',
	},
	{
		id: 6,
		active: false,
		href: '#',
		text: 'Videos',
	},
	{
		id: 7,
		active: false,
		href: '#',
		text: 'Fans',
	},
	{
		id: 8,
		active: false,
		href: '#',
		text: 'News',
	},
	{
		id: 9,
		active: false,
		href: '#',
		text: 'Shop',
	}

 ]

	return (

	<header>
		<div className = "containe d-flex justify-content-between ">
		<img className ="p-3" src = {headLogo}/>
     	   <nav className="navbar navbar-expand">
				<div className="nav navbar-nav  me-5">
					{
						menù.map((item)=>{
							return(
								<a key={item.id} className = {item.active? 'active' : ''} href={item.href}> {item.text} </a>
							)
						})
					}
					
				</div>
	  	    </nav>
		</div>
	  
     
    </header>  
	)

	
}