import gl from "./webglContext"



const glBindRenderbuffer = (target: GLenum, renderbuffer: WebGLRenderbuffer | null): void => {
    gl.bindRenderbuffer(target, renderbuffer)
}



export default glBindRenderbuffer