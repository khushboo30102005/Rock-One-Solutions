"use client";

import { useIsInternational } from "@/lib/geo";
import { inrToUsdDisplay } from "@/app/pricing/pricing-data";

type PriceDisplayProps = {
  /** The INR price string, e.g. "₹19,999+" or "Quote only". */
  price: string;
  /** Premium applied to the USD-converted price for visitors outside India. */
  multiplier: number;
  /** Optional cadence label such as "/month". */
  cadence?: string;
  /** Quote-only items keep the same label regardless of location. */
  quoteOnly?: boolean;
};

export default function PriceDisplay({
  price,
  multiplier,
  cadence,
  quoteOnly
}: PriceDisplayProps) {
  const { isInternational } = useIsInternational();

  const display =
    quoteOnly || !isInternational
      ? price
      : inrToUsdDisplay(price, multiplier);

  return (
    <>
      {display}
      {cadence ? <small>{cadence}</small> : null}
    </>
  );
}
