import gl from "./webglContext"



const glPolygonOffset = (factor: GLfloat, units: GLfloat): void => {
    gl.polygonOffset(factor, units)
}



export default glPolygonOffset