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

# What is an AI system?

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
color: dark
---

# What is an AI agent?

<div class="grid-2-3">
<div>
The four elements of an AI agent: <strong>a) goal complexity, b) environmental complexity, c) adaptability, d) independent execution. </strong> (<a href="https://doi.org/10.1787/396cf758-en%20">OECD 2026</a>).

An AI agent pairs the model with more components so that it can **take real actions**.

- **The model**, the "intelligence box": the LLM itself.
- **The scaffolding**, between the two: system prompts, tool descriptions, and the rules for how context is assembled and formatted before it reaches the model.
- **The harness**, the "body": the code around the model that calls it, carries out whatever it asks for, and decides when the task is done.

</div>
<div>
<div class="agent-diagram">
  <div class="ad-harness">
    <div class="ad-label">Harness · the body</div>
    <div class="ad-sub">calls the model · runs its actions · decides when done</div>
    <div class="ad-scaffold">
      <div class="ad-label">Scaffolding</div>
      <div class="ad-sub">system prompt · tool descriptions · context assembly</div>
      <div class="ad-model">
        <div class="ad-label">Model</div>
        <div class="ad-sub">the LLM · the intelligence box</div>
      </div>
    </div>
  </div>
  <div class="ad-bottom">
    <div class="ad-arrows">⇅</div>
    <div></div>
    <div class="ad-arrows">⇅</div>
    <div class="ad-env">
      <div class="ad-label">Environment</div>
      <div class="ad-chips"><span>files</span><span>shell</span><span>Slurm</span><span>APIs</span><span>web</span><span>Git</span><span>databases</span><span>MCP</span><span>emails / chat</span></div>
    </div>
    <div class="ad-arrows ad-side">⇄</div>
    <div class="ad-subs">
      <div class="ad-subagent"><div class="ad-label">Sub-agent</div></div>
      <div class="ad-subagent"><div class="ad-label">Sub-agent</div></div>
    </div>
  </div>
</div>
<div class="ad-source">Adapted from Hugging Face, <a href="https://huggingface.co/blog/agent-glossary">"Harness, Scaffold, and the AI Agent Terms Worth Getting Right"</a>, 2026</div>
</div>
</div>

<style>
.agent-diagram { display: flex; flex-direction: column; align-items: stretch; gap: 0.4rem; font-size: 0.8rem; }
.agent-diagram .ad-label { font-family: var(--asc-font-serif); font-weight: 600; font-size: 1rem; }
.agent-diagram .ad-sub { opacity: 0.75; font-size: 0.72rem; margin-bottom: 0.5rem; }
.ad-harness { border: 2px solid var(--asc-clay); border-radius: var(--asc-radius-lg); padding: 0.8rem 1rem; }
.ad-scaffold { border: 1.5px dashed rgba(250, 249, 245, 0.45); border-radius: var(--asc-radius-md); padding: 0.7rem 0.9rem; background: var(--asc-night-raised); }
.ad-model { background: var(--asc-clay); color: var(--asc-ink); border-radius: var(--asc-radius-md); padding: 0.6rem 0.9rem; }
.ad-model .ad-sub { margin-bottom: 0; opacity: 0.85; }
.ad-arrows { text-align: center; font-size: 1.4rem; line-height: 1; color: var(--asc-clay); }
/* Bottom row: Environment (half the Harness width) ⇄ two sub-agents; row above holds the ⇅ to the Harness */
.ad-bottom { display: grid; grid-template-columns: 1fr auto 1fr; gap: 0.4rem 0.5rem; align-items: stretch; }
.ad-side { align-self: center; }
.ad-subs { display: flex; gap: 0.5rem; }
.ad-subagent { flex: 1; display: flex; align-items: center; justify-content: center; text-align: center; border: 2px solid var(--asc-clay); border-radius: var(--asc-radius-md); padding: 0.55rem 0.5rem; }
.ad-env { border: 1px solid rgba(250, 249, 245, 0.3); border-radius: var(--asc-radius-md); padding: 0.55rem 0.9rem; display: flex; flex-direction: column; align-items: flex-start; gap: 0.35rem; }
.ad-chips { display: flex; flex-wrap: wrap; gap: 0.35rem; }
.ad-chips span { background: rgba(250, 249, 245, 0.12); border-radius: 999px; padding: 0.1rem 0.6rem; font-size: 0.72rem; }
.ad-source { font-size: 0.65rem; opacity: 0.7; margin-top: 0.6rem; text-align: right; }
</style>

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

<div class="ref-line"><a href="https://doi.org/10.1111/j.1471-1842.2009.00848.x">Grant &amp; Booth (2009)</a> · Useful reference: <a href="https://libguides.oulu.fi/c.php?g=697494&p=5008493">“Systematic searching”, University of Oulu</a></div>

A literature review **identifies, evaluates and synthesises** existing research on a topic.

**How explicit and reproducible** each of these steps is defines the **type** of review: from a narrative review, where the author chooses and interprets the sources, to a systematic review, where every step is planned in advance and reported so that others can repeat it.

<div class="rt-caption">The 14 review types of Grant &amp; Booth (2009)</div>
<div class="rt-grid">
  <div class="card"><strong>Critical review</strong><span>Evaluates, then builds new concepts</span></div>
  <div class="card"><strong>Literature review</strong><span>Generic summary of published work</span></div>
  <div class="card"><strong>Mapping review / systematic map</strong><span>Maps and categorises existing literature</span></div>
  <div class="card"><strong>Meta-analysis</strong><span>Statistically combines quantitative results</span></div>
  <div class="card"><strong>Mixed studies review</strong><span>Combines quantitative and qualitative studies</span></div>
  <div class="card"><strong>Overview</strong><span>Broad survey of a topic</span></div>
  <div class="card"><strong>Qualitative systematic review</strong><span>Integrates findings of qualitative studies</span></div>
  <div class="card"><strong>Rapid review</strong><span>Systematic methods, shortened timeline</span></div>
  <div class="card"><strong>Scoping review</strong><span>Size and scope of literature</span></div>
  <div class="card"><strong>State-of-the-art review</strong><span>Most current research only</span></div>
  <div class="card"><strong>Systematic review</strong><span>Exhaustive search, appraisal, synthesis</span></div>
  <div class="card"><strong>Systematic search and review</strong><span>Comprehensive search, best-evidence synthesis</span></div>
  <div class="card"><strong>Systematized review</strong><span>Some systematic steps, not all</span></div>
  <div class="card"><strong>Umbrella review</strong><span>Synthesises reviews, not studies</span></div>
