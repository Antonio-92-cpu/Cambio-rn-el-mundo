import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hola, soy <GradientText>Oyu</GradientText> 👋
        </>
      }
      description={
        <>
          Soy un apasionado Full Stack Developer con mucha experiencia previa como {' '}
          <a className="text-cyan-400 hover:underline" href="/">
          informático,
          </a>{' '}
          mi vida está marcada por un continuo proceso de aprendizaje y crecimiento en el ámbito de la {' '}
          <a className="text-cyan-400 hover:underline" href="/">
          tecnología.
          </a>{' '}
          Disfruto enfrentando desafíos, resolviendo problemas y participando activamente en el desarrollo de soluciones innovadoras.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
