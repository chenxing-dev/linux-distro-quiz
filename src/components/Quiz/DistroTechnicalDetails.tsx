import { type Distro } from "@/data/distros-en";

const DistroTechnicalDetails = ({ distro }: { distro: Distro }) => {
    const details = distro.details;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-2">
            <div>
                <h5 className="font-bold mb-2">Package Manager</h5>
                <p className="mb-4">{details.packageManager}</p>

                <h5 className="font-bold mb-2">Release Cycle</h5>
                <p>{details.releaseCycle}</p>
            </div>

            <div>
                <h5 className="font-bold mb-2">Default Desktop</h5>
                <p className="mb-4">{details.defaultDesktop}</p>

                <h5 className="font-bold mb-2">Best For</h5>
                <p>{details.bestFor}</p>
            </div>
        </div>
    );
};

export default DistroTechnicalDetails;