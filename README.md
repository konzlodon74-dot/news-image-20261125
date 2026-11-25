# The World Today — 25 November 2026

[![news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/konzlodon74-dot/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/konzlodon74-dot/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

A one-page newspaper front page summing up Wednesday, 25 November 2026's
world news. Entry for the [news-image-20261125 bounty](https://make.fun/bounty/news-image-20261125).

## The six stories

1. **Ukraine strikes Russian ships in two seas** — President Zelenskyy
   confirms Ukraine hit a Russian cargo ship in the Gulf of Finland and sank
   a Russian warship off Benghazi, Libya; Russia calls it "terrorism" and
   warns of severe consequences.
2. **Climate summit collapses without a deal** — the UN COP31 talks in
   Antalya end with no final agreement after major oil and gas producers
   block fossil-fuel phaseout language.
3. **Houthi drone hits Riyadh's tallest tower** — eleven people wounded in
   the strike, Saudi civil defence says.
4. **Trump awards Giuliani the Medal of Freedom** — President Trump presents
   Rudy Giuliani with the Presidential Medal of Freedom.
5. **CIA hit by cybersecurity breach** — the CIA and the Office of the
   Director of National Intelligence suffer a breach involving some
   unclassified information, a source tells Reuters.
6. **More than 700,000 Russian soldiers killed, analysis finds** — a new
   estimate puts the Russian death toll in the Ukraine war above 700,000.

## Design

The front page is laid out like a broadsheet: masthead "THE WORLD TODAY" with
the dateline "Wednesday, 25 November 2026", the Ukraine ship strikes as the
lead story, four stories in two columns, and the war-toll estimate in a
tinted band above the footer, which repeats the date. Every fact on the page
comes from wire reporting on 25 November 2026; nothing else was invented.

## How it works

`main.ts` (Node 22, standard library only) copies the rendered front page,
`entry.png` (1024×1024, under 1 MiB), byte-for-byte to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`). After copying
it checks the copy is identical to the source — same size and same SHA-256
digest — and fails loudly if it is not, so the judge sees exactly the
rendered image. The program makes no network requests; the image is shipped
in this repository and the front page was drawn from the stories above with
a Python/PIL renderer kept outside the repo.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
