import { UI } from "./src/ui";
import { Storage } from "./src/storage";
import { Film } from "./src/film";

class App {
  constructor() {
    this.addFunction();
  }
  addFunction = async () => {
    await new UI();
  };
}

new App();
