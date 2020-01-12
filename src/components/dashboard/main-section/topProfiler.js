import React ,{useEffect,Fragment} from 'react';
import $ from 'jquery';
import Slider from "react-slick";

const TopProfiler=()=>{
    const setting={
        slidesToShow: 3,
         slck:true,
        slidesToScroll: 1,
        // prevArrow:'<span class="slick-previous"></span>',
        // nextArrow:'<span class="slick-nexti"></span>',
        autoplay: true,
        dots: false,
        autoplaySpeed: 2000,
        responsive: [
        {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
        },
        {
        breakpoint: 991,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]


    }
    return (
   
        <div className="top-profiles">
        <div className="pf-hd">
          <h3>Top Profiles</h3>
          <i className="la la-ellipsis-v" />
        </div>
        
        <div className="profiles-slider">
        <Slider {...setting}>   
          <div className="user-profy">
            <img src="images/resources/user1.png" alt="" />
            <h3>John Doe</h3>
            <span>Graphic Designer</span>
            <ul>
              <li><a href="#"  className="followw">Follow</a></li>
              <li><a href="#"  className="envlp"><img src="images/envelop.png" alt="" /></a></li>
              <li><a href="#"  className="hire">hire</a></li>
            </ul>
            <a href="#" >View Profile</a>
          </div>
          <div className="user-profy">
            <img src="images/resources/user2.png" alt="" />
            <h3>John Doe</h3>
            <span>Graphic Designer</span>
            <ul>
              <li><a href="#"  className="followw">Follow</a></li>
              <li><a href="#"  className="envlp"><img src="images/envelop.png" alt="" /></a></li>
              <li><a href="#"  className="hire">hire</a></li>
            </ul>
            <a href="#" >View Profile</a>
          </div>
          <div className="user-profy">
            <img src="images/resources/user3.png" alt="" />
            <h3>John Doe</h3>
            <span>Graphic Designer</span>
            <ul>
              <li><a href="#"  className="followw">Follow</a></li>
              <li><a href="#"  className="envlp"><img src="images/envelop.png" alt="" /></a></li>
              <li><a href="#"  className="hire">hire</a></li>
            </ul>
            <a href="#" >View Profile</a>
          </div>
          <div className="user-profy">
            <img src="images/resources/user1.png" alt="" />
            <h3>John Doe</h3>
            <span>Graphic Designer</span>
            <ul>
              <li><a href="#"  className="followw">Follow</a></li>
              <li><a href="#"  className="envlp"><img src="images/envelop.png" alt="" /></a></li>
              <li><a href="#"  className="hire">hire</a></li>
            </ul>
            <a href="#" >View Profile</a>
          </div>
          <div className="user-profy">
            <img src="images/resources/user2.png" alt="" />
            <h3>John Doe</h3>
            <span>Graphic Designer</span>
            <ul>
              <li><a href="#"  className="followw">Follow</a></li>
              <li><a href="#"  className="envlp"><img src="images/envelop.png" alt="" /></a></li>
              <li><a href="#"  className="hire">hire</a></li>
            </ul>
            <a href="#" >View Profile</a>
          </div>
          <div className="user-profy">
            <img src="images/resources/user3.png" alt="" />
            <h3>John Doe</h3>
            <span>Graphic Designer</span>
            <ul>
              <li><a href="#"  className="followw">Follow</a></li>
              <li><a href="#"  className="envlp"><img src="images/envelop.png" alt="" /></a></li>
              <li><a href="#"  className="hire">hire</a></li>
            </ul>
            <a href="#" >View Profile</a>
          </div>
          </Slider>
        </div>
        
      </div>
     
    )
}

export default TopProfiler;