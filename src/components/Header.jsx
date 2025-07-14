import headLogo from '/img/dc-logo.png'

export default function Header(){


	return (


		 <header>
			<div className = "containe d-flex justify-content-between ">
			<img className ="p-3" src = {headLogo}/>
      <nav class="navbar navbar-expand">
		<div class="nav navbar-nav  me-5">
			<a class="" href="#">Caracters</a>
			<a class="active" href="#">Commics</a>
			<a class="" href="#">Movies</a>
			<a class="" href="#">TV</a>
			<a class="" href="#">Games</a>
			<a class="" href="#">Videos</a>
			<a class="" href="#">Fans</a>
			<a class="" href="#">News</a>
			<a class="" href="#">Shop</a>
		</div>
	  </nav>
		</div>
	  
     
    </header>  
	)

	
}