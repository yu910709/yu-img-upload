/**
 * @param {object} option - one entry param to function yu-img-upload
 * @param {boolean} [option.popup] - accept true || false 是否用插件带的弹出框 默认用
 * @param {boolean} [option.multiple] - accept true || false 是否支持多选 默认支持
 * @param {obejct} [option.target] target render DOM 需要渲染的dom
 * @param {number} [option.maxnum = 5] - max upload number 最大选择图片数量 （multiple为false的时候插件会强制maxnum为1） 默认为5
 * @param {number} [option.maxsize = 1] - max upload image size 选择图片最大的尺寸 单位M 默认1M
 */
import popup from 'yu-popup';
import '../css/imgUpload.scss';

class imgUpload {
    constructor(props){
        this.option = {
            popup:(props.popup&&(props.popup==='boolean'))?props.popup:true,
            multiple:(props.multiple&&(props.multiple==='boolean'))?props.multiple:true,
            target:(props.target&&(props.target==='object'))?props.target:document.querySelector('.imgUpload'),
            maxnum:(!props.maxnum||(props.maxnum!=='number'))?5:(props.multiple!==false)?props.maxnum:1,
            maxsize:(props.maxsize&&(props.maxsize==='number'))?props.maxsize:1,
        };
        //返回版本
        this.browser={
            versions:function(){
                const u = navigator.userAgent, app = navigator.appVersion;
                return {//移动终端浏览器版本信息
                    trident: u.indexOf('Trident') > -1, //IE内核
                    presto: u.indexOf('Presto') > -1, //opera内核
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
                    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQ HD浏览器
                    iPad: u.indexOf('iPad') > -1, //是否iPad
                    qq: u.indexOf('QQ') > -1, //是否QQ
                    wechat: u.indexOf('MicroMessenger') > -1, //是否微信
                    webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                    lemonIos: u.indexOf('ios_lemonvc') > -1, //lemon ios webview
                    aa: u.indexOf('dasdasdaasda') > -1, //lemon ios webview
                };
            }(),
            language:(navigator.browserLanguage || navigator.language).toLowerCase()
        }
    }

    /**
     * @description 封装弹窗消息
     * @param {object} option popup用的弹窗参数
     */
    handleShowMes(option){
        if(this.option.popup!==false){
            popup(option);
        }else{
            alert(option.desc)
        }
    }

    /**
     * @description 按钮重置
     * @param _this
     */
    handleResetBtn(_this) {
        _this.parents("ul.upload").find(".uploadImg").remove();
        let html_btn = (this.option.multiple)?
            '<li class="uploadBtn"><input type="file" name="'+_this.attr("name")+'" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg""><span class="mask"><i class="iconfont icon-upload"></i></span></li>':
            '<li class="uploadBtn"><input type="file" name="'+_this.attr("name")+'" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg""><span class="mask"><i class="iconfont icon-upload"></i></span></li>';
        _this.parents("ul.upload").append(html_btn);
        _this.parents(".uploadBtn").remove();
        //绑定事件
        let _class = this;//转交类对象
        $('.upload .uploadBtn input').on('change',function () {
            _class.handleShowPreview(this,$(this))
        })
    }

    /**
     * @description 清空按钮
     */
    handleClearBtn(_this){
        let _upload = _this.parents("ul.upload")
        let html_btn = (this.option.multiple)?
            '<li class="uploadBtn"><input type="file" name="'+_this.siblings(".uploadBtn").find("input").attr("name")+'" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span></li>':
            '<li class="uploadBtn"><input type="file" name="'+_this.siblings(".uploadBtn").find("input").attr("name")+'" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span></li>';
        _upload.empty();
        _upload.append(html_btn);
        //绑定事件
        let _class = this;//转交类对象
        $('.upload .uploadBtn input').on('change',function () {
            _class.handleShowPreview(this,$(this))
        })
    }

    /**
     * @description 删除图片
     */
    handleDelete(_this){
        let _index = _this.parents(".uploadImg").index();
        _this.parents("ul.upload").find(".uploadBtn").eq(_index).remove();
        _this.parents(".uploadImg").remove();
    }


