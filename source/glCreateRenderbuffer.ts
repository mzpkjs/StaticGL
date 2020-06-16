import gl from "./webglContext"



const glCreateRenderbuffer = (): WebGLRenderbuffer => {
    return gl.createRenderbuffer() as WebGLRenderbuffer
}



export default glCreateRenderbuffer