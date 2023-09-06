"use client"

import useAuthModal from '@/hooks/UseAuthModal'
import useUploadModal from '@/hooks/UseUploadModal'
import { useUser } from '@/hooks/UseUser'
import { Song } from '@/types'
import { FC } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { LuLibrary } from 'react-icons/lu'
import MediaItem from './MediaItem'
import UseOnPlay from '@/hooks/UseOnPlay'

interface LibraryProps {
  songs: Song[]
}

const Library:FC<LibraryProps> = ({songs}) => {
  const authModal = useAuthModal()
  const uploadModal = useUploadModal()
  const { user } = useUser()
  const onPlay = UseOnPlay(songs)

  const onClick = () => {
    if(!user){
      return authModal.onOpen()
    } 
    // TODO check subscription
    return uploadModal.onOpen()
  }
  return(
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 py-4">
        <div className="inline-flex items-center gap-x-2">
          <LuLibrary size={26} className="text-neutral-400"/>
          <p className='text-neutral-400 font-medium text-md'>
          Your Library
          </p>
        </div>
        <AiOutlinePlus onClick={onClick} size={20} className="text-neutral-400 cursor-pointer hover:text-white transition" />
      </div>
      <div className='flex flex-col gap-y-2 mt-4 px-3'>
        {songs.map((item) => (
          <MediaItem
            key={item.id}
            onClick={(id:string) => onPlay(id)}
            data={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Library