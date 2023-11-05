import React from 'react';

interface BackgroundCardImageProps {
 url: string;
}

const BackgroundCardImage: React.FC<BackgroundCardImageProps> = ({ url }) => {
 const divStyle = {
   backgroundImage: `url(${url})`,
	 backgroundPosition: 'top right',
	 backgroundSize: '100% 100%',
   backgroundRepeat: 'no-repeat',
   width: '100%',
   height: '100%',
 };

 return <div style={divStyle} />;
};

export default BackgroundCardImage;
