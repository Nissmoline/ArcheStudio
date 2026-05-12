import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  contentByLanguage,
  icons,
  images,
  socialLinks,
  supportedLanguages,
} from "./data.js";

const languageRoutes = {
  en: "/en",
  ru: "/ru",
  el: "/el",
};

const hreflangByLanguage = {
  en: "en",
  ru: "ru",
  el: "el-GR",
};

function getPathLanguage(pathname = "") {
  const segment = pathname.split("/").filter(Boolean)[0];
  return supportedLanguages.some((language) => language.code === segment) ? segment : null;
}

function detectLanguage() {
  if (typeof window !== "undefined") {
    const pathLanguage = getPathLanguage(window.location.pathname);
    if (pathLanguage) {
      return pathLanguage;
    }
  }

  if (typeof navigator === "undefined") {
    return "en";
  }

  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const normalized = languages.map((language) => language.toLowerCase());

  if (normalized.some((language) => language.startsWith("ru"))) {
    return "ru";
  }

  if (normalized.some((language) => language.startsWith("el") || language.startsWith("gr"))) {
    return "el";
  }

  return "en";
}

function getManagedHeadElement(selector, createElement) {
  const existing = document.head.querySelector(selector);
  if (existing) {
    return existing;
  }

  const element = createElement();
  document.head.appendChild(element);
  return element;
}

function setMetaAttribute(attribute, key, content) {
  if (!content) {
    return;
  }

  const selector = `meta[${attribute}="${key}"]`;
  const element = getManagedHeadElement(selector, () => {
    const meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    return meta;
  });
  element.setAttribute("content", content);
}

function getSiteOrigin() {
  if (typeof window === "undefined") {
    return "https://archestudio.gr";
  }

  return window.location.origin;
}

