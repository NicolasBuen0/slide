import {SlideNav} from './slide.js';

const slide = new SlideNav(".slide", ".slide-wrapper");
slide.init()

slide.changeSlide(2)
slide.activePrevSlide();
