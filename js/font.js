 
function getSize() {
  size = $( "#t1" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size1" ).text(  size  );
}

getSize();

$( "#up1" ).on( "click", function() {

  if ((size + 1) <= 50) {
    $( "#t1" ).css( "font-size", "+=1" );
    $( "#font-size1" ).text(  size += 1 );
  }
});

$( "#down1" ).on( "click", function() {
  if ((size - 1) >= 10) {
    $( "#t1" ).css( "font-size", "-=1" );
    $( "#font-size1" ).text(  size -=1  );
  }
});
  
function getSize() {
  size = $( "#t1" ).css( "margin-left" );
  size = parseInt(size, 0);
  $( "#xaxis1" ).text(  size  );
}

getSize();

$( "#xup1" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t1" ).css( "margin-left", "-=5" );
    $( "#xaxis1" ).text(  size -=5 );
  }
});

$( "#xdown1" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t1" ).css( "margin-left", "+=5" );
    $( "#xaxis1" ).text(  size +=5  );
  }
});
  
function getSize() {
  size = $( "#t1" ).css( "margin-bottom" );
  size = parseInt(size, 0);
  $( "#yaxis1" ).text(  size  );
}

getSize();

$( "#yup1" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t1" ).css( "margin-bottom", "-=5" );
    $( "#yaxis1" ).text(  size -=5 );
  }
});

$( "#ydown1" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t1" ).css( "margin-bottom", "+=5" );
    $( "#yaxis1" ).text(  size +=5  );
  }
});





function getSize() {
  size = $( "#t2" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size2" ).text(  size  );
}

getSize();

$( "#up2" ).on( "click", function() {

  if ((size + 1) <= 50) {
    $( "#t2" ).css( "font-size", "+=1" );
    $( "#font-size2" ).text(  size += 1 );
  }
});

$( "#down2" ).on( "click", function() {
  if ((size - 1) >= 10) {
    $( "#t2" ).css( "font-size", "-=1" );
    $( "#font-size2" ).text(  size -=1  );
  }
});
  
function getSize() {
  size = $( "#t2" ).css( "margin-left" );
  size = parseInt(size, 0);
  $( "#xaxis2" ).text(  size  );
}

getSize();

$( "#xup2" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t2" ).css( "margin-left", "-=5" );
    $( "#xaxis2" ).text(  size -=5 );
  }
});

$( "#xdown2" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t2" ).css( "margin-left", "+=5" );
    $( "#xaxis2" ).text(  size +=5  );
  }
});
  
function getSize() {
  size = $( "#t2" ).css( "margin-bottom" );
  size = parseInt(size, 0);
  $( "#yaxis2" ).text(  size  );
}

getSize();

$( "#yup2" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t2" ).css( "margin-bottom", "-=5" );
    $( "#yaxis2" ).text(  size -=5 );
  }
});

$( "#ydown2" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t2" ).css( "margin-bottom", "+=5" );
    $( "#yaxis2" ).text(  size +=5  );
  }
});




function getSize() {
  size = $( "#t3" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size3" ).text(  size  );
}

getSize();

$( "#up3" ).on( "click", function() {

  if ((size + 1) <= 50) {
    $( "#t3" ).css( "font-size", "+=1" );
    $( "#font-size3" ).text(  size += 1 );
  }
});

$( "#down3" ).on( "click", function() {
  if ((size - 1) >= 10) {
    $( "#t3" ).css( "font-size", "-=1" );
    $( "#font-size3" ).text(  size -=1  );
  }
});
  
function getSize() {
  size = $( "#t3" ).css( "margin-left" );
  size = parseInt(size, 0);
  $( "#xaxis3" ).text(  size  );
}

getSize();

$( "#xup3" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t3" ).css( "margin-left", "-=5" );
    $( "#xaxis3" ).text(  size -=5 );
  }
});

$( "#xdown3" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t3" ).css( "margin-left", "+=5" );
    $( "#xaxis3" ).text(  size +=5  );
  }
});
  
function getSize() {
  size = $( "#t3" ).css( "margin-bottom" );
  size = parseInt(size, 0);
  $( "#yaxis3" ).text(  size  );
}

getSize();

