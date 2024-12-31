"use client"

import Image from "next/image";
import Link from "next/link";
import { signOut, signIn, useSession } from 'next-auth/react'
import { useEffect, useState } from "react";

const Nav = () => {
    const isUserLoggedId = true;
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, settoggleDropdown] = useState(null);

    useEffect(() => {
        const setProviders = async () => {
            const providers = await getProviders();
            setProviders(providers);
        }
        setProviders();
    }, []);

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex- fap-2 flex-center" >
                <Image src="/assets/images/logo.svg" alt="Mr Prompt Logo" width="30" height="30" />
                <p className="logo_text ms-2">Mr Prompt</p>
            </Link>

            <div className="md:flex hidden">
                {isUserLoggedId ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className="black_btn">
                            Create Post
                        </Link>

                        <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
                        <Link href="/profile">
                            <Image src="/assets/images/logo.svg" width={37} height={37} className="rounded-full" alt="profile image"></Image>
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
                                Sign in with {provider.name}
                            </button>
                        ))}
                    </>
                )}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex relative">
                {isUserLoggedId ? (
                    <div className="flex">
                        <Image src="/assets/images/logo.svg" width={37} height={37} className="rounded-full" alt="profile image" onClick={() => settoggleDropdown((prev) => !prev)} />

                        {toggleDropdown &&
                            (
                                <div className="dropdown">
                                    <Link href="/profile" className="dropdown_link" onClick={() => settoggleDropdown((prev) => false)}>My Profile</Link>

                                    <Link href="/create-prompt" className="dropdown_link" onClick={() => settoggleDropdown((prev) => false)}>Create Prompt</Link>

                                    <button className="mt-5 w-full black_btn" onClick={() => {
                                        setToggleDropdown(false)
                                        signOut()
                                    }}>Sign Out</button>

                                </div>
                            )}
                    </div>
                ) : (<>
                    {providers && Object.values(providers).map((provider) => (
                        <button key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">
                            Sign in with {provider.name}
                        </button>
                    ))}
                </>)}
            </div>
        </nav>
    )
}

export default Nav