import { PrimaryButton } from "@stelli/components-library-experiment.atoms.primary-button";
import { Button } from "@stelli/components-library-experiment.atoms.button";
import { Search } from "@stelli/components-library-experiment.atoms.search";
import { Minus as MinusIcon } from "@stelli/components-library-experiment.icons.minus";
import { Camera as CameraIcon } from "@stelli/components-library-experiment.icons.camera";
import { Alert as AlertIcon } from "@stelli/components-library-experiment.icons.alert";
import { Bell as BellIcon } from "@stelli/components-library-experiment.icons.bell";
import { Book as BookIcon } from "@stelli/components-library-experiment.icons.book";
import { Calendar as CalendarIcon } from "@stelli/components-library-experiment.icons.calendar";
import { Card as CardIcon } from "@stelli/components-library-experiment.icons.card";
import { Cart as CartIcon } from "@stelli/components-library-experiment.icons.cart";
import { Clock as ClockIcon } from "@stelli/components-library-experiment.icons.clock";
import { Help as HelpIcon } from "@stelli/components-library-experiment.icons.help";

function App() {
  return (
    <header>
      <PrimaryButton icon={<MinusIcon />}>
        This is primary button with no direct dependencies
      </PrimaryButton>
      <br />
      <Button icon={<MinusIcon />}>
        This is button with no direct dependencies
      </Button>
      <br />
      <Search value="Search value" />
      <br />
      <CameraIcon />
      <AlertIcon />
      <BellIcon />
      <BookIcon />
      <CalendarIcon />
      <CardIcon />
      <CartIcon />
      <ClockIcon />
      <HelpIcon />
    </header>
  );
}

export default App;
