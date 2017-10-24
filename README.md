### npm install --save yu-img-upload
### import imgUpload from 'yu-img-upload'

    @param {object} option - one entry param to function yu-img-upload
    @param {boolean} [option.popup] - accept true || false 是否用插件带的弹出框 默认用
    @param {boolean} [option.multiple] - accept true || false 是否支持多选 默认支持
    @param {obejct} [option.target] target render DOM 需要渲染的dom
    @param {number} [option.maxnum = 5] - max upload number 最大选择图片数量 （multiple为false的时候插件会强制maxnum为1） 默认为5
    @param {number} [option.maxsize = 1] - max upload image size 选择图片最大的尺寸 单位M 默认1M


* this package is depend on jquery & it's already mixin it
* this package is mixin yu-popup(https://www.npmjs.com/package/yu-popup)
