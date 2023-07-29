import { cx } from "classix";
import { Sebelumnya, Selanjutnya } from "~components/atoms";
import { BaseSuratProps } from "~models";

export function PreviousOrNext({ surat }: { surat: BaseSuratProps }) {
  return (
    <div
      className={cx("flex w-full space-x-3", surat.number > 1 ? "justify-between" : "justify-end")}
    >
      <Sebelumnya surat={surat} />
      <Selanjutnya surat={surat} />
    </div>
  );
}