import gl from "./webglContext"



const glIsSync = (sync: WebGLSync | null): GLboolean => {
    return (gl as WebGL2RenderingContext).isSync(sync)
}



export default glIsSync