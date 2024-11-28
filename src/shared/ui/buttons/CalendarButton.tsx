import { CalendarIcon } from "~/shared/ui/icons";
import { ButtonProps, Button } from "./Button";

type CalendarButtonProps = Omit<ButtonProps, 'children'>

export function CalendarButton(props: CalendarButtonProps) {
  return (
    <Button {...props} variant={'secondary'} size={'sm'} >
      <CalendarIcon />
    </Button>
  )
}