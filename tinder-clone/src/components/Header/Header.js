import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import logo from '../../assets/images/tinderFlame.svg';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>
      <img src={logo} alt="Tinder Logo" className="header_logo" />
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </header>
  );
}
