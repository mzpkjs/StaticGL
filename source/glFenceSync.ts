import gl from "./webglContext"



const glFenceSync = (condition: GLenum, flags: GLbitfield): WebGLSync => {
    return (gl as WebGL2RenderingContext).fenceSync(condition, flags) as WebGLSync
}



export default glFenceSync