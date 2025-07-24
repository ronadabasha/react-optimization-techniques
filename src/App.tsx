import React, { Suspense } from "react";
import Button from "@mui/material/Button";

const LazyModal = React.lazy(() => import("./components/lazy-modal"));

function App() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <Button onClick={handleOpen}>Open modal</Button>
      <Suspense fallback={null}>
        {open && <LazyModal handleClose={handleClose} isOpen={open} />}
      </Suspense>
    </div>
  );
}

export default App;
