import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import './NavBar.css'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<section className="nav-wrapper">
		<header className="innerWidth nav-container">
			<img className='brand-logo-navBar' src={require('../../images/brand.png')} alt="" />
			<div
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars/>
			</div>
			<nav ref={navRef}>
			<div
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes/>
			</div>
				<a href="">HOME</a>
          		<a href="">ABOUT US</a>
          		<a href="">TESTIMONIALS</a>
          		<a href="">SERVICES</a>
          		<a href="/blogs">BLOG</a>
				<div className="lButton"><a href="" className='loginButton'>Login/SignUp</a></div>
			</nav>
		</header>
		</section>
	);
}

export default Navbar;