/**
 * @param {object[]} option - 接受的总对象
 * @param {boolean} [option[].popup = true] - 是否使用插件带的pop框
 * @param {boolean} [option[].multiple = true] - 是否支持多选
 * @param {string} [option[].name = file] - input的name
 * @param {obejct} [option[].target = document.querySelector('.imgUpload')] - 需要渲染的DOM
 * @param {number} [option[].maxnum = 9] - 最大上传数
 * @param {number} [option[].maxsize = 1] - 最大上传尺寸 单位M
 * @param {string} [option[].accept = image/gif,image/jpeg,image/jpg,image/png,image/svg] - 接受文件格式
 * @param {string} [option[].hint = icon] - 按钮上显示的提示方法 icon || word
 */
import popup from 'yu-popup';//popup
import YuJudgeBrowser from 'yu-judge-browser';//us judge
import '../css/plugin.scss';

class YuImgUpload {
    constructor(props){
        //重定义参数
        this.option = {
            popup:(typeof props.popup==='boolean')?props.popup:true,
            multiple:(typeof props.multiple==='boolean')?props.multiple:true,
            name:(props.name&&(typeof props.name==='string'))?props.name:'file',
            target:(props.target&&(typeof props.target==='object'))?props.target:document.querySelector('.imgUpload'),
            maxnum:(!props.maxnum||(typeof props.maxnum!=='number'))?9:props.maxnum,
            maxsize:(props.maxsize&&(typeof props.maxsize==='number'))?props.maxsize:1,
            accept:(props.accept&&(typeof props.accept==='string'))?props.accept:'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            hint:(props.hint&&(typeof props.hint==='string'))?props.hint:'icon',
        };
        this.option.name=(this.option.multiple)?`${this.option.name}[]`:this.option.name;//多选时给name加[]
        this.option.maxnum=(this.option.multiple)?this.option.maxnum:1;//非多选时最大传输数目只能为1
        //返回版本
        this.browser=YuJudgeBrowser;
        //初始化
        this.init();
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
     * @description 初始化
     */
    init(){
        //参数合理性判断
        let allowParams = new Set(['popup','multiple','name','target','maxnum','maxsize','accept','hint']);
        let userParams = new Set();
        for (let i in this.option) {
            userParams.add(i)
        }
        let difference = new Set([...userParams].filter(x => !allowParams.has(x)));//计算用户的参数和允许参数的差集
        if(difference.size>0){//有未定的参数键值对
            console.warn(`'${Array.from(difference)}' are not allowed , param 'option' can only accept these configuration : '${Array.from(allowParams)}' -- yu-img-upload`)
        }
        //创建原始DOM
        let inputNode;
        if(this.option.multiple){
            inputNode = '<input type="file" name="'+this.option.name+'" multiple="multiple" accept="'+this.option.accept+'">'
        }else{
            inputNode = '<input type="file" name="'+this.option.name+'" accept="'+this.option.accept+'">'
        }
        this.option.target.innerHTML = `
                <ul class="upload" data-maxnum=${this.option.maxnum} data-maxsize=${this.option.maxsize}>
                    <li class="uploadBtn">
                        ${inputNode}
                        ${(this.option.hint==='icon')?'<span class="mask"><i class="iconfont icon-upload"></i></span>':'<span class="mask"><i class="word">点击<br>上传</i></span>'}
                    </li>
                </ul>
            `
        //绑定事件
        let _class = this;//转交类对象
        $('.upload .uploadBtn input').on('change',function () {
            _class.handleShowPreview(this,$(this))
        })
    }

    /**
     * @description 按钮重置
     * @param _this
     */
    handleResetBtn(_this) {
        _this.parents("ul.upload").find(".uploadImg").remove();
        let html_btn = (this.option.multiple)?
            `<li class="uploadBtn"><input type="file" name="${_this.attr("name")}" multiple="multiple" accept="${_this.attr("accept")}">${(this.option.hint === 'icon')?'<span class="mask"><i class="iconfont icon-upload"></i></span>':'<span class="mask"><i class="word">点击<br>上传</i></span>'}</li>`:
            `<li class="uploadBtn"><input type="file" name="${_this.attr("name")}" accept="${_this.attr("accept")}">${(this.option.hint === 'icon')?'<span class="mask"><i class="iconfont icon-upload"></i></span>':'<span class="mask"><i class="word">点击<br>上传</i></span>'}</li>`;
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
        let _upload = _this.parents("ul.upload");
        let html_btn = (this.option.multiple)?
            `<li class="uploadBtn"><input type="file" name="${_this.siblings(".uploadBtn").find("input").attr("name")}" multiple="multiple" accept="${_this.siblings(".uploadBtn").find("input").attr("accept")}">${(this.option.hint === 'icon')?'<span class="mask"><i class="iconfont icon-upload"></i></span>':'<span class="mask"><i class="word">点击<br>上传</i></span>'}</li>`:
            `<li class="uploadBtn"><input type="file" name="${_this.siblings(".uploadBtn").find("input").attr("name")}" accept="${_this.siblings(".uploadBtn").find("input").attr("accept")}">${(this.option.hint === 'icon')?'<span class="mask"><i class="iconfont icon-upload"></i></span>':'<span class="mask"><i class="word">点击<br>上传</i></span>'}</li>`;
        _upload.empty();
        _upload.append(html_btn);
        //绑定事件
        let _class = this;//转交类对象
        $('.upload .uploadBtn input').on('change',function () {
            _class.handleShowPreview(this,$(this))
        })
    }

    /**
     * @description 删除文件
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
            //安卓统计文件个数超过最大跳出 其他设备清除显示区
            if(this.browser.versions.android){
                if($(source).parents(".uploadBtn").siblings('.uploadImg').length === _this.parents(".upload").data("maxnum")){
                    this.handleShowMes({
                        type:'error',
                        desc:`您最多可以上传${_this.parents(".upload").data("maxnum")}个文件!`,
                        timing:3500
                    });
                    let html_btn = (this.option.multiple)?
                        `<li class="uploadBtn"><input type="file" name="${_this.attr("name")}" multiple="multiple" accept="${_this.attr("accept")}">${(this.option.hint === 'icon')?'<span class="mask"><i class="iconfont icon-upload"></i></span>':'<span class="mask"><i class="word">点击<br>上传</i></span>'}</li>`:
                        `<li class="uploadBtn"><input type="file" name="${_this.attr("name")}" accept="${_this.attr("accept")}">${(this.option.hint === 'icon')?'<span class="mask"><i class="iconfont icon-upload"></i></span>':'<span class="mask"><i class="word">点击<br>上传</i></span>'}</li>`;
                    $(source).parents(".uploadBtn").html(html_btn)
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
                        //安卓删除单个文件选项
                        let html_img;
                        //根据文件类型显示icon
                        let icon = 'icon-file';
                        if(e.target.result.includes('json')||e.target.result.includes('html')||e.target.result.includes('css')||e.target.result.includes('xml')){
                            icon = 'icon-file-code';
                        }else if(e.target.result.includes('video')){
                            icon = 'icon-file-video';
                        }else if(e.target.result.includes('audio')){
                            icon = 'icon-file-audio';
                        }else if(e.target.result.includes('image')){
                            icon = 'icon-file-image';
                        }else if(e.target.result.includes('word')){
                            icon = 'icon-file-word';
                        }else if(e.target.result.includes('powerpoint')){
                            icon = 'icon-file-powerpoint';
                        }else if(e.target.result.includes('excel')){
                            icon = 'icon-file-excel';
                        }else if(e.target.result.includes('pdf')){
                            icon = 'icon-file-pdf';
                        }else if(e.target.result.includes('zip')){
                            icon = 'icon-file-zip';
                        }else if(e.target.result.includes('text/')){
                            icon = 'icon-file-text';
                        }
                        if(e.target.result.includes('image')){
                            if(_class.browser.versions.android){
                                html_img = `<li class="uploadImg">${(_class.option.hint === 'icon')?'<i class="iconfont icon-minus del"></i>':'<i class="word del">点击<br>删除</i>'}<img src="${e.target.result}" width="70" height="75"></li>`;
                            }else{
                                html_img = '<li class="uploadImg"><img src="'+e.target.result+'" width="70" height="75"></li>'
                            }
                        }else{
                            if(_class.browser.versions.android){
                                html_img = `<li class="uploadImg">${(_class.option.hint === 'icon')?'<i class="iconfont icon-minus del"></i>':'<i class="word del">点击<br>删除</i>'}<i class="iconfont ${icon}" width="70" height="75"></i></li>`;
                            }else{
                                html_img = `<li class="uploadImg"><i class="iconfont ${icon}" width="70" height="75"></i></li>`
                            }
                        }
                        $(source).parents("ul.upload").prepend(html_img);
                        //绑定事件
                        $('.upload .uploadImg .del').on('click',function () {
                            _class.handleDelete($(this))
                        })
                    };
                    fr.readAsDataURL(file);
                    //安卓追加按钮方便上传 其他设备直接显示一个按钮（因为只能多文件上传一次）
                    if(this.browser.versions.android){
                        $(source).parents(".uploadBtn").css("display","none");
                        let html_btn = (this.option.multiple)?
                            `<li class="uploadBtn"><input type="file" name="${_this.attr("name")}" multiple="multiple" accept="${_this.attr("accept")}">${(this.option.hint === 'icon')?'<span class="mask"><i class="iconfont icon-upload"></i></span>':'<span class="mask"><i class="word">点击<br>上传</i></span>'}</li>`:
                            `<li class="uploadBtn"><input type="file" name="${_this.attr("name")}" accept="${_this.attr("accept")}">${(this.option.hint === 'icon')?'<span class="mask"><i class="iconfont icon-upload"></i></span>':'<span class="mask"><i class="word">点击<br>上传</i></span>'}</li>`;
                        $(source).parents("ul.upload").append(html_btn)
                        //绑定事件
                        let _class = this;//转交class
                        $('.upload .uploadBtn input').on('change',function () {
                            _class.handleShowPreview(this,$(this))
                        })
                    }else{
                        $(source).parents("ul.upload").find(".uploadBtn .mask").html(`${(this.option.hint === 'icon')?'<i class="iconfont icon-reset"></i>':'<i class="word">点击<br>重选</i>'}`);
                        if($(source).parents("ul.upload").find(".clearBtn").length===0){
                            $(source).parents("ul.upload").append(`<li class="clearBtn"><span class="mask">${(this.option.hint === 'icon')?'<i class="iconfont icon-delete clear"></i>':'<i class="word">全部<br>取消</i>'}</span> </li>`);
                            //绑定事件
                            let _class = this;//转交class
                            $('.upload .clearBtn').on('click',function () {
                                _class.handleClearBtn($(this))
                            })
                        }
                    }
                }
                else{
                    this.handleShowMes({
                        type:'error',
                        desc:`您的手机不支持预览功能!`,
                        timing:3500
                    });
                }
            }
        }else{
            //安卓按钮清除选择 IOS按钮重置
            if(this.browser.versions.android){
                let html_btn = (this.option.multiple)?
                    `<li class="uploadBtn"><input type="file" name="${_this.attr("name")}" multiple="multiple" accept="${_this.attr("accept")}">${(this.option.hint === 'icon')?'<span class="mask"><i class="iconfont icon-upload"></i></span>':'<span class="mask"><i class="word">点击<br>上传</i></span>'}</li>`:
                    `<li class="uploadBtn"><input type="file" name="${_this.attr("name")}" accept="${_this.attr("accept")}">${(this.option.hint === 'icon')?'<span class="mask"><i class="iconfont icon-upload"></i></span>':'<span class="mask"><i class="word">点击<br>上传</i></span>'}</li>`;
                _this.parents("ul.upload").append(html_btn)
                $(source).parents(".uploadBtn").remove();
                //绑定事件
                let _class= this;//转交类对象
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
                    desc:`您最多可以上传${_this.parents(".upload").data("maxnum")}个文件!`,
                    timing:3500
                });
                result =  false
            }
            if(!this.option.accept.includes(file.type)&&(this.option.accept!=='*')){
                this.handleShowMes({
                    type:'error',
                    desc:`文件格式不正确!`,
                    timing:3500
                });
                result =  false
            }
            if(file.size/1024/1025>_this.parents(".upload").data("maxsize")){
                this.handleShowMes({
                    type:'error',
                    desc:`单个文件不能超过${_this.parents(".upload").data("maxsize")}M!`,
                    timing:3500
                });
                result =  false
            }
        }
        return result;
    }
};

export default YuImgUpload;
