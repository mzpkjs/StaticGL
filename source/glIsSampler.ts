import gl from "./webglContext"



const glIsSampler = (sampler: WebGLSampler | null): GLboolean => {
    return (gl as WebGL2RenderingContext).isSampler(sampler)
}



export default glIsSampler