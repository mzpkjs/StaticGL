import gl from "./webglContext"



const glDepthRange = (zNear: GLclampf, zFar: GLclampf): void => {
    gl.depthRange(zNear, zFar)
}



export default glDepthRange