function setSeoHead(language, t) {
  const origin = getSiteOrigin();
  const languagePath = languageRoutes[language] ?? languageRoutes.en;
  const canonicalUrl = `${origin}${languagePath}`;
  const imageUrl = new URL(images.hero, origin).href;
  const locale = t.meta.locale ?? "en_US";

  document.documentElement.lang = language;
  document.title = t.meta.title;

  setMetaAttribute("name", "description", t.meta.description);
  setMetaAttribute("name", "keywords", t.meta.keywords);
  setMetaAttribute("name", "robots", "index, follow, max-image-preview:large");
  setMetaAttribute("name", "theme-color", "#141313");

  setMetaAttribute("property", "og:title", t.meta.title);
  setMetaAttribute("property", "og:description", t.meta.description);
  setMetaAttribute("property", "og:type", "website");
  setMetaAttribute("property", "og:url", canonicalUrl);
  setMetaAttribute("property", "og:image", imageUrl);
  setMetaAttribute("property", "og:locale", locale);

  setMetaAttribute("name", "twitter:card", "summary_large_image");
  setMetaAttribute("name", "twitter:title", t.meta.title);
  setMetaAttribute("name", "twitter:description", t.meta.description);
  setMetaAttribute("name", "twitter:image", imageUrl);

  document.head.querySelectorAll("[data-seo-link]").forEach((element) => element.remove());

  const canonical = document.createElement("link");
  canonical.setAttribute("rel", "canonical");
  canonical.setAttribute("href", canonicalUrl);
  canonical.setAttribute("data-seo-link", "true");
  document.head.appendChild(canonical);

  supportedLanguages.forEach((item) => {
    const alternate = document.createElement("link");
    alternate.setAttribute("rel", "alternate");
    alternate.setAttribute("hreflang", hreflangByLanguage[item.code] ?? item.code);
    alternate.setAttribute("href", `${origin}${languageRoutes[item.code]}`);
    alternate.setAttribute("data-seo-link", "true");
    document.head.appendChild(alternate);
  });

  const xDefault = document.createElement("link");
  xDefault.setAttribute("rel", "alternate");
  xDefault.setAttribute("hreflang", "x-default");
  xDefault.setAttribute("href", `${origin}/`);
  xDefault.setAttribute("data-seo-link", "true");
  document.head.appendChild(xDefault);

  document.head.querySelectorAll("[data-seo-json]").forEach((element) => element.remove());

  const sameAs = socialLinks
    .filter((item) => item.href.startsWith("https://"))
    .map((item) => item.href);
  const offerCatalog = {
    "@type": "OfferCatalog",
    name: t.seo.offerCatalogName,
    itemListElement: t.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.text,
        areaServed: t.seo.areaServed,
      },
    })),
  };

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ARCHÉ STUDIO",
      url: origin,
      inLanguage: hreflangByLanguage[language] ?? language,
    },
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: "ARCHÉ STUDIO",
      alternateName: "ARCHÉ Bespoke Carpentry",
      url: canonicalUrl,
      image: imageUrl,
      description: t.seo.schemaDescription,
      telephone: "+30 210 000 0000",
      priceRange: "€€€",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Athens",
        addressRegion: "Attica",
        addressCountry: "GR",
      },
      areaServed: t.seo.areaServed,
      knowsAbout: t.seo.knowsAbout,
      sameAs,
      hasOfferCatalog: offerCatalog,
    },
  ];

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-seo-json", "true");
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));

    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function useHashScroll() {
  useEffect(() => {
    if (!window.location.hash) {
      return undefined;
    }

    const scrollToTarget = () => {
      const target = document.querySelector(window.location.hash);
      target?.scrollIntoView({ block: "start" });
    };

    const frame = window.requestAnimationFrame(scrollToTarget);
    const timers = [250, 900, 1600].map((delay) => window.setTimeout(scrollToTarget, delay));

    return () => {
      window.cancelAnimationFrame(frame);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);
}

function LanguageSwitcher({ language, onChange, label, variant = "default" }) {
  return (
    <div className={`language-switcher language-switcher-${variant}`} aria-label={label}>
      {supportedLanguages.map((item) => (
        <button
          key={item.code}
          type="button"
          className={language === item.code ? "is-active" : ""}
          aria-pressed={language === item.code}
          onClick={() => onChange(item.code)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

function SocialLinks({ variant = "default", withLabels = true }) {
  return (
    <div className={`social-links social-links-${variant}`}>
      {socialLinks.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            title={item.label}
          >
            {Icon ? <Icon size={16} strokeWidth={1.65} aria-hidden="true" /> : null}
            <span>{withLabels ? item.label : item.short}</span>
          </a>
        );
      })}
    </div>
  );
}

function Header({ t, language, setLanguage }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" onClick={closeMenu} aria-label={t.brandAria}>
        <span>ARCHÉ</span>
        <span>STUDIO</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {t.navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <LanguageSwitcher
          language={language}
          onChange={setLanguage}
          label={t.languageLabel}
          variant="header"
        />
        <a className="header-cta" href="#contact">
          {t.headerCta}
        </a>
      </div>

      <button
        className={`menu-button ${open ? "is-active" : ""}`}
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="burger-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <div className={`mobile-panel ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-panel-main">
          <nav aria-label="Mobile navigation">
            {t.navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                style={{ "--item-index": index }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mobile-language-block">
            <span>{t.languageLabel}</span>
            <LanguageSwitcher
              language={language}
              onChange={setLanguage}
              label={t.languageLabel}
              variant="menu"
            />
          </div>
          <div className="mobile-social-block">
            <span>{t.mobile.socialChannels}</span>
            <SocialLinks variant="menu" withLabels={false} />
          </div>
        </div>
        <div className="mobile-panel-actions">
          <a className="mobile-cta" href="#contact" onClick={closeMenu}>
            {t.mobile.cta}
          </a>
        </div>
      </div>
    </header>
  );
}

function SectionIntro({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`section-intro section-intro-${align}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {Array.isArray(title)
          ? title.map((line) => (
              <span className="title-line" key={line}>
                {line}
              </span>
            ))
          : title}
      </h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function Hero({ t }) {
  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden="true">
        <img src={images.hero} alt="" />
      </div>
      <div className="hero-content" data-reveal>
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1>{t.hero.title}</h1>
        <p className="hero-copy">{t.hero.copy}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">
            {t.hero.primaryCta}
            <icons.ChevronRight size={18} strokeWidth={1.6} />
          </a>
          <a className="button button-secondary" href="#projects">
            {t.hero.secondaryCta}
            <icons.ArrowUpRight size={17} strokeWidth={1.6} />
          </a>
        </div>
      </div>
      <div className="hero-bottom" data-reveal>
        {t.hero.bottom.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="hero-socials" data-reveal>
        <span>{t.hero.directLine}</span>
        <SocialLinks variant="hero" withLabels={false} />
      </div>
    </section>
  );
}

function Studio({ t }) {
  return (
    <section className="studio section" id="studio">
      <div className="section-grid">
        <div className="studio-copy" data-reveal>
          <p className="eyebrow">{t.studio.eyebrow}</p>
          <h2>{t.studio.title}</h2>
          <p>{t.studio.text}</p>
          <div className="studio-line" />
          <div className="stats-grid">
            {t.stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="studio-image-frame" data-reveal>
          <img src={images.studioDetail} alt="Dark wood detail with precise brass hardware" />
        </div>
      </div>
    </section>
  );
}

function Services({ t }) {
  return (
    <section className="services section section-deep" id="services">
      <SectionIntro
        eyebrow={t.servicesIntro.eyebrow}
        title={t.servicesIntro.title}
        text={t.servicesIntro.text}
      />

      <div className="service-grid">
        {t.services.map((service, index) => {
          const Icon = service.icon;
          return (
            <article className="service-card" key={service.title} data-reveal>
              <img src={service.image} alt={service.title} />
              <div className="service-overlay" />
              <div className="service-content">
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <Icon size={25} strokeWidth={1.4} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Projects({ t }) {
  const [filter, setFilter] = useState("__all");
  const trackRef = useRef(null);
  const categoryOrder = t.projectsIntro.categoryOrder ?? [];
  const sortedProjects = useMemo(() => {
    const orderIndex = new Map(categoryOrder.map((category, index) => [category, index]));
    return [...t.projects].sort((first, second) => {
      const firstIndex = orderIndex.get(first.category) ?? Number.MAX_SAFE_INTEGER;
      const secondIndex = orderIndex.get(second.category) ?? Number.MAX_SAFE_INTEGER;
      return firstIndex - secondIndex;
    });
  }, [categoryOrder, t.projects]);
  const categories = useMemo(() => {
    const projectCategories = Array.from(new Set(sortedProjects.map((project) => project.category)));
    const orderedCategories = categoryOrder.filter((category) => projectCategories.includes(category));
    const remainingCategories = projectCategories.filter((category) => !orderedCategories.includes(category));
    return [...orderedCategories, ...remainingCategories];
  }, [categoryOrder, sortedProjects]);
  const visibleProjects =
    filter === "__all"
      ? sortedProjects
      : sortedProjects.filter((project) => project.category === filter);

  useEffect(() => {
    setFilter("__all");
  }, [t]);

  useEffect(() => {
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [filter]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return undefined;
    }

    let frameId = 0;
    let resizeObserver;

    const updateSlots = () => {
      const cards = Array.from(track.querySelectorAll(".project-card"));
      const trackRect = track.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap) || 24;
      const mobile = window.matchMedia("(max-width: 759px)").matches;
      const tilt = mobile ? 4.2 : 7.2;
      const maxDrop = mobile ? 7 : 14;
      const maxDepth = mobile ? 12 : 34;
      const minScale = mobile ? 0.965 : 0.925;
      const minOpacity = mobile ? 0.78 : 0.62;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = (cardCenter - trackCenter) / Math.max(rect.width + gap, 1);
        const offset = Math.max(-1.35, Math.min(1.35, distance));
        const absOffset = Math.min(Math.abs(offset), 1.15);
        const depth = Math.max(0, 1 - Math.min(absOffset, 1));
        const scale = minScale + depth * (1 - minScale);
        const opacity = minOpacity + depth * (1 - minOpacity);
        const y = absOffset * maxDrop;
        const z = depth * maxDepth;
        const rotate = offset * -tilt;
        const shadow = 0.16 + depth * 0.22;

        card.style.setProperty("--slot-y", `${y.toFixed(2)}px`);
        card.style.setProperty("--slot-z", `${z.toFixed(2)}px`);
        card.style.setProperty("--slot-rotate", `${rotate.toFixed(2)}deg`);
        card.style.setProperty("--slot-scale", scale.toFixed(3));
        card.style.setProperty("--slot-opacity", opacity.toFixed(3));
        card.style.setProperty("--slot-shadow", shadow.toFixed(3));
        card.classList.toggle("is-center-slot", absOffset < 0.36);
      });
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateSlots);
    };

    scheduleUpdate();
    track.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(scheduleUpdate);
      resizeObserver.observe(track);
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      track.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver?.disconnect();
    };
  }, [visibleProjects]);

  const scrollProjects = (direction) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const card = track.querySelector(".project-card");
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap) || 24;
    const distance = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.86;

    track.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  return (
    <section className="projects section" id="projects">
      <div className="projects-heading">
        <SectionIntro
          eyebrow={t.projectsIntro.eyebrow}
          title={t.projectsIntro.title}
          text={t.projectsIntro.text}
        />
        <div className="project-toolbar" data-reveal>
          <div className="filter-bar" aria-label="Project filters">
            <button
              type="button"
              className={filter === "__all" ? "is-active" : ""}
              onClick={() => setFilter("__all")}
            >
              {t.projectsIntro.all}
            </button>
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={filter === category ? "is-active" : ""}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="project-controls">
            <button
              type="button"
              aria-label={t.projectsIntro.previous}
              onClick={() => scrollProjects(-1)}
            >
              <icons.ChevronLeft size={20} strokeWidth={1.55} />
            </button>
            <button
              type="button"
              aria-label={t.projectsIntro.next}
              onClick={() => scrollProjects(1)}
            >
              <icons.ChevronRight size={20} strokeWidth={1.55} />
            </button>
          </div>
        </div>
      </div>

      <div className="project-grid" ref={trackRef} aria-label={t.projectsIntro.eyebrow}>
        {visibleProjects.map((project, index) => (
          <article
            className={`project-card project-card-${index % 2 ? "offset" : "main"}`}
            key={project.title}
            data-reveal
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-meta">
              <span>
                {String(index + 1).padStart(2, "0")} / {project.category}
              </span>
              <span>{project.location}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Craftsmanship({ t }) {
  return (
    <section className="craft section section-deep" id="craftsmanship">
      <div className="craft-layout">
        <div className="craft-copy" data-reveal>
          <p className="eyebrow">{t.craft.eyebrow}</p>
          <h2>{t.craft.title}</h2>
          <p>{t.craft.text}</p>
          <a className="text-link" href="#process">
            {t.craft.link}
            <icons.ArrowUpRight size={17} strokeWidth={1.6} />
          </a>
        </div>
        <div className="craft-media" data-reveal>
          <img src={images.kitchenDark} alt="Minimalist dark kitchen with stone and wood details" />
          <img src={images.villa} alt="Luxury private residence with custom wood panels" />
        </div>
      </div>

      <div className="materials-grid">
        {t.materials.map((material) => (
          <article className="material-card" key={material.title} data-reveal>
            <img src={material.image} alt={material.title} />
            <h3>{material.title}</h3>
            <p>{material.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Process({ t }) {
  return (
    <section className="process section" id="process">
      <SectionIntro
        eyebrow={t.processIntro.eyebrow}
        title={t.processIntro.title}
        text={t.processIntro.text}
      />
      <div className="process-list">
        {t.processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <article className="process-item" key={step.title} data-reveal>
              <span className="process-index">{String(index + 1).padStart(2, "0")}</span>
              <div className="process-icon">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Benefits({ t }) {
  return (
    <section className="benefits section section-compact">
      <div className="benefits-panel" data-reveal>
        <div>
          <p className="eyebrow">{t.benefitsIntro.eyebrow}</p>
          <h2>{t.benefitsIntro.title}</h2>
        </div>
        <div className="benefit-list">
          {t.benefits.map((benefit) => (
            <div className="benefit-item" key={benefit}>
              <icons.Check size={18} strokeWidth={1.7} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ t }) {
  return (
    <section className="contact section" id="contact">
      <div className="contact-layout">
        <div className="contact-copy" data-reveal>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
          <div className="contact-methods">
            <a href="tel:+302100000000">
              <icons.Phone size={18} strokeWidth={1.6} />
              +30 210 000 0000
            </a>
            <a href="mailto:studio@arche.example">
              <icons.Mail size={18} strokeWidth={1.6} />
              studio@arche.example
            </a>
            <span>
              <icons.MapPin size={18} strokeWidth={1.6} />
              {t.contact.location}
            </span>
          </div>
          <div className="contact-social-card">
            <span>{t.contact.directMessage}</span>
            <SocialLinks variant="contact" />
          </div>
        </div>

        <form className="contact-form" data-reveal>
          <label>
            <span>{t.form.name}</span>
            <input type="text" name="name" autoComplete="name" placeholder={t.form.namePlaceholder} />
          </label>
          <label>
            <span>{t.form.phone}</span>
            <input type="tel" name="phone" autoComplete="tel" placeholder={t.form.phonePlaceholder} />
          </label>
          <label>
            <span>{t.form.email}</span>
            <input type="email" name="email" autoComplete="email" placeholder={t.form.emailPlaceholder} />
          </label>
          <label>
            <span>{t.form.projectType}</span>
            <select name="projectType" defaultValue="">
              <option value="" disabled>
                {t.form.projectPlaceholder}
              </option>
              {t.form.projectOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="form-wide">
            <span>{t.form.message}</span>
            <textarea name="message" rows="5" placeholder={t.form.messagePlaceholder} />
          </label>
          <label className="form-wide">
            <span>{t.form.contactMethod}</span>
            <select name="contactMethod" defaultValue={t.form.contactOptions[0]}>
              {t.form.contactOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <button className="button button-primary form-wide" type="submit">
            {t.form.submit}
            <icons.Send size={17} strokeWidth={1.6} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="site-footer">
      <a className="brand-mark" href="#home" aria-label={t.brandAria}>
        <span>ARCHÉ</span>
        <span>STUDIO</span>
      </a>
      <nav aria-label="Footer navigation">
        {t.navItems.slice(1).map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <SocialLinks variant="footer" />
      <p className="footer-rights">{t.footerRights}</p>
      <p className="footer-credit">
        Created by{" "}
        <a href="https://impacttech.gr/" target="_blank" rel="noreferrer">
          Impact Tech GR
        </a>
      </p>
    </footer>
  );
}

export default function App() {
  const [language, setLanguageState] = useState(detectLanguage);
  const t = contentByLanguage[language] ?? contentByLanguage.en;

  useReveal();
  useHashScroll();

  const setLanguage = (nextLanguage) => {
    setLanguageState(nextLanguage);

    if (typeof window !== "undefined") {
      const nextPath = languageRoutes[nextLanguage] ?? languageRoutes.en;
      const nextUrl = `${nextPath}${window.location.hash || ""}`;
      window.history.pushState({ language: nextLanguage }, "", nextUrl);
    }
  };

  useEffect(() => {
    setSeoHead(language, t);
  }, [language, t]);

  useEffect(() => {
    const handlePopState = () => {
      setLanguageState(detectLanguage());
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <>
      <Header t={t} language={language} setLanguage={setLanguage} />
      <main>
        <Hero t={t} />
        <Studio t={t} />
        <Services t={t} />
        <Projects t={t} />
        <Craftsmanship t={t} />
        <Process t={t} />
        <Benefits t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
