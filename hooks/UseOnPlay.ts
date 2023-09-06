import { Song } from "@/types";
import UsePlayer from "./UsePlayer";
import useAuthModal from "./UseAuthModal";
import { useUser } from "./UseUser";

const UseOnPlay =  (songs:Song[]) => {
  const player = UsePlayer()
  const authModal = useAuthModal()
  const { user } = useUser()

  const onPlay = (id:string) => {
    if(!user){
      return authModal.onOpen()
    }

    player.setId(id)
    player.setIds(songs.map((song) => song.id))
  }

  return onPlay
}

export default UseOnPlay