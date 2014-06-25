var viewFullscreen = 0;

function getDom(id)
{
	return document.getElementById(id);
}

function clickNewnote()
{
	setHtmlCode("");

	autoSave();
}

function clickToggleFullscreen()
{
	if (!viewFullscreen)
	{
		var docElm = document.documentElement;

		getDom("fullscreen").innerHTML = "Cancle Fullscreen";
		viewFullscreen = 1;

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

        docElm.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	}

	else if (viewFullscreen)
	{
		getDom("fullscreen").innerHTML = "Fullscreen";
		viewFullscreen = 0;

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
	}
}

function currentStateDoc()
{
    var docElm = "<!doctype html>\
                <html>\
                    <head>\
                        <meta charset='utf-8'>\
                        <title> My Note </title>\
                    </head>\
                    <body>"
                + getHtmlCode(); +
                    "</body>\
                </html>";

    return docElm;
}

function clickSaveHTML()
{
    //var docElm = document.documentElement.innerHTML;
    var docElm = currentStateDoc();
    var charset = "utf-8";
    var html_filename = prompt("파일 이름을 입력하세요.");

    if (html_filename == null)
        return ;

    else if (html_filename == "")
        html_filename = "index";

    html_filename = html_filename + ".html";

    saveAs(new Blob([docElm], {type: "text/plain;charset=" + charset}), html_filename);
}
