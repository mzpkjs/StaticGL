import gl from "./webglContext"



const glIsBuffer = (buffer: WebGLBuffer | null): GLboolean => {
    return gl.isBuffer(buffer)
}



export default glIsBuffer