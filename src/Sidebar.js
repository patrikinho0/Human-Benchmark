import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const sidebarRef = useRef(null); 

    const navigationLinks = [
        { name: 'Reaction Time', path: '/', icon: faHome },
        { name: 'Login', path: '/login', icon: faSignInAlt },
        { name: 'Register', path: '/register', icon: faUserPlus },
    ];

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLinkClick = () => {
        setIsSidebarOpen(false);
    };
    
    return (
        <>
            <div className="mobile-sidebar-toggle-container">
                <button 
                    onClick={handleToggleSidebar} 
                    className="sidebar-toggle-button"
                >
                    <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />
                </button>
            </div>

            <aside 
                ref={sidebarRef}
                className={`sidebar-main-container ${isSidebarOpen ? 'open' : ''}`}
            >
                <div className="sidebar-header">
                    <h2 className="sidebar-title">Human Benchmark</h2>
                </div>

                <nav className="sidebar-navigation">
                    <ul className="sidebar-nav-list">
                        {navigationLinks.map((linkItem, index) => (
                            <li 
                                key={index} 
                                className="sidebar-list-item"
                            >
                                <Link
                                    to={linkItem.path}
                                    className="sidebar-nav-link"
                                    onClick={handleLinkClick}
                                >
                                    <FontAwesomeIcon icon={linkItem.icon} className="sidebar-link-icon" />
                                    <span className="sidebar-link-text">{linkItem.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="sidebar-footer">
                    <span className="sidebar-footer-text">&copy; {new Date().getFullYear()} Human Benchmark</span>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;