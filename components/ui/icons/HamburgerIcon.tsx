import { SVGProps } from 'react';

const HamburgerIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <g>
                <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
            </g>
        </svg>
    );
};

export default HamburgerIcon;
