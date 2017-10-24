import '../css/app.scss';
import imgUpload from './imgUpload';

document.getElementById('example').innerHTML = (`
    <h1>示例</h1>
    <div class="ex"></div>
`);

document.querySelector('.ex').innerHTML = (`
    <div class="imgUpload"></div>
    <code>
        &lt;div class="imgUpload"&gt;&lt;/div&gt; </br></br>
        let upload = new imgUpload({ </br>
        &nbsp;&nbsp;&nbsp;&nbsp;target:document.querySelector('.imgUploadasd'),</br>
        &nbsp;&nbsp;&nbsp;&nbsp;maxnum:6, </br>
        &nbsp;&nbsp;&nbsp;&nbsp;maxsize:0.5,</br>
    });</br></br>
    upload.init();
    </code>
`);

window.onload=function () {
    let upload = new imgUpload({
        multiple:true,
        target:document.querySelector('.imgUpload'),
        maxnum:6,
        maxsize:0.5
    });
    upload.init();
}

