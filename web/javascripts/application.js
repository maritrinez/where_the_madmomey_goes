$(document).ready(function(){
  $.backstretch("images/background.jpg");

  $('#packages').hide();

  $('.packages').on('click', function(e){
    e.preventDefault(); e.stopPropagation();
    $('#packages').toggle();
  });

  $(".divider").on('click', function(e){
    e.preventDefault(); e.stopPropagation();

    $('html, body').animate({
      scrollTop: $($(this).find('a').attr('href')).offset().top - 60
    }, 200);
  });

  $("img[data-behaviour='map-image']").smoothZoom({
    width: 708,
    height: 584,
    pan_BUTTONS_SHOW: "NO",
    pan_LIMIT_BOUNDARY: "NO",
    button_SIZE: 24,
    button_ALIGN: "top right",
    initial_ZOOM: 50,
    zoom_MAX: 100,
    border_TRANSPARENCY: 20,
    responsive: false,
    responsive_maintain_ratio: true,
    max_WIDTH: '',
    max_HEIGHT: '',
    mouse_WHEEL: false,
    initial_POSITION: "1500,1700"
  });

  $('select').on('change', function(e){
    e.preventDefault(); e.stopPropagation();

    $('html, body').animate({
      scrollTop: $("#vis").offset().top - 20
    }, 200);

    var postalCode = $('form select[name*="postal_code"]').val();
    var category = $('form select[name="category"]').val();

    updateHash(postalCode, category);
  });

  $(window).hashchange( function(){
    if(hash != "#insights") {
      var hash = location.hash.split('#')[1].split('-');
      var postalCode = hash[0],
          category = hash[1];

      loadImages(postalCode, category);
      updateForm(postalCode, category);
    }
  });
});

function updateForm(postalCode, category){
  $('form select[name*="postal_code"]').val(postalCode);
  $('form select[name="category"]').val(category);
}

function updateHash(postalCode, category){
  window.location.hash = postalCode + '-' + category;
}

function loadImages(postalCode, category){
  replaceImage('map', postalCode, category);
  replaceImage('pie', postalCode, category);
  replaceImage('bar2', postalCode, category);
}

function replaceImage(type, postalCode, category){
  var extension = 'png';
  var imageName = type + '_' + postalCode + '_' + category + '.' + extension;
  var exceptions = [
    ["es_auto","28052"],
    ["es_contents","28052"],
    ["es_contents","28055"],
    ["es_home","28052"],
    ["es_hotelservices","28040"],
    ["es_hotelservices","28048"],
    ["es_hotelservices","28051"],
    ["es_hotelservices","28052"],
    ["es_hotelservices","28054"],
    ["es_hotelservices","28055"],
    ["es_hyper","28052"],
    ["es_leisure","28048"],
    ["es_leisure","28052"],
    ["es_otherservices","28052"],
    ["es_sportsandtoys","28052"],
    ["es_tech","28052"],
    ["es_tech","28055"],
    ["es_travel","28048"],
    ["es_travel","28051"],
    ["es_travel","28052"],
    ["es_travel","28055"],
    ["es_wellnessandbeauty","28052"]
  ];

  for(var i = 0; i < exceptions.length; i++){
    var row = exceptions[i];
    if(row[0] == category && row[1] == postalCode){
      imageName = type + '_empty.' + extension;
      break;
    }
  }

  var $img = $("img[data-behaviour='"+type+"-image']");
  $img.attr('src', 'images/' + imageName);
}
