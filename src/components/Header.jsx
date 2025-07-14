import headLogo from '/img/dc-logo.png'

export default function Header(){


	return (

	<header>
		<div className = "containe d-flex justify-content-between ">
		<img className ="p-3" src = {headLogo}/>
     	   <nav className="navbar navbar-expand">
				<div className="nav navbar-nav  me-5">
					<a className="" href="#">Caracters</a>
					<a className="active" href="#">Commics</a>
					<a className="" href="#">Movies</a>
					<a className="" href="#">TV</a>
					<a className="" href="#">Games</a>
					<a className="" href="#">Videos</a>
					<a className="" href="#">Fans</a>
					<a className="" href="#">News</a>
					<a className="" href="#">Shop</a>
				</div>
	  	    </nav>
		</div>
	  
     
    </header>  
	)

	
}