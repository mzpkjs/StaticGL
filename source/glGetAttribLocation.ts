import gl from "./webglContext"



const glGetAttribLocation = (program: WebGLProgram, name: string): GLint => {
    return gl.getAttribLocation(program, name)
}



export default glGetAttribLocation