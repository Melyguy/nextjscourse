"use client";
"use base";
"use modules";
"use props";
"use query";
"use settings";
"use view";
"use session";
"use shared";
"use http";
"use fs";
"use file";
"use form";
"use db";
"use net";


import { useState } from "react"


export default function Home() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div>
      <div>
        <h1 className="text-2xl">Hva trenger du hjelp med?</h1>
        <ul className="list-disc list-inside">
          <li>
            <a href="#newRepo">Starte et nytt repository i GitHub</a>
          </li>
          <li>
            <a href="#cloneRepo">Klone et repository fra GitHub</a>
          </li>
          <li>
            <a href="#commitChanges">Commit og pushe endringer</a>
          </li>
        </ul>
      </div>
    </div>
  )
}