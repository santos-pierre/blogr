import { Popover, Transition } from '@headlessui/react';
import { Link } from 'interfaces';
import { Fragment } from 'react';
import HamburgerIcon from './ui/icons/HamburgerIcon';
import XIcon from './ui/icons/XIcon';
import NavLink from './ui/NavLink';

type MobileMenuProps = {
    links: Link[];
};

const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
    return (
        <Popover className="sm:hidden block">
            {({ open }) => (
                <>
                    <Popover.Button className="p-2 inline-flex items-center justify-center outline-none focus:outline-none">
                        {/* Hamburger Icon */}
                        <HamburgerIcon
                            className={`w-[32px] h-[18px] ${
                                open ? 'hidden' : 'block'
                            } text-white fill-current`}
                            fillRule="evenodd"
                        />
                        {/* X Icon */}
                        <XIcon
                            className={`${open ? 'block' : 'hidden'} h-8 w-8 -mt-1 text-white fill-current`}
                            fillRule="evenodd"
                        />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute z-10 inset-0 overflow-y-auto top-28">
                            <div className="flex flex-col space-y-6 justify-center text-center py-10 px-5 mx-5 bg-white rounded-lg shadow-xl">
                                {links.map((link: Link) => {
                                    return (
                                        <NavLink name={link.name} subLinks={link.subLinks} key={link.name} />
                                    );
                                })}
                                <hr className="mb-5" />
                                <div className="flex flex-col space-y-8 pt-4">
                                    <span className="text-2xl font-body font-semibold text-skin-heading">
                                        <a href="#">Login</a>
                                    </span>
                                    <button type="button">
                                        <span className="inline rounded-full py-4 px-10 font-utility text-skin-base bg-gradient-to-r from-skin-primary-start to-skin-primary-end font-semibold text-xl">
                                            <a href="#">Sign Up</a>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

export default MobileMenu;
