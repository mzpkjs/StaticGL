import gl from "./webglContext"



const glActiveTexture = (texture: GLenum): void => {
    gl.activeTexture(texture)
}



export default glActiveTexture