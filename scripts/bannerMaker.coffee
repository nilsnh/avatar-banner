fbImageOptions = "?width=100&height=100"

fbuserNameObj = 
	'Sindre Skrede': 'sindre.skrede.9'
	'Nils Norman Haukås': 'nhaukas'
	'Marie Havnen': 'marie.havnen'
	'Marie Fonnes': 'mfonnes'
	'Marianne Monstad': 'mariannemonstad'
	'Malin D. Øvrebø': 'malin.d.ovrebo'		
	'Lisa Halvorsen': 'lisa.halvorsen1'
	'Marius Seim': 'marius.seim'
	'Maiken Beate Fjellanger': 'maiken.b.fjellanger'
	'Bjørnar Fjeldstad': '739398715'	
	'Hedvig Elisabeth Andersland': 'hedvig.andersland'
	'Ida Maria Dahr': 'ida.m.nygaard'
	'Torjus Nafstad': 'torjus.nafstad'

cssOptionsObj = 
	'margin-bottom': '-5px'
	###
	img:hover {
		margin:-5px 5px 0px -5px;
	}
	###

createImageGridHtml = (userNameObj) ->
	graphFBAddress = 'https://graph.facebook.com/'
	imageArray = []
	for fullName, username of userNameObj
		imageArray.push "<img src='#{graphFBAddress}#{username}/picture#{fbImageOptions}' title='#{fullName}'>"
	resultStr = imageArray.join('')
	resultStr = "<div id='banner'>#{resultStr}</div>"

styleBanner = (divId) ->
	$("#{divId}").css 'width', '600px'

$(document).ready ->
  console.log 'Starting script'
  console.log fbuserNameObj
  $('#banner').replaceWith(createImageGridHtml(fbuserNameObj))
  styleBanner('#banner')
  $('#bannerSource').text(createImageGridHtml(fbuserNameObj))