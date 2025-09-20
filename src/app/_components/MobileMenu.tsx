'use client';

import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        console.log('Menu toggle clicked, current state:', isOpen); // Debug log
        setIsOpen(!isOpen);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Mobile Header with Hamburger */}
            <div className="md:hidden flex items-center justify-between p-4 border-b border-[#0ff] backdrop-blur-sm">
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10">
                        <div className="absolute inset-0 rounded-full overflow-hidden ring-2 ring-[#0ff]/60">
                            <img src="/profile_img.jpg" alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold tracking-tight text-[#0ff]">Daud Mir</h1>
                        <p className="text-[#0ff]/50 text-xs uppercase tracking-wider">Software Engineer</p>
                    </div>
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#0ff]/60 transition-colors"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-6 flex flex-col justify-center items-center">
                        <span
                            className={`bg-[#0ff] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                                }`}
                        ></span>
                        <span
                            className={`bg-[#0ff] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                        ></span>
                        <span
                            className={`bg-[#0ff] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                                }`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={toggleMenu}
                />
            )}

            {/* Mobile Menu Sidebar */}
            <div
                className={`md:hidden fixed top-0 left-0 h-full w-80 bg-[#000d0d]/70 backdrop-blur-md border-r border-[#0ff]/50 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-6 h-full overflow-y-auto bg-[#0ff]/20">
                    {/* Close Button */}
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#000f0f]/60 transition-colors"
                            aria-label="Close menu"
                        >
                            <svg className="w-6 h-6 text-[#0ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Content */}
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="relative w-24 h-24">
                            <div className="ring-pulse anim-delay-0"></div>
                            <div className="ring-pulse anim-delay-300"></div>
                            <div className="ring-pulse anim-delay-600"></div>
                            <div className="ring-pulse anim-delay-900"></div>
                            <div className="absolute inset-0 rounded-full overflow-hidden ring-2 ring-[#0ff]/60">
                                <img src="/profile_img.jpg" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className='mt-10'>
                            <h1 className="text-xl font-semibold tracking-tight text-[#0ff]">Daud Mir</h1>
                            <p className="text-[#0ff]/70 text-xs uppercase tracking-wider mt-1">Software Engineer</p>
                        </div>

                        <p className="text-xs text-neutral-400 text-center">
                            MERN Stack | React Native | Next.js | Nest.js | Node.js & TypeScript
                        </p>

                        <p className="text-sm text-neutral-300/90 leading-relaxed text-center">
                            Problem-solving focused engineer with 2+ years of experience, delivering clean, maintainable solutions on time and with clear communication you can trust.
                        </p>

                        <div className="pt-2">
                            <a
                                href="https://www.upwork.com/freelancers/~011c6281fefdb34981"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 rounded-md bg-[#0ff] text-black border border-[#0ff] hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0ff]/60 flex items-center gap-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <img src="/upwork.png" alt="Upwork" className="h-5 w-auto" />
                                <span>work with me</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
