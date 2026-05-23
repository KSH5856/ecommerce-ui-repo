import { IconMapping } from "./IconMapping";
import style from "./renderSvg.module.css";

export const RenderSVG = ({
  iconName,
  onClick,
  className,
  iconConfig,
}: {
  iconName: keyof typeof IconMapping;
  onClick?: () => void;
  className?: string;
  iconConfig?: {
    iconClass?: React.CSSProperties;
    width?: string;
    height?: string;
  };
}) => {
  const RenderedSvg = IconMapping[iconName];
  return (
    <span
      className={`${className} ${style.svgClass}`}
      style={{ width: iconConfig?.width , height: iconConfig?.height }}
    >
      <RenderedSvg {...iconConfig?.iconClass} onClick={onClick} />
    </span>
  );
};
