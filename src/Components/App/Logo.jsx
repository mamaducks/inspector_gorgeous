import { Toolbar, Button, ButtonGroup, SvgIcon } from "@material-ui/core";

import Iglogo from "../../../src/littlelogo.png";

export function TextLogo(props) {
    return (
      <SvgIcon {...props}>
        <path d="../../../src/littlelogo.png" />
      </SvgIcon>
    );
  }
