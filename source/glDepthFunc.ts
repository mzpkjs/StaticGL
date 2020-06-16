import gl from "./webglContext"



const glDepthFunc = (func: GLenum): void => {
    gl.depthFunc(func)
}



export default glDepthFunc