import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './error-page.scss';
import logo from '../../assets/logos/full-text-3.png';

const ErrorPage = ({ errorTitle, faIcon, errorCaption }) => (
    <div className="error-main">

        <div className="logo-container">
            <img className='logo' src={logo} alt="Stravian Logo" />
        </div>

        <div className="content">
            <h1>{errorTitle}</h1>
            <FontAwesomeIcon icon={faIcon} className="icon" />
            <h3>{errorCaption}</h3>
        </div>

    </div>
);

export default ErrorPage;