import gl from "./webglContext"



const glIsRenderbuffer = (renderbuffer: WebGLRenderbuffer | null): GLboolean => {
    return gl.isRenderbuffer(renderbuffer)
}



export default glIsRenderbuffer