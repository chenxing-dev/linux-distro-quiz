import { useLocale } from "@/context/useLocale";
import { type Distro } from "@/data/distros-en";
import translations from "@/locales/translations.json";

const DistroTechnicalDetails = ({ distro }: { distro: Distro }) => {
  const { locale } = useLocale();
  const t = translations[locale];
  const details = distro.details;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-2">
      <div>
        <h5 className="font-bold mb-2">{t.packageManager}</h5>
        <p className="mb-4">{details.packageManager}</p>

        <h5 className="font-bold mb-2">{t.releaseCycle}</h5>
        <p>{details.releaseCycle}</p>
      </div>

      <div>
        <h5 className="font-bold mb-2">{t.defaultDesktop}</h5>
        <p className="mb-4">{details.defaultDesktop}</p>

        <h5 className="font-bold mb-2">{t.bestFor}</h5>
        <p>{details.bestFor}</p>
      </div>
    </div>
  );
};

export default DistroTechnicalDetails;
