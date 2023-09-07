import { Song } from "@/types";
import UsePlayer from "./UsePlayer";
import useAuthModal from "./UseAuthModal";
import { useUser } from "./UseUser";
import useSubscribeModal from "./UseSubscribeModal";

const UseOnPlay =  (songs:Song[]) => {
  const player = UsePlayer()
  const subscribeModal = useSubscribeModal()
  const authModal = useAuthModal()
  const { user, subscription } = useUser()

  const onPlay = (id:string) => {
    if(!user){
      return authModal.onOpen()
    }

    if(!subscription){
      return subscribeModal.onOpen()
    }

    player.setId(id)
    player.setIds(songs.map((song) => song.id))
  }

  return onPlay
}

export default UseOnPlay