import React from 'react'
import styled from 'styled-components'
import MemberCard from './MemberCard'
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  top: -3em;
  left: -4%;
  & h1 {
    max-width: 85%;
    margin-bottom: 3em;
    text-transform: uppercase;
    font-size: 1.5rem;
  }
  & .teamMembers {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #352245;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
`

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Mattheos',
      image: 'https://via.placeholder.com/150',
      description: 'Youtuber. Ivern God.',
      links: ['http://twitter.com', 'http://youtube.com', 'http://twitch.tv']
    },
    {
      name: 'Anthony Agnone',
      image: 'https://via.placeholder.com/150',
      description: 'Youtuber. Ivern God. ',
      links: ['http://github.com/anthonyAgnone', 'http://anthony-agnone.com', 'http://twitch.tv']
    },
    {
      name: 'Member',
      image: 'https://via.placeholder.com/150',
      description: 'Developer',
      links: ['http://twitter.com', 'http://youtube.com']
    },
    {
      name: 'Member',
      image: 'https://via.placeholder.com/150',
      description: 'Developer',
      links: ['http://twitter.com', 'http://youtube.com']
    },
    {
      name: 'Ted',
      image: 'https://via.placeholder.com/150',
      description: 'Senior Developer. Bard.',
      links: ['http://twitter.com', 'http://youtube.com']
    }
  ]

  const elements = teamMembers.map((member, i) => <MemberCard key={i} member={member} />)
  return (
    <Wrapper>
      <h1>
        AFK is on a mission to empower top content creators and streamers to achieve their long-term goals and brands to
        find the talent to fulfill their vision.
      </h1>
      <h1>MEET OUR TEAM</h1>
      {/* consider default base colors of apps for their hover/color */}
      <div className="teamMembers">{elements}</div>
    </Wrapper>
  )
}