$( "#yup3" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t3" ).css( "margin-bottom", "-=5" );
    $( "#yaxis3" ).text(  size -=5 );
  }
});

$( "#ydown3" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t3" ).css( "margin-bottom", "+=5" );
    $( "#yaxis3" ).text(  size +=5  );
  }
});





function getSize() {
  size = $( "#t4" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size4" ).text(  size  );
}

getSize();

$( "#up4" ).on( "click", function() {

  if ((size + 1) <= 50) {
    $( "#t4" ).css( "font-size", "+=1" );
    $( "#font-size4" ).text(  size += 1 );
  }
});

$( "#down4" ).on( "click", function() {
  if ((size - 1) >= 10) {
    $( "#t4" ).css( "font-size", "-=1" );
    $( "#font-size4" ).text(  size -=1  );
  }
});
  
function getSize() {
  size = $( "#t4" ).css( "margin-left" );
  size = parseInt(size, 0);
  $( "#xaxis4" ).text(  size  );
}

getSize();

$( "#xup4" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t4" ).css( "margin-left", "-=5" );
    $( "#xaxis4" ).text(  size -=5 );
  }
});

$( "#xdown4" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t4" ).css( "margin-left", "+=5" );
    $( "#xaxis4" ).text(  size +=5  );
  }
});
  
function getSize() {
  size = $( "#t4" ).css( "margin-bottom" );
  size = parseInt(size, 0);
  $( "#yaxis4" ).text(  size  );
}

getSize();

$( "#yup4" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t4" ).css( "margin-bottom", "-=5" );
    $( "#yaxis4" ).text(  size -=5 );
  }
});

$( "#ydown4" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t4" ).css( "margin-bottom", "+=5" );
    $( "#yaxis4" ).text(  size +=5  );
  }
});



function getSize() {
  size = $( "#t5" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size5" ).text(  size  );
}

getSize();

$( "#up5" ).on( "click", function() {

  if ((size + 1) <= 50) {
    $( "#t5" ).css( "font-size", "+=1" );
    $( "#font-size5" ).text(  size += 1 );
  }
});

$( "#down5" ).on( "click", function() {
  if ((size - 1) >= 10) {
    $( "#t5" ).css( "font-size", "-=1" );
    $( "#font-size5" ).text(  size -=1  );
  }
});
  
function getSize() {
  size = $( "#t5" ).css( "margin-left" );
  size = parseInt(size, 0);
  $( "#xaxis5" ).text(  size  );
}

getSize();

$( "#xup5" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t5" ).css( "margin-left", "-=5" );
    $( "#xaxis5" ).text(  size -=5 );
  }
});

$( "#xdown5" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t5" ).css( "margin-left", "+=5" );
    $( "#xaxis5" ).text(  size +=5  );
  }
});
  
function getSize() {
  size = $( "#t5" ).css( "margin-bottom" );
  size = parseInt(size, 0);
  $( "#yaxis5" ).text(  size  );
}

getSize();

$( "#yup5" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t5" ).css( "margin-bottom", "-=5" );
    $( "#yaxis5" ).text(  size -=5 );
  }
});

$( "#ydown5" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t5" ).css( "margin-bottom", "+=5" );
    $( "#yaxis5" ).text(  size +=5  );
  }
});



function getSize() {
  size = $( "#t6" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size6" ).text(  size  );
}

getSize();

$( "#up6" ).on( "click", function() {

  if ((size + 1) <= 50) {
    $( "#t6" ).css( "font-size", "+=1" );
    $( "#font-size6" ).text(  size += 1 );
  }
});

$( "#down6" ).on( "click", function() {
  if ((size - 1) >= 10) {
    $( "#t6" ).css( "font-size", "-=1" );
    $( "#font-size6" ).text(  size -=1  );
  }
});
  
function getSize() {
  size = $( "#t6" ).css( "margin-left" );
  size = parseInt(size, 0);
  $( "#xaxis6" ).text(  size  );
}

getSize();

$( "#xup6" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t6" ).css( "margin-left", "-=5" );
    $( "#xaxis6" ).text(  size -=5 );
  }
});

$( "#xdown6" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t6" ).css( "margin-left", "+=5" );
    $( "#xaxis6" ).text(  size +=5  );
  }
});
  
