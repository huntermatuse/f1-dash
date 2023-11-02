import clsx from "clsx";

type Props = {
	positionChange: number;
};

export default function DriverPosChanage({ positionChange }: Props) {
	const gain = positionChange > 0;
	const loss = positionChange < 0;

	return (
		<div>
			<p
				className={clsx("text-sm font-bold", {
					"text-emerald-500": gain,
					"text-red-500": loss,
					"text-gray-700": !gain && !loss,
				})}
			>
				{gain ? `+${positionChange}` : loss ? positionChange : "-"}
			</p>
		</div>
	);
}
