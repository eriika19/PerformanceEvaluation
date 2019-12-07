import { PureComponent } from "react";

class OfflineSupport extends PureComponent {
  componentDidMount() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/static/workbox/sw.js")
        .then(registration => {
          console.log("SW registered: ", registration);
        })
        .catch(registrationError => {
          console.log("SW registration failed: ", registrationError);
        });
    });
  }
  }

  render() {
    return null;
  }
}

export default OfflineSupport;
