import Image from "../images/Image"
import Title from '../title/Title'

const Header = (props) => {
  const { classHeader, classWrapper, src, alt, classImg, title, classTxt } = props;
  return (
    <>
      <header className={classHeader}>
        <div className={classWrapper}>
          <Image src={src} alt={alt} classImg={classImg} />
          <Title title={title} classTxt={classTxt} />
        </div>
      </header>
    </>
  )
}

export default Header