import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Sauce Demo"
        description="Projek Sauce Demo ini yang melibatkan pembuatan Test Case & Test Scenario, Bug Report, dan Otomasi di Katalon Studio dengan menggunakan metode BDD (Behavior-Driven Development) dan Cucumber."
        link="/posts/swaglabs/"
        img={{
          src: '/assets/images/swaglab.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>E2E Testing</Tags>
            <Tags color={ColorTags.LIME}>Smoke Testing</Tags>
            <Tags color={ColorTags.SKY}>Regression Testing</Tags>
          </>
        }
      />
      <Project
        name="Secondhand Web App"
        description="Proyek ini mencakup Test Case & Scenario, Bug Report, API Testing dengan Postman, Performance Testing dengan JMeter, serta Otomasi di Katalon Studio menggunakan metode BDD Cucumber."
        link="/posts/secondhand-web/"
        img={{ src: '/assets/images/binar.png', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>Katalon Studio</Tags>
            <Tags color={ColorTags.YELLOW}>Cucumber</Tags>
            <Tags color={ColorTags.VIOLET}>BDD</Tags>
            <Tags color={ColorTags.INDIGO}>Regression</Tags>
            <Tags color={ColorTags.FUCHSIA}>E2E Testing</Tags>
          </>
        }
      />
      <Project
        name="Secondhand Mobile App"
        description="Proyek ini mencakup Test Case & Scenario, Bug Report, API Testing dengan Postman, Performance Testing dengan JMeter, serta Otomasi di Katalon Studio menggunakan metode BDD Cucumber."
        link="/posts/secondhand-mobile/"
        img={{ src: '/assets/images/binar.png', alt: 'Project Maps' }}
        category={
          <>
            {/* <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags> */}
            <Tags color={ColorTags.EMERALD}>Katalon Studio</Tags>
            <Tags color={ColorTags.ROSE}>Appium</Tags>
            <Tags color={ColorTags.VIOLET}>BDD</Tags>
            <Tags color={ColorTags.INDIGO}>Regression</Tags>
            <Tags color={ColorTags.FUCHSIA}>E2E Testing</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
