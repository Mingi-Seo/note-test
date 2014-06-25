var onFullscreen = 0;

function buttonInit()
{
	var temp = "<div class='btn-group'>\
					<button type='button' id='newNote' class='btn btn-default btn-sm btn-small' onclick='clickNewnote();'>\
						<i class='glyphicon glyphicon-asterisk'></i></button>\
					<button type='button' id='fullScreen' class='btn btn-default btn-sm btn-small' onclick='clickFullscreen();'>\
						<i class='glyphicon glyphicon-fullscreen'></i></button>\
					<button type='button' id='saveHTML' class='btn btn-default btn-sm btn-small' onclick='clickSaveHTML();'>\
						<i class='glyphicon glyphicon-floppy-disk'></i></button>\
				</div>";

	$('.note-toolbar.btn-toolbar').append(temp);

	document.getElementsByClassName("note-editor").id = "noteEditor";
}

function getDom(id)
{
    return document.getElementById(id);
}
/*
function clickFullscreen()
{
    var viewFullScreen = getDom("fullScreen");
    
    // if (viewFullScreen)
    if (onFullscreen == 0)
    {
        viewFullScreen.addEventListener("click", function ()
        {
            // var docElm = document.documentElement;
            var docElm = document.getElementsByClassName("note-editor");

            console.log(docElm);

            onFullscreen = 1;

            if (docElm.requestFullscreen)
            {
                docElm.requestFullscreen();
            }

            else if (docElm.msRequestFullscreen)
            {
                docElm.msRequestFullscreen();
            }

            else if (docElm.mozRequestFullScreen)
            {
                docElm.mozRequestFullScreen();
            }

            else if (docElm.webkitRequestFullScreen)
            {
                docElm.webkitRequestFullScreen();
            }

            // docElm.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }, false);
    }

    else if (onFullscreen == 1)
    {
    	onFullscreen = 0;

    	viewFullScreen.addEventListener("click", function ()
        {
            if (document.exitFullscreen)
            {
                document.exitFullscreen();
            }

            else if (document.msExitFullscreen)
            {
                document.msExitFullscreen();
            }

            else if (document.mozCancelFullScreen)
            {
                document.mozCancelFullScreen();
            }

            else if (document.webkitCancelFullScreen)
            {
                document.webkitCancelFullScreen();
            }
        }, false);
    }
}
*/

function clickFullscreen()
{
    var viewFullScreen = getDom("fullScreen");
    var editorFullscreen = document.getElementsByClassName("note-editor");

    console.log(editorFullscreen);

    if (viewFullScreen && editorFullscreen) {
        viewFullScreen.addEventListener("click", function (evt) {
            if (editorFullscreen.requestFullscreen) {
                editorFullscreen.requestFullscreen();
            }
            else if (editorFullscreen.msRequestFullscreen) {
                editorFullscreen.msRequestFullscreen();
            }
            else if (editorFullscreen.mozRequestFullScreen) {
                editorFullscreen.mozRequestFullScreen();
            }
            else if (editorFullscreen.webkitRequestFullScreen) {
                editorFullscreen.webkitRequestFullScreen();
                /*
                    *Kept here for reference: keyboard support in full screen
                    * marioVideo.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                */
            }
        }, false);
    }
}

function bind(elem, type, handler, capture)
{
    type = typeof type === 'string' ? type : '';
    handler = typeof handler === 'function' ? handler : function () { ; };
    capture = capture || false;

    if (elem.addEventListener) {
        elem.addEventListener(type, handler, capture);
    }
    else if (elem.attachEvent) {
        elem.attachEvent('on' + type, handler);
    }

    return this;
}
/*
function cancleFullscreen()
{
    var cancelFullScreen = getDom("cancel-fullscreen");

    if (cancelFullScreen)
    {
        cancelFullScreen.addEventListener("click", function ()
        {
            if (document.exitFullscreen)
            {
                document.exitFullscreen();
            }

            else if (document.msExitFullscreen)
            {
                document.msExitFullscreen();
            }

            else if (document.mozCancelFullScreen)
            {
                document.mozCancelFullScreen();
            }

            else if (document.webkitCancelFullScreen)
            {
                document.webkitCancelFullScreen();
            }
        }, false);
    }
}
*/
function clickNewnote()
{
    setHtmlCode("");

    autoSave();
}

function clickSaveHTML()
{
//    var docElm = document.documentElement.innerHTML;
    var docElm = currentStateDoc();
    var charset = "utf-8";
    var html_filename = prompt("파일 이름을 입력하세요.");

//console.log(docElm);

    if (html_filename == null)
        return ;

    else if (html_filename == "")
        html_filename = "index";

    html_filename = html_filename + ".html";

    saveAs(new Blob([docElm], {type: "text/plain;charset=" + charset}), html_filename);
}

function currentStateDoc()
{
    var docElm = "<!doctype html>\
                <html>\
                    <head>\
                        <meta charset='uft-8'>\
                        <title> My Note </title>\
                    </head>\
                    <body>"
                + getHtmlCode(); +
                    "</body>\
                </html>";

    return docElm;
}

buttonInit();
