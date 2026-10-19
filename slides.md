---
theme: ./slidev-theme-aalto-scicomp
themeConfig:
  palette: aalto-classic
  titles: aalto
  credit:
    text: Enrico Glerean · CC BY 4.0
    url: https://eglerean.github.io/
  download:
    url: /Glerean_2026_LitReview_AI.pdf
    text: Download PDF
favicon: https://eglerean.github.io/favicon.svg
title: Literature reviews and AI
author: Enrico Glerean
info: |
  Slides by Enrico Glerean (https://eglerean.github.io/), CC BY 4.0.
  Literature reviews and AI: a short introduction
  Source: https://github.com/eglerean/litrev-with-ai
keywords: literature review, systematic review, generative AI, research integrity, Enrico Glerean, https://eglerean.github.io/
layout: cover
class: no-footer
hexText: "LIT\nREVIEW\n+ AI"
hexSeed: 11
---

# Literature reviews and AI

A short introduction


::presenter::
**Enrico Glerean**, Staff Scientist, Aalto University, October 2026

<div class="license-line"><CcBy /> <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> · <a href="https://github.com/eglerean/litrev-with-ai" class="gh-link" title="Slides on GitHub" aria-label="Slides on GitHub"><carbon-logo-github class="gh-icon" /></a></div>

<style>
h1 { font-size: 2.5rem !important; line-height: 1.1 !important; }
p { font-size: 0.95rem; }
.cover-presenter p { font-size: 0.85rem; }
.license-line { margin-top: 0.45rem; font-size: 0.75rem; white-space: nowrap; }
.gh-icon { vertical-align: -0.2em; width: 1.15em; height: 1.15em; }
.license-line a.gh-link { border-bottom: none; text-decoration: none; color: inherit; }
</style>

---
layout: default
---

# Outline

1. **Foundations of AI in Research**: what generative AI is, where it can help across the research lifecycle, the misconduct risks it creates, and when you're required to disclose using it
2. **Literature Review Foundations**: what a literature review is, the main review types, and the 12-step process behind a systematic one
3. **AI-Assisted Literature Review**: a step-by-step look at the evidence on how well AI tools actually perform each of those 12 steps
4. **A Framework for Responsible AI-Assisted Literature Review**: a five-level spectrum, from AI as consultant to AI as autonomous reviewer, for deciding how much of the process to delegate

---
layout: section
color: dark
hexText: "AI\nRESEARCH"
class: title-middle
---

# AI in research work

---
layout: default
---

# Generative AI and Research Integrity

<div class="ref-line">Figure adapted from Glerean (2025) <a href="https://www.edpb.europa.eu/our-work-tools/our-documents/support-pool-experts-projects/fundamentals-secure-ai-systems-personal_en">“Fundamentals of secure AI systems with personal data”</a>, European Data Protection Board</div>

<p>For simplicity we focus on <strong>generative AI systems</strong> that use <strong>General Purpose AI models</strong> such as <strong>Large Language Models</strong> that can be used in your research work,  including <strong>agentic AI</strong> systems.</p>

<div class="grid-2-3">
  <div class="card">
    <h3>Generating one modality from another</h3>
    <ul>
      <li>Text → Text</li>
      <li>Text → Code</li>
      <li>Speech → Text</li>
      <li>Text → Speech</li>
      <li>Text → Image</li>
      <li>Image → Text</li>
      <li>…</li>
    </ul>
  </div>
  <div class="card dark ai-sys-diagram">
    <div class="asd-io-wrap asd-in">
      <div class="asd-io"><div class="asd-label">Data &amp; Input</div></div>
      <div class="asd-sample small">“Translate this email from English to Finnish: Hi Annukka, the AI lecture of our…”</div>
    </div>
    <div class="asd-arrow asd-in">→</div>
    <div class="asd-system">
      <div class="asd-label">AI system</div>
      <div class="asd-sub">e.g. a chatbot</div>
      <div class="asd-model">
        <div class="asd-label">AI model</div>
        <div class="asd-sub">e.g. a Large Language Model</div>
      </div>
    </div>
    <div class="asd-io-wrap asd-out">
      <div class="asd-io"><div class="asd-label">Outputs</div></div>
      <div class="asd-sample small">“Hei Annukka, tutkimusetiikan kurssimme tekoälyluento on…”</div>
    </div>
    <div class="asd-arrow asd-out">←</div>
  </div>
</div>

<style>
/* Dark box: inputs (top) go into the AI system, which wraps the AI model; outputs (bottom) come back out on the same side.
   Same look as the agent diagram (Harness and Model boxes) */
.ai-sys-diagram { display: grid; grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr); grid-template-rows: 1fr 1fr; gap: 0.5rem 0.6rem; align-items: center; }
.ai-sys-diagram .asd-label { font-family: var(--asc-font-serif); font-weight: 600; font-size: 1.1rem; }
.ai-sys-diagram .asd-sub { font-size: 0.8rem; opacity: 0.8; }
.asd-in { grid-row: 1; }
.asd-out { grid-row: 2; }
/* Example prompt and output under the two boxes, in small monospace text */
.asd-io-wrap { grid-column: 1; }
.asd-sample { margin-top: 0.4rem; font-family: var(--asc-font-mono); opacity: 0.85; }
.asd-io { padding: 0.8rem 0.9rem; text-align: center; background: var(--asc-night-raised); border: 1px solid rgba(250, 249, 245, 0.3); border-radius: var(--asc-radius-md); }
.asd-arrow { grid-column: 2; font-size: 1.6rem; line-height: 1; color: var(--asc-clay); }
.asd-system { grid-column: 3; grid-row: 1 / span 2; align-self: stretch; display: flex; flex-direction: column; padding: 0.8rem 1rem 1rem; border: 2px solid var(--asc-clay); border-radius: var(--asc-radius-lg); }
.asd-system .asd-model { flex: 1; margin-top: 0.6rem; display: flex; flex-direction: column; justify-content: center; padding: 1rem 0.9rem; text-align: center; background: var(--asc-clay); color: var(--asc-ink); border-radius: var(--asc-radius-md); }
.asd-model .asd-sub { opacity: 0.85; }
</style>

