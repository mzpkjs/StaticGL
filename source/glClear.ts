import gl from "./webglContext"



const glClear = (mask: GLbitfield): void => {
    gl.clear(mask)
}



export default glClear