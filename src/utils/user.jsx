import { createContext, useContext, useEffect, useState } from "react";
import { account, databases } from "../appwriteConfig";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUserStatus();
  }, []);

  async function login(email, password) {
    setLoading(true);
    const loggedIn = await account.createEmailSession(email, password);
    setUser(loggedIn);
    setLoading(false);
  }

  async function getUser() {
    let accountDetails = await account.get();
    return accountDetails;
  }

  async function getTransactions(DatabaseId, CollectionId) {
    let transactionDetails = await databases.listDocuments(
      DatabaseId,
      CollectionId
    );
    return transactionDetails;
  }

  async function logout() {
    await account.deleteSession("current");
    setUser(null);
  }

  async function register(username, email, password) {
    setLoading(true);
    await account.create(username, email, password);
    await login(email, password);
    setLoading(false);
  }

  async function createDoc(database, collection, documentId, data) {
    await databases.createDocument(database, collection, documentId, data);
  }

  async function checkUserStatus() {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
      setLoading(false);
    } catch (error) {
      setUser(null);
      setLoading(false);
    }
  }

  async function init() {
    try {
      const loggedIn = await account.get();
      setUser(loggedIn);
      setLoading(false);
    } catch (err) {
      setUser(null);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <UserContext.Provider
      value={{
        current: user,
        login,
        logout,
        register,
        checkUserStatus,
        createDoc,
        getUser,
        getTransactions,
      }}
    >
      {loading ? (
        <div className="bg-[#d0e5ee] w-full h-screen ">
          <p className="w-full text-center text-3xl pt-20">Loading...</p>
        </div>
      ) : (
        props.children
      )}
    </UserContext.Provider>
  );
}