---
layout: default
---

# The Research Process aided by AI tools

<div class="ref-line">with Responsible Conduct of Research at its core. Wheel adapted from <a href="https://rdmkit.elixir-europe.org/">RDMkit, “The data lifecycle”</a></div>

<div class="rdm-wheel">
<svg class="rw-svg" viewBox="-165 -165 330 330" role="img" aria-label="Research data lifecycle wheel: Plan, Collect, Process, Analyse, Preserve, Share, Reuse, around Responsible Conduct of Research, ethics and law">
  <path d="M22.0 -158.5 A160 160 0 0 1 135.4 -85.2 L117.7 -55.3 L84.6 -53.3 A100 100 0 0 0 13.7 -99.1 L33.4 -125.6 Z" style="fill: var(--aalto-orange)" />
  <path d="M137.6 -81.6 A160 160 0 0 1 151.1 52.8 L116.6 57.5 L94.4 33.0 A100 100 0 0 0 86.0 -51.0 L119.1 -52.2 Z" style="fill: var(--aalto-darkyellow)" />
  <path d="M149.6 56.7 A160 160 0 0 1 52.9 151.0 L27.7 127.0 L33.1 94.4 A100 100 0 0 0 93.5 35.4 L115.0 60.5 Z" style="fill: var(--aalto-green)" />
  <path d="M49.0 152.3 A160 160 0 0 1 -85.0 135.5 L-82.0 100.9 L-53.2 84.7 A100 100 0 0 0 30.6 95.2 L24.4 127.7 Z" style="fill: var(--aalto-aquagreen)" />
  <path d="M-88.6 133.3 A160 160 0 0 1 -159.0 18.0 L-130.0 -1.2 L-99.4 11.3 A100 100 0 0 0 -55.4 83.3 L-84.6 98.7 Z" style="fill: var(--aalto-blue)" />
  <path d="M-159.4 13.8 A160 160 0 0 1 -113.2 -113.1 L-80.1 -102.4 L-70.8 -70.7 A100 100 0 0 0 -99.6 8.6 L-129.9 -4.6 Z" style="fill: var(--aalto-violet)" />
  <path d="M-110.2 -116.0 A160 160 0 0 1 17.8 -159.0 L30.1 -126.5 L11.1 -99.4 A100 100 0 0 0 -68.9 -72.5 L-77.4 -104.5 Z" style="fill: var(--aalto-red)" />
  <text x="77.1" y="-104.7" class="rw-label">Plan</text>
  <text x="129.9" y="-5.0" class="rw-label">Collect</text>
  <text x="84.9" y="98.4" class="rw-label">Process</text>
  <text x="-24.0" y="127.8" class="rw-label">Analyse</text>
  <text x="-114.9" y="60.9" class="rw-label">Preserve</text>
  <text x="-119.2" y="-51.8" class="rw-label">Share</text>
  <text x="-33.8" y="-125.5" class="rw-label">Reuse</text>
  <text y="-8" class="rw-core-text rw-core-big">RCR</text>
  <text y="18" class="rw-core-text">Ethics &amp; Law</text>
