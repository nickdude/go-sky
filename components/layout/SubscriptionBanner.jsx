import Link from "next/link";
import Container from "@/components/common/Container";

export default function SubscriptionBanner() {
  return (
    <aside
      aria-label="Subscription renewal notice"
      className="bg-red-600 text-white"
    >
      <Container className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex items-start gap-3 text-sm sm:items-center">
          <span
            aria-hidden="true"
            className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-bold sm:mt-0"
          >
            !
          </span>
          <p>
            <strong className="font-semibold">Server subscription expired.</strong>{" "}
            Please renew it to keep your services active.
          </p>
        </div>
      </Container>
    </aside>
  );
}