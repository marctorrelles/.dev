import * as React from 'react'
import styled from 'styled-components'

import PageContainer from '../components/organisms/PageContainer'
import Title from '../components/atoms/Title'
import Text from '../components/atoms/Text'
import Separator from '../components/layout/Separator'
import Link from '../components/atoms/Link'

const QuipuLink = () => <Link href='https://getquipu.com' target='_blank'>Quipu</Link>
const FuelbannerLink = () => <Link href='https://fuelbanner.com' target='_blank'>Fuelbanner</Link>
const ParlemLink = () => <Link href='https://parlem.com' target='_blank'>Parlem</Link>
const TicketsLink = () => <Link href='https://4tickets.cat' target='_blank'>4Tickets</Link>

const About = () => (
  <PageContainer>
    <Title>About me 🖐</Title>
    <Text>
      Thanks for getting here!
    </Text>
    <Text>
      I'm Marc, a software engineer based in Barcelona. I've been working in software for
      the last 8 years, when I developed my passion and my job: coding 👨‍💻
    </Text>
    <Text>
      If I'm not pressing keys, you will find me reading, playing videogames, running or
      having a beer (ehmmm... okay, most of the times it's having a beer 🍻).
      I love to be challenged and face new problems, and also learn while solving those.
      I also like to get things perfectly done, so most of the times I spend some extra
      time in the little details 🌱
    </Text>
    <Text>
      Some of my last jobs include <QuipuLink />, an accounting and administration software
      for businesses 💰, but also <FuelbannerLink /> ⛽️, <ParlemLink /> 📞 and <TicketsLink /> 🎟
    </Text>
    <Text>
      I'm excited about new projects and collaborations! So don't hesitate to contact me
      if you think we can make a good team 🤜🤛
    </Text>
  </PageContainer>
)


export default About
