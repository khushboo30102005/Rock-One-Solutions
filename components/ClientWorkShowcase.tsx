import Image from "next/image";
import Link from "next/link";
import styles from "./ClientWorkShowcase.module.css";

export type ClientWorkItem = {
  client: string;
  title: string;
  summary: string;
  /** Optional. When omitted, the card renders text-only with no media panel. */
  image?: string;
  imageAlt?: string;
  imageMode?: "screenshot" | "brand";
  href?: string;
  label: string;
  external?: boolean;
};

type ClientWorkShowcaseProps = {
  kicker: string;
  title: string;
  intro: string;
  items: ClientWorkItem[];
  layout?: "grid" | "feature";
};

export default function ClientWorkShowcase({
  kicker,
  title,
  intro,
  items,
  layout = "grid",
}: ClientWorkShowcaseProps) {
  return (
    <section className={styles.showcase} aria-label={kicker}>
      <header className={styles.header}>
        <div>
          <p className={styles.kicker}>{kicker}</p>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <p className={styles.intro}>{intro}</p>
      </header>

      <div className={`${styles.grid} ${layout === "feature" ? styles.featureGrid : ""}`}>
        {items.map((item, index) => {
          const content = (
            <>
            {item.image ? (
              <figure className={`${styles.media} ${item.imageMode ? styles[item.imageMode] : ""}`}>
                <Image
                  src={item.image}
                  alt={item.imageAlt ?? ""}
                  width={1600}
                  height={1000}
                  sizes={layout === "feature" ? "(max-width: 900px) 100vw, 56vw" : "(max-width: 760px) 100vw, 33vw"}
                />
              </figure>
            ) : null}
            <div className={styles.body}>
              <p className={styles.meta}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{item.label}</span>
              </p>
              <h3>{item.client}</h3>
              <p>{item.summary}</p>
              <span className={styles.linkLabel}>
                {item.title}
                {item.href ? <span aria-hidden="true">↗</span> : null}
              </span>
            </div>
            </>
          );

          return item.href ? (
            <Link
              className={`${styles.card} ${item.image ? "" : styles.cardNoMedia}`}
              href={item.href}
              key={`${item.client}-${item.title}`}
              aria-label={`Open ${item.client} website or project`}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              {content}
            </Link>
          ) : (
            <article
              className={`${styles.card} ${item.image ? "" : styles.cardNoMedia}`}
              key={`${item.client}-${item.title}`}
            >
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}
