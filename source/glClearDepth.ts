import gl from "./webglContext"



const glClearDepth = (depth: GLclampf): void => {
    gl.clearDepth(depth)
}



export default glClearDepth