import brcn from "@/assets/branch/brcn.png";
import bren from "@/assets/branch/bren.png";
import cloud from "@/assets/branch/cloud.png";
import cn from "@/assets/branch/cn.png";
import de from "@/assets/branch/de.png";
import en from "@/assets/branch/en.png";
import es from "@/assets/branch/es.png";
import fr from "@/assets/branch/fr.png";
import int from "@/assets/branch/int.png";
import jp from "@/assets/branch/jp.png";
import ko from "@/assets/branch/ko.png";
import pl from "@/assets/branch/pl.png";
import vn from "@/assets/branch/vn.png";

const LOGOS: Record<string, { src: string }> = {
  CLOUD: cloud,
  CN: cn,
  EN: en,
  JP: jp,
  KO: ko,
  FR: fr,
  DE: de,
  ES: es,
  PL: pl,
  VN: vn,
  INT: int,
  BRCN: brcn,
  BREN: bren,
};

export function BranchLogo({ code, className }: { code: string; className?: string }) {
  const logo = LOGOS[code];
  if (!logo) return <span className={className} />;
  return <img className={className} src={logo.src} alt="" />;
}
