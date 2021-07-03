import React from "react";

const more = ({
    style = {'align-self': 'center'},
    fill = '#fff',
    width = '100%',
    className = '',
    height = '100%',
    viewBox = '0 0 32 32',
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
       <title/>
       <g data-name="Layer 61" id="Layer_61">
           <path fill={fill} d="M6,11H26a1,1,0,0,0,0-2H6a1,1,0,0,0,0,2Z"/>
           <path fill={fill} d="M26,15H6a1,1,0,0,0,0,2H26a1,1,0,0,0,0-2Z"/>
           <path fill={fill} d="M26,21H6a1,1,0,0,0,0,2H26a1,1,0,0,0,0-2Z"/>
        </g>
  </svg>;   

export default more;

