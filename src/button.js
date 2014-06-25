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
}

function getDom(id)
{
    return document.getElementById(id);
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

function clickFullscreen()
{
    var viewFullScreen = getDom("fullScreen");

    $('.note-editor').attr("id", "screen");
    $('.note-statusbar').attr("id", "bar");
    
    if (onFullscreen == 0)
    {
        // var docElm = document.documentElement;
        var docElm = getDom("screen");

        getDom("bar").className = "hide";
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

        docElm.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);

        $(window).resize(function()
        {
            $('#screen').width($(window).width());
            $('#screen').height($(window).height());
            $('.note-editable').width($(window).width());
            $('.note-editable').height($(window).height());
        });
    }

    else if (onFullscreen == 1)
    {
        getDom("bar").className = "note-statusbar";
    	onFullscreen = 0;

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

function clickNewnote()
{
    setHtmlCode("");

    autoSave();
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

buttonInit();
