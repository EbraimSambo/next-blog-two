"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
    const isUserLoggedIn = true;
    const [providers, setProvviders] = useState(null);

    setProvviders(()=>{
       const providers = async () =>{
         const response = await getProviders();

         setProvviders(response);
       }

       setProvviders();
    }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center' >
            <Image src="/assets/images/logo.svg" alt='logo' width={30} height={30} className='object-contain' />
            <p className='logo_text'>Promptopia</p>
        </Link>

         {/* Desktop Nav */}
        <div className='sm:flex hidden '>
            {isUserLoggedIn ? (
                <div className='flex gap-3 md:gap-5 '>
                    <Link href="/" className='black_btn' >
                        Criar Post
                    </Link>

                    <button type='button' className='outline_btn' onClick={signOut} >
                        Sair
                    </button>

                    <Link href={"/pofilr"}>
                        <Image src="/assets/images/logo.svg" alt='Profile' width={37} className='rounded-full' height={37} />
                    </Link>
                </div>
            ): (
                <>
                {providers &&
                    Object.values(providers).map((provider)=>(
                        <button type='button'
                        key={provider.name}
                        onClick={()=> signIn(provider.id)}
                        className="black_btn">
                            Login
                        </button>
                    ))}
                </>
            ) }
        </div>
    </nav>
  )
}

export default Nav