</div>

<div class="card dark rt-next">Broadly, they form <strong>three families</strong>: <strong>systematic</strong>, <strong>narrative</strong> and <strong>meta-analysis / meta-synthesis</strong>.</div>

<style>
/* Grant & Booth's 14 review types as a 2 × 7 grid of small cards, in their Table 1 order (alphabetical) */
.rt-caption { margin-top: 0.6rem; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
.rt-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 0.5rem; margin-top: 0.4rem; }
.rt-grid .card { display: flex; flex-direction: column; gap: 0.25rem; padding: 0.45rem 0.5rem; font-size: 0.62rem; line-height: 1.25; }
.rt-grid .card strong { font-size: 0.7rem; }
.slidev-layout .rt-next { margin-top: 0.6rem; padding: 0.45rem 0.9rem; font-size: 0.8rem; }
.rt-next {markgin-top: 0.6rem;}
</style>

<!--
Replaced the earlier version of this slide (kept after review).
Change: the earlier wording called every literature review "systematic", which contradicts the narrative-review slide. Now the degree of explicitness defines the review type.
Source: peer review, "Slides 11–14: definitions and review types" (Grant & Booth 2009).
The 14 cards follow Grant & Booth's Table 1, which lists the types alphabetically.
-->
---
layout: default
---

# Three families of literature reviews

<div class="grid-3 small">
<div class="card">

### 1. Systematic review

The most rigorous form: every step is planned in advance and reported.

- Answers a **well-defined research question**
- The search is carried out **systematically** and **reported accurately**
- **Inclusion and exclusion criteria** are defined before screening starts
- The **methodological quality** of the selected studies and their **risk of bias** are carefully assessed
- Related variants include the umbrella review, the integrative review, and the systematized review

</div>
<div class="card">

### 2. Narrative review

Sometimes just called a “literature review”: the methodologically lightest form.

- Describes previous research on a topic, often addressing a **broad question**
- The literature search is **not carried out in a fully systematic way**
- Selective collection of studies can lead to **divergent descriptions of the same topic** depending on who wrote the review
- Sub-types include the critical review, the scoping review, the mapping review, and the overview — some of which borrow features from systematic reviews

</div>
<div class="card">

### 3. Meta-analysis / meta-synthesis

Combines results across studies rather than just describing them.

- A **quantitative meta-analysis** statistically combines and generalizes numerical results from multiple studies
- A **qualitative meta-synthesis** (or meta-summary) classifies and summarizes findings thematically instead of numerically

</div>
</div>

---
layout: default
---

# Review types

<div class="ref-line"><a href="https://doi.org/10.1111/j.1471-1842.2009.00848.x">Grant &amp; Booth (2009)</a> | <a href="https://doi.org/10.1111/hir.12276">Sutton et al. (2019)</a> | <a href="https://doi.org/10.1186/s12874-018-0611-x">Munn et al. (2018)</a></div>

<div class="small">

| Purpose | Review types | Method | Reporting / quality |
| --- | --- | --- | --- |
| Interpret a topic | Narrative, critical review | The author selects and interprets sources; quality depends on being transparent about how sources were chosen | <a href="https://doi.org/10.1186/s41073-019-0064-8">SANRA</a> |
| Map what exists | Scoping, mapping review | Systematic search that charts the evidence; usually no quality appraisal | <a href="https://doi.org/10.7326/M18-0850">PRISMA-ScR</a> |
| Answer a focused question | Systematic review, with or without meta-analysis, or qualitative evidence synthesis | Registered protocol, systematic search, appraisal, synthesis | <a href="https://doi.org/10.1136/bmj.n71">PRISMA 2020</a> |
| Synthesise reviews | Umbrella review | A systematic review of systematic reviews | — |
| Answer fast | Rapid review | Systematic methods with simplified steps: completeness traded for speed | — |

</div>

<p class="small">Meta-analysis is a statistical step inside a systematic review, not a review type of its own. Scoping reviews differ from systematic reviews in purpose, not rigour. Sutton et al. (2019) describe 48 review types in seven families.</p>

<style>
/* Long table: tighter than the theme's 0.55rem cell padding (layouts.css:188) so it clears the footer */
.slidev-layout table th, .slidev-layout table td { padding-top: 0.18rem; padding-bottom: 0.18rem; }
</style>


---
layout: default
---
# The 13 steps of a systematic review

<div class="ref-line">Synthesised from the <a href="https://training.cochrane.org/handbook">Cochrane Handbook</a> and <a href="https://doi.org/10.1186/s13643-023-02255-9">Kolaski et al. (2023)</a>; see also  <a href="https://doi.org/10.1186/2046-4053-3-74">Tsafnat et al. (2014)</a>; item numbers from <a href="https://doi.org/10.1136/bmj.n71">PRISMA 2020</a> checklist</div>

<div class="small">

