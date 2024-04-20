import React from 'react';

export default function Float({children, float='right', marginTop='0px'}) {

  return (
    <div className='Float' style={{float: {float}.float, marginTop: {marginTop}.marginTop}}>
      {children}
    </div>
  );
}