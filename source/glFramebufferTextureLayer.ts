import gl from "./webglContext"



const glFramebufferTextureLayer = (
    target: GLenum,
    attachment: GLenum,
    texture: WebGLTexture | null,
    level: GLint,
    layer: GLint
): void => {
    (gl as WebGL2RenderingContext).framebufferTextureLayer(target, attachment, texture, level, layer)
}



export default glFramebufferTextureLayer