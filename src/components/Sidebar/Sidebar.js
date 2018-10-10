import React from "react";
import './Sidebar.css';


const Sidebar = (props) => {   
    //console.log('my props', this.props.venues)
    return (
      <div id="navbar" className="sidenav" role='navigation'>

        <div className='nav-header'>

          <div className='icon-btn-wrapper'>
  
            <button className='close-button' 
            tabIndex='0'
            onClick={props.hamburgerClose} 
            aria-label='Close sidebar'>x</button> 
          </div>

          <div className='filter'>
            <input
              className='sidebar-filter'
              type='text'
              placeholder='Search'
              //value={this.props.query}
              onChange={event => props.updateQuery(event.target.value)}
              aria-label='Food Restaurant'
            /> 
          </div>

        </div>
        <nav id='sidebar-list'> 
          <ul className='ul-list' role='menu'>
            {props.showingLocations.map((venus) =>
              <li key={venus.venue.id}
              tabIndex='0'
              role='menuitem'
              aria-label={venus.venue.name + 'click to read more'}
              >
              <span onClick={() => props.markerClicked(venus.venue.id)}>
                {venus.venue.name}
              </span>
              </li>
            )}
          </ul>
        </nav>
      </div>
    );
  }


export default Sidebar;