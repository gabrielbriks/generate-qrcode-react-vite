import QrCode from "qrcode";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

type PropsType = {
  text: string;
}

export function QrCodeCanvas({ text }: PropsType) {

  const canvasRef = useRef<any>();

  useEffect(() => {
    if (text) {
      QrCode.toCanvas(canvasRef.current, text, (error) => {
        error ? toast.error(error.message) : null;
      })
    }

  }, [text])


  return (
    <div>
      {text ?
        <canvas ref={canvasRef} id="canvas"></canvas>
        : null
      }



    </div>

  )
}