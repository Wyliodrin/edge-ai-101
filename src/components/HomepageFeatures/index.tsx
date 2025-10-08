import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Privacy Preserving",
    Svg: require("@site/static/img/gdpr-shield.svg").default,
    description: (
      <>
        Learn how to create devices that use AI inference locally and that do
        not compromise the user's privacy.
      </>
    ),
  },
  {
    title: "Raspberry Pi",
    Svg: require("@site/static/img/raspberry-pi-5b.svg").default,
    description: (
      <>Learn how to make use of the power of the Raspberry Pi 5 for AI.</>
    ),
  },
  {
    title: "Powered by Rust",
    Svg: require("@site/static/img/rust-logo.svg").default,
    description: (
      <>
        Use Rust, a new modern and safe programming language. Did you know that
        Rust is the most ❤️ language on GitHub?
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
