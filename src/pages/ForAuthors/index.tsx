import React from "react";
import "./forauthors.css";
import { useTranslation } from "react-i18next";

const latexExample = `% Compile with: xelatex
\\documentclass[12pt]{article}
\\usepackage{fontspec}
\\usepackage{polyglossia}
\\setmainlanguage{english}
\\setotherlanguage{oriya}
\\newfontfamily\\odiafont[Script=Oriya]{Noto Sans Oriya}

\\begin{document}

Some English text here.

\\begin{oriya}
ଏହା ଗୋଟିଏ ଓଡ଼ିଆ ବାକ୍ୟ |
\\end{oriya}

\\end{document}`;

const ForAuthors: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="page-container authors-page">
      <h1>{t("forAuthors.title")}</h1>

      <p className="lead">{t("forAuthors.intro")}</p>

      <section className="section">
        <h2>{t("forAuthors.scopeTitle")}</h2>
        <p>{t("forAuthors.scopeDescription")}</p>
        <ul className="guidelines">
          <li>{t("forAuthors.guidelines.length")}</li>
          <li>{t("forAuthors.guidelines.resources")}</li>
          <li>{t("forAuthors.guidelines.originality")}</li>
        </ul>
      </section>

      <section className="section">
        <h2>{t("forAuthors.latexTitle")}</h2>
        <p>{t("forAuthors.latexIntro")}</p>
        <p>
          <a
            href="/styles/leelavati.sty"
            className="btn-link"
            title="Download Leelavati LaTeX style file"
          >
            {t("forAuthors.downloadSty")}
          </a>
          &nbsp;&nbsp;({t("forAuthors.styNote")})
        </p>

        <h3>{t("forAuthors.quickInstructionsTitle")}</h3>
        <ol className="guidelines">
          <li>{t("forAuthors.quickInstructions.step1")}</li>
          <li>{t("forAuthors.quickInstructions.step2")}</li>
          <li>{t("forAuthors.quickInstructions.step3")}</li>
        </ol>
      </section>

      <section className="section">
        <h2>{t("forAuthors.odiaTitle")}</h2>
        <p>{t("forAuthors.odiaIntro")}</p>

        <p className="example-title">{t("forAuthors.odiaExampleTitle")}</p>

        <pre className="code-block">{latexExample}</pre>

        <p>{t("forAuthors.notesTitle")}</p>
        <ul className="guidelines">
          <li>{t("forAuthors.notes.fontInstall")}</li>
          <li>{t("forAuthors.notes.compile")}</li>
          <li>{t("forAuthors.notes.fontIssues")}</li>
        </ul>

        <p>{t("forAuthors.advancedSetup")}</p>

        <p>
          <a href="/odia_typing/index.html" className="btn-secondary">
            {t("forAuthors.odiaDemo")}
          </a>
        </p>
      </section>

      <section className="section contact">
        <h3>{t("forAuthors.submissionTitle")}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: t("forAuthors.submissionDetails", {
              email: "submit@edumag.org",
            }),
          }}
        />
      </section>
    </div>
  );
};

export default ForAuthors;