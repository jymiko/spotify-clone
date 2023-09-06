"use client"

import UseLoadImage from "@/hooks/UseLoadImage"
import { Song } from "@/types"
import Image from "next/image"
import { FC } from "react"
import PlayButton from "./PlayButton"

interface SongItemProps {
  data: Song
  onClick: (id:string) => void
}
const SongItem:FC<SongItemProps> = ({data, onClick}) => {

  const imagePath = UseLoadImage(data)

  return(
    <div
      className="relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3"
      onClick={() => onClick(data.id)}
    >
      <div
        className="relative aspect-square w-full h-full rounded-md overflow-hidden"
      >
        <Image className="object-cover" src={imagePath || ''} fill alt="image"/>
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full">By {data.author}</p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton/>
      </div>
    </div>
  )
}

export default SongItem