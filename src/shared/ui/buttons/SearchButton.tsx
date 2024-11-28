import { SearchIcon } from "~/shared/ui/icons";
import { ButtonProps, Button } from "./Button";

type SearchButtonProps = Omit<ButtonProps, 'children'>

export function SearchButton(props: SearchButtonProps) {
  return (
    <Button {...props} variant={'secondary'} size={'sm'} >
      <SearchIcon />
    </Button>
  )
}