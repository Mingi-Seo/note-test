var $contents = $('#contents');

function getHtmlCode()
{
	return $contents.code();
}

function setHtmlCode(code)
{
	$contents.code(code);
}

function initHtmlEditor()
{
	$contents.summernote(
	{
		height: 300,
		oninit : autoLoad,
		onkeyup : autoSave
	});
}
