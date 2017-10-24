/******/ module.exports = (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {object} option - one entry param to function yu-img-upload
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {boolean} [option.popup] - accept true || false 是否用插件带的弹出框 默认用
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {boolean} [option.multiple] - accept true || false 是否支持多选 默认支持
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {obejct} [option.target] target render DOM 需要渲染的dom
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {number} [option.maxnum = 5] - max upload number 最大选择图片数量 （multiple为false的时候插件会强制maxnum为1） 默认为5
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {number} [option.maxsize = 1] - max upload image size 选择图片最大的尺寸 单位M 默认1M
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _yuPopup = __webpack_require__(1);

var _yuPopup2 = _interopRequireDefault(_yuPopup);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var imgUpload = function () {
    function imgUpload(props) {
        _classCallCheck(this, imgUpload);

        this.option = {
            popup: props.popup && props.popup === 'boolean' ? props.popup : true,
            multiple: props.multiple && props.multiple === 'boolean' ? props.multiple : true,
            target: props.target && props.target === 'object' ? props.target : document.querySelector('.imgUpload'),
            maxnum: !props.maxnum || props.maxnum !== 'number' ? 5 : props.multiple !== false ? props.maxnum : 1,
            maxsize: props.maxsize && props.maxsize === 'number' ? props.maxsize : 1
        };
        //返回版本
        this.browser = {
            versions: function () {
                var u = navigator.userAgent,
                    app = navigator.appVersion;
                return { //移动终端浏览器版本信息
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
                    aa: u.indexOf('dasdasdaasda') > -1 //lemon ios webview
                };
            }(),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        };
    }

    /**
     * @description 封装弹窗消息
     * @param {object} option popup用的弹窗参数
     */


    _createClass(imgUpload, [{
        key: 'handleShowMes',
        value: function handleShowMes(option) {
            if (this.option.popup !== false) {
                (0, _yuPopup2.default)(option);
            } else {
                alert(option.desc);
            }
        }

        /**
         * @description 按钮重置
         * @param _this
         */

    }, {
        key: 'handleResetBtn',
        value: function handleResetBtn(_this) {
            _this.parents("ul.upload").find(".uploadImg").remove();
            var html_btn = this.option.multiple ? '<li class="uploadBtn"><input type="file" name="' + _this.attr("name") + '" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg""><span class="mask"><i class="iconfont icon-upload"></i></span></li>' : '<li class="uploadBtn"><input type="file" name="' + _this.attr("name") + '" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg""><span class="mask"><i class="iconfont icon-upload"></i></span></li>';
            _this.parents("ul.upload").append(html_btn);
            _this.parents(".uploadBtn").remove();
            //绑定事件
            var _class = this; //转交类对象
            $('.upload .uploadBtn input').on('change', function () {
                _class.handleShowPreview(this, $(this));
            });
        }

        /**
         * @description 清空按钮
         */

    }, {
        key: 'handleClearBtn',
        value: function handleClearBtn(_this) {
            var _upload = _this.parents("ul.upload");
            var html_btn = this.option.multiple ? '<li class="uploadBtn"><input type="file" name="' + _this.siblings(".uploadBtn").find("input").attr("name") + '" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span></li>' : '<li class="uploadBtn"><input type="file" name="' + _this.siblings(".uploadBtn").find("input").attr("name") + '" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span></li>';
            _upload.empty();
            _upload.append(html_btn);
            //绑定事件
            var _class = this; //转交类对象
            $('.upload .uploadBtn input').on('change', function () {
                _class.handleShowPreview(this, $(this));
            });
        }

        /**
         * @description 删除图片
         */

    }, {
        key: 'handleDelete',
        value: function handleDelete(_this) {
            var _index = _this.parents(".uploadImg").index();
            _this.parents("ul.upload").find(".uploadBtn").eq(_index).remove();
            _this.parents(".uploadImg").remove();
        }

        /**
         * @description 预览效果
         * @param source
         * @param _this
         * @returns {boolean}
         */

    }, {
        key: 'handleShowPreview',
        value: function handleShowPreview(source, _this) {
            var _this2 = this;

            if (this.handleUploadImg(source, _this) === true) {
                //安卓统计图片张数超过最大跳出 其他设备清除显示区
                if (this.browser.versions.android) {
                    if ($(source).parents(".uploadBtn").siblings('.uploadImg').length === _this.parents(".upload").data("maxnum")) {
                        this.handleShowMes({
                            type: 'error',
                            desc: '\u60A8\u6700\u591A\u53EF\u4EE5\u4E0A\u4F20' + _this.parents(".upload").data("maxnum") + '\u5F20\u56FE\u7247!',
                            timing: 3500
                        });
                        if (this.option.multiple) {
                            $(source).parents(".uploadBtn").html('<input type="file" name="' + _this.attr("name") + '" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span> ');
                        } else {
                            $(source).parents(".uploadBtn").html('<input type="file" name="' + _this.attr("name") + '" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span> ');
                        }
                        //绑定事件
                        var _class = this; //转交类对象
                        $('.upload .uploadBtn input').on('change', function () {
                            _class.handleShowPreview(this, $(this));
                        });
                        return false;
                    }
                } else {
                    $(source).parents("ul.upload").find('.uploadImg').remove();
                }

                for (var i = 0; i < source.files.length; i++) {
                    var file = source.files[i];
                    if (window.FileReader) {
                        (function () {
                            var _class = _this2; //转交类对象
                            var fr = new FileReader();
                            fr.onloadend = function (e) {
                                //安卓删除单个图片选项
                                var html_img = void 0;
                                if (_class.browser.versions.android) {
                                    html_img = '<li class="uploadImg"><i class="iconfont icon-minus del"></i><img src="' + e.target.result + '" width="70" height="75"></li>';
                                } else {
                                    html_img = '<li class="uploadImg"><img src="' + e.target.result + '" width="70" height="75"></li>';
                                }
                                $(source).parents("ul.upload").prepend(html_img);
                                //绑定事件
                                $('.upload .uploadImg .del').on('click', function () {
                                    _class.handleDelete($(this));
                                });
                            };
                            fr.readAsDataURL(file);
                            //安卓追加按钮方便上传 其他设备直接显示一个按钮（因为只能多文件上传一次）
                            if (_class.browser.versions.android) {
                                $(source).parents(".uploadBtn").css("display", "none");
                                if (_class.option.multiple) {
                                    $(source).parents("ul.upload").append('<li class="uploadBtn"><input type="file" name="' + _this.attr("name") + '" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span> </li>');
                                } else {
                                    $(source).parents("ul.upload").append('<li class="uploadBtn"><input type="file" name="' + _this.attr("name") + '"  accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span> </li>');
                                }
                                //绑定事件
                                $('.upload .uploadBtn input').on('change', function () {
                                    _class.handleShowPreview(this, $(this));
                                });
                            } else {
                                $(source).parents("ul.upload").find(".uploadBtn .mask").html("<span style='font-size:12px'><i class='iconfont icon-reset'></i></span>");
                                if ($(source).parents("ul.upload").find(".clearBtn").length === 0) {
                                    $(source).parents("ul.upload").append('<li class="clearBtn"><span style="font-size:12px"><span class="mask"><i class="iconfont icon-delete clear"></i></span></span> </li>');
                                }
                                //绑定事件
                                $('.upload .clearBtn .clear').on('click', function () {
                                    _class.handleClearBtn($(this));
                                });
                            }
                        })();
                    } else {
                        this.handleShowMes({
                            type: 'error',
                            desc: '\u60A8\u7684\u624B\u673A\u4E0D\u652F\u6301\u56FE\u7247\u9884\u89C8\u529F\u80FD!',
                            timing: 3500
                        });
                    }
                }
            } else {
                //安卓按钮清除选择 IOS按钮重置
                if (this.browser.versions.android) {
                    var _class2 = this; //转交类对象
                    if (_class2.option.multiple) {
                        _this.parents("ul.upload").append('<li class="uploadBtn"><input type="file" name="' + _this.attr("name") + '" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span> </li>');
                    } else {
                        _this.parents("ul.upload").append('<li class="uploadBtn"><input type="file" name="' + _this.attr("name") + '" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"><span class="mask"><i class="iconfont icon-upload"></i></span> </li>');
                    }
                    $(source).parents(".uploadBtn").remove();
                    //绑定事件
                    $('.upload .uploadBtn input').on('change', function () {
                        _class2.handleShowPreview(this, $(this));
                    });
                } else {
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

    }, {
        key: 'handleUploadImg',
        value: function handleUploadImg(source, _this) {
            var result = true;
            for (var i = 0; i < source.files.length; i++) {
                var file = source.files[i];
                if (source.files.length > _this.parents(".upload").data("maxnum")) {
                    this.handleShowMes({
                        type: 'error',
                        desc: '\u60A8\u6700\u591A\u53EF\u4EE5\u4E0A\u4F20' + _this.parents(".upload").data("maxnum") + '\u5F20\u56FE\u7247!',
                        timing: 3500
                    });
                    result = false;
                }
                if (!/image\/\w+/.test(file.type)) {
                    this.handleShowMes({
                        type: 'error',
                        desc: '\u56FE\u7247\u683C\u5F0F\u4E0D\u6B63\u786E!',
                        timing: 3500
                    });
                    result = false;
                }
                if (file.size / 1024 / 1025 > _this.parents(".upload").data("maxsize")) {
                    this.handleShowMes({
                        type: 'error',
                        desc: '\u5355\u5F20\u56FE\u7247\u4E0D\u80FD\u8D85\u8FC7' + _this.parents(".upload").data("maxsize") + 'M!',
                        timing: 3500
                    });
                    result = false;
                }
            }
            return result;
        }

        /**
         * @description 初始化
         * @returns {boolean}
         */

    }, {
        key: 'init',
        value: function init() {
            var _class = this; //转交类对象
            if (this.option) {
                //参数合理性判断
                var allowParams = new Set(['popup', 'multiple', 'target', 'maxnum', 'maxsize']);
                var userParams = new Set();
                for (var i in this.option) {
                    userParams.add(i);
                }
                var difference = new Set([].concat(_toConsumableArray(userParams)).filter(function (x) {
                    return !allowParams.has(x);
                })); //计算用户的参数和允许参数的差集
                if (userParams.size - difference.size === 0) {
                    //没有有用的配置项
                    console.error('useful configuration in param \'option\' is none , Please fill in at least one useful configuration just like : \'' + Array.from(allowParams) + '\' -- yu-img-upload');
                    return false;
                } else {
                    if (difference.size > 0) {
                        //有未定的参数键值对
                        console.warn('\'' + Array.from(difference) + '\' are not allowed , param \'option\' can only accept these configuration : \'' + Array.from(allowParams) + '\' -- yu-img-upload');
                    }
                }
                //创建原始DOM
                var inputNode = void 0;
                if (this.option.multiple) {
                    inputNode = '<input type="file" name="file[]" multiple="multiple" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">';
                } else {
                    inputNode = '<input type="file" name="file" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">';
                }
                this.option.target.innerHTML = '\n                <ul class="upload gap" data-maxnum=' + this.option.maxnum + ' data-maxsize=' + this.option.maxsize + '>\n                    <li class="uploadBtn">\n                        ' + inputNode + '\n                        <span class="mask"><i class="iconfont icon-upload"></i></span>\n                    </li>\n                </ul>\n            ';
                //绑定事件
                $('.upload .uploadBtn input').on('change', function () {
                    _class.handleShowPreview(this, $(this));
                });
            } else {
                console.error('there is no param \'option\' , yu-img-upload can not work without any config , please check you code . -- yu-img-upload');
            }
        }
    }]);

    return imgUpload;
}();

;

exports.default = imgUpload;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/******/ module.exports = (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * @param {object} option - one entry param to function yu-popup
                                                                                                                                                                                                     * @param {string} [option.type] - accept 'success' 'error' 'loading' ''
                                                                                                                                                                                                     * @param {string} [option.title]
                                                                                                                                                                                                     * @param {(string|string[])} [option.desc]
                                                                                                                                                                                                     * @param {number} [option.width = 80] - max width 100%  min width 80px
                                                                                                                                                                                                     * @param {number} [option.timing = 3000] - autoclose when pop has timing
                                                                                                                                                                                                     * @param {function} [option.mounted] - before pop's dom into html
                                                                                                                                                                                                     * @callback callback
                                                                                                                                                                                                     * @param {function} [option.callback] - after pop's dom removed
                                                                                                                                                                                                     */


var popup = function popup(option) {
    if (option) {
        //参数合理性判断
        var allowParams = new Set(['type', 'title', 'desc', 'width', 'timing', 'mounted', 'callback']);
        var userParams = new Set();
        for (var i in option) {
            userParams.add(i);
        }
        var difference = new Set([].concat(_toConsumableArray(userParams)).filter(function (x) {
            return !allowParams.has(x);
        })); //计算用户的参数和允许参数的差集
        if (userParams.size - difference.size === 0) {
            //没有有用的配置项
            console.error('useful configuration in param \'option\' is none , Please fill in at least one useful configuration just like : \'' + Array.from(allowParams) + '\' -- yu-popup');
            return false;
        } else {
            if (difference.size > 0) {
                //有未定的参数键值对
                console.warn('\'' + Array.from(difference) + '\' are not allowed , param \'option\' can only accept these configuration : \'' + Array.from(allowParams) + '\' -- yu-popup');
            }
        }
        //构建前清除原来的pop
        if (document.querySelector('.pop-mask')) {
            document.querySelector('.pop-mask').parentNode.removeChild(document.querySelector('.pop-mask'));
            document.querySelector('html').classList.remove('no-move');
            document.querySelector('body').classList.remove('no-move');
        }
        //根据类型定义图标
        var icon = void 0;
        option.type = option.type ? option.type : '';
        switch (option.type) {
            case 'success':
                icon = '<i class="iconfont icon-smile"></i>';
                break;
            case 'error':
                icon = '<i class="iconfont icon-cry"></i>';
                break;
            case 'loading':
                icon = '<i class="iconfont icon-loading"></i>';
                break;
            case '':
                icon = '';
                break;
            default:
                icon = '';
                console.warn('unknown type \'' + option.type + '\' in param \'option\' , \'type\' can only accept these values : \'success\' \'error\' \'loading\' \'\', if you do not need \'type\' , please don\'t configure it -- yu-popup');
        }
        //定义标题
        option.title = option.title ? option.title : '';
        var title = '';
        if (option.title !== '') {
            if (typeof option.title === 'string') {
                title = '<h4>' + option.title + '</h4>';
            } else {
                console.warn('\'title\' in param \'option\' can only accept string type -- yu-popup');
            }
        }
        //定义描述
        option.desc = option.desc ? option.desc : '';
        var desc = '';
        if (option.desc !== '') {
            switch (Object.prototype.toString.call(option.desc)) {
                case '[object String]':
                    desc = '<p>' + option.desc + '</p>';
                    break;
                case '[object Array]':
                    desc += '<p>';
                    for (var _i in option.desc) {
                        desc += option.desc[_i] + '<br>';
                    }
                    desc += '</p>';
                    break;
                default:
                    console.warn('\'desc\' in param \'option\' can only accept string/array type -- yu-popup');
            }
        }
        //定义自动关闭定时
        if (option.timing && option.type !== 'loading' && option.timing !== 0) {
            option.timing = option.timing ? option.timing : 3000;
        }
        var timing = void 0;
        switch (_typeof(option.timing)) {
            case 'number':
                timing = option.timing;
                break;
            case 'undefined':
                timing = option.timing;
                break;
            default:
                console.warn('\'timing\' in param \'option\' can only accept number type -- yu-popup');
        }
        //创建DOM之前调用方法
        if (option.mounted) {
            if (typeof option.mounted === 'function') {
                option.mounted();
            } else {
                console.warn('\'mounted\' in param \'option\' can only accept function type -- yu-popup');
            }
        }

        //构建DOM
        var popmask = document.createElement('section');
        popmask.classList.add('pop-mask');
        var pop = document.createElement('div');
        pop.classList.add('pop');
        pop.innerHTML = '\n           ' + icon + '\n           ' + title + '\n           ' + desc + '\n       ';
        popmask.appendChild(pop);
        document.querySelector('body').appendChild(popmask);
        document.querySelector('html').classList.add('no-move');
        document.querySelector('body').classList.add('no-move');
        pop.style.marginTop = document.documentElement.clientHeight / 2 - pop.offsetHeight / 2 + 'px'; //垂直居中
        //自定义区域
        if (option.width) {
            if (typeof option.width === 'number') {
                if (option.width > 80) {
                    option.width = option.width < document.documentElement.clientWidth ? option.width : document.documentElement.clientWidth;
                    pop.style.width = option.width + 'px';
                } else {
                    console.error('\'width\' in param \'option\' must greater than 80 -- yu-popup');
                    return false;
                }
            } else {
                console.warn('\'width\' in param \'option\' can only accept number type -- yu-popup');
            }
        }
        //定时关闭
        if (timing) {
            setTimeout(function () {
                if (document.querySelector('.pop-mask') === popmask) {
                    //POP没有被顶掉的时候
                    document.querySelector('body').removeChild(popmask);
                    document.querySelector('html').classList.remove('no-move');
                    document.querySelector('body').classList.remove('no-move');
                    //回调方法
                    if (option.callback) {
                        if (typeof option.callback === 'function') {
                            option.callback();
                        } else {
                            console.warn('\'callback\' in param \'option\' can only accept function type -- yu-popup');
                        }
                    }
                }
            }, timing);
        }
    } else {
        console.error('there is no param \'option\' , yu-popup can not work without any config , please check you code . -- yu-popup');
    }
};

exports.default = popup;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../node_modules/_autoprefixer-loader@3.2.0@autoprefixer-loader/index.js!./popup.scss", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../node_modules/_autoprefixer-loader@3.2.0@autoprefixer-loader/index.js!./popup.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports
exports.push([module.i, "@import url(//at.alicdn.com/t/font_wda9rz5o39iwl8fr.css);", ""]);

// module
exports.push([module.i, "@-webkit-keyframes rotating {\n  from {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n@keyframes rotating {\n  from {\n    -webkit-transform: rotate(0);\n    transform: rotate(0); }\n  to {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n.no-move {\n  overflow: hidden !important; }\n\n.pop-mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  text-align: center;\n  padding: 0 15px; }\n  .pop-mask .pop {\n    display: inline-block;\n    margin: 50% auto 0;\n    min-width: 80px;\n    max-width: 100%;\n    background: rgba(0, 0, 0, 0.6);\n    color: white;\n    border-radius: 5px;\n    padding: 15px 10px;\n    text-align: center;\n    line-height: 1.5;\n    z-index: 999; }\n    .pop-mask .pop > * {\n      margin-top: 10px;\n      margin-bottom: 0; }\n      .pop-mask .pop > *:first-child {\n        margin-top: 0; }\n    .pop-mask .pop .iconfont {\n      font-size: 32px;\n      display: block; }\n      .pop-mask .pop .iconfont.icon-loading {\n        -webkit-animation: rotating 2s linear infinite;\n        animation: rotating 2s linear infinite; }\n    .pop-mask .pop p {\n      font-size: 13px; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../node_modules/_autoprefixer-loader@3.2.0@autoprefixer-loader/index.js!./imgUpload.scss", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!../../node_modules/_autoprefixer-loader@3.2.0@autoprefixer-loader/index.js!./imgUpload.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports
exports.push([module.i, "@import url(http://at.alicdn.com/t/font_450163_1308abj4z7wdbo6r.css);", ""]);

// module
exports.push([module.i, ".upload {\n  padding: 0;\n  margin-left: -5px;\n  margin-right: -5px; }\n  .upload li {\n    width: 75px;\n    height: 75px;\n    margin: 0 5px 5px;\n    display: inline-block;\n    position: relative;\n    vertical-align: top; }\n    .upload li .del {\n      position: absolute;\n      right: 0;\n      top: 0;\n      background: rgba(0, 0, 0, 0.6);\n      border-radius: 0;\n      width: 75px;\n      height: 75px;\n      text-align: center;\n      line-height: 75px;\n      color: white;\n      font-size: 28px; }\n    .upload li input[type='file'] {\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      top: 0;\n      padding: 0;\n      margin: 0;\n      opacity: 0;\n      z-index: 3; }\n    .upload li img {\n      width: 100%;\n      height: 100%; }\n    .upload li .mask {\n      display: block;\n      width: 100%;\n      height: 100%;\n      border: 1px dashed #ccc;\n      background: none;\n      text-align: center;\n      line-height: 75px;\n      cursor: pointer;\n      z-index: 2; }\n      .upload li .mask .iconfont {\n        font-size: 24px; }\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
