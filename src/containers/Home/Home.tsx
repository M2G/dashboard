/* eslint-disable */
import React, { useRef, useEffect } from 'react';
// import MiniLogo from '../../../public/assets/icon/mini-logo.svg';
import Header from '../../../public/assets/icon/header.svg';
import HomeIcon from '../../../public/assets/icon/home.svg';
import Video from '../../../public/assets/videos/bg_boucle.mp4';
import Parcours from '../../../public/assets/icon/parcours.svg';
import Exo from '../../../public/assets/icon/exo.svg';
import Cours from '../../../public/assets/icon/cours.svg';
import Coach from '../../../public/assets/icon/coach.svg';
import Diet from '../../../public/assets/icon/diet.svg';
import Stat from '../../../public/assets/icon/stat.svg';
import Logo from '../../../public/assets/icon/logo.svg';

function Home(): JSX.Element {

  const ref: any = useRef(null);

  useEffect(() => {

    const ref1 = ref?.current?.children?.[1];
    const ref2 = ref?.current?.children?.[2];
    const ref3 = ref?.current?.children?.[3];

    console.log('ref', { ref1, ref2, ref3 })

    const timer1 = setTimeout(() => {
      console.log('This will run after 2 second!')
      ref1?.firstChild?.classList.add('is-active');
    }, 2000);

    const timer2 = setTimeout(() => {
      console.log('This will run after 4 second!')
      ref2?.classList.remove('u-vishidden');
    }, 4000);

    const timer3 = setTimeout(() => {
      console.log('This will run after 6 second!')
      ref2?.classList.add('u-vishidden');
      ref3?.classList.remove('u-vishidden');

    }, 6000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    }
  }, [ref]);


  return (
    <div className="s-thema--home">
      <div className="o-zone">
        <div className="o-grid">
          <div className="c-intro2 c-intro c-intro--titre">
            <div className="o-grid__row">
              <div className="o-col">
                <article ref={ref} className="c-topic">
                  {/*<MiniLogo />*/}
                  <div className="c-topic__header">
                    <Header />
                    <p>Stay in shape</p>
                  </div>
                  <div className="test1 c-topic__content">
                    <Logo />
                  </div>
                  <div className="c-topic__content u-vishidden">
                    <div className="test c-topic__content__title">
                      <h1>
                        <span>B</span>
                        ienvenue
                        <br />
                      </h1>
                      <p>sur votre application bien-être.</p>
                    </div>
                  </div>
                  <div className="test2 c-topic__content u-vishidden">
                    <ul className="c-topic__summary c-intro__list">
                      <li className="c-intro__list__item">
                        <p>
                          <span>P</span>
                          arcours
                        </p>
                        <Parcours />
                      </li>
                      <li className="c-intro__list__item">
                        <p><span>E</span>
                          xercices
                        </p>
                        <Exo />
                      </li>
                      <li className="c-intro__list__item">
                        <p>
                          <span>C</span>
                          ours
                        </p>
                        <Cours />
                      </li>
                      <li className="c-intro__list__item">
                        <p>
                          <span>C</span>
                          oaching
                        </p>
                        <Coach />
                      </li>
                      <li className="c-intro__list__item">
                        <p>
                          <span>D</span>
                          iet
                        </p>
                        <Diet />
                      </li>
                      <li className="c-intro__list__item">
                        <p>
                          <span>S</span>
                          tats
                        </p>
                        <Stat />
                      </li>
                    </ul>
                  </div>


                  <div className="c-topic__cta">
                    <HomeIcon />
                    <p>
                      <span>Home</span>
                      &nbsp;Sport
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <video autoPlay id="bgvid" loop muted playsInline>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}

export default Home;
