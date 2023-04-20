import { PrimaryButton } from "@stelli/components-library-experiment.atoms.primary-button";
import { Button } from "@stelli/components-library-experiment.atoms.button";
import { Minus as MinusIcon } from "@stelli/components-library-experiment.icons.minus";

function App() {
  return (
    <header>
      <PrimaryButton iconName="minus">
        This is primary with inner dependencies
      </PrimaryButton>
      <br />
      <Button icon={<MinusIcon />}>
        This is button with no direct dependencies
      </Button>
    </header>
  );
}

export default App;
