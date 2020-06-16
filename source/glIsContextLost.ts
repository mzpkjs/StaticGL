import gl from "./webglContext"



const glIsContextLost = (): boolean => {
    return gl.isContextLost()
}



export default glIsContextLost