import Title from './ui/Title';
import SubTitle from './ui/SubTitle';
import Paragraph from './ui/Paragraph';

const IntroSection = () => {
    return (
        <section className="relative desktop:my-44 my-16 desktop:px-0 px-5">
            <Title center additionalStyle="deskktop:mb-0 mb-10">
                Designed for the future
            </Title>
            {/* width="406" height="331" */}
            <div className="flex flex-col desktop:flex-row items-center dektop:ml-80 desktop:h-[80vh] space-y-14 desktop:space-y-0">
                <div
                    className="desktop:hidden block"
                    style={{
                        width: '406px',
                        height: '331px',
                        backgroundImage: "url('/assets/images/illustration-editor-mobile.svg')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100%',
                        backgroundPosition: 'center',
                    }}
                ></div>
                <div className="flex flex-col desktop:w-2/5 w-full space-y-20 desktop:ml-80">
                    <div className="space-y-6">
                        <SubTitle>
                            Introducing an <br className="desktop:hidden block" />
                            extensible editor
                        </SubTitle>
                        <Paragraph>
                            Blogr features an exceedingly intuitive interface which lets you focus on one
                            thing: creating content. The editor supports management of multiple blogs and
                            allows easy manipulation of embeds such as images, videos, and Markdown.
                            Extensibility with plugins and themes provide easy ways to add functionality or
                            change the looks of a blog.
                        </Paragraph>
                    </div>
                    <div className="space-y-6">
                        <SubTitle>
                            Robust content <br className="desktop:hidden block" /> management
                        </SubTitle>
                        <Paragraph>
                            Flexible content management enables users to easily move through posts. Increase
                            the usability of your blog by adding customized categories, sections, format, or
                            flow. With this functionality, you’re in full control.
                        </Paragraph>
                    </div>
                </div>
                <div className="desktop:block hidden ml-56 overflow-hidden">
                    <div
                        style={{
                            width: '925px',
                            height: '1100px',
                            backgroundImage: "url('/assets/images/illustration-editor-desktop.svg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '120%',
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
