import { useState } from 'react';

import './download-page.scss';
import logo from '../../assets/logos/full-text-1.png';

const DownloadPage = () => {
    const [pwaInstalled, setPWAInstalled] = useState(false);
    
    return (
        <div className="download-main">
            <div className="logo-container">
                <img className='logo' src={logo} alt="Stravian Logo" />
            </div>
            Download page coming soon...
        </div>
    );
};

export default DownloadPage;