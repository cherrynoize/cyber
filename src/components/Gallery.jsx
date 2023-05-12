import React from 'react';

let galleryItems = {}
galleryItems['cyber'] = toMap(require.context('../../public/img/gallery/cyber/', false, /\.(png|jpe?g|webp|gif|tiff)$/));
galleryItems['dreams'] = toMap(require.context('../../public/img/gallery/dreams/', false, /\.(png|jpe?g|webp|gif|tiff)$/));
galleryItems['glitch'] = toMap(require.context('../../public/img/gallery/glitch/', false, /\.(png|jpe?g|webp|gif|tiff)$/));
galleryItems['misc'] = toMap(require.context('../../public/img/gallery/misc/', false, /\.(png|jpe?g|webp|gif|tiff)$/));

/* Returns map from context */
export function toMap(ctx) {
  return ctx.keys().map(ctx);
}

/* Returns gallery item */
export function Item(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    const curDom = domRef.current;
    observer.observe(curDom);
    return () => observer.unobserve(curDom);
  }, []);

  return (
    <div
      className={'item fade-in ' + (isVisible ? 'is-visible' : '')}
      ref={domRef}
    >
      <img key={props.key} alt={props.key} src={props.src} />
    </div>
  );
}

/* Returns node containing images */
export default function Gallery(props) {
  const images = galleryItems[props.dir];

  return(
    <div id="gallery">
      {
        images.map((image, index) => (
          <Item key={index} src={image} />
        ))
      }
    </div>
  )
}
