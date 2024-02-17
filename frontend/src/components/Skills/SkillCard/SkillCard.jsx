import "./SkillCard.css"
import PropTypes from 'prop-types';

const SkillCard = ({title, iconUrl, isActive, onClick}) => {
  return ( 
    <div
     className={`skills-card ${isActive ? "active" : "" }` }
     onClick={() => onClick()}
    >
     <div className="skill-icon">
        <img src={iconUrl} alt={title} />
     </div>

    <span>{title}</span>


    </div>
  )
}

export default SkillCard

SkillCard.propTypes = {
    title: PropTypes.string,
    iconUrl: PropTypes.string,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
  };