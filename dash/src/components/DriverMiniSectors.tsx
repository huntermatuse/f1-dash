import React from "react";
import { DriverType } from "../types/driver.type";
import clsx from "clsx";
import { getTimeColor } from "../lib/getTimeColor";

type Props = {
  sectors: DriverType["sectors"];
  driverDisplayName: string;
};

export default function DriverMiniSectors({
  sectors,
  driverDisplayName,
}: Props) {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-1">
      {sectors.map((sector, index) => (
        <div
          key={`sector.${driverDisplayName}.${index}`}
          className="flex flex-col gap-1"
        >
          <div className="flex h-3 flex-row gap-1">
            {sector.segments.map((segmentStatus, index2) => (
              <MiniSector
                status={segmentStatus}
                key={`sector.mini.${driverDisplayName}.${index2}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <p
              className={clsx(
                "text-lg font-semibold leading-none",
                getTimeColor(sector.last.fastest, sector.last.pb)
              )}
            >
              {sector.last.time}
            </p>
            {/* <p
              className={clsx(
                "leading-none",
                getTimeColor(sector.best.fastest, sector.best.pb)
              )}
            >
              {sector.best.time}
            </p> */}
          </div>
        </div>
      ))}
    </div>
  );
}

function MiniSector({ status }: { status: number }) {
  return (
    <div
      className={clsx("h-3 w-2 rounded-[0.2rem]", {
        "bg-yellow-500": status === 2048,
        "bg-emerald-500": status === 2049,
        "bg-indigo-500": status === 2051,
        "bg-blue-500": status === 2064,
      })}
    />
  );
}
