import { Disclosure } from '@headlessui/react';
import React from 'react';
import ChevronIcon from './icons/ChevronIcon';

type MobileNavLinkProps = {
    name: string;
    subLinks: string[];
};

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ name, subLinks }) => {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button
                        className={`inline-flex items-center justify-center space-x-3 text-2xl font-body font-semibold text-skin-heading focus:outline-none ${
                            open ? 'opacity-60' : ''
                        }`}
                    >
                        <span>{name}</span>
                        <ChevronIcon
                            className={`${open ? 'transform rotate-180' : ''} ${
                                subLinks.length !== 0 ? 'block' : 'hidden'
                            } text-[#FF7B86] h-[7px] w-[10px] stroke-current stroke-2`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="py-6 text-sm text-skin-heading rounded-lg bg-skin-neutral-inverted flex flex-col space-y-5">
                        {subLinks.map((name: string, index: number) => {
                            return (
                                <span
                                    className="font-body text-xl font-semibold opacity-75 hover:opacity-100"
                                    key={`${name}-${index}-mobile-link`}
                                >
                                    {name}
                                </span>
                            );
                        })}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default MobileNavLink;
