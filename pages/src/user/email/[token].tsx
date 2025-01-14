import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import imageLoader from '../../../../imageLoader'
import Link from 'next/link'
import { useRouter } from "next/router"
import axios from "axios"
import { toast } from "react-toastify"
import { useEffect } from "react"

function EmailVerification() {
    const router = useRouter()

    const { token } = router.query
    
    useEffect(() => {
      sendToken(token)
    }, [token])
  
    const sendToken = async (token: string | string[] | undefined) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        }
  
        const { data } = await axios.put(`/api/user/email/${token}`, {}, config)
        toast.success(data.message)
      } catch (error: any) {
        toast.error(error?.response?.data?.error)
      }
    }

  return (
    <div className='relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent'>
        <Head>
            <title>Video Streaming</title>
            <meta name="description" content="Stream Video App" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='h-full w-full relative flex flex-col md:items-center md:justify-center'>
                <Image
                    src="https://rb.gy/p2hphi"
                    layout="fill"
                    className="-z-10 !hidden opacity-60 sm:!inline"
                    objectFit="cover"
                    alt='icon image'
                    loader={imageLoader}
                />
                    {/* Logo position */}
                <img
                    src="https://rb.gy/ulxxee"
                    className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
                    width={150}
                    height={150}
                />
                <div className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-lg md:px-14'>
                    <h1 className='text-4xl font-semibold'>Enhorabuena!</h1>
                    <div className='space-y-4'>
                        <label className='inline-block w-full'>
                            <p>Ya puedes utilizar tu cuenta</p>
                        </label>
                        <Link href={"/src/user/login"}> 
                        <button type='button' className='text-white underline cursor-pointer'>Ingresar al sitio</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default EmailVerification