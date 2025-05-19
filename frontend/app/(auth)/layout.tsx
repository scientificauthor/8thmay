import React from 'react'
import LogoWithText from '@/public/assets/icons/_components/LogoWithText';
import LogoIcon from '@/public/assets/icons/_components/Logo';

const AuthLayout = (props: any) => {
    const { children } = props;
    return (
        <section className='auth-layout h-dvh overflow-auto flex flex-col p-3 sm:p-0'>
            <header className='auth-logo sm:pt-3'>
                <div className="container mx-auto sm:px-3">
                    <LogoIcon />
                </div>
            </header>
            <main className='auth-content-container py-10 m-auto w-full'>
                <div className="container mx-auto sm:px-3">
                    <div className="grid">
                        <div className='mx-auto sm:border sm:px-6 py-0 sm:py-8 rounded-lg w-full md:w-[640]'>
                            {children}
                        </div>
                    </div>
                </div>
            </main>
            <footer className='auth-footer rounded-[10px] sm:rounded-none'>
                <div className="container mx-auto text-[12px] fw-medium sm:text-sm">
                    &copy; 2025 (citehub).¹ Privacy Policy
                </div>
            </footer>
        </section>
    )
}

export default AuthLayout