</svg>
  <div class="rw-box" style="--stage: var(--aalto-orange); left: 540px; top: 14px"><ul class="small">
      <li>Grant writing</li>
      <li>Research planning</li>
      <li>Study design</li>
      <li>Browsing and summarising the literature</li>
    </ul></div>
  <div class="rw-box" style="--stage: var(--aalto-darkyellow); left: 576px; top: 126px"><ul class="small">
      <li>Interfaces for data collection</li>
      <li>Code and automation help</li>
      <li>Synthetic data generation</li>
    </ul></div>
  <div class="rw-box" style="--stage: var(--aalto-green); left: 546px; top: 253px"><ul class="small">
      <li>Brainstorming on approaches for data preprocessing</li>
      <li>Code and automation</li>
      <li>Data minimisation (pseudo- and anonymisation)</li>
      <li>Data annotation (e.g. deductive coding)</li>
    </ul></div>
  <div class="rw-box" style="--stage: var(--aalto-aquagreen); left: 111px; top: 301px"><ul class="small">
      <li>Annotations</li>
      <li>Methodological considerations</li>
      <li>Data analysis (code and automation)</li>
    </ul></div>
  <div class="rw-box" style="--stage: var(--aalto-blue); left: 23px; top: 215px"><ul class="small">
      <li>Metadata preparation</li>
      <li>Summarising</li>
      <li>Organising and storing (meta)data</li>
    </ul></div>
  <div class="rw-box" style="--stage: var(--aalto-violet); left: 15px; top: 84px"><ul class="small">
      <li>Writing and editing</li>
      <li>Improving research outputs (tables, figures)</li>
      <li>Peer review simulation</li>
      <li>Summarising for the public</li>
      <li>Media outreach</li>
    </ul></div>
  <div class="rw-box" style="--stage: var(--aalto-red); left: 87px; top: 0px"><ul class="small">
      <li>Facilitating discovery and FAIRness</li>
      <li>Exploring open datasets</li>
      <li>Identifying research gaps</li>
    </ul></div>
</div>

