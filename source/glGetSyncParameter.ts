import gl from "./webglContext"



const glGetSyncParameter = (sync: WebGLSync, pname: GLenum): any => {
    return (gl as WebGL2RenderingContext).getSyncParameter(sync, pname) as any
}



export default glGetSyncParameter