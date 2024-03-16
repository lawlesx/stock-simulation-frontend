import { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

const useSocket = () => {
  const [socket, setSocket] = useState<Socket>()

  useEffect(() => {
    const _socket = io('http://localhost:8080')
    _socket.on('connect', () => {
      console.log('Connected to server')
    })

    _socket.on('disconnect', () => {
      console.log('Disconnected from server')
    })

    setSocket(_socket)

    return () => {
      _socket.disconnect()
    }
  }, [])

  return socket
}

export default useSocket
