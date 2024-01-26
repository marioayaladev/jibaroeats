/* eslint-disable no-unused-vars */
export interface ImageProps {
    id: string
    height: string
    width: string
    public_id: string
    format: string
    blurDataUrl?: string
    title:string
  }
  
export interface VideoProps {
  id: string;
  videoId: string;
  title: string;
}
  
  export interface SharedModalProps {
    index: number
    images?: ImageProps[]
    currentPhoto?: ImageProps
    changePhotoId: (newVal: number) => void
    closeModal: () => void
    navigation: boolean
    direction?: number
  }
  