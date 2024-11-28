import { AddIcon } from "~/shared/ui/icons";
import { ButtonProps, Button } from "./Button";

type AddButtonProps = Omit<ButtonProps, 'children'>

export function AddButton(props: AddButtonProps) {
  return (
    <Button {...props} variant={'secondary'} size={'sm'} >
      <AddIcon />
    </Button>
  )
}