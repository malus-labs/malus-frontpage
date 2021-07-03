import React from "react";

const logo1 = ({
    style = {'align-self': 'center', 'shape-rendering': 'geometricPrecision', 'text-rendering': 'geometricPrecision', 'image-rendering': 'optimizeQuality', 'fill-rule': 'evenodd', 'clip-rule': 'evenodd'},
    width = '100%',
    className = '',
    height = '100%',
    viewBox = '0 0 2174 1880',
}) =>
 <svg
   width={width}
   style={style}
   height={height}
   viewBox={viewBox}
   className={className}
   xmlns="http://www.w3.org/2000/svg"
   xmlnsXlink="http://www.w3.org/1999/xlink"
   >
     <defs>
       <style type="text/css">
       </style>
    </defs>
    
    <g id="Layer_x0020_1">
      <metadata id="CorelCorpID_0Corel-Layer"/>
      <path class="fil0" style={{'fill': 'white'}} d="M83 313c303,-147 644,-229 1004,-229 360,0 700,82 1004,229l-558 1484 -5 -4c-3,-2 -6,-4 -8,-6 -257,-183 -607,-190 -872,6l-5 4 -558 -1484z"/>
      <path class="fil1" style={{'fill': 'black', 'fill-rule': 'nonzero'}} d="M47 238c159,-77 329,-137 506,-178 172,-39 351,-60 534,-60 183,0 362,21 534,60 177,40 346,100 506,178 39,19 57,64 42,104l-558 1484c-16,43 -64,65 -107,49 -9,-3 -16,-8 -23,-13l-2 -1 0 0 -4 -3 0 0 -4 -3c-1,-1 -2,-1 -2,-2 -115,-81 -251,-122 -387,-121 -134,1 -268,43 -384,129l-5 4c-37,27 -89,20 -116,-17 -5,-6 -8,-13 -11,-20l0 0 -558 -1484c-15,-41 3,-86 42,-104l0 0zm543 -16c-139,32 -274,77 -402,133l495 1315c124,-70 261,-105 397,-106 142,-1 284,35 411,106l495 -1315c-128,-57 -262,-102 -402,-133 -159,-36 -326,-56 -497,-56 -171,0 -338,19 -497,56z"/>
    </g>
  </svg>;   

export default logo1;