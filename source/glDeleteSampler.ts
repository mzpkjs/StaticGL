import gl from "./webglContext"



const glDeleteSampler = (sampler: WebGLSampler | null): void => {
    (gl as WebGL2RenderingContext).deleteSampler(sampler)
}



export default glDeleteSampler