import gl from "./webglContext"



const glCreateProgram = (): WebGLProgram => {
    return gl.createProgram() as WebGLProgram
}



export default glCreateProgram