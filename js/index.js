let whichCampaign = 0;
let whichRole = 0;
let whichPC = 0;

$(document).ready(function() {
  // const database = firebase.database();

  console.log("reading js");

  $('#role').hide();
  $('#whichpc').hide();
  $('#go').hide();

  $('.campaign').click(function (event) {
    whichCampaign = event.target.id;
    // TODO: highlight button choice
    console.log("whichCampaign=" + whichCampaign);
    $('#role').show();
  });

  $('#dm').click(function (event) {
    whichRole = 'DM';
    // TODO: highlight button choice
    console.log("whichRole=" + whichRole);
    $('#go').show();
  });

  $('#pc').click(function () {
    whichRole = 'PC';
    console.log("whichRole=" + whichRole);
    // TODO: highlight button choice
    $('#whichpc').show();
  });

  $('.playerbtn').click(function (event) {
    // TODO: highlight button choice
    whichPC = event.target.id;
    console.log("whichPC=" + whichPC);
    $('#go').show();
  });

  $('#go').click(function () {
    // if DM go to DM view
    if (whichRole == 'DM') {
      location.href = 'dmview.html';
    } else {
      location.href = 'pcview.html';
    }
    // else go to PC view
  });

});