<style>
/* Wheel with each example card placed so that its inner corner touches its own wedge (positions computed for a 290px wheel) */
.rdm-wheel { position: relative; height: 380px; }
.rw-svg { position: absolute !important; left: 297px; top: 35px; width: 290px; height: 290px; }
.rw-label { text-anchor: middle; dominant-baseline: middle; font-weight: 700; font-size: 14px; fill: #fff; }
.rw-core-text { text-anchor: middle; dominant-baseline: middle; font-size: 16px; fill: var(--asc-text); }
.rw-core-big { font-size: 30px; font-weight: 700; }
.rw-box { position: absolute !important; width: 290px; padding: 0.3rem 0.6rem; background: var(--asc-surface); border: 2px solid var(--stage); border-radius: var(--asc-radius-md); }
.rw-box ul { margin: 0; }
/* Black bullets here: the default blue bullet would read as another stage colour */
.rw-box li::before { background: #000; }
/* Smaller text, so half the theme's bullet-to-text gap (bullet left from -1.15rem to -0.68rem; list indent shrinks by the same amount) */
.rw-box ul { padding-left: 0.93rem; }
.rw-box li::before { left: -0.68rem; }
</style>

---
layout: default
---

# Generative AI: the ideal misconduct machine?

<div class="ref-line">Generative AI systems (like ChatGPT) are ideal fabrication, falsification and plagiarism machines: they are trained to always produce text, and leave the quality control on the validity and reliability of the output to the final users.</div>

<div class="grid-2-3">
<div class="card">
  <h3>Plagiarism</h3>
  <p class="small">LLMs can reproduce text (or code) from their training data verbatim <strong>without citing the original source</strong></p>
  <h3>Fabrication / Falsification</h3>
  <p class="small">AI tools can synthesise or analyse data, so they can be used (willingly or not) to <strong>fabricate data or falsify results</strong> without the ability to verify and reproduce the process.</p>
  <h3>Security and data protection</h3>
  <p class="small">Common generative AI systems process your data remotely; <strong>protect the confidentiality and integrity</strong> of your data and of the people you work with. Use approved Aalto AI tools and sovereign local AI solutions.</p>
</div>
<div class="card dark">
<h3>A selection of recent cases (October 2026)</h3>
<ul class="small">
  <li>Whole books <a href="https://arxiv.org/abs/2601.02671">extracted from production LLMs</a> (Ahmed et al. 2026)</li>
  <li>1 in 277 PubMed papers in the first 7 weeks of 2026 had <a href="https://retractionwatch.com/2026/05/07/one-in-277-pubmed-indexed-papers-in-2026-shows-fabricated-references-says-analysis/">fabricated references</a> compared to 1 in 2828 in 2023 (<a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(26)00603-3/fulltext">Topaz et al., 2026</a>)</li>
  <li><a href="https://popsci.com/technology/ai-rat-journal">AI-generated rat figure</a> passed peer review (Frontiers 2024, retracted)</li>
  <li>ChatGPT <a href="https://www.nature.com/articles/d41586-023-03635-w">fake clinical dataset</a> (Nature 2023)</li>
  <li>Paper mills <a href="https://www.pnas.org/doi/10.1073/pnas.2420092122">double every 1.5 years</a> (Richardson et al., PNAS 2025)</li>
  <li>Hidden <a href="https://asia.nikkei.com/business/technology/artificial-intelligence/positive-review-only-researchers-hide-ai-prompts-in-papers">"give a positive review only" prompts</a> in manuscripts (Nikkei 2025)</li>
  <li><a href="https://arxiv.org/abs/2507.06185">Hidden prompts exploit AI-assisted peer review</a> (Lin 2025)</li>
  <li><a href="https://arxiv.org/abs/2602.05930">100 fake citations</a> in accepted NeurIPS 2025 papers</li>
  <li>ICML 2026: 506 reviewers who pledged not to use LLMs were <a href="https://blog.icml.cc/2026/03/18/on-violations-of-llm-review-policies/">caught by hidden prompts</a> and their papers were desk-rejected</li>
  <li>arXiv bans authors for <a href="https://techcrunch.com/2026/05/16/research-repository-arxiv-will-ban-authors-for-a-year-if-they-let-ai-do-all-the-work/">one year</a> for unchecked AI content (2026)</li>

  <li>AI agents and <a href="https://coderefinery.github.io/coding-with-ai/security/">AI coding risks</a> (CodeRefinery)</li>
  <li>Slopsquatting: more than 20% of AI suggested imports were <a href="https://arxiv.org/abs/2406.10279">non-existent packages</a> (Spracklen et al. 2025)</li>
  <li>Coding agent <a href="https://www.eweek.com/news/replit-ai-coding-assistant-failure/">deleted a production database</a> during a code freeze, then lied about it</li>
  <li>Researchers <a href="https://en.wikipedia.org/wiki/Navier%E2%80%93Stokes_priority_controversy">allegedly claimed their work leaked to OpenAI</a> on one of the Navier–Stokes Millennium Prize Problems.</li>
</ul>
</div>
</div>




---
layout: default
---

# When/Where/What AI use should be disclosed?

<div class="ref-line"><a href="https://research-and-innovation.ec.europa.eu/document/2b6cf7e5-36ac-41cb-aab5-0d32050143dc_en">EC Living Guidelines (October, 2026)</a> | <a href="https://www.aalto.fi/en/services/responsible-use-of-generative-artificial-intelligence-in-the-research-process">Aalto.fi guidelines</a> | <a href="https://tenk.fi/sites/default/files/2026-06/Artificial%20Intelligence%20in%20Research.%20TENK%27s%20Recommendation%202026.pdf">TENK 2026</a> | <a href="https://www.elsevier.com/about/policies-and-standards/generative-ai-policies-for-journals">Elsevier's policy</a></div>

<div class="grid-2-3">
<div class="card">
  <h3>Why disclose?</h3>
  <ul class="small">
    <li>AI can never be granted authorship: <strong>authorship implies agency and responsibility</strong></li>
    <li><strong>Fear of negative judgement affect the honest reporting of AI use in science</strong>, leading to hesitance and underreporting: institution should encourage an amtosphere of trust and transparency</li>
    <li><strong>No consensus yet</strong>: a <a href="https://council.science/our-work/ai-disclosure-in-research/">global reporting standard</a> (ISC, COPE, STM, Global Young Academy) is being developed at the World Conference on Research Integrity 2026 and will feed the next EC guidelines</li>
  </ul>
  <h4>Example from <a href="https://www.elsevier.com/about/policies-and-standards/generative-ai-policies-for-journals">Elsevier</a>:</h4>
  <ul class="smaller">
    <li>Basic grammar, spelling and punctuation: no declaration needed.</li>
    <li>Substantial changes to sentence structure: declare it in the "Declaration of generative AI and AI-assisted technologies in the manuscript preparation process" section.</li>
    <li>Explanatory images can be made by AI, disclose use in each caption.</li>
    <li>AI must never create or alter images of primary research data.</li>
    <li>AI used as part of the research method: describe it in Methods.</li>
  </ul>
</div>
<div class="stack">
  <div class="card dark">
    <h3>European Commission: disclose substantial use</h3>
    <p class="small">Disclose AI use that <strong>shapes your judgement</strong> or could affect results or their interpretation. Using AI as a method or source, or for literature review, research gaps, aims, hypotheses, or interpreting data analysis, <strong>is</strong> substantial; spelling, grammar, polishing and formatting are not. Say <strong>how you verified</strong> the output; keep prompts, logs and model versions if needed to reproduce or audit. In doubt, disclose (<a href="https://research-and-innovation.ec.europa.eu/document/2b6cf7e5-36ac-41cb-aab5-0d32050143dc_en">Living guidelines, EC 2026</a>)</p>
  </div>
  <div class="card dark">
    <h3>TENK: substantial influence → disclose</h3>
    <p class="small">AI that substantially influences the research, its results or conclusions <strong>must always be disclosed</strong>; a purely technical aid generally need not be, unless it affects how reliability can be assessed. Report AI like any other important method or tool, also in research plans and data management plans. Non-disclosure where transparency is essential <strong>may be a research integrity violation</strong> (<a href="https://tenk.fi/sites/default/files/2026-06/Artificial%20Intelligence%20in%20Research.%20TENK%27s%20Recommendation%202026.pdf">TENK 2026</a>)</p>
  </div>

</div>
</div>


---
layout: section
color: dark
hexText: "LIT\nREVIEW"
class: title-middle
---

# Literature Review Foundations

---
layout: default
---

# What is a literature review?

<div class="ref-line">Useful reference: <a href="https://libguides.oulu.fi/c.php?g=697494&p=5008493">“Systematic searching”, University of Oulu</a></div>

A literature review is **not just a summary** of what other people have written: it is a **systematic identification, evaluation, and synthesis** of existing research on a topic.

---
layout: default
---

# Three families of literature reviews (1/3)

### 1. Systematic review

- Answers a **well-defined research question**
- The search is carried out **systematically** and **reported accurately**
- **Inclusion and exclusion criteria** are defined before screening starts
- The **methodological quality** of the selected studies and their **risk of bias** are carefully assessed
- Related variants include the umbrella review, the integrative review, and the systematized review

---
layout: default
---

# Three families of literature reviews (2/3)

### 2. Narrative review

Sometimes just called a “literature review”: the methodologically lightest form.

- Describes previous research on a topic, often addressing a **broad question**
- The literature search is **not carried out in a fully systematic way**
- Selective collection of studies can lead to **divergent descriptions of the same topic** depending on who wrote the review
- Sub-types include the critical review, the scoping review, the mapping review, and the overview — some of which borrow features from systematic reviews

---
layout: default
---

# Three families of literature reviews (3/3)

### 3. Meta-analysis / meta-synthesis

Combines results across studies rather than just describing them.

- A **quantitative meta-analysis** statistically combines and generalizes numerical results from multiple studies
- A **qualitative meta-synthesis** (or meta-summary) classifies and summarizes findings thematically instead of numerically

---
layout: default
---

# The 12 steps to a literature review

| # | Step | What it means |
| --- | --- | --- |
| 1 | Question & review type | Frame the question, pick the review type (PICO) |
| 2 | Check existing reviews | Make sure it hasn’t been done already (PROSPERO) |
| 3 | Protocol & registration | Pre-register your plan (PRISMA-P) |
| 4 | Search strategy | Turn concepts into search terms (Boolean syntax and MeSH) |
| 5 | Run searches | Search, add grey literature, deduplicate (databases) |
| 6 | Title/abstract screening | First pass against eligibility criteria |
| 7 | Full-text screening | Second pass, full texts, reasons recorded |
| 8 | Data extraction | Pull study data into an extraction form (getting data out of papers) |
| 9 | Quality appraisal | Judge each study’s risk of bias (RoB 2) |
| 10 | Synthesis & certainty | Combine results, rate the evidence (meta-analysis, or narrative synthesis) |
| 11 | Reporting | Write it up against a reporting guideline (PRISMA flow) |
| 12 | Updating | Re-run it and keep it current |

<style>
/* 12 rows plus header: tighter than the theme's 0.55rem cell padding (layouts.css:188) so the table clears the footer */
.slidev-layout table th, .slidev-layout table td { padding-top: 0.22rem; padding-bottom: 0.22rem; }
</style>

---
layout: default
---

# Not every field works like the health sciences

The 12-step framework above is the **dominant standard in evidence-based fields** like health sciences and medicine, where review methodology is tightly formalized.

Many other disciplines follow it closely too, but plenty don’t: fields such as **architecture, design, or the humanities** often work from looser, more interpretive review traditions, where some of these steps have no direct equivalent, or get combined, reordered, or skipped.

---
layout: section
color: dark
hexText: "AI\nLIT\nREVIEW"
class: title-middle
---

# AI assisted literature review

---
layout: default
---

# Can we just add AI to each step?

- Each step can be **delegated** to an AI system or it can be done **together** with an AI system
- **The more autonomy is left to the AI tool, the higher the risks of misconduct**

---
layout: default
---

# What tools are out there?

### General-purpose “deep research” modes

The agentic research features built into general chatbots (e.g. ChatGPT Deep Research, Gemini Deep Research, Claude in agent mode). Given a topic, these plan a search, browse the open web, and synthesize an answer with citations, **entirely on their own initiative**.

### Specialized literature-review tools

Software built specifically for the review workflow (e.g. Elicit, ASReview, Rayyan, Covidence). These typically combine a machine-learning classifier or active-learning loop with a **fixed, curated corpus** (Elicit, for instance, searches Semantic Scholar rather than the open web), and are usually designed to slot into **one or two specific steps** rather than run the whole review.

---
layout: default
---

# Examples with AI that work somewhat well

<div class="ref-line">(but always with risks)</div>

### Boolean query generator

“Translate this research question into a Boolean search string using MeSH terms and free-text synonyms, formatted for PubMed: [question].”

### Check eligibility criteria

“Eligibility criteria: [paste them]. For this title and abstract: [paste it] answer include / exclude / unsure, and quote the exact phrase that justifies your answer.”

---
layout: default
---

# Examples with AI that work really badly

### Running searches

[Clark et al. (2025)](https://www.cambridge.org/core/journals/research-synthesis-methods/article/generative-artificial-intelligence-use-in-evidence-synthesis-a-systematic-review/2DACF6D129AA6E46CB8A8740A03D0675) found that across 19 included studies, generative-AI searching **missed a median of 91%** of the studies a real search would have found (range 68–96%).

### Text screening / data extraction

Don’t trust AI summaries: LLMs are [5 times more likely](https://royalsocietypublishing.org/doi/10.1098/rsos.241776) to **overgeneralise and misinterpret** scientific literature.

---
layout: section
color: dark
hexText: "AI\nAUTONOMY"
class: title-middle
---

# A Framework for Responsible AI-Assisted Literature Review

---
layout: default
color: dark
---

# AI autonomy in literature reviewing

<div class="aa-diagram">
  <div class="aa-axis"><span class="aa-human">Human-driven</span><span class="aa-line"></span><span class="aa-ai">AI-driven</span></div>
  <div class="aa-row">
    <div class="aa-card" style="--lvl: var(--aalto-blue)">
      <div class="aa-label">Consult</div>
      <div class="aa-quote">“Help me search”</div>
      <div class="aa-down">↓</div>
      <div class="aa-decision">Wording</div>
      <div class="aa-chips"><span>synonyms</span><span>concepts</span><span>query terms</span></div>
    </div>
    <div class="aa-arrow">→</div>
    <div class="aa-card" style="--lvl: var(--aalto-aquagreen)">
      <div class="aa-label">Discover</div>
      <div class="aa-quote">“Help me find”</div>
      <div class="aa-down">↓</div>
      <div class="aa-decision">Retrieval</div>
      <div class="aa-chips"><span>what to find</span><span>where to search</span><span>similar papers</span></div>
    </div>
    <div class="aa-arrow">→</div>
    <div class="aa-card" style="--lvl: var(--aalto-darkyellow)">
      <div class="aa-label">Assist</div>
      <div class="aa-quote">“Help me process”</div>
      <div class="aa-down">↓</div>
      <div class="aa-decision">Relevance</div>
      <div class="aa-chips"><span>what matters</span><span>include / exclude</span><span>prioritisation</span></div>
    </div>
    <div class="aa-arrow">→</div>
    <div class="aa-card" style="--lvl: var(--aalto-orange)">
      <div class="aa-label">Delegate</div>
      <div class="aa-quote">“Carry out the review”</div>
      <div class="aa-down">↓</div>
      <div class="aa-decision">Extraction</div>
      <div class="aa-chips"><span>data to extract</span><span>categorise</span></div>
    </div>
    <div class="aa-arrow">→</div>
    <div class="aa-card" style="--lvl: var(--aalto-red)">
      <div class="aa-label">Autonomous</div>
      <div class="aa-quote">“Review this topic”</div>
      <div class="aa-down">↓</div>
      <div class="aa-decision">Interpretation → synthesis</div>
      <div class="aa-chips"><span>what it means</span><span>conclude</span></div>
    </div>
  </div>
  <div class="aa-note">examples of methodological decisions gradually delegated to AI</div>
  <div class="aa-scales">
    <div class="aa-scale-name">Human methodological control</div>
    <div class="aa-scale"><span>High</span><span class="aa-bar aa-falling"></span><span>Low</span></div>
    <div class="aa-scale-name">Need for transparency, verification and validation</div>
    <div class="aa-scale"><span>Low</span><span class="aa-bar aa-rising"></span><span>High</span></div>
  </div>
  <div class="aa-message"><strong>More AI ≠ better review.</strong> Moving right means delegating increasingly consequential decisions.</div>
</div>

<style>
/* Five autonomy levels as cards with arrows between them; same look as the agent diagram in the genAI_researchintegrity deck
   (serif labels, clay arrows, raised boxes, pill chips). Each card's border follows the level's colour, blue (human) to red (AI) */
.aa-diagram { display: flex; flex-direction: column; gap: 0.7rem; font-size: 0.9rem; }
.aa-axis { display: flex; align-items: center; gap: 0.6rem; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
.aa-human { color: var(--aalto-blue); }
.aa-ai { color: var(--aalto-red); }
.aa-line { flex: 1; height: 2px; background: linear-gradient(90deg, var(--aalto-blue), var(--aalto-red)); }
.aa-row { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr auto 1fr; gap: 0.35rem; align-items: stretch; }
.aa-card { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0.8rem 0.5rem; background: var(--asc-night-raised); border: 2px solid var(--lvl); border-radius: var(--asc-radius-md); }
.aa-label { font-family: var(--asc-font-serif); font-weight: 600; font-size: 1.15rem; color: var(--lvl); }
.aa-quote { font-style: italic; font-size: 0.8rem; opacity: 0.8; }
.aa-down { font-size: 1.1rem; line-height: 1.1; color: var(--asc-clay); }
.aa-decision { font-weight: 700; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.6rem; }
.aa-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.3rem; margin-top: auto; }
.aa-chips span { background: rgba(250, 249, 245, 0.12); border-radius: 999px; padding: 0.12rem 0.6rem; font-size: 0.75rem; }
.aa-arrow { align-self: center; font-size: 1.4rem; line-height: 1; color: var(--asc-clay); }
.aa-note { text-align: center; font-style: italic; font-size: 0.7rem; opacity: 0.7; }
/* Two scales: control falls from human to AI, the need for verification rises */
.aa-scales { display: grid; grid-template-columns: auto 1fr; gap: 0.5rem 1rem; align-items: center; }
.aa-scale-name { font-weight: 600; font-size: 0.85rem; }
.aa-scale { display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
.aa-bar { flex: 1; height: 6px; border-radius: 999px; }
.aa-falling { background: linear-gradient(90deg, var(--aalto-blue), rgba(250, 249, 245, 0.15)); }
.aa-rising { background: linear-gradient(90deg, rgba(250, 249, 245, 0.15), var(--aalto-red)); }
.aa-message { text-align: center; padding: 0.6rem 0.9rem; border: 1px solid rgba(250, 249, 245, 0.3); border-radius: var(--asc-radius-md); }
</style>

---
layout: default
---

# Some exercises with Duck.ai and Gemini

### Build a good search query

“I want to search the scientific literature about whether social media use affects sleep in elementary school children. Identify the main concepts, synonyms and related terms. Then propose a Boolean search query. Explain why you chose each term.”

### Test “deep research” modes

First use **metaprompting** (prompt engineer is the first job that AI replaced :) ): ask the tool to build a prompt for you on a research topic. Then use that prompt to run the deep research.
