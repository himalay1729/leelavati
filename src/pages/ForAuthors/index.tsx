// src/pages/ForAuthors/index.tsx
import React from "react";
import "./forauthors.css";

const latexExample = `% Compile with: xelatex
\\\\documentclass[12pt]{article}
\\\\usepackage{fontspec}
\\\\usepackage{polyglossia}
\\\\setmainlanguage{english}
\\\\setotherlanguage{oriya}
\\\\newfontfamily\\\\odiafont[Script=Oriya]{Noto Sans Oriya}

\\\\begin{document}

Some English text here.

\\\\begin{oriya}
ଏହା ଗୋଟିଏ ଓଡ଼ିଆ ବାକ୍ୟ |
\\\\end{oriya}

\\\\end{document}`;

const ForAuthors: React.FC = () => (
  <div className="page-container authors-page">
    <h1>For Authors</h1>

    <p className="lead">
      Leelavati welcomes clear, well-written submissions on mathematics education,
      the history of mathematics, problem solving, and original student-friendly expositions.
    </p>

    <section className="section">
      <h2>Scope of the Journal</h2>
      <p>
        Leelavati publishes articles aimed at school students and their teachers:
        expository pieces, problem sets with solutions, historical essays, classroom
        activities, and short research notes that are accessible at the school level.
        We prioritise clear exposition, mathematical reasoning, and content that can be
        used in classroom or extracurricular settings.
      </p>
      <ul className="guidelines">
        <li>Article length: typically 1000–3000 words depending on content.</li>
        <li>Problem sets and teacher resources are welcome.</li>
        <li>Submitted material should be original and not under consideration elsewhere.</li>
      </ul>
    </section>

    <section className="section">
      <h2>Manuscript preparation &amp; LaTeX style</h2>
      <p>
        We prefer submissions in LaTeX. Use the Leelavati style file to format your paper;
        it sets margins, fonts, title layout, and bibliography style.
      </p>
      <p>
        <a
          href="/styles/leelavati.sty"
          className="btn-link"
          title="Download Leelavati LaTeX style file"
        >
          Download leelavati.sty
        </a>
        &nbsp;&nbsp; (Place the .sty file in your project root or upload it with your submission.)
      </p>

      <h3>Quick instructions</h3>
      <ol className="guidelines">
        <li>
          Compile with <code>xelatex</code> or <code>lualatex</code> (fontspec-compatible compilers).
        </li>
        <li>
          Include the style at the top of your document:{" "}
          <code>{"\\usepackage{leelavati}"}</code>
        </li>
        <li>References: use BibTeX/BibLaTeX as directed by the style file (APA-like formatting).</li>
      </ol>
    </section>

    <section className="section">
      <h2>Typesetting Odia (ଓଡ଼ିଆ) with LaTeX</h2>
      <p>
        For Odia text, we recommend using XeLaTeX or LuaLaTeX (both support Unicode + OpenType).
        Use <code>fontspec</code> together with <code>polyglossia</code> (or <code>babel</code> where appropriate)
        to select the Odia script font and language. A good Odia font to try is <em>Noto Sans Oriya</em>.
      </p>

      <p className="example-title">Minimal Odia XeLaTeX example</p>

      <pre className="code-block">{latexExample}</pre>

      <p>Notes:</p>
      <ul className="guidelines">
        <li>Make sure the Odia/OpenType font is installed on your machine or uploaded to your Overleaf project (if using Overleaf).</li>
        <li><code>fontspec</code> + <code>polyglossia</code> require compiling with XeLaTeX or LuaLaTeX.</li>
        <li>If you find issues with shaping or diacritics, try alternative Odia fonts and ensure the font's OpenType features are available (Noto fonts are a good first choice).</li>
      </ul>

      <p>
        For advanced bilingual setups (mixing math, English and Odia), many authors use separate font assignments for Latin and Odia scripts so math/Latin behave normally while Odia is set with a dedicated Odia font. Practical community advice and examples are available on TeX StackExchange.
      </p>

      <p>
        <a href="/odia_typing/index.html" className="btn-secondary">Odia InScript Demo</a>
      </p>
    </section>

    <section className="section contact">
      <h3>Submission</h3>
      <p>
        Submit manuscripts as a zip containing source <code>.tex</code>, the <code>.bib</code> file, any local fonts or images,
        and a PDF output to <a href="mailto:submit@edumag.org">submit@edumag.org</a>.
      </p>
    </section>
  </div>
);

export default ForAuthors;
