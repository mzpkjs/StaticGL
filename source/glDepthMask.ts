import gl from "./webglContext"



const glDepthMask = (flag: GLboolean): void => {
    gl.depthMask(flag)
}



export default glDepthMask