import gl from "./webglContext"



const webglGetCurrentContext = (): WebGLRenderingContext | WebGL2RenderingContext => {
    return gl
}



export default webglGetCurrentContext