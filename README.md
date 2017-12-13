## Introduce
this script is just for image upload,it support pc ios and android. in pc & ios you can clear what you picked and repick the pictures;in android you should pick and delete the picture only one by one.

## Quick to start
Using npm:
```shell
$ npm install --save yu-img-upload
$ import YuImgUpload from 'yu-img-upload'
```

## Example
You can use `npm run dev` to check the example file in node package
```js
new imgUpload({
            popup:true,
            multiple:true,
            name:'file',
            target:document.querySelector('.imgUpload'),
            maxnum:6,
            maxsize:0.5,
            accept:'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            hint:'icon',
        });
```

## JSDoc
```jsdoc
 * @param {object[]} option
 * @param {boolean} [option[].popup = true] - should it use yu-popup or alert
 * @param {boolean} [option[].multiple = true] - should it accept multiple files
 * @param {string} [option[].name = file] - the name of input
 * @param {obejct} [option[].target = document.querySelector('.imgUpload')] - which dom to render
 * @param {number} [option[].maxnum = 9] - the max number of pictures that can be upload
 * @param {number} [option[].maxsize = 1] - the max size of eeach picture
 * @param {string} [option[].accept = image/gif,image/jpeg,image/jpg,image/png,image/svg] - the format of picture that can be accepted
 * @param {string} [option[].hint = icon] - how  button shows
```

## Links
[![github](http://p0kpwl4c8.bkt.clouddn.com/icon/github_c.png!icon_sm "https://github.com/watanabeyu0709/yu-popup")](https://github.com/watanabeyu0709/yu-img-upload)
[![npm](http://p0kpwl4c8.bkt.clouddn.com/icon/npm_c.png!icon_sm "https://www.npmjs.com/package/yu-popup")](https://www.npmjs.com/package/yu-img-upload)
