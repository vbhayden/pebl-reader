/* 
* ModuleConfig.js: Module that contains configuration options for Readium-js-viewer.
*/

define(['module'], function(module) {

        var config = module.config();
        return {
            'imagePathPrefix': config.imagePathPrefix || "",
            
            'epubLibraryPath': config.epubLibraryPath || "epub_content/epub_library.json",

            'canHandleUrl': config.canHandleUrl || false,
            'canHandleDirectory': config.canHandleDirectory || false,


            'epubReadingSystemUrl': config.epubReadingSystemUrl || "/EPUBREADINGSYSTEM.js",

            'workerUrl': config.workerUrl || "scripts/readium-js-viewer_CLOUDAPP-WORKER.js",

            'annotationCSSUrl': config.annotationCSSUrl || "css/annotations.css",
            'mathJaxUrl': config.mathJaxUrl || "scripts/mathjax/MathJax.js",
            'jsLibRoot': config.jsLibRoot || "scripts/zip/",

            //Fonts is a list of font objects. 
            'fonts': config.fonts || [],

            'useSimpleLoader': config.useSimpleLoader || false

        };
});
