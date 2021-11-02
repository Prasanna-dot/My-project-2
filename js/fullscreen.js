var supportsES6 = function() {

  try {
    new Function("(a = 0) => a");
    return true;
  }
  catch (err) {
    return false;
  }
}();




function launchFullWindow(config) {

  "use strict";
  if (!supportsES6) return false;

  if (!(
    document.fullscreenEnabled || 
	  document.webkitFullscreenEnabled || 
	  document.mozFullScreenEnabled ||
	  document.msFullscreenEnabled)) return false;

  let cfg = {
    launchObjSelect : '[data-fullScreen]',
    open : {
      icon : 'icon-fullScreen-open',
      extension : '-open',
      label : 'Launch into full screen',
      title : 'Full screen [f, f11]'
    },
    exit : {
      icon : 'icon-fullScreen-exit',
      extension : '-exit',
      label : 'Exit full screen',
      title : 'Exit full screen [f, f11, esc]'
    }
  };

  Object.assign(cfg, config);

  const svgData = {
    open : {},
    exit : {}   
  }


  const setSvgData = (_ => {

    const getData = param => {
      const symbol = document.getElementById(cfg[param].icon);
      if (!symbol) return false;
      svgData[param].class = cfg.svgClass;
      svgData[param].icon = cfg[param].icon;
      svgData[param].symbol = symbol.innerHTML;
      svgData[param].viewBox = symbol.getAttribute('viewBox');
    };

    getData('open');
    getData('exit');
  })();


  const _openFullScreen = obj => {
    if (obj.requestFullscreen) {
      obj.requestFullscreen();
    } else if (obj.webkitRequestFullscreen) {
      obj.webkitRequestFullscreen();
    } else if (obj.mozRequestFullScreen) {
      obj.mozRequestFullScreen();
    } else if (obj.msRequestFullscreen) {
      obj.msRequestFullscreen();
    }
  };


  const _exitFullScreen = _ => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };


  const _hasFullScreenElement = _ =>
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement;


  const _instantiateLaunchObj = launchObj => {

    const _getCfg = (param, toOpen) => cfg[toOpen ? 'open' : 'exit'][param];

    const _getSvgString = toOpen => {
      const param = _getCfg('extension', toOpen).substr(1);
      return `<svg class="${svgData[param].class}" aria-hidden="true" viewbox="${svgData[param].viewBox}">${svgData[param].symbol}</svg>`;
    }

    const _setBtnAttr = toOpen => {
      btn.className = cfg.launchBtnClass + _getCfg('extension', toOpen);
      btn.title = _getCfg('title', toOpen);
      btn.setAttribute('aria-label', _getCfg('label', toOpen));
      btn.innerHTML = _getSvgString(toOpen);
    }

    let btn = launchObj.querySelector('.' + cfg.launchBtnClass);
    if (!btn) {

      btn = document.createElement('button');
      launchObj.prepend(btn);
    }
    _setBtnAttr(true);


    const _toggleFullScreen = _ => {
      if (!_hasFullScreenElement()) {
        _openFullScreen(launchObj);
      } else {
        _exitFullScreen();
      }
      btn.focus();
    };


    const _onFullscreenChange = _ => 
      _setBtnAttr(!_hasFullScreenElement());


    {
      btn.addEventListener('click', _toggleFullScreen);


    document.addEventListener('fullscreenchange', _onFullscreenChange);
    document.addEventListener('mozfullscreenchange', _onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', _onFullscreenChange);
    document.addEventListener("MSFullscreenChange", _onFullscreenChange);


      document.addEventListener('keydown', event => {
        if (event.keyCode === 70 || event.keyCode === 112) {
          _toggleFullScreen();
        }
      });
    }
    
  }

  const objs = document.querySelectorAll(cfg.launchObjSelect);
  for (const obj of objs) {
    _instantiateLaunchObj(obj);
  }

}

launchFullWindow();