function getSize() {
  size = $( "#t6" ).css( "margin-bottom" );
  size = parseInt(size, 0);
  $( "#yaxis6" ).text(  size  );
}

getSize();

$( "#yup6" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t6" ).css( "margin-bottom", "-=5" );
    $( "#yaxis6" ).text(  size -=5 );
  }
});

$( "#ydown6" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t6" ).css( "margin-bottom", "+=5" );
    $( "#yaxis6" ).text(  size +=5  );
  }
});



function getSize() {
  size = $( "#t7" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size7" ).text(  size  );
}

getSize();

$( "#up7" ).on( "click", function() {

  if ((size + 1) <= 50) {
    $( "#t7" ).css( "font-size", "+=1" );
    $( "#font-size7" ).text(  size += 1 );
  }
});

$( "#down7" ).on( "click", function() {
  if ((size - 1) >= 10) {
    $( "#t7" ).css( "font-size", "-=1" );
    $( "#font-size7" ).text(  size -=1  );
  }
});
  
function getSize() {
  size = $( "#t7" ).css( "margin-left" );
  size = parseInt(size, 0);
  $( "#xaxis7" ).text(  size  );
}

getSize();

$( "#xup7" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t7" ).css( "margin-left", "-=5" );
    $( "#xaxis7" ).text(  size -=5 );
  }
});

$( "#xdown7" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t7" ).css( "margin-left", "+=5" );
    $( "#xaxis7" ).text(  size +=5  );
  }
});
  
function getSize() {
  size = $( "#t7" ).css( "margin-bottom" );
  size = parseInt(size, 0);
  $( "#yaxis7" ).text(  size  );
}

getSize();

$( "#yup7" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t7" ).css( "margin-bottom", "-=5" );
    $( "#yaxis7" ).text(  size -=5 );
  }
});

$( "#ydown7" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t7" ).css( "margin-bottom", "+=5" );
    $( "#yaxis7" ).text(  size +=5  );
  }
});



function getSize() {
  size = $( "#t8" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size8" ).text(  size  );
}

getSize();

$( "#up8" ).on( "click", function() {

  if ((size + 1) <= 50) {
    $( "#t8" ).css( "font-size", "+=1" );
    $( "#font-size8" ).text(  size += 1 );
  }
});

$( "#down8" ).on( "click", function() {
  if ((size - 1) >= 10) {
    $( "#t8" ).css( "font-size", "-=1" );
    $( "#font-size8" ).text(  size -=1  );
  }
});
  
function getSize() {
  size = $( "#t8" ).css( "margin-left" );
  size = parseInt(size, 0);
  $( "#xaxis8" ).text(  size  );
}

getSize();

$( "#xup8" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t8" ).css( "margin-left", "-=5" );
    $( "#xaxis8" ).text(  size -=5 );
  }
});

$( "#xdown8" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t8" ).css( "margin-left", "+=5" );
    $( "#xaxis8" ).text(  size +=5  );
  }
});
  
function getSize() {
  size = $( "#t8" ).css( "margin-bottom" );
  size = parseInt(size, 0);
  $( "#yaxis8" ).text(  size  );
}

getSize();

$( "#yup8" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t8" ).css( "margin-bottom", "-=5" );
    $( "#yaxis8" ).text(  size -=5 );
  }
});

$( "#ydown8" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t8" ).css( "margin-bottom", "+=5" );
    $( "#yaxis8" ).text(  size +=5  );
  }
});



function getSize() {
  size = $( "#t9" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size9" ).text(  size  );
}

getSize();

$( "#up9" ).on( "click", function() {

  if ((size + 1) <= 50) {
    $( "#t9" ).css( "font-size", "+=1" );
    $( "#font-size9" ).text(  size += 1 );
  }
});

$( "#down9" ).on( "click", function() {
  if ((size - 1) >= 10) {
    $( "#t9" ).css( "font-size", "-=1" );
    $( "#font-size9" ).text(  size -=1  );
  }
});
  
function getSize() {
  size = $( "#t9" ).css( "margin-left" );
  size = parseInt(size, 0);
  $( "#xaxis9" ).text(  size  );
}

getSize();

$( "#xup9" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t9" ).css( "margin-left", "-=5" );
    $( "#xaxis9" ).text(  size -=5 );
  }
});

