//import {menu,about_us,gallery} from './exported_pagebuilder_function';
import './style.css';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";



//import Image from './oyster_BG.jpeg';

//MAIN DISPLAY FUNCTION
window.onload=()=>{

const contentCreator=()=>{
    //main setup
    const body=document.querySelector('body');
    const nav=document.createElement('nav');
    const main_content=document.createElement('div'); 
    const footer=document.createElement('footer');
    main_content.classList.add('middle_content');


    document.body.setAttribute('style','margin:0;');
    
    body.appendChild(nav);
    body.appendChild(main_content);
    body.appendChild(footer); 
    //end main setup
    
    //nav
    const logo=document.createElement('div');
    const logo_text=document.createElement('p');
    const nav_link_container=document.createElement('div');
    const nav_link1=document.createElement('p');
    const nav_link2=document.createElement('p');
    const nav_link3=document.createElement('p');
    

    
    logo.classList.add('logo');
    logo_text.classList.add('logo_text');
    nav_link_container.classList.add('nav_link_container');
    nav_link1.classList.add('nav_links');
    nav_link2.classList.add('nav_links');
    nav_link3.classList.add('nav_links');

    nav.appendChild(logo);
    nav.appendChild(nav_link_container);
    nav_link_container.appendChild(nav_link1);
    nav_link_container.appendChild(nav_link2);
    nav_link_container.appendChild(nav_link3);
    logo.appendChild(logo_text);
    logo_text.innerHTML="Papi's Creole Cuisine";
    nav_link1.innerHTML='Menu';
    nav_link2.innerHTML='About Us';
    nav_link3.innerHTML='Gallery';
    //end nav

    //footer
    const phone_number=document.createElement('p');
    const address=document.createElement('p');
    const icon=document.getElementById('icon1');
    const icon2=document.getElementById('icon2');
    const icon3=document.getElementById('icon3');
    
    phone_number.classList.add('footer_text');
    address.classList.add('footer_text');
   

    footer.appendChild(phone_number);
    footer.appendChild(address);
    footer.appendChild(icon);
    footer.appendChild(icon2);
    footer.appendChild(icon3);

    phone_number.innerHTML='(238)-645-6435';
    address.innerHTML='1712 Magic Ave';
    //endfooter

    }

    contentCreator();
}


//THIS FILE HANDLES THE CHANGE OF THE PAGE DISPLAY WHEN A NAV BUTTON IS CLICKED