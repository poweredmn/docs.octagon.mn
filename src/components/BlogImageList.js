import React from 'react';
export default function BlogImageList({children}) {
  return (
    <div className="container">
      <div className="row">
        {React.Children.toArray(children).map((image, i) => (
          <div className="col" key={'image' + i}>
            {image}
          </div>
        ))}
      </div>
    </div>
  )
} 