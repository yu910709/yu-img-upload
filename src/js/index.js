import '../css/app.scss';
import YuJudgeBrowser from './plugin';

document.getElementById('example').innerHTML = (`
    <h1>示例</h1>
    <div class="ex"></div>
`);

document.querySelector('.ex').innerHTML = (`
    <div class="imgUpload"></div>
    <code>
        &lt;div class="imgUpload"&gt;&lt;/div&gt; </br></br>
        new YuJudgeBrowser({ </br>
        &nbsp;&nbsp;&nbsp;&nbsp;popup:true, <br>
        &nbsp;&nbsp;&nbsp;&nbsp;multiple:true, <br>
        &nbsp;&nbsp;&nbsp;&nbsp;name:'file',  <br>
        &nbsp;&nbsp;&nbsp;&nbsp;target:document.querySelector('.imgUpload'), <br>
        &nbsp;&nbsp;&nbsp;&nbsp;maxnum:6, <br>
        &nbsp;&nbsp;&nbsp;&nbsp;maxsize:0.5, <br>
        &nbsp;&nbsp;&nbsp;&nbsp;accept:'image/gif,image/jpeg,image/jpg,image/png,image/svg', <br>
        &nbsp;&nbsp;&nbsp;&nbsp;hint:'word', <br>
    });</br></br>
    </code>
`);

window.onload=function () {
    new YuJudgeBrowser({
        popup:true,
        multiple:true,
        name:'file',
        target:document.querySelector('.imgUpload'),
        maxnum:6,
        maxsize:0.5,
        accept:'image/gif,image/jpeg,image/jpg,image/png,image/svg',
        hint:'icon',
    });
}

