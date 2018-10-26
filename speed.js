;(function() {
  new Speed().init().changeSpeed(8)

  function Speed() {
    var ifrDoc
    var _this = this

    this.init = function () {
      return this.bindPlayer().rederFixedBar()
    }

    // 找到视频播放器所在的 document
    this.bindPlayer = function () {
      ifrDoc = document.querySelector('iframe#iframe').contentWindow.document.querySelector('iframe').contentWindow.document
    
      return this
    }

    // 渲染悬浮小工具
    this.rederFixedBar = function () {
      var fixedBar = document.createElement('div')
      fixedBar.innerHTML = `
        <div class="fixed-container">
          <input class="rate-input" type="number" value="8"/>
          <a class="rate-change a-btn" href="#balabala">设置倍率</a>
          <a class="video-rebind a-btn" href="#balabala">重新绑定 video</a>    
        </div>
        <style>
          .fixed-container {
            position: fixed;
            left: 20px;
            top: 50px;
      
            width: 140px;
            height: 80px;
      
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-content:space-around;
      
            background-color: #fce4dc;
            border-radius: 5%;
            border: 3px solid pink;
      
            text-align: center;
          }
      
          .rate-input {
            display: inline-block;
            width: 40px;
            padding: 3px;
          }
      
          .a-btn {
            display: inline-block;
            background-color: #999;
            color: aliceblue;
            padding: 3px;
            border-radius: 5%;
            transition: all .2s ease;
            text-decoration: none;
          }
      
          .a-btn:active {
            background-color: #444;
          }
        </style>
      `
      document.body.appendChild(fixedBar)

      fixedBar.addEventListener('click', function (ev) {
        var target = ev.target

        switch (true) {
          // 修改倍率按钮
          case target.className.indexOf('rate-change') > -1 :
            var val = fixedBar.querySelector('.rate-input').value
            if (val > 16) fixedBar.querySelector('.rate-input').value = val = 16
            _this.changeSpeed(val)
            break
          
          // 重新绑定 video 按钮
          case target.className.indexOf('video-rebind') > -1 :
            _this.bindPlayer()
            break
        }
      })

      return this
    }

    // 关闭跳出限制，暂时无法实现，因为无法移除匿名的二级事件监听函数
    this.freeMouse = function() {

      return this
    }

    // 控制速度
    this.changeSpeed = function (rate) {      
      ifrDoc.querySelector('#video_html5_api').playbackRate = Number(rate) || 1

      return this
    }
  }
})()