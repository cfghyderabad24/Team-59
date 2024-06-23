// src/components/Activities.jsx
import SideBar from './SideBar';
import './Activities.css';

const Activities = () => {
  return (
    <div>
      <SideBar />
      <div className="main-content">
        <div className="header-container">
        </div>
        <div className="content">
          <div className="Activities">
            <div className='items'>
              <img src="https://subhiksha.org/wp-content/uploads/2024/01/386072127_725591822916287_4911278391350482157_n-1-1024x683.webp" alt="Activity 1" />
            </div>
            <div className='items'>
              <img src="https://subhiksha.org/wp-content/uploads/2024/01/15129502_689753484520724_594012863346452504_o-1024x768.jpg" alt='Activity 2' />
            </div>
            <div className='items'>
              <img src="https://subhiksha.org/wp-content/uploads/2024/01/385508017_725591779582958_7854507121058528448_n-1024x683.jpg" alt='Activity 3' />
            </div>
            <div className='items'>
              <img src="https://subhiksha.org/wp-content/uploads/2024/01/54435607_1223808547781879_3164401229312819200_n.jpg" alt='Activity 4' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
