import infosysLogo      from "../../assets/infosys-logo.svg";
import tcsLogo          from "../../assets/tcs-logo.svg";
import wiproLogo        from "../../assets/wipro-logo.svg";
import ltiLogo          from "../../assets/lti-logo.svg";
import birlasoftLogo    from "../../assets/birlasoft-logo.svg";
import neosoftLogo      from "../../assets/neosoft-logo.svg";
import cognizantLogo    from "../../assets/cognizant-logo.svg";
import hclLogo          from "../../assets/hcl-logo.svg";
import techmahindraLogo from "../../assets/techmahindra-logo.svg";
import accentureLogo    from "../../assets/accenture-logo.svg";
import ibmLogo          from "../../assets/ibm-logo.svg";
import capgeminiLogo    from "../../assets/capgemini-logo.svg";
import hexawareLogo     from "../../assets/hexaware-logo.svg";

const partners = [
  { src: infosysLogo,      alt: "Infosys" },
  { src: tcsLogo,          alt: "TCS" },
  { src: wiproLogo,        alt: "Wipro" },
  { src: cognizantLogo,    alt: "Cognizant" },
  { src: accentureLogo,    alt: "Accenture" },
  { src: hclLogo,          alt: "HCL Technologies" },
  { src: techmahindraLogo, alt: "Tech Mahindra" },
  { src: capgeminiLogo,    alt: "Capgemini" },
  { src: ibmLogo,          alt: "IBM" },
  { src: ltiLogo,          alt: "LTIMindtree" },
  { src: hexawareLogo,     alt: "Hexaware" },
  { src: birlasoftLogo,    alt: "Birlasoft" },
  { src: neosoftLogo,      alt: "Neosoft" },
];

const PartnerChip = ({ src, alt }: { src: string; alt: string }) => (
  <span className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border/50 bg-background/80 shadow-soft mx-3 backdrop-blur-sm select-none min-w-[160px] h-[64px]">
    <img src={src} alt={alt} className="h-8 w-auto max-w-[120px] object-contain" />
  </span>
);

const PlacementPartners = () => (
  <section className="py-10 bg-muted/20 overflow-hidden">
    <div className="container-tight mb-7 text-center">
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">
        Career Targets
      </span>
      <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-secondary">
        We train you to get into <span className="text-gradient">companies like these</span>
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Our curriculum, projects, and interview prep are designed around what these companies actually look for.
      </p>
    </div>

    {/* Edge fade mask */}
    <div
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee">
          {partners.map((p) => <PartnerChip key={p.alt} {...p} />)}
          {partners.map((p) => <PartnerChip key={`${p.alt}-d`} {...p} />)}
        </div>
      </div>
    </div>
  </section>
);

export default PlacementPartners;
