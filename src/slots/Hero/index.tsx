import isEqual from 'fast-deep-equal';
import { type FC } from 'react';

import HeroComp from '../../components/Hero';

import { heroTitleSel, useSiteStore } from '../../store';

const Hero: FC = () => {
  const frontmatter = useSiteStore((s) => s.routeMeta.frontmatter, isEqual);
  const title = useSiteStore(heroTitleSel);

  const hero = frontmatter.hero!;

  return (
    <HeroComp title={title!} actions={frontmatter.hero!.actions!} description={hero.description} />
  );
};

export default Hero;
