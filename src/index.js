import {about_us,gallery} from './exported_pagebuilder_function';
import './style.css';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
//import Image from './Shrimp_Pasta.jpg';

//MAIN DISPLAY FUNCTION
window.onload=()=>{

const contentCreator=()=>{
    //initial setup
    document.body.setAttribute('style','margin:0;');
    const body=document.querySelector('body');
    const nav=document.createElement('nav');
    const main_content=document.getElementById('main_content'); 
    const footer=document.createElement('footer');
    

    body.appendChild(nav);
    body.insertBefore(nav,main_content);
    body.appendChild(footer); 
    //end initial setup
    
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

    //main body

    const food_item=(title, source, price)=>{ 

        const food=document.createElement('p');
        const myImage=new Image();
        const money=document.createElement('p');
        const image_container=document.createElement('div');
        const image_overlay=document.createElement('div');
        
        main_content.appendChild(image_container);
        image_container.appendChild(image_overlay);
        image_overlay.appendChild(food);
        image_overlay.appendChild(money);
        
        food.classList.add('food_description');
        money.classList.add('food_description');
        image_overlay.classList.add('image_overlay');
        image_container.classList.add('image_container');

        image_container.setAttribute('style',`background-image:url(${source}); background-color:red; background-blend-mode:darken;`);
        image_container.addEventListener('mouseover', function hover() { image_container.setAttribute('style',`background-image:url(${source}); background-color:none; background-blend-mode:none;`);});
        image_container.addEventListener('mouseout', function hover() { image_container.setAttribute('style',`background-image:url(${source}); background-color:red; background-blend-mode:darken;`);});
        food.innerHTML=title;
        money.innerHTML=price;

    }
    
    //function call
    function menu_call() {
    const shrimp_pasta=food_item('Shrimp Pasta','./Shrimp_Pasta.jpg','$5');
    const crawfish_monica=food_item('Crawfish Monica','./crawfish_monica.jpg','$5');
    const stuffed_crab=food_item('Stuffed Crab','./stuffed_crab.jpg','$3');
    const oyster_stew=food_item('Oyster Stew','./oyster_stew.jpg','$1.50');
    const red_beans=food_item('Red Beans and Rice with Turkey Necks','./turkey.image.jpg','$6.50');
    };

    menu_call();



    //use removechild
    const nav_arr=[nav_link1,nav_link2,nav_link3];
    const populate=(item,index,arr)=>{
    console.log('yep');
    
    if (item==nav_link1) {

        item.addEventListener('click', function repopulate(){ while (main_content.firstChild) {main_content.removeChild(main_content.firstChild)}; menu_call();});
    
    }

    if (item==nav_link2) { 
        item.addEventListener('click', function repopulate(){ while (main_content.firstChild) {main_content.removeChild(main_content.firstChild)}; about_us();});
     
    }

    if (item==nav_link3) {
        item.addEventListener('click', function repopulate(){ while (main_content.firstChild) {main_content.removeChild(main_content.firstChild)}; 
        const img1=gallery('./bbq_shrimp.jpg'); 
        const img2=gallery('./fish_chips.jpg');
        const img3=gallery('./inline-seafood.jpg');
        const img4=gallery('./man_eating.jpg');
        const img5=gallery('./nola.jpg');
        const img6=gallery('./people_eat.jpg');});
    }
    }
    
    nav_arr.forEach(populate);


    //end main body



    //footer
    const phone_number=document.createElement('p');
    const address=document.createElement('p');
    const time=document.createElement('p');
    const icon=document.getElementById('icon1');
    const icon2=document.getElementById('icon2');
    const icon3=document.getElementById('icon3');
    
    phone_number.classList.add('footer_text');
    address.classList.add('footer_text');
    time.classList.add('footer_text');
   
    footer.appendChild(phone_number);
    footer.appendChild(address);
    footer.appendChild(time);
    footer.appendChild(icon);
    footer.appendChild(icon2);
    footer.appendChild(icon3);

    phone_number.innerHTML='(238)-645-6435';
    address.innerHTML='1712 Magic Ave';
    time.innerHTML='M-F | 12 PM-8:30 PM';
    //endfooter

    }

    contentCreator();
}


