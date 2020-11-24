import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { changeToDark, changeToLight } = this.props;
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          {/* <SidebarLink title="Dashboard" icon="dashboard" onClick={this.hideSidebar} /> */}
          <SidebarLink
            title="Dashboard"
            icon="store"
            route="/dashboard"
            onClick={this.hideSidebar}
          />
          <SidebarLink title="Templates"  icon="layers" route="/templates"  />
          <SidebarLink title="Cards"  icon="layers" route="/cards"  />

          {/* <SidebarCategory title="Layout" icon="layers">
            <button type="button" className="sidebar__link" onClick={changeToLight}>
              <p className="sidebar__link-title">Templates</p>
            </button>
            <button type="button" className="sidebar__link" onClick={changeToDark}>
              <p className="sidebar__link-title">Cards</p>
            </button>
          </SidebarCategory> */}
        </ul>
        {/* <ul className="sidebar__block">
          <SidebarCategory title="Example Pages" icon="diamond">
            <SidebarLink title="Page one" route="/pages/one" onClick={this.hideSidebar} />
            <SidebarLink title="Page two" route="/pages/two" onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul> */}
      </div>
    );
  }
}

export default SidebarContent;
