import { Link } from 'interfaces';
import AuthAside from './ui/AuthAside';
import DesktopNavLink from './ui/DesktopNavLink';

type DesktopMenuProps = {
    links: Link[];
};

const DesktopMenu: React.FC<DesktopMenuProps> = ({ links }) => {
    return (
        <div className="flex-grow mx-14">
            <div className="hidden desktop:flex justify-between items-center">
                <div className="flex space-x-5">
                    {links.map((link: Link) => {
                        return <DesktopNavLink key={link.name} name={link.name} subLinks={link.subLinks} />;
                    })}
                </div>
                <AuthAside />
            </div>
        </div>
    );
};

export default DesktopMenu;
