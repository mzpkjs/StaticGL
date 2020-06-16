import gl from "./webglContext"



const glBindBuffer = (target: GLenum, buffer: WebGLBuffer | null): void => {
    gl.bindBuffer(target, buffer)
}



export default glBindBuffer