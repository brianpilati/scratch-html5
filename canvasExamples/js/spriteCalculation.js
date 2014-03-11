function SpriteCalculation() {
  init: {
    this.Attach();
  }

};

SpriteCalculation.prototype.BuildGCOSelector = function() {
  var element = $('#affectsSelect');
  _.each(this.GetGlobalCompositeOperations(), function(gco) {
    element.append("<option value='" + gco + "'>" + gco + "</option>");
  });
}

SpriteCalculation.prototype.GetGlobalCompositeOperations = function() {
  var gco = new Array();
  gco.push("source-atop");
  gco.push("source-in");
  gco.push("source-out");
  gco.push("source-over");
  gco.push("destination-atop");
  gco.push("destination-in");
  gco.push("destination-out");
  gco.push("destination-over");
  gco.push("lighter");
  gco.push("copy");
  gco.push("xor");
  return gco;
}

SpriteCalculation.prototype.BuildImageSelector = function() {
  var element = $('#imagesSelect');
  _.each(this.GetImages(), function(image) {
    element.append("<option value='" + image + "'>" + image + "</option>");
  });
}

SpriteCalculation.prototype.DisplayImages = function() {
  var element = $('#displayImages');
  _.each(this.GetImages(), function(image) {
    element.append('<img class="imageSize" src="/canvasExamples/img/' + image + '">');
  });
}

SpriteCalculation.prototype.GetImages = function() {
  var images = new Array();
  images.push("deathStar.png");
  images.push("asteroid.png");
  images.push("costume1.svg");

  return images;
}

SpriteCalculation.prototype.Attach = function() {
  this.BuildGCOSelector();
  this.BuildImageSelector();
  this.DisplayImages();
  /*
  var gco=new Array();
  gco.push("source-atop");
  gco.push("source-in");
  gco.push("source-out");
  gco.push("source-over");
  gco.push("destination-atop");
  gco.push("destination-in");
  gco.push("destination-out");
  gco.push("destination-over");
  gco.push("lighter");
  gco.push("copy");
  gco.push("xor");
  for (n=0;n<gco.length;n++) {
    document.write("<div id='p_" + n + "' style='float:left;'>" + gco[n] + ":<br>");
    var c=document.createElement("canvas");
    c.width=120;
    c.height=100;
    document.getElementById("p_" + n).appendChild(c);
    var ctx=c.getContext("2d");    
    ctx.fillStyle="blue";
    ctx.fillRect(10,10,50,50);
    ctx.globalCompositeOperation=gco[n];
    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.arc(50,50,30,0,2*Math.PI);
    ctx.fill();
    document.write("</div>"); 
  }

  for (n=0;n<gco.length;n++) {
    document.write("<div id='r_" + n + "' style='float:left;'>" + gco[n] + ":<br>");
    var c=document.createElement("canvas");
    c.width=240;
    c.height=180;
    document.getElementById("r_" + n).appendChild(c);
    var ctx=c.getContext("2d");
    var srcImg=document.getElementById("sourceImg");
    var destImg=document.getElementById("destImg");
    console.log(destImg.clientWidth, destImg.clientHeight);
    ctx.fillStyle="blue";
    ctx.fillRect(0,0,240,180);
    //ctx.scale(.25, .25);
    //ctx.drawImage(srcImg,0,0);
    ctx.globalCompositeOperation=gco[n];
    ctx.scale(1, 1);
    ctx.drawImage(destImg,30,22.5);
    console.log("What", $('#destImg').height());
    //var aData = ctx.getImageData(0, 0, c.width, c.height).data;
    var aDataObj = ctx.getImageData(0, 0, c.width, c.height);
    var aData = aDataObj.data;
    var topY = undefined;
    var rightX = 0; 
    var leftX = 180; 
    var bottomY = 0; 
    var y = 0;
    var x = 0;
    if (gco[n] == 'source-in') {
      console.log(new Date());
      var leftSide = (240*4);
      var rightSide = (240*4)-4;
    //if (gco[n] == 'source-atop') {
      for(var i=0; i<aData.length; i += 4) {
        if(aData[i+3] > 0) { 
          if (topY == undefined) {
            topY = y;
          }

          if (x<leftX) {
            leftX = x;
          }

          if (x>rightX) {
            rightX = x;
          }

          if (y>bottomY) {
            bottomY = y;
          }


          aData[i] = 0;
          aData[i+1] = 0;
          aData[i+2] = 0;
          aData[i+3] = 255;
        } else {
          aData[i] = 255;
          aData[i+1] = 255;
          aData[i+2] = 255;
          aData[i+3] = aData[i+3];
        }


        if (i % leftSide == 0 || i % leftSide == rightSide) {
          aData[i] = 0;
          aData[i+1] = 0;
          aData[i+2] = 0;
          aData[i+3] = 255;
        }
        if (i % leftSide == 0) {
          y++;
          x=0;
        }
        x++;
      }

      aDataObj.data = aData;
      ctx.putImageData(aDataObj, 0, 0);
      console.log(new Date());

      //DrawLine
      ctx.globalCompositeOperation='destination-over';
      ctx.scale(1,1);
      ctx.moveTo(0,topY);
      ctx.lineTo(240,topY);
      ctx.stroke();

      ctx.moveTo(0,bottomY);
      ctx.lineTo(240,bottomY);
      ctx.stroke();

      ctx.moveTo(rightX,0);
      ctx.lineTo(rightX,180);
      ctx.stroke();

      ctx.moveTo(leftX,0);
      ctx.lineTo(leftX,180);
      ctx.stroke();

    }
    document.write("</div>"); 
  }
  */
};
