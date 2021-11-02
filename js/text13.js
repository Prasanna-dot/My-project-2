function ColorPicker() {
    this.colorPalette    = $('.color-palette13 canvas').get(0);
    this.colorPaletteCtx = this.colorPalette.getContext('2d');
  
    this.colorSlider = $('.color-slider13 canvas').get(0);
    this.colorSliderCtx = this.colorSlider.getContext('2d');
    
    this.startColor = '#f00';
    this.colorCoords = {'x': 10, 'y': 190};
    
    this.color = {
      'hex'  : '',
      'rgb'  : '',
      'hsv'  : '',
      'hsl'  : '',
      'cmyk' : '',
    }
  
    this.getMouseCoords = function(e, canvas) {
      var mouseCoords = '',
          x = e.pageX - $(canvas).offset().left,
          y = e.pageY - $(canvas).offset().top;
  
      if (x < 0) x = 0;
      if (x >= canvas.width) x = canvas.width - 1;
      if (y < 0) y = 0;
      if (y >= canvas.height) y = canvas.height - 1;
  
      mouseCoords = {'x' : x, 'y': y};
  
      if (canvas == this.colorPalette) {
          this.colorCoords = mouseCoords;
      }
  
      return mouseCoords;
    }
  
    this.selectColor = function() {
      var ctx = this.colorPaletteCtx,
          x   = this.colorCoords.x,
          y   = this.colorCoords.y,
          imgData = ctx.getImageData(x, y, 1, 1).data,
          rgb = 'rgb('+imgData[0]+', '+imgData[1]+', '+imgData[2]+')';
      
      this.colorValues(rgb);
      
      $('.color-palette13 .selector13 ').css({
        'background': rgb,
        'top': this.colorCoords.y + 'px',
        'left': this.colorCoords.x + 'px'
      });
  
      $('#t13').css('color', rgb);
    }
    
    this.colorValues = function(rgb) {
      
    }
    
    this.createColorPalette = function(color) {
      var picker  = this,
          canvas  = picker.colorPalette,
          ctx     = picker.colorPaletteCtx,
          clicked = false;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = color;
      ctx.fillRect(1, 0, canvas.width, canvas.height - 1);
  
      var whiteGradient = ctx.createLinearGradient(1, 1, canvas.width - 1, -1);
      whiteGradient.addColorStop(0, "#fff");
      whiteGradient.addColorStop(1, "transparent");
      ctx.fillStyle = whiteGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      var blackGradient = ctx.createLinearGradient(0, 0, -1, canvas.height - 1);
      blackGradient.addColorStop(0, "transparent");
      blackGradient.addColorStop(1, "#000");
      ctx.fillStyle = blackGradient;
      ctx.fillRect(0, 1, canvas.width, canvas.height);
      
      $('.selector13').on('mousedown touchstart', function(e) {
        clicked = true;
        picker.colorPaletteSelect(e, canvas, ctx);
      });
      $(canvas).on('mousedown touchend', function(e) {
        clicked = true;
        picker.colorPaletteSelect(e, canvas, ctx);
      });
      
      $(document).on('mousemove touchmove', function(e) {
        if(e.buttons == 1 && clicked) {
          picker.colorPaletteSelect(e, canvas, ctx);
        }
      })
      .on('mouseup', function() {
        clicked = false;
      });
    };
    
    this.colorPaletteSelect = function(e, canvas, ctx) {
      this.getMouseCoords(e, canvas);
  
      this.selectColor();
    }
    
    this.createColorSlider = function() {
      var picker  = this,
          canvas  = this.colorSlider,
          ctx     = this.colorSliderCtx,
          clicked = false;
      
      var hueGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      hueGradient.addColorStop(0.00, "#ff0000");
      hueGradient.addColorStop(0.17, "#ff00ff");
      hueGradient.addColorStop(0.33, "#0000ff");
      hueGradient.addColorStop(0.50, "#00ffff");
      hueGradient.addColorStop(0.67, "#00ff00");
      hueGradient.addColorStop(0.83, "#ffff00");
      hueGradient.addColorStop(1.00, "#ff0000");
  
      ctx.fillStyle = hueGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      $(canvas).on('mousedown', function(e) {
        clicked = true;
        picker.colorSliderSelect(e, canvas, ctx);
      });
      
      $(document).on('mousemove', function(e) {
        if(e.buttons == 1 && clicked) {
          picker.colorSliderSelect(e, canvas, ctx);
        }
      })
      .on('mouseup', function() {
        clicked = false;
      });
    };
    
    this.colorSliderSelect = function(e, canvas, ctx) {
      var mouse = this.getMouseCoords(e, canvas);
      
      var imgData = ctx.getImageData(0, mouse.y, 1, 1).data;
      
      this.createColorPalette('rgb('+imgData[0]+', '+imgData[1]+', '+imgData[2]+')');
  
      this.selectColor();
    }
    
    this.createColorPalette(this.startColor);
    this.createColorSlider();
  
    this.selectColor();
  }
  
  new ColorPicker();