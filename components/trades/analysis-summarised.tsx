import Link from "next/link";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import TradeDirectionIcon from "./trade-direction-icon";
import { formatRelativeTime } from "@/helpers/date-formatter";
import { Card } from "../ui/card";
import AnalysisSummarisedOptions from "./analysis-summarised-options";
import { TradePlan } from "@/types/trading/analysis";
// import useTradeCalculator from "@/hooks/useTradeCalculator";
// import { useEffect } from "react";

export default function AnalysisSummarised({
  data,
  created_at,
  accountCurrency,
  pnl,
  deleted,
}: {
  data: TradePlan;
  created_at: string | null;
  accountCurrency?: string;
  pnl?: number;
  deleted?: (analysis: string) => void;
}) {
  return (
    <Link
      key={data.id}
      href={`/analysis/${data.id}`}
      className="flex flex-col gap-2 group"
    >
      <Card className="flex flex-col w-full gap-4 mb-2 px-0 py-4 bg-transparent border border-border rounded-2xl hover:bg-card hover:border-secondary transition-colors duration-200">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-2 px-6">
          <h2 className="text-3xl font-light flex flex-row items-center justify-start gap-2">
            <TradeDirectionIcon
              direction={data.direction as string}
              className="transition-colors duration-600 group-hover:text-black"
            />
            {data.direction}
            <Label className="text-secondary group-hover:text-white transition-colors duration-400">
              {data.symbol}
            </Label>
          </h2>
          <Badge className="bg-primary text-black h-6 group-hover:bg-green-300 group-hover:text-card transition-colors duration-500">
            {accountCurrency}
            {pnl}
          </Badge>
        </div>

        <div className="flex flex-col md:flex-col gap-2 xl:flex-col  text-secondary justify-start items-start">
          <div className="w-full text-xs  font-light bg-transparent text-secondary border-b-1 border-border px-6 pb-2 flex flex-row justify-between">
            <span className="text-secondary group-hover:text-white transition-colors duration-400">
              {data.execution.type.title}
            </span>
            <span className="text-primary">{data.execution.type.data}</span>
          </div>
          <div className="w-full text-xs  font-light bg-transparent text-secondary   border-b-1 border-border px-6  pb-2 flex flex-row justify-between">
            <span className="text-secondary  group-hover:text-white transition-colors duration-400">
              {data.execution.entryZone.title}
            </span>
            <span className="text-primary">
              {data.execution.entryZone.data}
            </span>
          </div>
          {/* <Separator
                      orientation="vertical"
                      className="xl:h-full bg-transparent xl:visible"
                    /> */}

          <div className="w-full text-xs  font-light bg-transparent text-secondary   border-b-1 border-border px-6  pb-2 flex flex-row justify-between">
            <span className="text-secondary  group-hover:text-white transition-colors duration-400">
              {data.execution.stopLoss.title}
            </span>
            <span className="text-primary">{data.execution.stopLoss.data}</span>
          </div>
          {/* <Separator
                      orientation="vertical"
                      className="xl:h-full xl:visible"
                    /> */}

          <div className="w-full text-xs  font-light bg-transparent text-secondary  border-b-0 border-border px-6  pb-2 flex flex-row justify-between">
            <span className="text-secondary  group-hover:text-white transition-colors duration-400">
              {" "}
              {data.execution.lotSize.title}
            </span>
            <span className="text-primary">{data.execution.lotSize.data}</span>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between text-secondary px-6">
          {created_at && (
            <Badge className="text-xs font-light bg-transparent text-secondary pl-0">
              <span className="text-xs text-secondary group-hover:text-white transition-colors duration-400">
                Created {formatRelativeTime(created_at)}
              </span>
            </Badge>
          )}

          <AnalysisSummarisedOptions
            analysisId={data.id ?? ""}
            deleted={deleted}
          />
        </div>

        {/* <p className="text-sm font-bold">{analysis.title}</p> */}
      </Card>
    </Link>
  );
}
