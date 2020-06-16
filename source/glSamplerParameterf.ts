import gl from "./webglContext"



const glSamplerParameterf = (sampler: WebGLSampler, pname: GLenum, param: GLfloat): void => {
    (gl as WebGL2RenderingContext).samplerParameterf(sampler, pname, param)
}



export default glSamplerParameterf