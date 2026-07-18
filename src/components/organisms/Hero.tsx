import { useEffect, useState } from "react";
import { ArrowDown, Play, Terminal } from "lucide-react";
import styles from "./Hero.module.css";

type Command = "help" | "traceflo" | "router" | "research";

const commands: { id: Command; label: string; command: string }[] = [
  { id: "help", label: "Show capabilities", command: "help" },
  { id: "traceflo", label: "Replay TraceFlo", command: "traceflo replay demo-checkout" },
  { id: "router", label: "Inspect Go Router", command: "go-router inspect request" },
  { id: "research", label: "Open research", command: "research show icer-2025" },
];

const heroLine = "I build reliable\nbackend + GenAI systems.";

const output: Record<Command, { kicker: string; title: string; body: string; result: string }> = {
  help: { kicker: "SYSTEMS CONSOLE / READY", title: "Backend systems with proof built in.", body: "Explore a browser trace, route a model request, or inspect the research behind better code evaluation.", result: "3 interactive system views available" },
  traceflo: { kicker: "TRACEFLO / REPLAY 01", title: "A test that can explain itself.", body: "Intent is captured beside the action frame and network evidence—then replayed deterministically when the UI changes.", result: "intent → browser frame → network evidence → replay" },
  router: { kicker: "GO ROUTER / REQUEST 47", title: "One request. A policy-aware route.", body: "Tenant policy selects a provider, records the decision, and returns a response without leaking the complexity to callers.", result: "policy ✓  provider: azure-openai  audit: written" },
  research: { kicker: "ICER 2025 / PAPER TRAIL", title: "Rubrics make LLM evaluation more useful.", body: "Primary-author research on grounding code evaluation in explicit criteria—not just a model's unexplained judgement.", result: "Published at ACM ICER 2025" },
};

export default function Hero() {
  const [active, setActive] = useState<Command>("help");
  const [typed, setTyped] = useState("");
  const [typedHero, setTypedHero] = useState("");
  const activeCommand = commands.find((item) => item.id === active)!;

  useEffect(() => {
    let i = 0;
    const timer = window.setInterval(() => {
      i += 1;
      setTyped(activeCommand.command.slice(0, i));
      if (i >= activeCommand.command.length) window.clearInterval(timer);
    }, 24);
    return () => window.clearInterval(timer);
  }, [active, activeCommand.command]);

  useEffect(() => {
    let i = 0;
    const timer = window.setInterval(() => {
      i += 1;
      setTypedHero(heroLine.slice(0, i));
      if (i >= heroLine.length) window.clearInterval(timer);
    }, 42);
    return () => window.clearInterval(timer);
  }, []);

  const [firstLine = "", secondLine = ""] = typedHero.split("\n");

  return <section className={styles.hero} aria-labelledby="hero-title">
    <div className={styles.intro}>
      <p className={styles.eyebrow}><Terminal size={14} /> rachit@systems:~</p>
      <h1 id="hero-title" aria-label={heroLine.replace("\n", " ")}>
        {firstLine}<br /><em>{secondLine}</em><i className={styles.heroCursor} aria-hidden="true" />
      </h1>
      <div className={styles.actions}>
        <a className={styles.primaryAction} href="https://traceflo.dev" target="_blank" rel="noopener noreferrer" onClick={() => setActive("traceflo")} aria-label="Run TraceFlo replay (opens in a new tab)"><Play size={15} fill="currentColor" /> Run TraceFlo replay</a>
        <a className={styles.textAction} href="#projects">See selected systems <ArrowDown size={15} /></a>
      </div>
    </div>
    <div className={styles.console}>
      <div className={styles.chrome}><span /><span /><span /><p>living-systems-console</p><b>live</b></div>
      <div className={styles.consoleBody}>
        <div className={styles.commandLine}><span>❯</span> {typed}<i /></div>
        <div className={styles.commandChoices} aria-label="Console commands">
          {commands.map((item) => <button key={item.id} onClick={() => setActive(item.id)} className={active === item.id ? styles.selected : ""}><span>$</span>{item.command}</button>)}
        </div>
        <div className={styles.resultPanel} data-mode={active}>
          <div className={styles.visual} aria-hidden="true">
            <div className={styles.node}>intent</div><div className={styles.line} /><div className={styles.node}>action</div><div className={styles.line} /><div className={styles.node}>evidence</div>
            <div className={styles.pulse} />
          </div>
          <div className={styles.copy}><p>{output[active].kicker}</p><h2>{output[active].title}</h2><div>{output[active].body}</div><code>{output[active].result}</code></div>
        </div>
      </div>
      <div className={styles.consoleFooter}>Click a command or use the visible controls. No terminal fluency required.</div>
    </div>
  </section>;
}
