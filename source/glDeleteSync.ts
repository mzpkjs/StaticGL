import gl from "./webglContext"



const glDeleteSync = (sync: WebGLSync | null): void => {
    (gl as WebGL2RenderingContext).deleteSync(sync)
}



export default glDeleteSync