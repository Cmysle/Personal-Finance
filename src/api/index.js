import { account } from "../appwriteConfig";

export async function login(email, password, user, setUser) {
  const loggedIn = await account.createEmailSession(email, password);
  setUser(loggedIn);
  console.log(user)
}

export async function register(username, email, password, user, setUser) {
  try {
    await account.create(username, email, password);
    await account.createEmailSession(email, password);
    setUser("username");
    console.log(username)
    console.log(user)
  } catch (error) {
    console.log(error);
  }
}
