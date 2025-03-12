import { Client, Account } from "appwrite";

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("67d123530003882ab967");

const account = new Account(client);

export { account };