$( "#xdown9" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t9" ).css( "margin-left", "+=5" );
    $( "#xaxis9" ).text(  size +=5  );
  }
});
  
function getSize() {
  size = $( "#t9" ).css( "margin-bottom" );
  size = parseInt(size, 0);
  $( "#yaxis9" ).text(  size  );
}

getSize();

$( "#yup9" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t9" ).css( "margin-bottom", "-=5" );
    $( "#yaxis9" ).text(  size -=5 );
  }
});

$( "#ydown9" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t9" ).css( "margin-bottom", "+=5" );
    $( "#yaxis9" ).text(  size +=5  );
  }
});



function getSize() {
  size = $( "#t11" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size11" ).text(  size  );
}

getSize();

$( "#up11" ).on( "click", function() {

  if ((size + 1) <= 50) {
    $( "#t11" ).css( "font-size", "+=1" );
    $( "#font-size11" ).text(  size += 1 );
  }
});

$( "#down11" ).on( "click", function() {
  if ((size - 1) >= 10) {
    $( "#t11" ).css( "font-size", "-=1" );
    $( "#font-size11" ).text(  size -=1  );
  }
});
  
function getSize() {
  size = $( "#t11" ).css( "margin-left" );
  size = parseInt(size, 0);
  $( "#xaxis11" ).text(  size  );
}

getSize();

$( "#xup11" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t11" ).css( "margin-left", "-=5" );
    $( "#xaxis11" ).text(  size -=5 );
  }
});

$( "#xdown11" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t11" ).css( "margin-left", "+=5" );
    $( "#xaxis11" ).text(  size +=5  );
  }
});
  
function getSize() {
  size = $( "#t11" ).css( "margin-bottom" );
  size = parseInt(size, 0);
  $( "#yaxis11" ).text(  size  );
}

getSize();

$( "#yup11" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t11" ).css( "margin-bottom", "-=5" );
    $( "#yaxis11" ).text(  size -=5 );
  }
});

$( "#ydown11" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t11" ).css( "margin-bottom", "+=5" );
    $( "#yaxis11" ).text(  size +=5  );
  }
});



function getSize() {
  size = $( "#t12" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size12" ).text(  size  );
}

getSize();

$( "#up12" ).on( "click", function() {

  if ((size + 1) <= 50) {
    $( "#t12" ).css( "font-size", "+=1" );
    $( "#font-size12" ).text(  size += 1 );
  }
});

$( "#down12" ).on( "click", function() {
  if ((size - 1) >= 10) {
    $( "#t12" ).css( "font-size", "-=1" );
    $( "#font-size12" ).text(  size -=1  );
  }
});
  
function getSize() {
  size = $( "#t12" ).css( "margin-left" );
  size = parseInt(size, 0);
  $( "#xaxis12" ).text(  size  );
}

getSize();

$( "#xup12" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t12" ).css( "margin-left", "-=5" );
    $( "#xaxis12" ).text(  size -=5 );
  }
});

$( "#xdown12" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t12" ).css( "margin-left", "+=5" );
    $( "#xaxis12" ).text(  size +=5  );
  }
});
  
function getSize() {
  size = $( "#t12" ).css( "margin-bottom" );
  size = parseInt(size, 0);
  $( "#yaxis12" ).text(  size  );
}

getSize();

$( "#yup12" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t12" ).css( "margin-bottom", "-=5" );
    $( "#yaxis12" ).text(  size -=5 );
  }
});

$( "#ydown12" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t12" ).css( "margin-bottom", "+=5" );
    $( "#yaxis12" ).text(  size +=5  );
  }
});



function getSize() {
  size = $( "#t13" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size13" ).text(  size  );
}

getSize();

$( "#up13" ).on( "click", function() {

  if ((size + 1) <= 50) {
    $( "#t13" ).css( "font-size", "+=1" );
    $( "#font-size13" ).text(  size += 1 );
  }
});

$( "#down13" ).on( "click", function() {
  if ((size - 1) >= 10) {
    $( "#t13" ).css( "font-size", "-=1" );
    $( "#font-size13" ).text(  size -=1  );
  }
});
  
function getSize() {
  size = $( "#t13" ).css( "margin-left" );
  size = parseInt(size, 0);
  $( "#xaxis13" ).text(  size  );
}

getSize();

$( "#xup13" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t13" ).css( "margin-left", "-=5" );
    $( "#xaxis13" ).text(  size -=5 );
  }
});

