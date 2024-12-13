import React from 'react';

const fonts = [
  'Arial, sans-serif',
  'Verdana, sans-serif',
  'Helvetica, sans-serif',
  'Tahoma, sans-serif',
  'Trebuchet MS, sans-serif',
  'Times New Roman, serif',
  'Georgia, serif',
  'Garamond, serif',
  'Courier New, monospace',
  'Brush Script MT, cursive'
];

const FontList = ({ text }) => {
  return (
    <div>
      {fonts.map((font, index) => (
        <p key={index} style={{ fontFamily: font }}>
          {text}
        </p>
      ))}
    </div>
  );
}

export default FontList;