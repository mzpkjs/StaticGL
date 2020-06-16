import gl from "./webglContext"



const glGetFragDataLocation = (program: WebGLProgram, name: string): GLint => {
    return (gl as WebGL2RenderingContext).getFragDataLocation(program, name)
}



export default glGetFragDataLocation