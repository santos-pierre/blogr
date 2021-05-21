import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const links = [
    {
        name: 'Product',
        subLinks: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'],
    },
    {
        name: 'Company',
        subLinks: [' About', 'Team', 'Blog', ' Careers'],
    },
    {
        name: 'Connect',
        subLinks: ['Contact', 'Newsletter', 'LinkedIn'],
    },
];

const NavBar = () => {
    return (
        <nav className="flex pt-10 pb-5 justify-between desktop:justify-around items-center mx-5 desktop:mx-80 h-24">
            <div className="flex-shrink-0 flex items-center">
                <img className="block h-8 w-auto" src="/assets/images/logo.svg" alt="Blogr" />
            </div>
            <DesktopMenu links={links} />
            <MobileMenu links={links} />
        </nav>
    );
};

export default NavBar;
