import PropTypes from 'prop-types';

const InfoCard = ({ title, titleColor, description, image, imagePosition = 'left' }) => {
  return (
    <div className="bg-white  rounded-lg overflow-hidden shadow-md mb-16">
      <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="md:w-1/2">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
            data-aos="fade-down-right"
             data-aos-anchor-placement="top-center"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-gray-800">{title.split(' ')[0]}</span>{' '}
            <span className={titleColor}>{title.split(' ')[1]}</span>
          </h2>
          <p className="text-para text-sm md:text-base mt-5 leading-relaxed text-center md:text-left">{description}</p>
        </div>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imagePosition: PropTypes.oneOf(['left', 'right'])
};

InfoCard.defaultProps = {
  titleColor: 'text-green-500'
};

export default InfoCard;