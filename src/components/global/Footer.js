import React from 'react';
import config from '../../utils/config';

function Footer() {
  return (
    <div className="bg-gray-100 center">
      <div className="bg-gray-100 center container mx-auto px-6 pt-10 pb-6 text-center">
        ©
        {config.siteName}
        . All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
