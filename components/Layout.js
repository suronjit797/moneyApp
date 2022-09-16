import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";


const Layout = ({ children, title }) => {
    let isUser
    const router = useRouter()
    if (typeof window !== 'undefined') {
        isUser = localStorage.getItem('token')
    }

    useEffect(() => {
        if (!isUser) {
            router.push('/login')
        }
    }, [isUser])




    return (
        <div className="bg-info text-white">
            <div className='layout container'>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <nav>  </nav>

                <main>
                    {children}
                </main>

                <footer>

                </footer>
            </div>
        </div>

    );
};

export default Layout;