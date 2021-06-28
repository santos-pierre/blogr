import Title from './ui/Title';
import SubTitle from './ui/SubTitle';
import Paragraph from './ui/Paragraph';

const IntroSection = () => {
    return (
        <section className="relative my-44">
            <Title center additionalStyle="">
                Designed for the future
            </Title>
            <div className="flex items-center ml-80 h-[80vh]">
                {/* Text Section */}
                <div className="flex flex-col w-2/5 space-y-20">
                    <div className="space-y-6">
                        <SubTitle>Introducing an extensible editor</SubTitle>
                        <Paragraph>
                            Blogr features an exceedingly intuitive interface which lets you focus on one
                            thing: creating content. The editor supports management of multiple blogs and
                            allows easy manipulation of embeds such as images, videos, and Markdown.
                            Extensibility with plugins and themes provide easy ways to add functionality or
                            change the looks of a blog.
                        </Paragraph>
                    </div>
                    <div className="space-y-6">
                        <SubTitle>Robust content management</SubTitle>
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
