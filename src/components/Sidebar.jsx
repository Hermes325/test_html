import React from "react";
import "../style/sidebar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../fontawesome';


const routes = [
    { title: 'Dashboard', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales',     icon: 'chart-line',         path: '/sales' },
    { title: 'Costs',     icon: 'chart-column',       path: '/costs' },
    { title: 'Payments',  icon: 'wallet',             path: '/payments' },
    { title: 'Finances',  icon: 'chart-pie',          path: '/finances' },
    { title: 'Messages',  icon: 'envelope',           path: '/messages' },
];
const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];
export default class Sidebar extends React.Component {
constructor(props) {
    super(props);   

    this.state = {
        isOpened: true,
    };
}

toggleSidebar = () => {
    this.setState((state) => ({ isOpened: !state.isOpened }) );
};

render() {
const { isOpened } = this.state;


return(
    
<aside className={ "grid grid-rows-[0.2fr_2fr_1fr_0.5fr] gap-y-5 items-center justify-center h-full rounded-lg w-[13vw] bg-white"}>

    <div className="logo flex flex-center items-center justify-between h-20 relative">
        <img src="./logo.png" alt="Logotip" className="h-10  "/>
        <h1 className="">Technifly</h1>
        <div>
            <button className=" arrow w-10 h-10 bg-black rounded-full absolute top-5 right-[-45px] flex items-center justify-center "
            onClick={ this.toggleSidebar }>
                <FontAwesomeIcon className="text-white w-5 h-5 mr-1" icon={ isOpened ? 'angle-left' : 'angle-right' } />
            </button>
        </div>
    </div>

    <div className="high_bar grid grid-rows-6 gap-y-3 mt-8">
          {
            routes.map((route) => (
             <div className="hover:bg-amber-50 active h-[100%] rounded-lg group/edit">
                <a href={route.path} className="flex flex-center items-center gap-5 m-2  group-hover/edit:text-black" key={ route.title }>
                    <FontAwesomeIcon icon={ route.icon } />
                    <span>{ route.title }</span>
                </a>
             </div>
            ))
          }
    </div>
    <div className="low_bar grid grid-rows-2 gap-y-5 mt-10">
          {
            bottomRoutes.map((route) => (
             <div className="hover:bg-amber-50 visited:bg-blue w-[115%] h-[100%] rounded-lg group/edit">
                <a href={route.path} className="flex flex-center items-center gap-5 m-2  group-hover/edit:text-black" key={ route.title }>
                    <FontAwesomeIcon icon={ route.icon } />
                    <span>{ route.title }</span>
                </a>
             </div>
            ))
          }
          <hr/>
    </div>   
    <div className="flex space-x-4">
        <img src="./avatar.png" className="w-[25px]" alt="Avatar" />
        <button className="text-blue-900">Account</button>
    </div>
</aside>
)
}
}

