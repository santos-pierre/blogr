const Paragraph: React.FC = ({ children }) => {
    return (
        <p className="font-body text-skin-neutral-body font-light desktop:text-lg text-base desktop:text-left desktop:pr-[4.3rem] text-center tracking-wider leading-loose">
            {children}
        </p>
    );
};

export default Paragraph;
