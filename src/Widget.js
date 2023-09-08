import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import "./css/widget.css";

function Widget() {
  return (
    <div>
      <div className="widget">
        <div className="widget_top">
          <div className="widget_header">
            <h4>LinkedIn News</h4>
            <InfoIcon />
          </div>
          <div className="widget_body">
            <ul className="widget_options">
              <li>
                <h4>Slaying Job Search fees</h4>
                <p>6d ago * 4,55 readers</p>
              </li>
              <li>
                <h4>A two pizza rule for eating</h4>
                <p>2d ago * 6,12 readers</p>
              </li>
              <li>
                <h4>How to handle a workplace breakup</h4>
                <p>3d ago * 4,45 readers</p>
              </li>
              <li>
                <h4>Flexi leave is the new flexi</h4>
                <p>1d ago * 4,55 readers</p>
              </li>
              <li>
                <h4>Shorter hours boost productivity</h4>
                <p>5d ago * 4,65 readers</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget_bottom">
          <div className="widget_header">
            <h4>Today's top courses</h4>
            <InfoIcon />
          </div>
          <div className="widget_body">
            <ul className="widget_options">
              <li>
                <h4>Leading with a heavy heart</h4>
                <p>kay coly</p>
              </li>
              <li>
                <h4>Building Resilience</h4>
                <p>Tatianan Kolovau</p>
              </li>
              <li>
                <h4>Critical Thinking for better judgment</h4>
                <p>3d ago * 4,34 readers</p>
              </li>
              <li>
                <h4>Flexi leave is the new flexi</h4>
                <p>1d ago * 4,55 readers</p>
              </li>
              <li>
                <h4>Shorter hours boost productivity</h4>
                <p>5d ago * 4,65 readers</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widget;
