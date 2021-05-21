import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import ChevronIcon from './icons/ChevronIcon';

type DesktopNavLinkProps = {
    name: string;
    subLinks: string[];
};

const DesktopNavLink: React.FC<DesktopNavLinkProps> = ({ name, subLinks }) => {
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button className="flex items-center space-x-2 relative focus:outline-none">
                        <span className="font-utility text-skin-base font-medium">{name}</span>
                        <ChevronIcon
                            className={`text-[#FFFFFF] mt-0.5 h-[7px] w-[10px] stroke-current stroke-2 ${
                                open ? 'transform rotate-180' : ''
                            } ${subLinks.length !== 0 ? 'block' : 'hidden'}`}
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
                        <Popover.Panel>
                            <div className="flex flex-col absolute rounded-lg bg-skin-base top-11 shadow-xl -left-5 py-7 px-6 space-y-4 w-48 cursor-pointer">
                                {subLinks.map((name: string) => {
                                    return (
                                        <span className="font-utility text-skin-heading font-medium hover:font-bold">
                                            {name}
                                        </span>
                                    );
                                })}
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

export default DesktopNavLink;
