import gl from "./webglContext"



const glCreateBuffer = (): WebGLBuffer => {
    return gl.createBuffer() as WebGLBuffer
}



export default glCreateBuffer