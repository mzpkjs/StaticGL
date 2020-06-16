import { __secretly_set_current_context } from "./webglContext"



const webglMakeCurrent = (context: WebGLRenderingContext | WebGL2RenderingContext): boolean => {
    return __secretly_set_current_context(context)
}



export default webglMakeCurrent