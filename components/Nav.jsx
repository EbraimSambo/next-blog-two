"use client";

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
    const isUserLoggedIn = true;
    const [providers, setProviders] = useState(null);
    // buttom menu
    const [toggleDropdwon, setToggleDropdwon] = useState(false)
    useEffect(()=>{
       const setProviders = async () =>{

         const response = await getProviders();
         setProviders(response);

       }

       setProviders();
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
                {providers && Object.values(providers).map((provider)=>(
                        <button type='button'
                        key={provider.name}
                        onClick={()=> signIn(provider.id)}
                        className="black_btn">
                            Login
                        </button>
                    )) }
                </>
            )}
        </div>

        {/* Navigaton Moble */}

        <div className='sm:hidden flex relative'>
            {isUserLoggedIn ? (
                <div className='flex'>
                    <Image 
                        src="/assets/images/logo.svg" 
                        alt='Profile' width={37} 
                        className='rounded-full' height={37} 
                        onClick={()=> setToggleDropdwon((prev)=> !prev)}
                        />

                        {toggleDropdwon &&(
                            <div className='dropdown'>
                                <Link href={"/profile"} 
                                className='dropdown_link'
                                onClick={()=> setToggleDropdwon(false)}>
                                    Meu Perfil
                                </Link>

                                <Link href="/create-prompt"
                                className='dropdown_link'
                                onClick={()=> setToggleDropdwon(false)}>
                                    Criar Post
                                </Link>

                                <button 
                                  type='button'
                                  onClick={()=> {
                                    setToggleDropdwon(false);
                                      signOut()
                                    }}
                                    className='mt-5 w-full black_btn'>
                                        Sair
                                </button>

                            </div>
                        )}
                </div>
            ):(
                <>
                {providers && Object.values(providers).map((provider)=>(
                        <button type='button'
                        key={provider.name}
                        onClick={()=> signIn(provider.id)}
                        className="black_btn">
                            Login
                        </button>
                    )) }
                </>
            )}
        </div>
    </nav>
  )
}

export default Nav