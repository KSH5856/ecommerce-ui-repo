import { RenderSVG } from "../ui/RenderSVG/renderSvg";

export const Footer = () => {
  return (
    <div className="mb-10 grid  grid-cols-3 w-[80%] justify-between m-auto text-[#94a3b8]">
      <div className="flex flex-col gap-y-4">
        <h4>Curator Collective</h4>
        <p className="text-xs">
          © 2024 Curator Collective. All rights reserved.
        </p>
      </div>
      <div className="flex items-center text-xs justify-around">
        <div>Contact Us</div>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
        <div>Shipping Info</div>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <RenderSVG
          iconName="globe"
          iconConfig={{
            iconClass: { width: 24, height: 24, color: "#94a3b8"  },
          }}
        />
        <RenderSVG
          iconName="envelope"
          iconConfig={{
            iconClass: { width: 30, height: 30, color: "#94a3b8" },
          }}
        />
        <RenderSVG
          iconName="phone"
          iconConfig={{
            iconClass: { width: 24, height: 24, color: "#94a3b8"},
          }}
        />
      </div>
    </div>
  );
};
