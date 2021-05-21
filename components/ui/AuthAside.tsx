const AuthAside = () => {
    return (
        <div className="flex flex-col desktop:flex-row space-y-8 desktop:space-x-8 desktop:space-y-0 pt-4 desktop:items-center">
            <span className="text-2xl desktop:font-utility desktop:text-base desktop:font-medium desktop:text-skin-base font-body font-semibold text-skin-heading desktop:cursor-pointer">
                Login
            </span>
            <button type="button">
                <span className="inline rounded-full py-4 px-10 font-utility text-skin-base bg-gradient-to-r from-skin-primary-start to-skin-primary-end font-semibold text-xl desktop:text-base desktop:bg-skin-base desktop:text-skin-primary desktop:from-transparent desktop:to-transparent desktop:hover:text-skin-base desktop:hover:bg-skin-hover-inverted transition-colors duration-200 focus:outline-none">
                    Sign Up
                </span>
            </button>
        </div>
    );
};

export default AuthAside;
