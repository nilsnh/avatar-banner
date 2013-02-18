(function() {
  var createImageGridHtml, cssOptionsObj, fbImageOptions, fbuserNameObj, styleBanner;

  fbImageOptions = "?width=100&height=100";

  fbuserNameObj = {
    'Sindre Skrede': 'sindre.skrede.9',
    'Nils Norman Haukås': 'nhaukas',
    'Marie Havnen': 'marie.havnen',
    'Marie Fonnes': 'mfonnes',
    'Marianne Monstad': 'mariannemonstad',
    'Malin D. Øvrebø': 'malin.d.ovrebo',
    'Lisa Halvorsen': 'lisa.halvorsen1',
    'Marius Seim': 'marius.seim',
    'Maiken Beate Fjellanger': 'maiken.b.fjellanger',
    'Bjørnar Fjeldstad': '739398715',
    'Hedvig Elisabeth Andersland': 'hedvig.andersland',
    'Ida Maria Dahr': 'ida.m.nygaard',
    'Torjus Nafstad': 'torjus.nafstad'
  };

  cssOptionsObj = {
    'margin-bottom': '-5px'
    /*
    	img:hover {
    		margin:-5px 5px 0px -5px;
    	}
    */
  };

  createImageGridHtml = function(userNameObj) {
    var fullName, graphFBAddress, imageArray, resultStr, username;
    graphFBAddress = 'https://graph.facebook.com/';
    imageArray = [];
    for (fullName in userNameObj) {
      username = userNameObj[fullName];
      imageArray.push("<img src='" + graphFBAddress + username + "/picture" + fbImageOptions + "' title='" + fullName + "'>");
    }
    resultStr = imageArray.join('');
    return resultStr = "<div id='banner'>" + resultStr + "</div>";
  };

  styleBanner = function(divId) {
    return $("" + divId).css('width', '600px');
  };

  $(document).ready(function() {
    console.log('Starting script');
    console.log(fbuserNameObj);
    $('#banner').replaceWith(createImageGridHtml(fbuserNameObj));
    styleBanner('#banner');
    return $('#bannerSource').text(createImageGridHtml(fbuserNameObj));
  });

}).call(this);
