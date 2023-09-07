"use client"

import AuthModal from "@/components/AuthModal"
import UploadModal from "@/components/UploadModal"
import { FC, useEffect, useState } from "react"
import { ProductWithPrice } from "@/types";
import SubscribeModal from "@/components/SubscribeModal";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider:FC<ModalProviderProps> = ({products}) => {
 const [isMounted, setIsMounted] = useState<boolean>(false)

 useEffect(() => {
  setIsMounted(true)
 }, [])

 if(!isMounted) {
  return null
 }

 return(
  <>
    <AuthModal/>
    <SubscribeModal products={products} />
    <UploadModal/>
  </>
 )
}

export default ModalProvider