function loading(){
	function onReady(callback) {
	    var intervalID = window.setInterval(checkReady, 500);
	    function checkReady() {
			if (document.getElementsByTagName('body')[0] !== undefined) {
			    window.clearInterval(intervalID);
			    callback.call(this);
			}
	    }
	}
	function show(id, value) {
	    document.getElementById(id).style.display = value ? 'block' : 'none';
	}
	onReady(function () {
	    show('page', true);
	    show('loading', false);
	});
}

function sendind_request_loading(flag){
	function show(id, value) {
	    document.getElementById(id).style.display = value ? 'block' : 'none';
	}
    show('page', flag);
    show('loading', !flag);
}


















