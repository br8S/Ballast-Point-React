import React from 'react';
import './Nav.css';
import logo from './images/ballast_point_logo.png';
import glass from './images/mag_glass.png';
import arrowRight from './images/arrow-right.png';
import cross from './images/cross.png';
import burger from './images/burger.png';

function Nav(){
    var mobileOn = false;

    const mobileMenu = () => {
        if(mobileOn === false){
            document.querySelector('.burger').style.backgroundImage = `url(${cross})`;
            document.querySelector('.mobile-nav').classList.add('mobile-nav-bg');
            document.querySelectorAll('.mobile-nav-links').forEach(link => {
                link.style.transform = "translate(0, 0)";
            })
            mobileOn = true;
    
            document.querySelector('.mobile-nav').style.display = "flex";
        }
    
        else {
            document.querySelector('.burger').style.backgroundImage = `url(${burger})`;
            document.querySelector('.mobile-nav').classList.remove('mobile-nav-bg');
            document.querySelectorAll('.mobile-nav-links').forEach(link => {
                link.style.transform = "translate(0, 2000%)";
            })
    
            //makes sure all nested nav options are not displayed when mobile nav is closed
            document.querySelector('.beers-drop-nav').style.display = "none";
            document.querySelector('.beers-drop-nav').classList.remove('mobile-nav-bg');
            document.querySelector('.locations-drop-nav').style.display = "none";
            document.querySelector('.locations-drop-nav').classList.remove('mobile-nav-bg');
            document.querySelector('.about-drop-nav').style.display = "none";
            document.querySelector('.about-drop-nav').classList.remove('mobile-nav-bg');
    
            mobileOn = false;
        }
    } 

    const show = (event) => {
        var mobile_nav_children = document.querySelector('.mobile-nav').children;
        var beers_nav_children = document.querySelector('.beers-drop-nav').children;
        var locations_nav_children = document.querySelector('.locations-drop-nav').children;
        var about_nav_children = document.querySelector('.about-drop-nav').children;

        if(event.currentTarget === mobile_nav_children[0] ){
            document.querySelector('.beers-drop-nav').style.display = "flex";
            document.querySelector('.mobile-nav').style.display = "none";
            document.querySelector('.beers-drop-nav').classList.add('mobile-nav-bg');
        }

        if(event.currentTarget === mobile_nav_children[1] ){
            document.querySelector('.locations-drop-nav').style.display = "flex";
            document.querySelector('.mobile-nav').style.display = "none";
            document.querySelector('.locations-drop-nav').classList.add('mobile-nav-bg');
        }

        if(event.currentTarget === mobile_nav_children[2] ){
            document.querySelector('.about-drop-nav').style.display = "flex";
            document.querySelector('.mobile-nav').style.display = "none";
            document.querySelector('.about-drop-nav').classList.add('mobile-nav-bg');
        }

        if(event.currentTarget === beers_nav_children[0] ){
            document.querySelector('.beers-drop-nav').style.display = "none";
            document.querySelector('.mobile-nav').style.display = "flex";
            document.querySelector('.mobile-nav').classList.add('mobile-nav-bg');
        }

        if(event.currentTarget === locations_nav_children[0] ){
            document.querySelector('.locations-drop-nav').style.display = "none";
            document.querySelector('.mobile-nav').style.display = "flex";
            document.querySelector('.mobile-nav').classList.add('mobile-nav-bg');
        }

        if(event.currentTarget === about_nav_children[0] ){
            document.querySelector('.about-drop-nav').style.display = "none";
            document.querySelector('.mobile-nav').style.display = "flex";
            document.querySelector('.mobile-nav').classList.add('mobile-nav-bg');
        }
    }

    return (
        <div className="container">
            <nav className="nav-bar">
                <div class="burger" onClick={ mobileMenu }></div>
                <img className="logo" src={logo} alt=''></img>
                <ul className="desktop-nav">
                    <li className="nav-links"> OUR BEERS </li>
                    <li className="nav-links"> LOCATIONS </li> 
                    <li className="nav-links"> ABOUT US </li>
                    <li className="nav-links"> CAREERS </li>
                    <li className="nav-links"> EVENTS </li>
                    <li className="nav-links"> SHOP </li>
                    <img alt='' className="mag-glass nav-links" src={glass}></img>
                </ul>
            </nav>
            
            <ul className="mobile-nav">
                <li className="mobile-nav-links" onClick={ show }> OUR BEERS <img className="arrow" src={ arrowRight } alt=''></img></li>
                <li className="mobile-nav-links" onClick={ show }> LOCATIONS <img className="arrow" src={ arrowRight } alt=''></img></li>
                <li className="mobile-nav-links" onClick={ show }> ABOUT US <img className="arrow" src={ arrowRight } alt=''></img></li>
                <li className="mobile-nav-links"> CAREERS </li>
                <li className="mobile-nav-links"> EVENTS </li>
                <li className="mobile-nav-links"> SHOP </li>
            </ul>
            <ul class="beers-drop-nav">
                <li className="mobile-nav-links" onClick={ show }> BACK </li>
                <li className="mobile-nav-links" onClick={ show }> ALL BEERS <img className="arrow" src={ arrowRight } alt=''></img></li>
                <li className="mobile-nav-links" onClick={ show }> YEAR ROUND <img className="arrow" src={ arrowRight } alt=''></img></li>
                <li className="mobile-nav-links" onClick={ show }> SEASONAL <img className="arrow" src={ arrowRight } alt=''></img></li>
                <li className="mobile-nav-links" onClick={ show }> LIMITED <img className="arrow" src={ arrowRight } alt=''></img></li>
            </ul>
            <ul class="locations-drop-nav">
                <li className="mobile-nav-links" onClick={ show }> BACK </li>
                <li className="mobile-nav-links" onClick={ show }> ALL LOCATIONS <img className="arrow" src={ arrowRight } alt=''></img></li>
                <li className="mobile-nav-links" onClick={ show }> SAN DIEGO, CA <img className="arrow" src={ arrowRight } alt=''></img></li>
                <li className="mobile-nav-links" onClick={ show }> CALIFORNIA <img className="arrow" src={ arrowRight } alt=''></img></li>
                <li className="mobile-nav-links" onClick={ show }> ILLINOIS <img className="arrow" src={ arrowRight } alt=''></img></li>
            </ul>
            <ul class="about-drop-nav">
                <li className="mobile-nav-links" onClick={ show }> BACK </li>
                <li className="mobile-nav-links" onClick={ show }> ABOUT US <img className="arrow" src={ arrowRight } alt=''></img></li>
                <li className="mobile-nav-links" onClick={ show }> FOLLOW US <img className="arrow" src={ arrowRight } alt=''></img></li>
            </ul>
        </div>
    )
}

export default Nav;