var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://sevencube.github.io/chat-widget-app/dist/assets/index.css';
link.type = 'text/css';
document.head.appendChild(link);
var div = document.createElement("div")
			div.setAttribute("id", "app")
			function appendDiv() {
				var parent = document.body
				if (parent) {
					parent.appendChild(div)
					clearInterval(intervalId)
				}
			}
			var intervalId = setInterval(appendDiv, 100)
			var chatWidget = document.createElement('script')
			chatWidget.type = 'module'
			chatWidget.async = true
			chatWidget.src = 'https://sevencube.github.io/chat-widget-app/dist/entries/index.js'
			var s = document.getElementsByTagName('script')[0]
			s.parentNode.insertBefore(chatWidget, s)