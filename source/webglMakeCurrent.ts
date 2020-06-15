import { __secretly_set_current_context__ } from "./webglContext"



const webglMakeCurrent = (context: WebGLRenderingContext | WebGL2RenderingContext): boolean => {
    return __secretly_set_current_context__(context)
}



export default webglMakeCurrent