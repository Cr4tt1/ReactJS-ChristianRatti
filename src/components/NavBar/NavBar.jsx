import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget';
import './NavBar.scss';

function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-primary">
			<div className="container">
				<Link className="navbar-brand fw-bold" to="/">
					Apple<span className="text-secondary">Me</span>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink className="nav-link" to="/">
								Inicio
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/category/iphone">
								iPhones
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/category/ipad">
								iPads
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/category/accesorios">
								Accesorios
							</NavLink>
						</li>
					</ul>
				</div>
				<CartWidget className="d-inline-flex pe-lg-0 pb-lg-0 pb-1 pe-1" />
			</div>
		</nav>
	);
}

export default NavBar;
