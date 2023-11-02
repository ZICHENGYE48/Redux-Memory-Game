interface CardImageProps {
  onClick?: () => void
  className: string,
  src: string,
  alt: string
}

const CardImage = ({
  onClick,
  className,
  src,
  alt
}:CardImageProps) => (
  <img className={className} onClick={onClick} src={src} alt={alt}/>
)

export default CardImage