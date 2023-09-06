"use client"

import UseGetSongById from "@/hooks/UseGetSongById"
import UseLoadSongUrl from "@/hooks/UseLoadSongUrl"
import UsePlayer from "@/hooks/UsePlayer"
import PlayerContent from "./PlayerContent"

const Player = () => {
  const player = UsePlayer()
  const { song } = UseGetSongById(player.activeId)

  const songUrl = UseLoadSongUrl(song!)

  if(!song || !songUrl || !player.activeId){
    return null
  }

  return(
    <div
      className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4"
    >
      <PlayerContent
        key={songUrl}
        song={song}
        songUrl={songUrl}
      />
    </div>
  )
}

export default Player