    /**
     * @description 预览效果
     * @param source
     * @param _this
     * @returns {boolean}
     */
    handleShowPreview(source,_this){
        if(this.handleUploadImg(source,_this) === true){
            //安卓统计图片张数超过最大跳出 其他设备清除显示区
            if(this.browser.versions.android){
                if($(source).parents(".uploadBtn").siblings('.uploadImg').length === _this.parents(".upload").data("maxnum")){
                    this.handleShowMes({
                        type:'error',
                        desc:`您最多可以上传${_this.parents(".upload").data("maxnum")}张图片!`,
                        timing:3500
                    });
                    if(this.option.multiple){
                        $(source).parents(".uploadBtn").html('<input type="file" name="'+_this.attr("name")+'" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span> ')
                    }else{
                        $(source).parents(".uploadBtn").html('<input type="file" name="'+_this.attr("name")+'" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span> ')
                    }
                    //绑定事件
                    let _class = this;//转交类对象
                    $('.upload .uploadBtn input').on('change',function () {
                        _class.handleShowPreview(this,$(this))
                    });
                    return false;
                }
            }else{
                $(source).parents("ul.upload").find('.uploadImg').remove()
            }

            for(let i = 0;i<source.files.length;i++){
                let file = source.files[i];
                if(window.FileReader) {
                    let _class = this;//转交类对象
                    let fr = new FileReader();
                    fr.onloadend = function(e) {
                        //安卓删除单个图片选项
                        let html_img;
                        if(_class.browser.versions.android){
                            html_img = '<li class="uploadImg"><i class="iconfont icon-minus del"></i><img src="'+e.target.result+'" width="70" height="75"></li>'
                        }else{
                            html_img = '<li class="uploadImg"><img src="'+e.target.result+'" width="70" height="75"></li>'
                        }
                        $(source).parents("ul.upload").prepend(html_img);
                        //绑定事件
                        $('.upload .uploadImg .del').on('click',function () {
                            _class.handleDelete($(this))
                        })
                    };
                    fr.readAsDataURL(file);
                    //安卓追加按钮方便上传 其他设备直接显示一个按钮（因为只能多文件上传一次）
                    if(_class.browser.versions.android){
                        $(source).parents(".uploadBtn").css("display","none");
                        if(_class.option.multiple){
                            $(source).parents("ul.upload").append('<li class="uploadBtn"><input type="file" name="'+_this.attr("name")+'" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span> </li>');
                        }else{
                            $(source).parents("ul.upload").append('<li class="uploadBtn"><input type="file" name="'+_this.attr("name")+'"  accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span> </li>');
                        }
                        //绑定事件
                        $('.upload .uploadBtn input').on('change',function () {
                            _class.handleShowPreview(this,$(this))
                        })
                    }else{
                        $(source).parents("ul.upload").find(".uploadBtn .mask").html("<span style='font-size:12px'><i class='iconfont icon-reset'></i></span>");
                        if($(source).parents("ul.upload").find(".clearBtn").length===0){
                            $(source).parents("ul.upload").append('<li class="clearBtn"><span style="font-size:12px"><span class="mask"><i class="iconfont icon-delete clear"></i></span></span> </li>');
                        }
                        //绑定事件
                        $('.upload .clearBtn .clear').on('click',function () {
                            _class.handleClearBtn($(this))
                        })
                    }
                }
                else{
                    this.handleShowMes({
                        type:'error',
                        desc:`您的手机不支持图片预览功能!`,
                        timing:3500
                    });
                }
            }
        }else{
            //安卓按钮清除选择 IOS按钮重置
            if(this.browser.versions.android){
                let _class= this;//转交类对象
                if(_class.option.multiple){
                    _this.parents("ul.upload").append('<li class="uploadBtn"><input type="file" name="'+_this.attr("name")+'" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span> </li>');
                }else{
                    _this.parents("ul.upload").append('<li class="uploadBtn"><input type="file" name="'+_this.attr("name")+'" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span> </li>');
                }
                $(source).parents(".uploadBtn").remove();
                //绑定事件
                $('.upload .uploadBtn input').on('change',function () {
                    _class.handleShowPreview(this,$(this))
                })
            }else{
                this.handleResetBtn(_this);
            }
        }
    }

    /**
     * @description 验证格式等等
     * @param source
     * @param _this
     * @returns {string}
     */
    handleUploadImg(source,_this) {
        let result = true;
        for(let i = 0;i<source.files.length;i++){
            let file = source.files[i];
            if(source.files.length>_this.parents(".upload").data("maxnum")){
                this.handleShowMes({
                    type:'error',
                    desc:`您最多可以上传${_this.parents(".upload").data("maxnum")}张图片!`,
                    timing:3500
                });
                result =  false
            }
            if(!/image\/\w+/.test(file.type)){
                this.handleShowMes({
                    type:'error',
                    desc:`图片格式不正确!`,
                    timing:3500
                });
                result =  false
            }
            if(file.size/1024/1025>_this.parents(".upload").data("maxsize")){
                this.handleShowMes({
                    type:'error',
                    desc:`单张图片不能超过${_this.parents(".upload").data("maxsize")}M!`,
                    timing:3500
                });
                result =  false
            }
        }
        return result;
    }

    /**
     * @description 初始化
     * @returns {boolean}
     */
    init(){
        let _class = this;//转交类对象
        if(this.option){
            //参数合理性判断
            let allowParams = new Set(['popup','multiple','target','maxnum','maxsize']);
            let userParams = new Set();
            for (let i in this.option) {
                userParams.add(i)
            }
            let difference = new Set([...userParams].filter(x => !allowParams.has(x)));//计算用户的参数和允许参数的差集
            if(userParams.size - difference.size === 0){//没有有用的配置项
                console.error(`useful configuration in param 'option' is none , Please fill in at least one useful configuration just like : '${Array.from(allowParams)}' -- yu-img-upload`);
                return false;
            }else{
                if(difference.size>0){//有未定的参数键值对
                    console.warn(`'${Array.from(difference)}' are not allowed , param 'option' can only accept these configuration : '${Array.from(allowParams)}' -- yu-img-upload`)
                }
            }
            //创建原始DOM
            let inputNode;
            if(this.option.multiple){
                inputNode = '<input type="file" name="file[]" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">'
            }else{
                inputNode = '<input type="file" name="file" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">'
            }
            this.option.target.innerHTML = `
                <ul class="upload gap" data-maxnum=${this.option.maxnum} data-maxsize=${this.option.maxsize}>
                    <li class="uploadBtn">
                        ${inputNode}
                        <span class="mask"><i class="iconfont icon-upload"></i></span>
                    </li>
                </ul>
            `
            //绑定事件
            $('.upload .uploadBtn input').on('change',function () {
                _class.handleShowPreview(this,$(this))
            })
        }else{
            console.error(`there is no param 'option' , yu-img-upload can not work without any config , please check you code . -- yu-img-upload`)
        }
    }
};

export default imgUpload;
