import { Badge, IconButton } from "@chakra-ui/react";
import { socialMenu } from "../../helper/HeaderMenu";
import { Dispatch } from "react";

interface Props {
    visible: boolean;
    setVisible: Dispatch<React.SetStateAction<boolean>>;
    count: number;
}

const CartIcon = ({ visible, setVisible, count }: Props) => {
    return (
        <div>
            <IconButton
                as="a"
                href={socialMenu[socialMenu.length - 1].href}
                aria-label={socialMenu[socialMenu.length - 1].ariaLabel}
                icon={socialMenu[socialMenu.length - 1].icon}
                size={socialMenu[socialMenu.length - 1].size}
                variant="ghost"
                fontSize={socialMenu[socialMenu.length - 1].fontSize}
                onClick={() => setVisible(!visible)} />
            <Badge
                colorScheme="red"
                borderRadius="full"
                px="2"
                position="relative"
                top="-15px"
                left="-25px"
            >
                {count}
            </Badge>
        </div>
    )
}

export default CartIcon;