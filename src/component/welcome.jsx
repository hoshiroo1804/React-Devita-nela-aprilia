import React, { useEffect } from 'react';

function Welcome() {
  useEffect(() => {
    alert('Welcome at Devita Workshop');
  }, []);

  return (
    <div>
      {/* isi dari laman utama */}
    </div>
  );
}

export default Welcome;
