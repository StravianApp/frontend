import './about.scss';
import logo from '../../assets/logos/full-text-3.png';
import poweredBy from '../../assets/powered-by-strava.svg';
import { getBirdfact } from '../../utils/api';
const fact = getBirdfact();


const About = () => (
    <div className="page-container">
        <div className="page-header">About Stravian</div>
        <div className="about-main page-main">
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