| # | Step | What to do | PRISMA 2020 |
| --- | --- | --- | --- |
| 1 | Question & review type | Frame the question, pick review type (<a href="https://doi.org/10.7326/ACPJC-1995-123-3-A12">PICO</a>, <a href="https://doi.org/10.1177/1049732312452938">SPIDER</a>) | 3–5 |
| 2 | Check existing reviews | Search registries: <a href="https://www.crd.york.ac.uk/prospero/">PROSPERO</a> (medical), <a href="https://osf.io/registries">OSF</a> (other) | 3 |
| 3 | Protocol & registration | Pre-register your plan (<a href="https://doi.org/10.1136/bmj.g7647">PRISMA-P</a>) | 24 |
| 4 | Search strategy | Turn concepts into search terms (Boolean syntax, <a href="https://www.nlm.nih.gov/mesh/meshhome.html">MeSH</a>, <a href="https://www.elsevier.com/products/embase/emtree">Emtree</a>) and free-text synonyms (<a href="https://doi.org/10.1016/j.jclinepi.2016.01.021">PRESS</a>) | 7 |
| 5 | Database searches | Run the search in several databases; deduplicate | 6, 16a |
| 6 | Supplementary searching | Citation chaining (backward and forward), experts, grey literature, preprints (<a href="https://doi.org/10.1186/s13643-020-01542-z">PRISMA-S</a>) | 6–7 |
| 7 | Title/abstract screening | Independent screeners against the eligibility criteria | 8, 16a |
| 8 | Full-text screening | Record the reason for every exclusion | 8, 16b |
| 9 | Data collection | Pull study data into data items | 9–10 |
| 10 | Quality appraisal | Judge risk of bias: <a href="https://doi.org/10.1136/bmj.l4898">RoB 2</a> (trials), <a href="https://doi.org/10.1136/bmj.i4919">ROBINS-I</a> (non-randomised studies), <a href="https://jbi.global/critical-appraisal-tools">JBI</a>/<a href="https://casp-uk.net/casp-tools-checklists/">CASP</a> checklists | 11, 18 |
| 11 | Synthesis & certainty | Meta-analysis or synthesis without meta-analysis (<a href="https://doi.org/10.1136/bmj.l6890">SWiM</a>); rate certainty of evidence (<a href="https://www.gradeworkinggroup.org/">GRADE</a>) | 12–15, 19–22 |
| 12 | Reporting | <a href="https://doi.org/10.1136/bmj.n71">PRISMA 2020</a> checklist and flow diagram (<a href="https://doi.org/10.7326/M18-0850">PRISMA-ScR</a> for scoping reviews) | all |
| 13 | Updating | Re-run and update; living reviews (<a href="https://doi.org/10.1136/bmj-2024-079183">PRISMA-LSR</a>) | <a href="https://doi.org/10.1136/bmj-2024-079183">PRISMA-LSR</a> |

</div>

<style>
/* Long table: tighter than the theme's 0.55rem cell padding (layouts.css:188) so it clears the footer */
.slidev-layout table th, .slidev-layout table td { padding-top: 0.3rem; padding-bottom: 0.3rem; }
</style>


---
layout: default
---

# Not every field works like the health sciences

<div class="ref-line"><a href="https://doi.org/10.1016/j.infsof.2008.09.009">Kitchenham et al. (2009)</a> | <a href="https://doi.org/10.1108/BEPAM-10-2016-0056">Parida &amp; Brown (2018)</a></div>

The 13 steps come from **evidence-based medicine**, where review methods are the most formalised. They are the **reference standard**, also for engineers and economists.

Other fields keep the logic but **change the tools**: their own databases and vocabularies, their own grey literature, their own appraisal concerns. Software engineering, for example, wrote its own guidelines.

**Learn the medical model, then your field's guidance.** More interpretive traditions (design, humanities) combine, reorder or skip some steps.

<!--
NEW version of "Not every field works like the health sciences".
Change: written for a mixed audience (medicine, biomedical/electrical/other engineering, ML, economics): medicine is the gold standard everybody learns, then each field's own practice (next slide). Also removes "below/above" wording.
Source: peer review, "Slide 16: the medical standard, then each field's practice".
-->

---
layout: default
---

# Method guidance and databases by field

<div class="ref-line">Fields: <a href="https://doi.org/10.1787/9789264239012-en">OECD Fields of Research and Development, Frascati Manual (2015)</a></div>

<div class="small">

| Field (OECD) | Method guidance | Most used databases |
| --- | --- | --- |
| **Natural sciences** (maths, computer and information sciences, physics, chemistry, earth, environmental and biological sciences) | <a href="https://environmentalevidence.org/">CEE Guidelines</a> and <a href="https://doi.org/10.1186/s13750-018-0121-7">ROSES</a> (environment); <a href="https://doi.org/10.1111/brv.12721">PRISMA-EcoEvo</a> (ecology and evolution) | Web of Science, Scopus; field databases: GeoRef, Inspec, CAS SciFinder, MathSciNet/zbMATH; arXiv preprints |
| **Engineering and technology** (electrical, mechanical, civil, chemical, materials, biomedical, environmental engineering) | <a href="https://doi.org/10.1016/j.infsof.2008.09.009">Kitchenham et al. 2009</a> (software engineering, the usual template also for engineering); no general engineering standard | Compendex (Engineering Village), Inspec, IEEE Xplore, ACM Digital Library, Scopus |
| **Medical and health sciences** | <a href="https://training.cochrane.org/handbook">Cochrane Handbook</a>; <a href="https://doi.org/10.46658/JBIMES-24-01">JBI Manual</a>; <a href="https://doi.org/10.1136/bmj.n71">PRISMA 2020</a> | PubMed/MEDLINE (MeSH), Embase (Emtree), Cochrane CENTRAL, CINAHL, PsycINFO |
| **Agricultural and veterinary sciences** | <a href="https://environmentalevidence.org/">CEE Guidelines</a>; <a href="https://doi.org/10.1186/1471-2288-14-43">SYRCLE risk of bias</a> (animal studies) | CAB Abstracts, AGRICOLA, AGRIS, Web of Science |
| **Social sciences** (psychology, economics, education, sociology, law, political science) | <a href="https://www.campbellcollaboration.org/">Campbell Collaboration</a>; <a href="https://doi.org/10.1111/joes.12363">MAER-Net guidelines</a> (economics) | PsycINFO, ERIC, EconLit, Sociological Abstracts; RePEc, SSRN, NBER working papers |
| **Humanities and the arts** (history, languages, philosophy, arts) | No formal standard: mostly narrative and critical reviews | MLA International Bibliography, Philosopher's Index, Historical Abstracts, JSTOR |

