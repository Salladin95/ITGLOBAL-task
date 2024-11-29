import React from "react";

export function useHasOverflow(
  refObj: React.RefObject<HTMLDivElement>,
  parentSelector?: string
) {
  const [hasOverflow, setHasOverflow] = React.useState(false);

  React.useEffect(() => {
    console.log(refObj)

    const checkOverflow = () => {
      if (!refObj.current || !parentSelector) return setHasOverflow(false)
      const parent = refObj.current?.closest(parentSelector) as HTMLElement | null;

      if (!parent) return setHasOverflow(false)

      setHasOverflow(refObj.current.scrollWidth > parent.clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [refObj, parentSelector]);

  return hasOverflow;
}
