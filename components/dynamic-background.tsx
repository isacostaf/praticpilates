"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { useEffect, useState } from "react"

export function DynamicBackground() {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 w-screen h-screen z-0 pointer-events-none" aria-hidden="true">
      <MeshGradient
        width={dimensions.width}
        height={dimensions.height}
        colors={["#b3ccc0", "#c3d7d9", "#d8e4c8", "#e8dcc8", "#c9dbcf", "#e4ead0"]}
        distortion={0.75}
        swirl={0.55}
        grainMixer={0}
        grainOverlay={0}
        speed={0.42}
        offsetX={0.08}
      />
      {/* Soft scrim to add depth and keep content legible over the animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/40" />
    </div>
  )
}
