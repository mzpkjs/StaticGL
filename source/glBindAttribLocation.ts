import gl from "./webglContext"



const glBindAttribLocation = (program: WebGLProgram, index: GLuint, name: string): void => {
    gl.bindAttribLocation(program, index, name)
}



export default glBindAttribLocation