"use client";

import { useState } from "react";
import Link from "next/link";
import { ClerkLoaded, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { X } from "lucide-react";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="text-sm font-semibold tracking-widest uppercase hover:text-gray-200 transition-colors"
            >
                MENU =
            </button>

            {/* Sidebar Overlay */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-full bg-black/50 transform ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"
                    } transition-all duration-300`}
                onClick={() => setIsOpen(false)}
            >
                <div
                    className={`fixed inset-y-0 left-0 w-80 bg-[#f6f5f3] text-black shadow-2xl p-8 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                        } transition-transform duration-300 flex flex-col`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mb-10">
                        <span className="font-bold tracking-widest uppercase text-sm">Menu</span>
                        <button onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 text-sm font-medium tracking-wide">
                        <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition-colors">HOME</Link>
                        <Link href="/shop" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition-colors">SHOP</Link>

                        <hr className="border-gray-300 my-4" />

                        <ClerkLoaded>
                            <SignedIn>
                                <div className="flex items-center gap-4">
                                    <UserButton />
                                    <span>My Account</span>
                                </div>
                                <Link href="/orders" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition-colors mt-2">Orders</Link>
                            </SignedIn>
                            <SignedOut>
                                <Link href="/signin" onClick={() => setIsOpen(false)} className="hover:text-gray-500 transition-colors">Login / Register</Link>
                            </SignedOut>
                        </ClerkLoaded>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HamburgerMenu;
