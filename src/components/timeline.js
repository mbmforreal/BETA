import React, { useEffect } from 'react';
import WOW from 'wowjs';
import './timeline.css'; // Import your CSS file

const timelineData = [
  { year: '2007', title: 'Company Foundation' },
  { year: '2008', title: 'Release first energy storage system for the Australian market.' },
  { year: '2010', title: 'Become one of the main suppliers of Energy Storage Systems' },
  { year: '2015', title: 'Lunch the first Wall mount energy storage system' },
  { year: '2019', title: 'Release first Portal Power Station' },
  { year: '2020', title: 'BMS for Energy Storage System' },
  { year: '2022', title: 'Start ODM production facility for major brands' },
  { year: '2023', title: 'Establish Brand Beta+' },
];

function Timeline() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
  <>
    <div className="timelineCover">
      <div className="timelineHead">
        <h1>Development <span className='Imp'>Path</span></h1>
        <h3>2007-2023</h3>
      </div>
      <div className="timeline-container">
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div className={`timeline-item`}  key={index}>
              <div className="timeline-content">
                <h1>{item.year}</h1>
                <div className="timelineLine" >&nbsp;&nbsp;</div>
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
} 

export default Timeline;
