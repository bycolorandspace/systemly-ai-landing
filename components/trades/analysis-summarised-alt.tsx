import Link from "next/link";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { TradePlan } from "@/types/trading/analysis";
import { Button } from "../ui/button";
import { ChevronDown, ThumbsDown, ThumbsUp } from "lucide-react";
import { formatCurrrencytoSymbol } from "@/helpers/format-currency";
// import useTradeCalculator from "@/hooks/useTradeCalculator";
// import { useEffect } from "react";

export default function AnalysisSummarisedAlt({
  data,
  //  created_at,
  accountCurrency,
  pnl,
}: //deleted,
{
  data: TradePlan;
  created_at: string | null;
  accountCurrency?: string;
  pnl?: number;
  deleted?: (analysis: string) => void;
}) {
  return (
    <div
      key={data.id}
      // href={`/analysis/${data.id}`}
      className="flex flex-col gap-2 group"
    >
      <Card className="flex flex-col h-[295px] justify-evenly w-full gap-4 mb-2 px-0 py-4 bg-background  shadow-none border border-border/30 rounded-2xl  transition-colors duration-200">
        <div className="flex md:flex-row justify-between items-center gap-2 px-4">
          <h2 className="text-3xl text-primary font-light flex flex-row items-center justify-start gap-2">
            {data.direction}
            <Label className="">{data.symbol}</Label>
          </h2>
          <Badge className="bg-primary text-card h-6 group-hover:bg-accent transition-colors duration-500">
            {formatCurrrencytoSymbol(accountCurrency || "USD")}
            {pnl}
          </Badge>
        </div>

        <div className="flex flex-col md:flex-col gap-2 xl:flex-col  text-secondary justify-start items-start px-6">
          <div className="w-full text-xs  font-light bg-transparent text-secondary border-b-1 border-border pb-2 flex flex-row justify-between">
            <span className="text-secondary transition-colors duration-400">
              {data.execution.type.title}
            </span>
            <span className="text-primary">
              {data.execution.type.description?.slice(0, 10)}
            </span>
          </div>
          <div className="w-full text-xs  font-light bg-transparent text-secondary   border-b-1 border-border   pb-2 flex flex-row justify-between">
            <span className="text-secondary  transition-colors duration-400">
              {data.execution.entryZone.title}
            </span>
            <span className="text-primary">
              {data.execution.entryZone.description}
            </span>
          </div>

          <div className="w-full text-xs  font-light bg-transparent text-secondary   border-b-1 border-border   pb-2 flex flex-row justify-between">
            <span className="text-secondary   transition-colors duration-400">
              {data.execution.stopLoss.title}
            </span>
            <span className="text-primary">
              {data.execution.stopLoss.description}
            </span>
          </div>
          {/* <Separator
                      orientation="vertical"
                      className="xl:h-full xl:visible"
                    /> */}

          <div className="w-full text-xs  font-light bg-transparent text-secondary  border-b-0 border-border  pb-2 flex flex-row justify-between">
            <span className="text-secondary  transition-colors duration-400">
              {" "}
              {data.execution.lotSize.title}
            </span>
            <span className="text-primary">
              {data.execution.lotSize.description?.slice(0, 15)}
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between text-secondary px-6">
          <div>
            <Link
              href={"/"}
              className="text-xs flex flex-row gap-2 items-center"
            >
              <span>See full breakdown</span>{" "}
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex flex-row gap-2 justify-start items-center">
            <span className="text-sm">Win?</span>
            <div className="flex flex-row gap-2">
              <Button className="p-2   rounded-full bg-card border-border border-1">
                <ThumbsUp className="w-1 h-1 text-primary" />
              </Button>
              <Button className="p-2 rounded-full bg-card border-border border-1">
                <ThumbsDown className="w-1 h-1 text-primary " />
              </Button>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-row items-center justify-between text-secondary px-6">
          {created_at && (
            <Badge className="text-xs font-light bg-transparent text-secondary pl-0">
              <span className="text-xs text-secondary  transition-colors duration-400">
                Created {formatRelativeTime(created_at)}
              </span>
            </Badge>
          )}

          <AnalysisSummarisedOptions
            analysisId={data.id ?? ""}
            deleted={deleted}
          />
        </div> */}

        {/* <p className="text-sm font-bold">{analysis.title}</p> */}
      </Card>
    </div>
  );
}
