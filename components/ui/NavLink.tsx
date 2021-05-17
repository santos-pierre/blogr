import { Disclosure } from '@headlessui/react';
import React from 'react';

type NavLinkProps = {
    name: string;
    subLinks: string[];
};

const NavLink: React.FC<NavLinkProps> = ({ name, subLinks }) => {
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="7"
                            className={`${open ? 'transform rotate-180' : ''} ${
                                subLinks.length !== 0 ? 'block' : 'hidden'
                            }`}
                        >
                            <path fill="none" stroke="#FF7B86" stroke-width="2" d="M1 1l4 4 4-4" />
                        </svg>
                    </Disclosure.Button>
                    <Disclosure.Panel className="py-6 text-sm text-skin-heading rounded-lg bg-skin-neutral-inverted flex flex-col space-y-5">
                        {subLinks.map((name: string) => {
                            return (
                                <span className="font-body text-xl font-semibold opacity-75 hover:opacity-100">
                                    <a href="#">{name}</a>
                                </span>
                            );
                        })}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default NavLink;
