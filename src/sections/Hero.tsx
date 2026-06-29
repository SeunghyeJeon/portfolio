import * as S from "./HeroStyles"
import heroImage from "../assets/hero.jpg"

function Hero() {
  return (
    <S.Section id="hero">
      <S.Container>
        <S.Content>
          <S.Greeting>Hi, I’m Seunghye.</S.Greeting>

          <S.Title>
            Building things,
            <br />
            collecting stories,
            <br />
            and following curiosity.
          </S.Title>

          <S.Description>
            I’m a frontend engineer based in Seoul, creating digital
            experiences, personal projects, and documenting what I learn along
            the way.
          </S.Description>

          <S.ButtonGroup>
            <S.PrimaryButton>Explore My Journey →</S.PrimaryButton>
            <S.SecondaryButton>See What I’m Building</S.SecondaryButton>
          </S.ButtonGroup>
        </S.Content>

        <S.Visual>
          <S.PhotoCard>
            <S.PhotoPlaceholder src={heroImage} alt="Seunghye" />
          </S.PhotoCard>
        </S.Visual>
      </S.Container>
    </S.Section>
  )
}

export default Hero