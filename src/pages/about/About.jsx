import './about.scss';
import poweredBy from '../../assets/powered-by-strava.svg';
import { getBirdfact } from '../../utils/birdfacts';
import bird1 from './assets/bird1.png';
import bird2 from './assets/bird2.png';
import bird3 from './assets/bird3.png';
import bird4 from './assets/bird4.png';
import bird5 from './assets/bird5.png';
import bird6 from './assets/bird6.png';
import bird7 from './assets/bird7.png';
import bird8 from './assets/bird8.png';
import bird9 from './assets/bird9.png';


const fact = getBirdfact();

const birdA = Math.random()<0.2 ? bird5 : Math.random()<0.4 ? bird6 : Math.random()<0.6 ? bird7 : Math.random()<0.8 ? bird8 : bird9;

const birdB = Math.random()<0.2 ? bird1 : Math.random()<0.4 ? bird2 : Math.random()<0.6 ? bird3 : Math.random()<0.8 ? bird4 : bird9;


const About = () => (
    <div className="page-container">
        <div className="page-header">About Stravian</div>
        <div className="about-main page-main">
            
        <div className="content-box">
            <img className="bird" src={birdA} alt="Eagle" />
        </div>

            <hr className="section-divider" />
            
            <div className="content-box">
                <div className="subtitle_">
                    What is this app?
                </div>
                <div className="text_">
                    Stravian introduces you to a bird friend from the twenty egg-cellent eagles we have tracking data on. You then connect with your human friends and compete! Both data from radio tags attached to the birds to measure how far they fly each day and the distance you record on Strava counts towards your overall placement on the leaderbird, so no fowl play!
                </div>
            </div>


            <hr className="section-divider" />

            <div className="content-box">
                <div className="subtitle_">
                    Why this app?
                </div>
                <div className="text_">
                    The greater spotted eagle is nearly extinct in Western Europe. Stravian aims to increase awareness and knowledge of this endangered species in a fun, active and de-flightful way; the medium of sport!
                </div>
            </div>

            <hr className="section-divider" />

            <div className="content-box">
                <div className="subtitle_">
                    Who are these magnificent birds?
                </div>
                <div className="text_">
                    Greater spotted eagles, binomial name clanga clanga, is a truly spectacular species. Twice a year, they migrate between South Africa and Western Europe, covering up to 350km in a day and reaching speeds of 45km/h.
                    However, greater spotted eagles are classified as endangered. This is due to a number of factors, including loss of habitat; often caused by human actions, such as illegal amber mining. Interaction with humans is the common thread running through nearly all reasons for the decline in numbers of the greater spotted eagle.
                    <br></br>
                    <a href="https://wildpolesia.org/greater-spotted-eagles/">
                        Read more about greater spotted eagles</a>
                </div>
            </div>

        <hr className="section-divider" />

        <div className="content-box">
            <div className='subtitle_'>
                Did you know?
            </div>

            <div className='text_'>
                {fact}
            </div> 
        </div>

        <hr className="section-divider" />

        <div className="content-box">
                <img className="bird" src={birdB} alt="Eagle" />
        </div>

            <hr className="section-divider" />

            <div className="content-box">
                <div className="subtitle_">
                    Credits
                </div>
                <div className='text_'>
                    Programming by Nicole Choong, Fiona Gibbs, Neelu Saraswatibhatla, Balázs Tóth, Zalan Martinak and Alex Riddell-Webster. Consulting and eagle-eyed expertise from Adham Ashton-Butt. Photographs from Daniel Rosengren, Ülo Väli and Sergey Pisarevskiy. Data from the British Trust for Ornithology and Movebank. Many thanks to Strava for the use of their API.
                </div>
            </div>


            <div className="strava-container">
                <a href="https://www.strava.com/">
                    <img className="strava" src={poweredBy} alt="Powered by Strava" />
                </a>
            </div>
        </div>
    </div>
);


export default About;