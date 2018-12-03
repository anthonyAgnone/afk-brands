import React, { Component, createContext, createRef } from 'react';
import { TweenLite, TimelineLite, TimelineMax, Power4 } from 'gsap';

const { Consumer, Provider } = createContext();

export default class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenu: false
    };
    this.main = createRef();
    this.nav = createRef();
    this.brand = createRef();
    this.leftSection = createRef();
    this.preloader = createRef();
    this.landingAnimationOut = null;
    this.navAnimationOut = null;
    this.updateNav = null;
    this.leftAnimateOut = null;
    this.landingPage = null;
    this.showMenuAnimation = null;
    this.preloadTween = null;
    this.showMenu = this.showMenu.bind(this);
    this.animateMainOut = this.animateMainOut.bind(this);
    this.animateNavOut = this.animateNavOut.bind(this);
    this.animateLeftOut = this.animateLeftOut.bind(this);
    this.animateLoadingPage = this.animateLoadingPage.bind(this);
    this.preloadAnimation = this.preloadAnimation.bind(this);
  }

  animateLoadingPage() {
    const ease = Power4.easeInOut;
    const links = this.nav.current.querySelectorAll('nav button');
    const header1 = this.leftSection.current.querySelector('#header1');
    const header2 = this.leftSection.current.querySelector('#header2');
    const description = this.leftSection.current.querySelector('h3');
    const youtube = this.main.current.querySelector('.video-background');
    this.landingPage = new TimelineMax();
    this.landingPage
      .from(this.leftSection.current, 0.3, { x: -300 }, ease)
      .from(this.main.current, 0.6, { css: { right: '-30vw' }, ease }, '-=.3')
      .from(this.brand.current, 1, { autoAlpha: 0, ease }, '-=.3')
      .staggerFrom(links, 0.6, { autoAlpha: 0, y: 230, ease }, 0.15)
      .from(header1, 2, { autoAlpha: 0, x: 450, ease }, 0)
      .from(header2, 2, { autoAlpha: 0, x: 400, ease }, 0.25)
      .from(description, 2, { autoAlpha: 0, y: 200, ease }, 0.35)
      .from(youtube, 3, { autoAlpha: 0, ease }, '-= 1');
  }

  animateMainOut() {
    this.landingAnimationOut = new TimelineLite();
    this.landingAnimationOut
      .to(
        this.main.current,
        0.4,
        {
          css: { right: '-15vw' },
          ease: Power4.easeInOut,
          delay: 0.3
        },
        'main'
      )
      .to(this.main.current, 0.4, {
        css: { right: 0 },
        ease: Power4.easeInOut,
        delay: 0.6
      });
  }
  animateLeftOut() {
    this.leftAnimateOut = new TimelineLite();
    this.leftAnimateOut
      .to(this.leftSection.current, 0.6, {
        css: { left: '-15vw' },
        ease: Power4.easeInOut
      })
      .to(
        this.leftSection.current,
        0.6,
        { css: { left: 0 }, ease: Power4.easeInOut },
        '+=0.6'
      )
      .to(
        this.leftSection.current.querySelector('button'),
        0.3,
        { opacity: 1, ease: Power4.easeIntOut },
        '-=.3'
      );
  }
  animateNavOut() {
    let group = this.nav.current.querySelector('nav');
    let nodes = this.nav.current.querySelectorAll('nav button');
    let total = nodes.length;
    let ease = Power4.easeInOut;
    let boxes = [];

    for (let i = 0; i < total; i++) {
      let node = nodes[i];

      // Initialize transforms on node
      TweenLite.set(node, { x: 0 });

      boxes[i] = {
        transform: node._gsTransform,
        x: node.offsetLeft,
        y: node.offsetTop,
        node
      };
    }

    setTimeout(() => {
      group.classList.toggle('reorder');
      for (let i = 0; i < total; i++) {
        let box = boxes[i];

        let lastX = box.x;
        let lastY = box.y;

        box.x = box.node.offsetLeft;
        box.y = box.node.offsetTop;

        // Continue if box hasn't moved
        if (lastX === box.x && lastY === box.y) continue;

        // Reversed delta values taking into account current transforms
        let x = box.transform.x + lastX - box.x;
        let y = box.transform.y + lastY - box.y;

        // Tween to 0 to remove the transforms
        TweenLite.fromTo(box.node, 0.6, { x, y }, { x: 0, y: 0, ease });
      }
    }, 600);

    this.navAnimationOut = new TimelineLite();
    this.navAnimationOut
      .to(this.nav.current, 0.6, {
        css: {
          left: '25vw',
          top: '50vh',
          height: '50vh'
        },
        ease: Power4.easeInOut,
        delay: 0.5
      })
      .call(() => {
        this.nav.current.style.zIndex = -1;
      });
  }

  showMenu() {
    this.showMenuAnimation = new TimelineLite();
    this.setState(
      prevState => ({
        isMenu: !prevState.isMenu
      }),
      () => {
        if (this.state.isMenu) {
          this.showMenuAnimation
            .to(this.main.current, 0.5, {
              css: {
                right: '-15vw'
              },
              ease: Power4.easeInOut
            })
            .to(
              this.leftSection.current,
              0.5,
              {
                css: {
                  left: '-15vw'
                },
                ease: Power4.easeInOut
              },
              '-=.5'
            )
            .to(
              this.nav.current,
              0.5,
              {
                css: { zIndex: 100 }
              },
              '-=.2'
            );
        } else {
          this.showMenuAnimation
            .to(this.main.current, 0.5, {
              css: {
                right: 0
              },
              ease: Power4.easeInOut
            })
            .to(
              this.leftSection.current,
              0.5,
              {
                css: {
                  left: 0
                },
                ease: Power4.easeInOut
              },
              '-=.5'
            )
            .to(
              this.nav.current,
              0.5,
              {
                css: { zIndex: -1 }
              },
              '-=.7'
            );
        }
      }
    );
  }

  preloadAnimation() {
    this.preloadTween = new TimelineLite();

    this.preloadTween.to(this.preloader.current, 1, {
      css: { left: '100vw' },
      ease: Power4.easeInOut
    });
  }

  render() {
    const value = {
      main: this.main,
      nav: this.nav,
      brand: this.brand,
      preloader: this.preloader,
      leftSection: this.leftSection,
      animateMainOut: this.animateMainOut,
      animateNavOut: this.animateNavOut,
      animateLeftOut: this.animateLeftOut,
      animateLoadingPage: this.animateLoadingPage,
      preloadAnimation: this.preloadAnimation,
      showMenu: this.showMenu,
      ...this.state
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export const withAnimation = C => props => (
  <Consumer>{value => <C {...value} {...props} />}</Consumer>
);