</div>

<p class="small">Across all fields: Scopus and Web of Science; Google Scholar only as a supplementary source (<a href="https://doi.org/10.1002/jrsm.1378">Gusenbauer &amp; Haddaway 2020</a>). Outside health, register protocols on <strong>OSF Registries</strong>: PROSPERO accepts only health-related reviews.</p>

<style>
/* Long table: tighter than the theme's 0.55rem cell padding (layouts.css:188) so it clears the footer */
.slidev-layout table th, .slidev-layout table td { padding-top: 0.18rem; padding-bottom: 0.18rem; }
</style>

<!--
Field-practice table, rebuilt on the six OECD Fields of Research and Development (Frascati Manual 2015, Table 2.2) instead of fields picked for one audience.
Columns: method guidance and the most used databases per field; the "what differs from medicine" column was dropped.
The databases are the standard subject databases for each field, not a ranked list from one source. Gusenbauer & Haddaway (2020) tested 28 search systems for systematic-review searching.
-->
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

<div class="ref-line"><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12594113/">Cochrane, Campbell, JBI and CEE position statement on AI use in evidence synthesis (2025)</a></div>

<div class="ai-split">
<div class="card dark">

- Each step can be **delegated** to an AI system or done **together** with one
- The more autonomy is left to the AI tool, the higher the **risk of undetected error**. Unchecked errors that reach a publication can become misconduct
- Use AI only where you can **show that it does not compromise the rigour** of the review. **The authors stay responsible** for everything in it

</div>
<div class="pf">
  <div class="pf-phase" style="grid-row: 1">Identification</div>
  <div class="pf-box" style="grid-row: 1">Records identified from databases and registers
    <div class="pf-tags"><span class="lo">AI suggests search terms</span><span class="hi">AI runs the search</span></div></div>
  <div class="pf-side" style="grid-row: 1">Removed before screening: duplicates, marked ineligible by automation tools
    <div class="pf-tags"><span class="lo">Deduplication</span><span class="hi">Auto-exclusion</span></div></div>
  <div class="pf-phase" style="grid-row: 2 / 5">Screening</div>
  <div class="pf-box" style="grid-row: 2">Records screened
    <div class="pf-tags"><span class="lo">Prioritisation, stopping rule</span><span class="lo">AI as second screener</span><span class="hi">AI as sole screener</span></div></div>
  <div class="pf-side" style="grid-row: 2">Records excluded</div>
  <div class="pf-box" style="grid-row: 3">Reports sought for retrieval</div>
  <div class="pf-side" style="grid-row: 3">Reports not retrieved</div>
  <div class="pf-box" style="grid-row: 4">Reports assessed for eligibility
    <div class="pf-tags"><span class="lo">AI flags, human decides</span><span class="hi">AI decides eligibility</span></div></div>
  <div class="pf-side" style="grid-row: 4">Reports excluded, with reasons</div>
  <div class="pf-phase" style="grid-row: 5 / 7">Included</div>
  <div class="pf-box" style="grid-row: 5">Studies included in review</div>
  <div class="pf-box pf-after" style="grid-row: 6">Data extraction, synthesis, review publication
    <div class="pf-tags"><span class="lo">AI extracts, human verifies</span><span class="hi">AI judges risk of bias</span><span class="hi">AI writes conclusions</span></div></div>
  <div class="pf-legend"><span class="lo">lower risk: a human checks every output</span><span class="hi">higher risk: AI makes the judgement</span></div>
  <div class="pf-credit">Flow after <a href="https://doi.org/10.1136/bmj.n71">PRISMA 2020</a>, as adapted by <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10335470/">van Dijk et al. (2023)</a></div>
</div>
</div>

