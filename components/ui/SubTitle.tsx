type SubTitleProps = {
    additionalStyle?: string;
};

const SubTitle: React.FC<SubTitleProps> = ({ additionalStyle = '', children }) => {
    return (
        <h2
            className={`desktop:text-left text-center font-body text-skin-heading font-semibold desktop:text-3xl text-2xl ${additionalStyle}`}
        >
            {children}
        </h2>
    );
};

export default SubTitle;
