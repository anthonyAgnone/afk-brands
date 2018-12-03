import React, { Component } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitterSquare,
  faYoutubeSquare,
  faTwitch
} from '@fortawesome/free-brands-svg-icons';

const Card = styled.div`
  background: #fff;
  height: 250px;
  padding: 5px;
  overflow: hidden;
  width: 100%;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & .cardHeader {
    width: 100%;
    transform: translateY(${props => (props.hovered ? '-80%' : 0)});
    transition: all 0.5s ease;
    h3 {
      width: 50%;
      transform: translateY(${props => (props.hovered ? '40%' : 0)});
      transition: all 0.3s ease;
    }
    img {
      transform: translateY(${props => (props.hovered ? '-30%' : 0)});
      transition: all 0.3s ease;
    }
  }
  & .cardBody {
    height: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(${props => (props.hovered ? '-100%' : '50%')});
    transition: all 0.3s ease;
    .socialLinks {
      display: flex;
      justify-content: space-around;
      width: 100%;
      a {
        color: #352245;
        font-size: 2.5em;
      }
      a:hover {
        color: rgba(234, 128, 252, 1);
      }
    }
  }
`;

const twitter = <FontAwesomeIcon icon={faTwitterSquare} />;
const twitch = <FontAwesomeIcon icon={faTwitch} />;
const youtube = <FontAwesomeIcon icon={faYoutubeSquare} />;

export default class MemberCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false
    };
    this.handleIsMouseOver = this.handleIsMouseOver.bind(this);
  }

  handleIsMouseOver() {
    this.setState(prevState => ({
      isHovered: !prevState.isHovered
    }));
  }

  render() {
    const socialIcons = [twitter, youtube, twitch];
    const { key, name, image, description, links } = this.props.member;
    return (
      <Card
        hovered={this.state.isHovered}
        onMouseEnter={() => this.handleIsMouseOver()}
        onMouseLeave={() => this.handleIsMouseOver()}
        key={key}
      >
        <div className="cardHeader">
          <img src={image} alt="" />
          <h3>{name}</h3>
        </div>
        <div className="cardBody">
          <p>{description}</p>
          <div className="socialLinks">
            {links.map((link, i) => (
              <a key={i} href={link} target="_blank" rel="noopener noreferrer">
                {socialIcons[i]}
              </a>
            ))}
          </div>
        </div>
      </Card>
    );
  }
}
