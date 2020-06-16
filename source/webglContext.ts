const unset = new Proxy({ } as WebGLRenderingContext | WebGL2RenderingContext, {
    get() {
        throw new TypeError("WebGL context has not been set.\n\t\tUse \"webglMakeCurrentContext\" function first to set a proper context.")
    }
})

let webglContext: WebGLRenderingContext | WebGL2RenderingContext = unset

export function __secretly_set_current_context(context: WebGLRenderingContext | WebGL2RenderingContext | null): boolean {
    if (context == null) {
        webglContext = unset
    } else {
        webglContext = context
    }
    return true
}

export function __secretly_bind_gl_function(propertyKey: keyof (WebGLRenderingContext | WebGL2RenderingContext)) {
    return function bound() {
        (webglContext[propertyKey] as Function).apply(webglContext, arguments)
    }
}



export { webglContext as default }