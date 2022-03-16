




//about us
const about_us=()=>{
    
    const main_content=document.getElementById('main_content');
    const bg=document.createElement('div');
    const about_img=new Image();
    const about_des=document.createElement('p');

    main_content.appendChild(bg);
    bg.appendChild(about_img);
    bg.appendChild(about_des);
    bg.appendChild(about_img);

    about_img.src='./fancy-01.png';
    
    bg.classList.add('about_us_bg');
    about_img.classList.add('about_img');
    about_des.classList.add('about_des');
    
    about_des.innerHTML=(`Papi's Creole Cuisine is a New Orleans raised and New Orleans born restaurant rooted in the heart of the 7th ward. Since 1962, we have based our success on the quality and flavor of our food which has been served to community for generations. From creole soul-food delights to a pinch of a lil something new Papi C's has something for you!`);
    
}



//gallery
const gallery=(source)=>{

    const myImage=new Image();
    const image_container=document.createElement('div');
    const image_overlay=document.createElement('div');
    
    main_content.appendChild(image_container);
    image_container.appendChild(image_overlay);
    
    image_overlay.classList.add('image_gallery_overlay');
    image_container.classList.add('image_gallery_container');

    image_container.setAttribute('style',`background-image:url(${source}); background-color:red; background-blend-mode:darken;`);
    image_container.addEventListener('mouseover', function hover() { image_container.setAttribute('style',`background-image:url(${source}); background-color:none; background-blend-mode:none;`);});
    image_container.addEventListener('mouseout', function hover() { image_container.setAttribute('style',`background-image:url(${source}); background-color:red; background-blend-mode:darken;`);});
        
}




export {about_us,gallery};
