import { Link, NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/use-state';

type HeaderProps = {
	HideNavigation?: boolean;
	IsAuthorized?: boolean;
}

function Header({
	HideNavigation = false,
	IsAuthorized = true
}: HeaderProps) {
	const allCards = useAppSelector((state) => state.cards);
	const cards = allCards.filter((card) => card.isFavorite);
	return (
		<header className="header">
			<div className="container">
				<div className="header__wrapper">
					<div className="header__left">
						<NavLink
							className={({isActive}) => isActive ? 'header__logo-link header__logo-link--active' : 'header__logo-link'}
							to={AppRoute.Main}
						>
							<img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
						</NavLink>
					</div>
					{!HideNavigation && (
						<nav className="header__nav">
							{IsAuthorized ? (
								<ul className="header__nav-list">
									<li className="header__nav-item user">
										<Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
											<div className="header__avatar-wrapper user__avatar-wrapper">
											</div>
											<span className="header__user-name user__name">Oliver.conner@gmail.com</span>
											<span className="header__favorite-count">{cards.length}</span>
										</Link>
									</li>
									<li className="header__nav-item">
										<Link className="header__nav-link" to={AppRoute.Login}>
											<span className="header__signout">Sign out</span>
										</Link>
									</li>
								</ul>
							) : (
								<ul className="header__nav-list">
									<li className="header__nav-item">
										<Link className="header__nav-link" to={AppRoute.Login}>
											<span className="header__signout">Sign in</span>
										</Link>
									</li>
								</ul>
							)}
						</nav>
					)}
				</div>
			</div>
		</header>
	);
}

export default Header;
