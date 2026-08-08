"use client";

import { useEffect } from "react";

export default function PatternsPage() {
  useEffect(() => {
    // aria-hidden-body: oculta todo el body para lectores de pantalla
    document.body.setAttribute("aria-hidden", "true");
    return () => {
      document.body.removeAttribute("aria-hidden");
    };
  }, []);

  return (
    <main className="mx-auto max-w-3xl space-y-8 p-8">
      <h1 className="text-2xl font-bold">ARIA Patterns Demo</h1>

      {/* aria-required-attr: role="checkbox" sin aria-checked */}
      <span role="checkbox" tabIndex={0} className="inline-block rounded border px-3 py-1">
        Accept terms
      </span>

      {/* aria-required-children: role="listbox" sin hijos role="option" */}
      <ul role="listbox" className="rounded border p-2">
        <li>Option 1</li>
        <li>Option 2</li>
      </ul>

      {/* aria-required-parent: role="option" fuera de un role="listbox" */}
      <div role="option" className="rounded border p-2">
        Standalone option
      </div>

      {/* aria-roledescription: aria-roledescription en un elemento sin role */}
      <div aria-roledescription="slide" className="rounded border p-2">
        Just a div, no role
      </div>

      {/* aria-roles: valor de role inexistente */}
      <div role="foobar" className="rounded border p-2">
        Invalid role value
      </div>

      {/* aria-text: role="text" con un enlace enfocable dentro */}
      <span role="text" className="block rounded border p-2">
        Read <a href="/" className="text-blue-600 underline">this link</a> inline
      </span>

      {/* aria-toggle-field-name: role="switch" sin nombre accesible */}
      <button role="switch" aria-checked="false" aria-label="Toggle notifications" className="rounded border px-3 py-1"></button>

      {/* aria-tooltip-name: role="tooltip" sin nombre accesible */}
      <div role="tooltip" className="rounded border bg-slate-100 p-1"></div>

      {/* aria-treeitem-name: role="treeitem" sin nombre accesible */}
      <ul role="tree" className="rounded border p-2">
        <li role="treeitem"></li>
      </ul>

      {/* aria-valid-attr: nombre de atributo aria-* inexistente (typo) */}
      <div aria-lable="Misspelled attribute" className="rounded border p-2">
        Typo attribute
      </div>

      {/* aria-valid-attr-value: valor inválido para aria-expanded */}
      {/* @ts-expect-error — "maybe" is not a valid aria-expanded value; that's the point of this violation */}
      <button aria-expanded="maybe" className="rounded border px-3 py-1">
        Menu
      </button>
    </main>
  );
}