$( "#xdown13" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t13" ).css( "margin-left", "+=5" );
    $( "#xaxis13" ).text(  size +=5  );
  }
});
  
function getSize() {
  size = $( "#t13" ).css( "margin-bottom" );
  size = parseInt(size, 0);
  $( "#yaxis13" ).text(  size  );
}

getSize();

$( "#yup13" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t13" ).css( "margin-bottom", "-=5" );
    $( "#yaxis13" ).text(  size -=5 );
  }
});

$( "#ydown13" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t13" ).css( "margin-bottom", "+=5" );
    $( "#yaxis13" ).text(  size +=5  );
  }
});



function getSize() {
  size = $( "#t14" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size14" ).text(  size  );
}

getSize();

$( "#up14" ).on( "click", function() {

  if ((size + 1) <= 50) {
    $( "#t14" ).css( "font-size", "+=1" );
    $( "#font-size14" ).text(  size += 1 );
  }
});

$( "#down14" ).on( "click", function() {
  if ((size - 1) >= 10) {
    $( "#t14" ).css( "font-size", "-=1" );
    $( "#font-size14" ).text(  size -=1  );
  }
});
  
function getSize() {
  size = $( "#t14" ).css( "margin-left" );
  size = parseInt(size, 0);
  $( "#xaxis14" ).text(  size  );
}

getSize();

$( "#xup14" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t14" ).css( "margin-left", "-=5" );
    $( "#xaxis14" ).text(  size -=5 );
  }
});

$( "#xdown14" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t14" ).css( "margin-left", "+=5" );
    $( "#xaxis14" ).text(  size +=5  );
  }
});
  
function getSize() {
  size = $( "#t14" ).css( "margin-bottom" );
  size = parseInt(size, 0);
  $( "#yaxis14" ).text(  size  );
}

getSize();

$( "#yup14" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t14" ).css( "margin-bottom", "-=5" );
    $( "#yaxis14" ).text(  size -=5 );
  }
});

$( "#ydown14" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t14" ).css( "margin-bottom", "+=5" );
    $( "#yaxis14" ).text(  size +=5  );
  }
});



function getSize() {
  size = $( "#t15" ).css( "font-size" );
  size = parseInt(size, 10);
  $( "#font-size15" ).text(  size  );
}

getSize();

$( "#up15" ).on( "click", function() {

  if ((size + 1) <= 50) {
    $( "#t15" ).css( "font-size", "+=1" );
    $( "#font-size15" ).text(  size += 1 );
  }
});

$( "#down15" ).on( "click", function() {
  if ((size - 1) >= 10) {
    $( "#t15" ).css( "font-size", "-=1" );
    $( "#font-size15" ).text(  size -=1  );
  }
});
  
function getSize() {
  size = $( "#t15" ).css( "margin-left" );
  size = parseInt(size, 0);
  $( "#xaxis15" ).text(  size  );
}

getSize();

$( "#xup15" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t15" ).css( "margin-left", "-=5" );
    $( "#xaxis15" ).text(  size -=5 );
  }
});

$( "#xdown15" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t15" ).css( "margin-left", "+=5" );
    $( "#xaxis15" ).text(  size +=5  );
  }
});
  
function getSize() {
  size = $( "#t15" ).css( "margin-bottom" );
  size = parseInt(size, 0);
  $( "#yaxis15" ).text(  size  );
}

getSize();

$( "#yup15" ).on( "click", function() {

  if ((size - 5) <=1000) {
    $( "#t15" ).css( "margin-bottom", "-=5" );
    $( "#yaxis15" ).text(  size -=5 );
  }
});

$( "#ydown15" ).on( "click", function() {
  if ((size + 5) >=-1000) {
    $( "#t15" ).css( "margin-bottom", "+=5" );
    $( "#yaxis15" ).text(  size +=5  );
  }
});