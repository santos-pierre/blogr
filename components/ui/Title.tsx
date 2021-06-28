type TitleProps = {
    center?: boolean;
    additionalStyle?: string;
};

const Title: React.FC<TitleProps> = ({ center = false, additionalStyle = '', children }) => {
    return (
        <h2
            className={`text-skin-heading font-body text-5xl font-semibold ${center ? 'text-center' : null} ${
                additionalStyle ? additionalStyle : ''
            }`}
        >
            {children}
        </h2>
    );
};

export default Title;
