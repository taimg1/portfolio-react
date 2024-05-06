import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


const navigationLinks = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    {name: 'Contact', href: '#contact' },

]

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (show) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`lg:mx-32 ${isScrolled ? 'rounded-full fixed top-1 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-gray-900 bg-opacity-25 hover:bg-gray-900' : ''}`}>
            <header className=" inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Portfolio</span>
                            <img
                                className="h-8 w-auto"
                                src={require(".//assets/icons8-portfolio-50.png")}
                                alt=""
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigationLinks.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6  text-white">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 px-2">
                            <img
                                className="h-6 w-6"
                                src={require(".//assets/icons8-instagram-50.png")}
                            />
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 px-2">
                            <img
                                className="h-6 w-6"
                                src={require(".//assets/icons8-facebook-50.png")}
                            />
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 px-2">
                            <img
                                className="h-6 w-6"
                                src={require(".//assets/icons8-twitterx-50.png")} alt="test"
                            />
                        </a>

                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50"/>
                    <Dialog.Panel
                        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigationLinks.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                        <img src={require(".//assets/icons8-instagram-50.png")} alt="test"/>
                                    </a>
                                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                        <img src={require(".//assets/icons8-facebook-50.png")} alt="test"/>
                                    </a>
                                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                        <img src={require(".//assets/icons8-twitterx-50.png")} alt="test"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}