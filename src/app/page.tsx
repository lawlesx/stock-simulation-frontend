'use client'
import useSocket from '@/hooks/useSocket'
import { useEffect } from 'react'

export default function Home() {
  const socket = useSocket()

  useEffect(() => {
    if (socket) {
      socket.on('time-series-intraday-day', (data) => {
        console.log('time-series-intraday-day', data?.['Time Series (1min)']['2024-03-18 18:20:00'])
      })

      return () => {
        socket.off('time-series-intraday-day')
      }
    }
  }, [socket])

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full items-center justify-center font-mono text-sm lg:flex'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200  lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30'>
          Socket Trials: <code className='pl-2 font-mono font-bold'>creator is still testing out backend</code>
        </p>
      </div>
    </main>
  )
}
