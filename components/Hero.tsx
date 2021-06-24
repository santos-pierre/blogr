const Hero = () => {
    return (
        <div className="transform text-center w-full absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col space-y-14 desktop:space-y-16">
                <div className="space-y-6">
                    <h1 className="font-body font-bold desktop:text-7xl text-4xl text-skin-base">
                        A modern <br className="desktop:hidden block" /> publishing platform
                    </h1>
                    <p className="desktop:text-2xl font-body text-skin-base font-light ">
                        Grow your audience and build your <br className="desktop:hidden block" />
                        online brand
                    </p>
                </div>
                <div className="space-x-6">
                    <button type="button" className="focus:outline-none">
                        <span className="inline rounded-full py-4 px-4 font-utility text-skin-primary bg-skin-base font-semibold text-base desktop:text-lg desktop:bg-skin-base desktop:text-skin-primary desktop:from-transparent desktop:to-transparent desktop:hover:text-skin-base desktop:hover:bg-skin-hover-inverted transition-colors duration-200">
                            Start for Free
                        </span>
                    </button>
                    <button type="button" className="focus:outline-none">
                        <span className="inline rounded-full py-4 px-8 font-utility text-skin-base bg-transparent font-semibold text-base desktop:text-lg desktop:bg-transparent desktop:text-skin-base desktop:from-transparent desktop:to-transparent desktop:hover:text-skin-hover desktop:hover:bg-skin-hover transition-colors duration-200 focus:outline-none border border-solid border-skin-base">
                            Learn More
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
