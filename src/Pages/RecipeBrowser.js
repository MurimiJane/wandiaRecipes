import React, { useEffect, useMemo, useState } from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footerm";

/**
 * Reusable recipe page used by Salads, Chicken, Simple meals and Coffee.
 *
 * Props:
 *  - title:       big heading in the hero ("Salads")
 *  - heroClass:   existing hero CSS class ("saladsection", "chickensection", ...)
 *  - storageKey:  unique key per page, used to remember saved recipes ("salads")
 *  - recipes:     [{ id, title, ingredients: string[], steps: string[] | stages: [{ title, steps }], tip?: string }]
 */
// A recipe can use `steps: string[]` or, for multi-part recipes,
// `stages: [{ title, steps: string[] }]` (e.g. "Marinating" then "Cooking").
const getStages = (r) => r.stages || [{ title: null, steps: r.steps }];
const stepCount = (r) => getStages(r).reduce((n, st) => n + st.steps.length, 0);

function RecipeBrowser({ title, heroClass, storageKey, recipes }) {
  const [query, setQuery] = useState("");
  const [savedOnly, setSavedOnly] = useState(false);
  const [activeId, setActiveId] = useState(recipes[0]?.id);
  const [ticked, setTicked] = useState({}); // { "1-ing-0": true, "1-step-2": true }

  const [saved, setSaved] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(`saved-${storageKey}`)) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(`saved-${storageKey}`, JSON.stringify(saved));
    } catch {
      /* storage blocked: saving just won't persist */
    }
  }, [saved, storageKey]);

  // Recipes matching the search box (title or any ingredient) and the "saved only" filter
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return recipes.filter((r) => {
      if (savedOnly && !saved.includes(r.id)) return false;
      if (!q) return true;
      return (
        r.title.toLowerCase().includes(q) ||
        r.ingredients.some((i) => i.toLowerCase().includes(q))
      );
    });
  }, [recipes, query, savedOnly, saved]);

  const active = visible.find((r) => r.id === activeId) || visible[0];
  const activeIndex = active ? visible.indexOf(active) : -1;

  const toggleTick = (key) => setTicked((t) => ({ ...t, [key]: !t[key] }));

  const toggleSaved = (id) =>
    setSaved((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const resetTicks = (id) =>
    setTicked((t) =>
      Object.fromEntries(Object.entries(t).filter(([k]) => !k.startsWith(`${id}-`)))
    );

  const countTicked = (id, prefix, total) =>
    Array.from({ length: total }, (_, i) => ticked[`${id}-${prefix}-${i}`]).filter(Boolean).length;

  return (
    <div className="rp-page">
      <div className={heroClass}>
        <NavBar />
        <h1>{title}</h1>
      </div>

      <section className="rp-section">
        <div className="rp-wrap">
          {/* Search + filter */}
          <div className="rp-toolbar">
            <div className="rp-search">
              <label htmlFor="rp-search-input" className="visually-hidden">
                Search recipes or ingredients
              </label>
              <input
                id="rp-search-input"
                type="search"
                className="form-control"
                placeholder="Search by recipe or ingredient"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <label className="rp-check">
              <input
                type="checkbox"
                checked={savedOnly}
                onChange={(e) => setSavedOnly(e.target.checked)}
              />
              <span>Saved only</span>
            </label>
          </div>

          {/* Recipe picker */}
          {visible.length > 0 && (
            <div className="rp-picker" role="group" aria-label={`${title} recipes`}>
              {visible.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  className="rp-chip"
                  aria-pressed={active?.id === r.id}
                  onClick={() => setActiveId(r.id)}
                >
                  {r.title}
                  {saved.includes(r.id) && <span className="rp-chip-saved" aria-label="saved"> ♥</span>}
                </button>
              ))}
            </div>
          )}

          {/* Empty state */}
          {!active && (
            <div className="rp-empty">
              <p>
                {savedOnly && saved.length === 0
                  ? "You haven't saved any recipes yet. Tap Save on a recipe to keep it here."
                  : "No recipes match that search."}
              </p>
              <button
                type="button"
                className="btn-wandia"
                onClick={() => { setQuery(""); setSavedOnly(false); }}
              >
                Show all recipes
              </button>
            </div>
          )}

          {/* Active recipe */}
          {active && (
            <article className="rp-recipe" aria-live="polite">
              <header className="rp-recipe-head">
                <div>
                  <h2>{active.title}</h2>
                  <p className="rp-meta">
                    {active.ingredients.length} ingredients · {stepCount(active)} steps
                  </p>
                </div>
                <div className="rp-actions">
                  <button
                    type="button"
                    className="rp-btn"
                    aria-pressed={saved.includes(active.id)}
                    onClick={() => toggleSaved(active.id)}
                  >
                    {saved.includes(active.id) ? "Saved ♥" : "Save ♡"}
                  </button>
                  <button type="button" className="rp-btn" onClick={() => window.print()}>
                    Print
                  </button>
                </div>
              </header>

              <div className="rp-body">
                <aside className="rp-ingredients">
                  <h3>Ingredients</h3>
                  <p className="rp-progress">
                    {countTicked(active.id, "ing", active.ingredients.length)} of{" "}
                    {active.ingredients.length} gathered
                  </p>
                  <ul>
                    {active.ingredients.map((item, i) => {
                      const key = `${active.id}-ing-${i}`;
                      return (
                        <li key={key}>
                          <label className={ticked[key] ? "is-done" : ""}>
                            <input
                              type="checkbox"
                              checked={!!ticked[key]}
                              onChange={() => toggleTick(key)}
                            />
                            <span>{item}</span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                  <button type="button" className="btn-quiet" onClick={() => resetTicks(active.id)}>
                    Clear ticks
                  </button>
                </aside>

                <div className="rp-steps">
                  <h3>Method</h3>
                  {(() => {
                    let offset = 0;
                    return getStages(active).map((stage, s) => {
                      const start = offset;
                      offset += stage.steps.length;
                      return (
                        <div key={s} className="rp-stage">
                          {stage.title && <h4>{stage.title}</h4>}
                          <ol>
                            {stage.steps.map((step, i) => {
                              const key = `${active.id}-step-${start + i}`;
                              return (
                                <li key={key}>
                                  <label className={ticked[key] ? "is-done" : ""}>
                                    <input
                                      type="checkbox"
                                      checked={!!ticked[key]}
                                      onChange={() => toggleTick(key)}
                                      aria-label={`Mark step ${i + 1} done`}
                                    />
                                    <span>{step}</span>
                                  </label>
                                </li>
                              );
                            })}
                          </ol>
                        </div>
                      );
                    });
                  })()}

                  {active.tip && <p className="rp-tip">{active.tip}</p>}
                </div>
              </div>

              {visible.length > 1 && (
                <nav className="rp-pager" aria-label="Other recipes">
                  <button
                    type="button"
                    className="btn-quiet"
                    onClick={() => setActiveId(visible[(activeIndex - 1 + visible.length) % visible.length].id)}
                  >
                    Previous recipe
                  </button>
                  <button
                    type="button"
                    className="btn-quiet"
                    onClick={() => setActiveId(visible[(activeIndex + 1) % visible.length].id)}
                  >
                    Next recipe
                  </button>
                </nav>
              )}
            </article>
          )}
        </div>
      </section>

      <div className="section4">
        <Footer />
      </div>
    </div>
  );
}

export default RecipeBrowser;