<style>
/* Text on the left, a PRISMA 2020 flow on the right (redrawn after van Dijk et al. 2023, Fig. 1) with AI uses tagged by risk */
.ai-split { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr); gap: 1.5rem; align-items: start; }
.pf { display: grid; grid-template-columns: 1.1rem minmax(0, 1.25fr) minmax(0, 1fr); column-gap: 1rem; row-gap: 0.8rem; font-size: 0.6rem; line-height: 1.25; }
.pf-phase { grid-column: 1; writing-mode: vertical-rl; transform: rotate(180deg); text-align: center; background: var(--aalto-blue); color: #000; border-radius: 999px; font-weight: 700; font-size: 0.55rem; line-height: 1; padding: 0.3rem 0.12rem 0.3rem 0; display: flex; align-items: center; justify-content: center; }
.pf-box, .pf-side { position: relative; border: 1px solid #000; border-radius: 0; background: var(--asc-surface); padding: 0.3rem 0.45rem; text-align: center; align-self: start; }
.pf-box { grid-column: 2; font-weight: 600; align-self: stretch; display: flex; flex-direction: column; justify-content: center; }
.pf-side { grid-column: 3; opacity: 0.85; }
.pf-after { border-style: dashed; }
/* Thick black arrows, drawn as clipped shapes: down between the main boxes, right to the exclusion boxes */
.pf-box::after { content: ''; position: absolute; left: calc(50% - 0.4rem); bottom: -0.8rem; width: 0.8rem; height: 0.8rem; background: #000; clip-path: polygon(45% 0, 55% 0, 55% 55%, 85% 55%, 50% 100%, 15% 55%, 45% 55%); }
.pf-after::after { display: none; }
.pf-side::before { content: ''; position: absolute; left: -1rem; top: 0.3rem; width: 1rem; height: 0.8rem; background: #000; clip-path: polygon(0 44%, 60% 44%, 60% 15%, 100% 50%, 60% 85%, 60% 56%, 0 56%); }
.pf-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.2rem; margin-top: 0.25rem; font-weight: 400; }
.pf span.lo, .pf span.hi { border-radius: 999px; padding: 0.05rem 0.4rem; font-size: 0.52rem; border: 1.5px solid; }
.pf span.lo { border-color: var(--aalto-green); color: #1f6b2e; background: rgba(0, 158, 77, 0.08); }
.pf span.hi { border-color: var(--aalto-red); color: #a1002a; background: rgba(237, 41, 57, 0.08); }
.pf-legend { grid-column: 1 / 4; display: flex; justify-content: center; gap: 0.6rem; }
.pf-credit { grid-column: 1 / 4; text-align: center; font-size: 0.5rem; opacity: 0.7; margin-top: -0.4rem; }
</style>

---
layout: default
---

# What tools are out there?

### "Deep-research" modes (generative AI)

The agentic research features built into general chatbots (e.g. <a href="https://openai.com/index/introducing-deep-research/">ChatGPT Deep Research</a>, <a href="https://gemini.google/overview/deep-research/">Gemini Deep Research</a>, <a href="https://claude.com/resources/articles/research">Claude in agent mode</a>). Given a topic, these plan a search, browse the open web, and synthesize an answer with citations, **entirely on their own initiative**.

### Classical machine learning for screening

<a href="https://asreview.nl/">ASReview</a> (active learning), <a href="https://www.rayyan.ai/">Rayyan</a> and <a href="https://www.covidence.org/">Covidence</a> can **reorder records** so that relevant ones come first. It has been shown that this type of text mining saved **30–70% of screening workload**, sometimes at the cost of about 5% of relevant studies (<a href="https://doi.org/10.1186/2046-4053-4-5">O'Mara-Eves et al. 2015</a>; <a href="https://doi.org/10.1038/s42256-020-00287-7">van de Schoot et al. 2021</a>). In one review with ASReview, the reviewers screened only **23% of the records** before reaching their stopping criterion (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10335470/">van Dijk et al. 2023</a>).

### LLM-based review assistants

<a href="https://elicit.com/">Elicit</a> and similar tools search a fixed corpus (<a href="https://www.semanticscholar.org/">Semantic Scholar</a> for Elicit) and use LLMs to screen, summarise and extract. In four case studies Elicit found **25–69% of the studies** found by the original searches (<a href="https://doi.org/10.1002/cesm.70050">Lau &amp; Golder 2025</a>).

---
layout: default
---

# Examples where AI can help

### Draft a Boolean query

Test it against 5–10 papers you already know are relevant, or have a librarian review it. LLM-drafted queries are precise, but can also miss many relevant studies (<a href="https://doi.org/10.1145/3539618.3591703">Wang et al. 2023</a>).

<p class="small">“Translate this research question into a Boolean search string using MeSH terms and free-text synonyms, formatted for PubMed: [question].”</p>

### Use AI as a second screener

In your prompt, you can ask the chatbot to answers with just "include / exclude / unsure" and report its justification. This can be compared with what other human screeners did.

<p class="small">“Eligibility criteria: [paste them]. For this title and abstract: [paste it] answer include / exclude / unsure, and quote the exact phrase that justifies your answer.”</p>

### Extract data from studies

96.3% accuracy on simple trial data (<a href="https://doi.org/10.1002/jrsm.1710">Gartlehner et al. 2024</a>), but a median of 14% errors across studies (<a href="https://doi.org/10.1017/rsm.2025.16">Clark et al. 2025</a>).


---
layout: default
---

# Examples where AI fails

### Running the search

In three evaluations, generative AI missed **68–96% (median 91%)** of the studies found by conventional searches (<a href="https://doi.org/10.1017/rsm.2025.16">Clark et al. 2025</a>). In general, some publishers/companies might block ChatGPT/Claude/Gemini search requests, making some part of the internet invisible to AI tools.

### Being the only screener

Incorrect exclusions: median **28%** (range 1–83%) (<a href="https://doi.org/10.1017/rsm.2025.16">Clark et al. 2025</a>).

### Citing literature from memory

**29–91%** of chatbot-suggested references were fabricated (<a href="https://doi.org/10.2196/53164">Chelli et al. 2024</a>). Note that this is an old study, things have gotten better, but still it depends on memorization or the availability of **web search** tools.

### Summarising findings

LLM summaries were about **five times more likely** than expert summaries to overgeneralise (OR 4.85; <a href="https://doi.org/10.1098/rsos.241776">Peters &amp; Chin-Yee 2025</a>).



---
layout: default
---

# Disclosing AI use in a review

<div class="grid-2-3">
<div class="card">
  <h3>Current best practices</h3>
  <ul >
    <li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12594113/">Cochrane, Campbell, JBI, CEE (2025)</a>, endorsing RAISE: report AI use transparently and describe <strong>how outputs were verified</strong></li>
    <li><a href="https://doi.org/10.1136/bmj.n71">PRISMA 2020</a> items 8, 9 and 11 already ask for details of <strong>automation tools</strong> in selection, data collection and risk of bias</li>
    <li><a href="https://research-and-innovation.ec.europa.eu/document/download/2b6cf7e5-36ac-41cb-aab5-0d32050143dc_en">EC Living Guidelines</a>: disclose the AI tools that substantially shaped the work</li>
    <li>Remember to check the <strong>journal's own AI policy</strong>, which may be stricter</li>
  </ul>
</div>
<div class="card dark">
  <h3>What to report: the GAMER statement</h3>
  <ul>
    <li>Which tools and versions, and how they were prompted</li>
    <li>What role each tool played</li>
    <li>How the output was verified</li>
    <li>Data privacy</li>
    <li>The impact on the conclusions</li>
  </ul>
  <p>Reporting guideline in the EQUATOR library (<a href="https://doi.org/10.1136/bmjebm-2025-113825">BMJ Evidence-Based Medicine, 2025</a>). PRISMA 2020 is still the current version; an AI update is in development. PRISMA-trAIce (2025) uses the PRISMA name but is not an endorsed extension.</p>
</div>
</div>


---
layout: section
color: dark
hexText: "HUMAN\nAI\nREVIEWS"
class: title-middle
---

# A Framework for Responsible AI-Assisted Literature Review




---
layout: default
color: dark
---

# AI autonomy in literature reviewing

<div class="ref-line">Framework: Glerean (2026), CC BY 4.0. Stages after <a href="https://doi.org/10.1109/3468.844354">Parasuraman, Sheridan &amp; Wickens (2000)</a></div>

<div class="aa-diagram">
  <div class="aa-axis"><span class="aa-human">Human-driven</span><span class="aa-line"></span><span class="aa-ai">AI-driven</span></div>
  <div class="aa-row">
    <div class="aa-card" style="--lvl: var(--aalto-blue)">
      <div class="aa-label">Consult</div>
      <div class="aa-quote">“Help me query”</div>
      <div class="aa-down">↓</div>
      <div class="aa-decision">Wording</div>
      <div class="aa-chips"><span>synonyms</span><span>concepts</span><span>query terms</span></div>
      <div class="aa-stage">information acquisition</div>
    </div>
    <div class="aa-arrow">→</div>
    <div class="aa-card" style="--lvl: var(--aalto-aquagreen)">
      <div class="aa-label">Discover</div>
      <div class="aa-quote">“Help me find”</div>
      <div class="aa-down">↓</div>
      <div class="aa-decision">Retrieval</div>
      <div class="aa-chips"><span>what to find</span><span>where to search</span><span>similar papers</span></div>
      <div class="aa-stage">information acquisition</div>
    </div>
    <div class="aa-arrow">→</div>
    <div class="aa-card" style="--lvl: var(--aalto-darkyellow)">
      <div class="aa-label">Assist</div>
      <div class="aa-quote">“Help me process”</div>
      <div class="aa-down">↓</div>
      <div class="aa-decision">Relevance</div>
      <div class="aa-chips"><span>what matters</span><span>include / exclude</span><span>prioritisation</span></div>
      <div class="aa-stage">information analysis</div>
    </div>
    <div class="aa-arrow">→</div>
    <div class="aa-card" style="--lvl: var(--aalto-orange)">
      <div class="aa-label">Delegate</div>
      <div class="aa-quote">“Carry out the review”</div>
      <div class="aa-down">↓</div>
      <div class="aa-decision">Extraction</div>
      <div class="aa-chips"><span>data to extract</span><span>categorise</span></div>
      <div class="aa-stage">decision selection</div>
    </div>
    <div class="aa-arrow">→</div>
    <div class="aa-card" style="--lvl: var(--aalto-red)">
      <div class="aa-label">Autonomous</div>
      <div class="aa-quote">“Review this topic”</div>
      <div class="aa-down">↓</div>
      <div class="aa-decision">Interpretation → synthesis</div>
      <div class="aa-chips"><span>what it means</span><span>conclude</span></div>
      <div class="aa-stage">action implementation</div>
    </div>
  </div>
  <div class="aa-note">Examples show which decision moves to AI at each level; any step can be done at any level</div>
  <div class="aa-scales">
    <div class="aa-scale-name">Human methodological control</div>
    <div class="aa-scale"><span>High</span><span class="aa-bar aa-falling"></span><span>Low</span></div>
    <div class="aa-scale-name">Need for transparency, verification and validation</div>
    <div class="aa-scale"><span>Low</span><span class="aa-bar aa-rising"></span><span>High</span></div>
  </div>
  <div class="aa-message"><strong>More AI ≠ better review.</strong> 
  <br>
  Report any use of AI that makes or suggests judgments (<a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12594113/">Position statement on AI use in evidence synthesis, 2025</a>).</div>
</div>

<style>
/* Same diagram as the previous slide (styles are per slide), plus a stage line per card from the human-automation literature */
.aa-diagram { display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.9rem; }
.aa-axis { display: flex; align-items: center; gap: 0.6rem; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
.aa-human { color: var(--aalto-blue); }
.aa-ai { color: var(--aalto-red); }
.aa-line { flex: 1; height: 2px; background: linear-gradient(90deg, var(--aalto-blue), var(--aalto-red)); }
.aa-row { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr auto 1fr; gap: 0.35rem; align-items: stretch; }
.aa-card { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 0.6rem 0.5rem; background: var(--asc-night-raised); border: 2px solid var(--lvl); border-radius: var(--asc-radius-md); }
.aa-label { font-family: var(--asc-font-serif); font-weight: 600; font-size: 1.15rem; color: var(--lvl); }
.aa-quote { font-style: italic; font-size: 0.8rem; opacity: 0.8; }
.aa-down { font-size: 1.1rem; line-height: 1.1; color: var(--asc-clay); }
.aa-decision { font-weight: 700; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.5rem; }
.aa-chips { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.3rem; margin-top: auto; }
.aa-chips span { background: rgba(250, 249, 245, 0.12); border-radius: 999px; padding: 0.12rem 0.6rem; font-size: 0.75rem; }
.aa-stage { margin-top: 0.5rem; padding-top: 0.35rem; width: 100%; border-top: 1px solid rgba(250, 249, 245, 0.2); font-size: 0.68rem; font-style: italic; opacity: 0.75; }
.aa-arrow { align-self: center; font-size: 1.4rem; line-height: 1; color: var(--asc-clay); }
.aa-note { text-align: center; font-style: italic; font-size: 0.7rem; opacity: 0.7; }
.aa-scales { display: grid; grid-template-columns: auto 1fr; gap: 0.4rem 1rem; align-items: center; }
.aa-scale-name { font-weight: 600; font-size: 0.85rem; }
.aa-scale { display: flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; }
.aa-bar { flex: 1; height: 6px; border-radius: 999px; }
.aa-falling { background: linear-gradient(90deg, var(--aalto-blue), rgba(250, 249, 245, 0.15)); }
.aa-rising { background: linear-gradient(90deg, rgba(250, 249, 245, 0.15), var(--aalto-red)); }
.aa-message { text-align: center; padding: 0.5rem 0.9rem; border: 1px solid rgba(250, 249, 245, 0.3); border-radius: var(--asc-radius-md); }
.aa-message a { color: var(--aalto-blue); }
</style>



---
layout: default
---

# Some exercises with Duck.ai and Gemini

<div class="ref-line">Open the tools: <a href="https://duck.ai/">duck.ai</a> · <a href="https://gemini.google.com/">gemini.google.com</a></div>

### Build a good search query

“I want to search the scientific literature about whether social media use affects sleep in elementary school children. Identify the main concepts, synonyms and related terms. Then propose a Boolean search query. Explain why you chose each term.”

<p class="small">Then try a topic from your field, in your field's database: wearable ECG arrhythmia detection (PubMed) · LLM coding assistants and software defects (ACM Digital Library, arXiv) · battery degradation models (IEEE Xplore) · low-traffic neighbourhoods and air quality (Scopus) · minimum wage and employment (EconLit)</p>

### Test “deep research” modes

First use **<a href="https://developers.openai.com/cookbook/examples/enhance_your_prompts_with_meta_prompting">metaprompting</a>** (prompt engineer is the first job that AI replaced :) ): ask the tool to build a prompt for you on a research topic. Then use that prompt to run the deep research.

<p class="small">"I want you to generate the prompt to be used in deep research mode for conducting a literature review on the topic of functional connectivity and fMRI. I am interested in the recent findings from the past 2 years, especially with focus on new methods or methodological aspects. Ask me a few questions if you need to clarify the scope before you generate the prompt."</p>


**Check five references the tool gives you:** do they exist, and do they say what the tool claims?


---
layout: default
# Hidden until the references are verified by hand; delete this line to publish
disabled: true
---

# References (1/3): review methods

<ul class="refs small">
  <li>Akl EA et al. (2024). PRISMA 2020 extension for living systematic reviews (PRISMA-LSR). <em>BMJ</em> 387:e079183. <a href="https://doi.org/10.1136/bmj-2024-079183">doi</a></li>
  <li>Baethge C et al. (2019). SANRA: a scale for the quality assessment of narrative review articles. <em>Res Integr Peer Rev</em> 4:5. <a href="https://doi.org/10.1186/s41073-019-0064-8">doi</a></li>
  <li>Campbell M et al. (2020). Synthesis without meta-analysis (SWiM) in systematic reviews. <em>BMJ</em> 368:l6890. <a href="https://doi.org/10.1136/bmj.l6890">doi</a></li>
  <li>Cooke A et al. (2012). Beyond PICO: the SPIDER tool for qualitative evidence synthesis. <em>Qual Health Res</em> 22(10). <a href="https://doi.org/10.1177/1049732312452938">doi</a></li>
  <li>Grant MJ, Booth A (2009). A typology of reviews. <em>Health Info Libr J</em> 26(2):91–108. <a href="https://doi.org/10.1111/j.1471-1842.2009.00848.x">doi</a></li>
  <li>Guyatt GH et al. (2008). GRADE: an emerging consensus on rating quality of evidence. <em>BMJ</em> 336:924. <a href="https://doi.org/10.1136/bmj.39489.470347.AD">doi</a></li>
  <li>Havránek T et al. (2020). Reporting guidelines for meta-analysis in economics. <em>J Econ Surv</em> 34(3). <a href="https://doi.org/10.1111/joes.12363">doi</a></li>
  <li>Higgins JPT, Thomas J et al. (eds). <em>Cochrane Handbook for Systematic Reviews of Interventions</em>, current version. <a href="https://training.cochrane.org/handbook">web</a></li>
  <li>Khan KS et al. (2003). Five steps to conducting a systematic review. <em>J R Soc Med</em> 96(3). <a href="https://doi.org/10.1177/014107680309600304">doi</a></li>
  <li>Kitchenham B et al. (2009). Systematic literature reviews in software engineering. <em>Inf Softw Technol</em> 51(1). <a href="https://doi.org/10.1016/j.infsof.2008.09.009">doi</a></li>
</ul>

<style>
/* Two-column reference list */
.refs { columns: 2; column-gap: 2rem; }
.refs li { break-inside: avoid; }
</style>

<!--
NEW slide: references for the NEW slides (review methods). All DOIs checked to resolve on 19.10.2026.
-->

---
layout: default
# Hidden until the references are verified by hand; delete this line to publish
disabled: true
---


# References (2/3): review methods and field practice

<ul class="refs small">
  <li>Kolaski K, Logan LR, Ioannidis JPA (2023). Guidance to best tools and practices for systematic reviews. <em>Syst Rev</em> 12:96. <a href="https://doi.org/10.1186/s13643-023-02255-9">doi</a></li>
  <li>McGowan J et al. (2016). PRESS peer review of electronic search strategies: 2015 guideline. <em>J Clin Epidemiol</em> 75. <a href="https://doi.org/10.1016/j.jclinepi.2016.01.021">doi</a></li>
  <li>Moher D et al. (2015). PRISMA-P 2015 statement. <em>Syst Rev</em> 4:1. <a href="https://doi.org/10.1186/2046-4053-4-1">doi</a></li>
  <li>Muka T et al. (2020). A 24-step guide on how to design, conduct, and successfully publish a systematic review and meta-analysis in medical research. <em>Eur J Epidemiol</em> 35. <a href="https://doi.org/10.1007/s10654-019-00576-5">doi</a></li>
  <li>Munn Z et al. (2018). Systematic review or scoping review? <em>BMC Med Res Methodol</em> 18:143. <a href="https://doi.org/10.1186/s12874-018-0611-x">doi</a></li>
  <li>Page MJ et al. (2021). The PRISMA 2020 statement. <em>BMJ</em> 372:n71. <a href="https://doi.org/10.1136/bmj.n71">doi</a></li>
  <li>Parida S, Brown K (2018). Investigating systematic review for multi-disciplinary research in the built environment. <em>Built Environ Proj Asset Manag</em> 8(1). <a href="https://doi.org/10.1108/BEPAM-10-2016-0056">doi</a></li>
  <li>Petersen K et al. (2015). Guidelines for conducting systematic mapping studies in software engineering. <em>Inf Softw Technol</em> 64. <a href="https://doi.org/10.1016/j.infsof.2015.03.007">doi</a></li>
  <li>Rethlefsen ML et al. (2021). PRISMA-S: reporting literature searches. <em>Syst Rev</em> 10:39. <a href="https://doi.org/10.1186/s13643-020-01542-z">doi</a></li>
  <li>Sterne JAC et al. (2016). ROBINS-I. <em>BMJ</em> 355:i4919. <a href="https://doi.org/10.1136/bmj.i4919">doi</a></li>
  <li>Sterne JAC et al. (2019). RoB 2: a revised tool for assessing risk of bias in randomised trials. <em>BMJ</em> 366:l4898. <a href="https://doi.org/10.1136/bmj.l4898">doi</a></li>
  <li>Sutton A et al. (2019). Meeting the review family. <em>Health Info Libr J</em> 36(3). <a href="https://doi.org/10.1111/hir.12276">doi</a></li>
  <li>Tricco AC et al. (2018). PRISMA extension for scoping reviews (PRISMA-ScR). <em>Ann Intern Med</em> 169(7). <a href="https://doi.org/10.7326/M18-0850">doi</a></li>
  <li>Tsafnat G et al. (2014). Systematic review automation technologies. <em>Syst Rev</em> 3:74. <a href="https://doi.org/10.1186/2046-4053-3-74">doi</a></li>
  <li>Wohlin C (2014). Guidelines for snowballing in systematic literature studies. <em>EASE 2014</em>. <a href="https://doi.org/10.1145/2601248.2601268">doi</a></li>
  <li>Xiao Y, Watson M (2019). Guidance on conducting a systematic literature review. <em>J Plan Educ Res</em> 39(1). <a href="https://doi.org/10.1177/0739456X17723971">doi</a></li>
</ul>

<style>
/* Two-column reference list */
.refs { columns: 2; column-gap: 2rem; }
.refs li { break-inside: avoid; }
</style>

<!--
NEW slide: references for the NEW slides (review methods and field practice). All DOIs checked to resolve on 19.10.2026.
-->

---
layout: default
# Hidden until the references are verified by hand; delete this line to publish
disabled: true
---

# References (3/3): AI in evidence synthesis and policy

<ul class="refs small">
  <li>Chelli M et al. (2024). Hallucination rates and reference accuracy of ChatGPT and Bard for systematic reviews. <em>J Med Internet Res</em> 26:e53164. <a href="https://doi.org/10.2196/53164">doi</a></li>
  <li>Clark J et al. (2025). Generative artificial intelligence use in evidence synthesis: a systematic review. <em>Res Synth Methods</em> 16(4). <a href="https://doi.org/10.1017/rsm.2025.16">doi</a></li>
  <li>Cochrane, Campbell, JBI, CEE (2025). Position statement on AI use in evidence synthesis. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12594113/">PMC12594113</a></li>
  <li>European Commission (2025). Living guidelines on the responsible use of generative AI in research, 2nd version. <a href="https://research-and-innovation.ec.europa.eu/document/download/2b6cf7e5-36ac-41cb-aab5-0d32050143dc_en">pdf</a></li>
  <li>Gartlehner G et al. (2024). Data extraction for evidence synthesis using a large language model. <em>Res Synth Methods</em> 15(4). <a href="https://doi.org/10.1002/jrsm.1710">doi</a></li>
  <li>GAMER statement (2025). Reporting guideline for the use of generative AI tools in medical research. <em>BMJ Evid Based Med</em>. <a href="https://doi.org/10.1136/bmjebm-2025-113825">doi</a></li>
  <li>Khraisha Q et al. (2024). Can large language models replace humans in systematic reviews? <em>Res Synth Methods</em> 15(4). <a href="https://doi.org/10.1002/jrsm.1715">doi</a></li>
  <li>Konet A et al. (2024). Performance of two large language models for data extraction in evidence synthesis. <em>Res Synth Methods</em> 15(5). <a href="https://doi.org/10.1002/jrsm.1732">doi</a></li>
  <li>Lai H et al. (2026). Large language models for systematic reviews were reported to perform well but rarely with verifiable safeguards. <em>J Clin Epidemiol</em>. <a href="https://scholars.hkbu.edu.hk/en/publications/large-language-models-for-systematic-reviews-were-reported-to-per/">record</a></li>
  <li>Lau O, Golder S (2025). Comparison of Elicit AI and traditional literature searching in evidence syntheses. <em>Cochrane Evid Synth Methods</em> 3(6). <a href="https://doi.org/10.1002/cesm.70050">doi</a></li>
  <li>O'Mara-Eves A et al. (2015). Using text mining for study identification in systematic reviews. <em>Syst Rev</em> 4:5. <a href="https://doi.org/10.1186/2046-4053-4-5">doi</a></li>
  <li>Parasuraman R, Sheridan TB, Wickens CD (2000). A model for types and levels of human interaction with automation. <em>IEEE Trans Syst Man Cybern A</em> 30(3). <a href="https://doi.org/10.1109/3468.844354">doi</a></li>
  <li>Peters U, Chin-Yee B (2025). Generalization bias in large language model summarization of scientific research. <em>R Soc Open Sci</em>. <a href="https://doi.org/10.1098/rsos.241776">doi</a></li>
  <li>van de Schoot R et al. (2021). An open source machine learning framework for efficient and transparent systematic reviews. <em>Nat Mach Intell</em> 3. <a href="https://doi.org/10.1038/s42256-020-00287-7">doi</a></li>
  <li>Wang S et al. (2023). Can ChatGPT write a good Boolean query for systematic review literature search? <em>SIGIR 2023</em>. <a href="https://doi.org/10.1145/3539618.3591703">doi</a></li>
</ul>

<style>
/* Two-column reference list */
.refs { columns: 2; column-gap: 2rem; }
.refs li { break-inside: avoid; }
</style>

<!--
NEW slide: references for the NEW slides (AI evidence and policy). All DOIs checked to resolve on 19.10.2026.
-->
