var Twit = require('twit') //semi -colon!

var T = new Twit({
    consumer_key:         's6hGsyQvdP2hNGojmMIYg'
  , consumer_secret:      'iTpJt3LHjp94dQs249KSSTIyAUnjhKHsKdqEzIn2HU'
  , access_token:         '2239949917-X2580CMnftwNjLVuQaTGI9hV1VoezaVk7dv3TBi'
  , access_token_secret:  'iiO0jUBTod8gl7A9rGIQaYrpEgrVOfOExxXiey44iWGbi'
}) //SEMI-COLON

var tweetlist = new Array(); // USE THE LITERAL =[];

T.get('statuses/user_timeline', { screen_name: 'frcfms' }, function(err, reply) {
  for(var i=0; i<reply.length; i++) {
    //console.log(reply[i].text);
    var items = reply[i].text.split(" ");

    newtweet = {
      fieldcode: items[0],
      matchtype: items[2],
      matchnumber: items[4],
      redfinalscore: items[6],
      bluefinalscore: items[8],
      redteamone: items[10],
      redteamtwo: items[11],
      redteamthree: items[12],
      blueeteamone: items[14],
      blueteamtwo: items[15],
      blueteamthree: items[16],
      redclimbpoints: items[18],
      blueclimbpoints: items[20],
      redfoulpoints: items[22],
      bluefoulpoints: items[24],
      redautoscore: items[26],
      blueautoscore: items[28],
      redteleopdiskpoints: items[30],
      blueteleopdiskpoints: items[32]
    };

    tweetlist[i] = newtweet;

  }

  for(var i=0;i<tweetlist.length;i++)
  {
    console.
    console.log("Field Code:"+tweetlist[i].fieldcode);
    console.log("Match Type:"+tweetlist[i].matchtype);
    console.log("Match Number:"+tweetlist[i].matchnumber);
    console.log("Red Final Score:"+tweetlist[i].redfinalscore);
    console.log("Blue Final Score:"+tweetlist[i].bluefinalscore);
    console.log("Red Team One:"+tweetlist[i].redteamone);
    console.log("Red Team Two:"+tweetlist[i].redteamtwo);
    console.log("Red Team Three:"+tweetlist[i].redteamthree);
    console.log("Blue Team One:"+tweetlist[i].blueeteamone);
    console.log("Blue Team Two:"+tweetlist[i].blueteamtwo);
    console.log("Blue Team Three:"+tweetlist[i].blueteamthree);
    console.log("Red Climb Points:"+tweetlist[i].redclimbpoints);
    console.log("Blue Climb Points:"+tweetlist[i].blueclimbpoints);
    console.log("Red Foul Points:"+tweetlist[i].redfoulpoints);
    console.log("Blue Foul Points:"+tweetlist[i].bluefoulpoints);
    console.log("Red Auto Score:"+tweetlist[i].redautoscore);
    console.log("Blue Auto Score:"+tweetlist[i].blueautoscore);
    console.log("Red Tele-Op Disk Points:"+tweetlist[i].redteleopdiskpoints);
    console.log("Blue Tele-Op Disk Points:"+tweetlist[i].blueteleopdiskpoints);
    console.log("\n");
  }
  
})

