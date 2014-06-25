(function ()
{
	var newNote = document.getElementById("new-note");

	if (newNote)
	{
		newNote.addEventListener("click", function ()
		{
			window.localStorage.clear();

			$('#listSelect *').remove();

			getLocalStorageList(createKey());
			
			initHtmlEditor();

			console.log("55555555");
		}, false);
	}
})();

// function newNote()
// {
// 	window.localStorage.clear();

// 	$('#listSelect *').remove();

// 	getLocalStorageList(createKey());
	
// 	initHtmlEditor();

// 	console.log("2222");
// }