import gl from "./webglContext"



const glBufferData = (target: GLenum, data: BufferSource | null, usage: GLenum): void => {
    gl.bufferData(target, data, usage)
}



export default glBufferData