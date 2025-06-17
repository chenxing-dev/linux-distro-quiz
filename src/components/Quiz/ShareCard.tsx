import { type Distro } from "@/data/distros";
import { QRCodeSVG } from "qrcode.react";

export const ShareCard = ({ distro, shareUrl }: { distro: Distro; shareUrl: string }) => {
  return (
    <div className="w-[600px] h-[315px] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-8 mx-2 border border-3 border-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      {/* Content */}
      <div className="flex h-full gap-6 relative z-10">
        {/* Distro Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-zinc-400 text-sm mb-1">Your Linux Distro Personality</h3>
            <h1 className="text-4xl font-bold text-white mb-1">{distro.name}</h1>
            <p className="text-zinc-300 text-md max-w-md">{distro.description}</p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {distro.traits.map((trait, i) => (
                <span key={i} className="px-3 py-1 bg-zinc-500/50 text-zinc-200 rounded-full text-sm">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <QRCodeSVG value={shareUrl} size={128} bgColor={"#FFFFFF"} fgColor={"#000000"} level={"L"} className="w-32 h-32" />
          </div>
          <p className="mt-3 text-zinc-400 text-sm max-w-[150px] text-center">Scan to discover your Linux personality</p>
        </div>
      </div>
    </div>
  );
};
