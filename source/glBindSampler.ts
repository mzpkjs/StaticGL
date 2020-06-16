import gl from "./webglContext"



const glBindSampler = (unit: GLuint, sampler: WebGLSampler | null): void => {
    (gl as WebGL2RenderingContext).bindSampler(unit, sampler)
}



export default glBindSampler