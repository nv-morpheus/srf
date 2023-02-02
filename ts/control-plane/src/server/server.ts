import {
   Server,
   ServerCredentials,
} from '@grpc/grpc-js';
import { Architect, ArchitectService } from "./Architect";

async function main(): Promise<void> {
   const server = new Server();

   const architect = new Architect();

   server.addService(ArchitectService, architect.service);

   server.bindAsync('0.0.0.0:4000', ServerCredentials.createInsecure(), () => {
      server.start();

      console.log('server is running on 0.0.0.0:4000');
   });

   // Wait for the architect to shutdown
   await architect.shutdown();

   console.log("Exiting script");
}

main();
