import { SVGProps } from 'react';

const ChevronIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M1 1l4 4 4-4" fill="none" />
        </svg>
    );
};

export default ChevronIcon;
