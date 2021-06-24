import NavBar from 'components/NavBar';
import Hero from './Hero';

const Header = () => {
    return (
        <header
            className="bg-gradient-to-br from-skin-primary-start to-skin-primary-end desktop:h-[75vh] h-[85vh] relative"
            id="header-intro"
        >
            <NavBar />
            <Hero />
        </header>
    );
};

export default Header;
