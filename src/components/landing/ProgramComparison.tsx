import { Check, Minus } from "lucide-react";
import { Card } from "@/components/ui/card";

type CellValue = boolean | string;

const rows: { feature: string; self: CellValue; live: CellValue; offline: CellValue; one: CellValue }[] = [
  { feature: "Recorded lessons",          self: true,       live: true,       offline: true,        one: true },
  { feature: "Live classes",              self: false,      live: true,       offline: true,        one: true },
  { feature: "Doubt solving",             self: "Limited",  live: true,       offline: true,        one: true },
  { feature: "Projects",                  self: true,       live: true,       offline: true,        one: true },
  { feature: "Code review",               self: "Limited",  live: true,       offline: true,        one: true },
  { feature: "Mentor access",             self: false,      live: "Group",    offline: "Personal",  one: "Dedicated" },
  { feature: "Interview preparation",     self: false,      live: "Basic",    offline: true,        one: true },
  { feature: "Resume / LinkedIn help",    self: false,      live: "Basic",    offline: true,        one: true },
  { feature: "Placement assistance",      self: false,      live: "Limited",  offline: true,        one: true },
  { feature: "Where you can learn from",  self: "Anywhere", live: "Anywhere", offline: "Bhayander", one: "Anywhere" },
];

function Cell({ value }: { value: CellValue }) {
  if (value === true) return <Check className="inline w-4 h-4 text-accent" />;
  if (value === false) return <Minus className="inline w-4 h-4 text-muted-foreground/40" />;
  return <span className="text-secondary/80 font-medium text-xs">{value}</span>;
}

const ProgramComparison = () => {
  return (
    <section id="compare" className="py-12 md:py-16 bg-muted/30">
      <div className="container-tight">
        <div data-reveal className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">Compare Programs</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-bold text-secondary">
            Choose the right fit <span className="text-gradient">for you</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            All programs teach the same core skills. The difference is how much live support and career help you get.
          </p>
        </div>

        <Card className="mt-12 overflow-x-auto border-border/70 shadow-soft">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr className="bg-secondary text-primary-foreground">
                <th className="text-left p-4 font-semibold w-[30%]">What's included</th>
                <th className="p-4 text-center font-semibold">
                  Self-Paced<br />
                  <span className="font-normal text-white/70 text-xs">₹5,999</span>
                </th>
                <th className="p-4 text-center font-semibold bg-primary">
                  Live Online<br />
                  <span className="font-normal text-white/70 text-xs">₹17,999</span>
                </th>
                <th className="p-4 text-center font-semibold">
                  Offline<br />
                  <span className="font-normal text-white/70 text-xs">₹39,999</span>
                </th>
                <th className="p-4 text-center font-semibold">
                  1:1<br />
                  <span className="font-normal text-white/70 text-xs">₹69,999</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-background" : "bg-muted/40"}>
                  <td className="p-4 font-medium text-secondary">{row.feature}</td>
                  <td className="p-4 text-center"><Cell value={row.self} /></td>
                  <td className="p-4 text-center bg-primary/5"><Cell value={row.live} /></td>
                  <td className="p-4 text-center"><Cell value={row.offline} /></td>
                  <td className="p-4 text-center"><Cell value={row.one} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          Prices are starting points. Final pricing confirmed at enrollment. Upgrade paths are available between programs.
        </p>
      </div>
    </section>
  );
};

export default ProgramComparison;
