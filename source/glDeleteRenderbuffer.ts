import gl from "./webglContext"



const glDeleteRenderbuffer = (renderbuffer: WebGLRenderbuffer | null): void => {
    gl.deleteRenderbuffer(renderbuffer)
}



export default glDeleteRenderbuffer