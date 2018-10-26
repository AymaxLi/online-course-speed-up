# Introduction
浏览器脚本，可加速广工工程伦理网课的播放速度

# Usage
页面加载完成之后，将脚本复制到控制台运行即会出现悬浮工具框
- 设置倍率，默认是八倍，最高十六倍
- **切换视频后要重新绑定 video**
- 建议在控制台找到 video 标签的 EventListeners 并将 `mouseout` 的事件监听 `remove` 掉，解放鼠标