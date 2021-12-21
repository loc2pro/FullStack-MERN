import { useContext } from "react";
import Button from "react-bootstrap/Button";
import learnItLogo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout.svg";
import { AuthContext } from "../../contexts/AuthContext";

const NavbarMenu = () => {
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => logoutUser();

  return (
    // <Navbar expand='lg' bg='primary' variant='dark' className='shadow'>
    // 	<Navbar.Brand className='font-weight-bolder text-white'>
    // 		<img
    // 			src={learnItLogo}
    // 			alt='learnItLogo'
    // 			width='32'
    // 			height='32'
    // 			className='mr-2'
    // 		/>
    // 		LearnIt
    // 	</Navbar.Brand>

    // 	<Navbar.Toggle aria-controls='basic-navbar-nav' />

    // 	<Navbar.Collapse id='basic-navbar-nav'>
    // 		<Nav className='mr-auto'>
    // 			<Nav.Link
    // 				className='font-weight-bolder text-white'
    // 				to='/dashboard'
    // 				as={Link}
    // 			>
    // 				Dashboard
    // 			</Nav.Link>
    // 			<Nav.Link
    // 				className='font-weight-bolder text-white'
    // 				to='/about'
    // 				as={Link}
    // 			>
    // 				About
    // 			</Nav.Link>
    // 		</Nav>

    // 		<Nav>
    // 			<Nav.Link className='font-weight-bolder text-white' disabled>
    // 				Welcome {username}
    // 			</Nav.Link>
    // 			<Button
    // 				variant='secondary'
    // 				className='font-weight-bolder text-white'
    // 				onClick={logout}
    // 			>
    // 				<img
    // 					src={logoutIcon}
    // 					alt='logoutIcon'
    // 					width='32'
    // 					height='32'
    // 					className='mr-2'
    // 				/>
    // 				Logout
    // 			</Button>
    // 		</Nav>
    // 	</Navbar.Collapse>
    // </Navbar>

    //
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/dashboard">
        <img
          src={learnItLogo}
          alt="learnItLogo"
          width="50"
          height="50"
          className="mr-2"
        />
        LearnIt
      </a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/dashboard">
              DarhBoard{" "}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          {/*  search */}
        </ul>
        <form className="form-inline mx-auto">
          <input
            className="form-control mr-sm-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        {/* logout  */}
        <form className="form-inline ml-5 mr-5 my-lg-0">
          <a
            className="nav-link disabled"
          >
            Welcome {username}
          </a>
          <Button
            variant="secondary"
            className="font-weight-bolder text-white"
            onClick={logout}
          >
            <img
              src={logoutIcon}
              alt="logoutIcon"
              width="32"
              height="32"
              className="mr-2"
            />
            Logout
          </Button>
        </form>
      </div>
    </nav>
  );
};

export default NavbarMenu;
